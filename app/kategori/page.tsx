'use client'

import { useState, useEffect } from 'react'
import { 
  getKategoriPagu, 
  deleteKategori 
} from '@/lib/actions/kategori'
import { KategoriDialog } from '@/components/kategori-dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import {
  Users,
  Droplets,
  Fuel,
  Utensils,
  Car,
  Package,
  Wallet,
  Heart,
  ShoppingBag,
  Home,
  Lightbulb,
  MoreHorizontal,
  Edit2,
  Trash2,
  AlertTriangle,
  FolderTree,
  Loader2,
  ArrowUpDown,
  Tag
} from 'lucide-react'

const iconMap = {
  Users,
  Droplets,
  Fuel,
  Utensils,
  Car,
  Package,
  Wallet,
  Heart,
  ShoppingBag,
  Home,
  Lightbulb,
  MoreHorizontal
}

export default function KategoriPage() {
  const [kategoriList, setKategoriList] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null)

  const fetchKategori = async () => {
    setLoading(true)
    try {
      const res = await getKategoriPagu()
      if (res.success && res.data) {
        setKategoriList(res.data)
      }
    } catch (err) {
      console.error('Gagal mengambil data kategori:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchKategori()
  }, [])

  const handleDelete = async (id: string) => {
    setDeletingId(id)
    try {
      const res = await deleteKategori(id)
      if (res.success) {
        setKategoriList(kategoriList.filter((k) => k.id !== id))
        setDeleteConfirmId(null)
      } else {
        alert(res.error || 'Gagal menghapus kategori')
      }
    } catch (err) {
      console.error(err)
      alert('Terjadi kesalahan koneksi saat menghapus kategori')
    } finally {
      setDeletingId(null)
    }
  }

  const getIcon = (iconName?: string | null) => {
    if (!iconName) return Package
    return iconMap[iconName as keyof typeof iconMap] || Package
  }

  return (
    <div className="flex-1 p-6 md:p-10 space-y-10 overflow-y-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-slate-200 pb-8">
        <div>
          <div className="text-xs font-bold text-indigo-650 uppercase tracking-widest mb-1.5">
            Pengaturan Aplikasi
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Kelola Kategori Pagu
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Tambah, edit, atau hapus kategori anggaran belanja operasional.
          </p>
        </div>

        <div className="flex-shrink-0">
          <KategoriDialog onSuccess={fetchKategori} />
        </div>
      </div>

      {/* Main Content Area */}
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh]">
          <Loader2 className="h-10 w-10 text-indigo-600 animate-spin mb-4" />
          <p className="text-sm text-slate-500 font-medium">Memuat daftar kategori...</p>
        </div>
      ) : kategoriList.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-slate-200 rounded-3xl bg-white shadow-sm max-w-2xl mx-auto px-6">
          <FolderTree className="h-16 w-16 text-slate-400 mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-bold text-slate-800 mb-2">Belum Ada Kategori</h3>
          <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">
            Mulai kelola anggaran Anda dengan membuat kategori baru terlebih dahulu.
          </p>
          <KategoriDialog onSuccess={fetchKategori} />
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kategoriList.map((item) => {
            const IconComponent = getIcon(item.ikon)
            const itemColor = item.warna || '#3b82f6'
            const showDeleteConfirm = deleteConfirmId === item.id

            return (
              <Card 
                key={item.id}
                className="border border-slate-200 bg-white relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all duration-300 rounded-2xl flex flex-col justify-between"
              >
                {/* Visual Category Color Stripe */}
                <div 
                  className="h-1.5 w-full absolute top-0 left-0 transition-all group-hover:h-2"
                  style={{ backgroundColor: itemColor }}
                />

                <CardContent className="p-6 pt-8 space-y-6 flex-1 flex flex-col justify-between">
                  {showDeleteConfirm ? (
                    /* Dangerous Action Cascade Warning State */
                    <div className="space-y-4 p-4 rounded-xl bg-rose-50/60 border border-rose-100/80 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex items-center gap-2 text-rose-600">
                        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                        <h4 className="font-bold text-sm">Konfirmasi Hapus</h4>
                      </div>
                      <p className="text-xs text-rose-900 leading-relaxed">
                        Menghapus kategori <strong className="text-rose-950">"{item.nama}"</strong> akan secara otomatis 
                        menghapus <strong>seluruh transaksi</strong> yang terkait di dalam periode anggaran manapun. Tindakan ini tidak dapat dibatalkan.
                      </p>
                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setDeleteConfirmId(null)}
                          className="flex-1 text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 bg-white h-9"
                        >
                          Batal
                        </Button>
                        <Button
                          size="sm"
                          disabled={deletingId === item.id}
                          onClick={() => handleDelete(item.id)}
                          className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold h-9"
                        >
                          {deletingId === item.id ? (
                            <Loader2 className="h-4 w-4 animate-spin mr-1" />
                          ) : (
                            <Trash2 className="h-4 w-4 mr-1" />
                          )}
                          Hapus
                        </Button>
                      </div>
                    </div>
                  ) : (
                    /* Default Info Display State */
                    <>
                      <div className="space-y-4">
                        {/* Title & Icon Row */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div 
                              className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-105"
                              style={{ backgroundColor: `${itemColor}15` }}
                            >
                              <IconComponent 
                                className="h-6 w-6" 
                                style={{ color: itemColor }} 
                              />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-slate-900 truncate max-w-[150px]">
                                {item.nama}
                              </h3>
                              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                                Pos Pagu #{item.urutan}
                              </span>
                            </div>
                          </div>

                          {/* Order Icon Indicator */}
                          <div className="flex items-center gap-1 text-xs text-slate-500 border border-slate-200 rounded-lg px-2 py-1 bg-slate-50 font-medium" title={`Display Order: ${item.urutan}`}>
                            <ArrowUpDown className="h-3 w-3" />
                            <span>{item.urutan}</span>
                          </div>
                        </div>

                        {/* Budget Details */}
                        <div className="pt-2 border-t border-slate-100 space-y-1">
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                            Anggaran Dasar
                          </span>
                          <span className="text-xl font-black text-slate-900 block">
                            {formatCurrency(item.anggaranDasar)}
                          </span>
                          <span className="text-xs text-slate-500 font-medium block">
                            Batas dasar per 2 minggu
                          </span>
                        </div>
                      </div>

                      {/* Action Row */}
                      <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                        {/* Edit Button Dialog */}
                        <div className="flex-1">
                          <KategoriDialog
                            kategori={item}
                            onSuccess={fetchKategori}
                            trigger={
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="w-full h-9 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                              >
                                <Edit2 className="h-3.5 w-3.5 mr-1.5 text-indigo-650" />
                                Ubah
                              </Button>
                            }
                          />
                        </div>
                        {/* Delete Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setDeleteConfirmId(item.id)}
                          className="h-9 w-9 p-0 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg border border-transparent hover:border-rose-100"
                          title="Hapus Kategori"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
