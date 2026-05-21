'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createKategori, updateKategori } from '@/lib/actions/kategori'
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
  Plus,
  Check,
  Loader2
} from 'lucide-react'

// Curated modern color preset list
const PRESET_COLORS = [
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Emerald', value: '#10b981' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Violet', value: '#8b5cf6' },
  { name: 'Sky', value: '#0ea5e9' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Slate', value: '#64748b' }
]

// Available Lucide icons mapped to custom presets
const PRESET_ICONS = [
  { name: 'Users', icon: Users, label: 'Relawan' },
  { name: 'Droplets', icon: Droplets, label: 'Air/Galon' },
  { name: 'Fuel', icon: Fuel, label: 'BBM' },
  { name: 'Utensils', icon: Utensils, label: 'Makan' },
  { name: 'Car', icon: Car, label: 'Mobil' },
  { name: 'Package', icon: Package, label: 'Logistik' },
  { name: 'Wallet', icon: Wallet, label: 'Kas/Uang' },
  { name: 'Heart', icon: Heart, label: 'Sosial' },
  { name: 'ShoppingBag', icon: ShoppingBag, label: 'Belanja' },
  { name: 'Home', icon: Home, label: 'Kantor' },
  { name: 'Lightbulb', icon: Lightbulb, label: 'Listrik' },
  { name: 'MoreHorizontal', icon: MoreHorizontal, label: 'Lainnya' }
]

interface KategoriDialogProps {
  kategori?: {
    id: string
    nama: string
    anggaranDasar: number
    warna?: string | null
    ikon?: string | null
    urutan: number
  }
  trigger?: React.ReactNode
  onSuccess?: () => void
}

export function KategoriDialog({ kategori, trigger, onSuccess }: KategoriDialogProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Form states
  const [nama, setNama] = useState(kategori?.nama || '')
  const [anggaranDasar, setAnggaranDasar] = useState(kategori?.anggaranDasar ? String(kategori.anggaranDasar) : '15000000')
  const [selectedColor, setSelectedColor] = useState(kategori?.warna || PRESET_COLORS[0].value)
  const [selectedIcon, setSelectedIcon] = useState(kategori?.ikon || PRESET_ICONS[6].name)
  const [urutan, setUrutan] = useState(kategori?.urutan !== undefined ? String(kategori.urutan) : '0')

  const isEdit = !!kategori

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!nama.trim()) {
      setError('Nama kategori tidak boleh kosong')
      return
    }

    const budgetNum = Number(anggaranDasar)
    if (isNaN(budgetNum) || budgetNum <= 0) {
      setError('Anggaran dasar harus berupa angka positif')
      return
    }

    const orderNum = Number(urutan)
    if (isNaN(orderNum)) {
      setError('Urutan harus berupa angka')
      return
    }

    setLoading(true)

    const payload = {
      nama: nama.trim(),
      anggaranDasar: budgetNum,
      warna: selectedColor,
      ikon: selectedIcon,
      urutan: orderNum
    }

    try {
      let res
      if (isEdit && kategori) {
        res = await updateKategori(kategori.id, payload)
      } else {
        res = await createKategori(payload)
      }

      if (res.success) {
        setOpen(false)
        if (!isEdit) {
          // Reset form on create
          setNama('')
          setAnggaranDasar('15000000')
          setSelectedColor(PRESET_COLORS[0].value)
          setSelectedIcon(PRESET_ICONS[6].name)
          setUrutan('0')
        }
        onSuccess?.()
        router.refresh()
      } else {
        setError(res.error || 'Gagal menyimpan kategori')
      }
    } catch (err) {
      console.error(err)
      setError('Terjadi kesalahan koneksi database')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-10 shadow-md">
            <Plus className="h-4 w-4 mr-2" />
            Tambah Kategori
          </Button>
        )}
      </DialogTrigger>
      
      <DialogContent className="max-w-lg bg-white border border-slate-200 text-slate-800 shadow-2xl rounded-2xl overflow-y-auto max-h-[90vh]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-slate-900">
              {isEdit ? 'Ubah Kategori Pagu' : 'Tambah Kategori Pagu Baru'}
            </DialogTitle>
            <DialogDescription className="text-slate-500 text-xs">
              {isEdit 
                ? 'Ubah alokasi anggaran dasar, warna, ikon, dan urutan untuk pos pagu ini.' 
                : 'Buat pos anggaran (pagu) baru dengan menetapkan nominal alokasi dasar, ikon visual, dan warna.'}
            </DialogDescription>
          </DialogHeader>

          {error && (
            <div className="p-3 text-xs bg-rose-50 border border-rose-100 text-rose-600 rounded-lg font-medium">
              {error}
            </div>
          )}

          <div className="space-y-4">
            {/* Input Nama */}
            <div className="space-y-2">
              <Label htmlFor="nama" className="text-xs font-bold uppercase tracking-wider text-slate-500">Nama Kategori</Label>
              <Input
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Contoh: Pos Galon, Pos BBM, dll."
                className="bg-white border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 text-slate-900"
              />
            </div>

            {/* Grid Anggaran & Urutan */}
            <div className="grid grid-cols-2 gap-4">
              {/* Anggaran Dasar */}
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-slate-500">Anggaran Dasar (Rp)</Label>
                <Input
                  id="budget"
                  type="number"
                  value={anggaranDasar}
                  onChange={(e) => setAnggaranDasar(e.target.value)}
                  placeholder="15000000"
                  className="bg-white border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 text-slate-900"
                />
              </div>

              {/* Urutan */}
              <div className="space-y-2">
                <Label htmlFor="urutan" className="text-xs font-bold uppercase tracking-wider text-slate-500">Urutan Tampilan</Label>
                <Input
                  id="urutan"
                  type="number"
                  value={urutan}
                  onChange={(e) => setUrutan(e.target.value)}
                  placeholder="0"
                  className="bg-white border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 text-slate-900"
                />
              </div>
            </div>

            {/* Picker Warna */}
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">Pilih Warna Tag UI</Label>
              <div className="flex flex-wrap gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                {PRESET_COLORS.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.value)}
                    className="w-7 h-7 rounded-full transition-transform hover:scale-110 relative flex items-center justify-center border border-black/10 shadow-sm"
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    {selectedColor === color.value && (
                      <Check className="h-4 w-4 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Picker Ikon */}
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-slate-500">Pilih Ikon Visual</Label>
              <div className="grid grid-cols-4 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                {PRESET_ICONS.map((item) => {
                  const IconComponent = item.icon
                  const isSelected = selectedIcon === item.name

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setSelectedIcon(item.name)}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all text-xs font-medium ${
                        isSelected
                          ? 'bg-indigo-600 border-indigo-500 text-white shadow-sm'
                          : 'bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <IconComponent className="h-5 w-5 mb-1" />
                      <span className="text-[10px] tracking-tight">{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <DialogFooter className="border-t border-slate-100 pt-4 flex gap-2 justify-end">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-slate-800 hover:bg-slate-50 border border-transparent hover:border-slate-200"
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isEdit ? 'Simpan Perubahan' : 'Tambah Kategori'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
