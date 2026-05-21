'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createTransaksi } from '@/lib/actions/transaksi'

interface KategoriOption {
  id: string
  nama: string
  anggaranDasar: number
  sisaSaldo: number
}

interface TransaksiFormProps {
  isOpen: boolean
  onClose: () => void
  kategori: KategoriOption[]
  periodeId: string
  tanggalMulai?: Date | string
  tanggalAkhir?: Date | string
  onSuccess?: () => void
}

export function TransaksiForm({
  isOpen,
  onClose,
  kategori,
  periodeId,
  tanggalMulai,
  tanggalAkhir,
  onSuccess,
}: TransaksiFormProps) {
  const [formData, setFormData] = useState({
    tanggal: new Date().toISOString().split('T')[0],
    kategoriId: '',
    deskripsi: '',
    jumlah: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const selectedKategori = kategori.find((k) => k.id === formData.kategoriId)

  const formatDateString = (dateInput?: Date | string) => {
    if (!dateInput) return undefined
    const d = new Date(dateInput)
    if (isNaN(d.getTime())) return undefined
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const minDate = formatDateString(tanggalMulai)
  const maxDate = formatDateString(tanggalAkhir)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const jumlah = parseFloat(formData.jumlah)
      if (isNaN(jumlah) || jumlah <= 0) {
        setError('Jumlah harus lebih dari 0')
        setIsSubmitting(false)
        return
      }

      if (!selectedKategori) {
        setError('Pilih kategori')
        setIsSubmitting(false)
        return
      }

      if (jumlah > selectedKategori.sisaSaldo) {
        setError(
          `Jumlah transaksi melebihi sisa saldo. Sisa saldo: Rp${selectedKategori.sisaSaldo.toLocaleString('id-ID')}`
        )
        setIsSubmitting(false)
        return
      }

      // Validasi Tanggal di Sisi Client
      if (tanggalMulai && tanggalAkhir) {
        const txDate = new Date(formData.tanggal)
        txDate.setHours(0, 0, 0, 0)
        
        const start = new Date(tanggalMulai)
        start.setHours(0, 0, 0, 0)
        
        const end = new Date(tanggalAkhir)
        end.setHours(23, 59, 59, 999)
        
        if (txDate < start || txDate > end) {
          const formatDateLocal = (date: Date) => {
            return new Intl.DateTimeFormat('id-ID', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            }).format(date)
          }
          setError(
            `Tanggal transaksi harus berada dalam rentang periode: ${formatDateLocal(new Date(tanggalMulai))} - ${formatDateLocal(new Date(tanggalAkhir))}`
          )
          setIsSubmitting(false)
          return
        }
      }

      const result = await createTransaksi({
        tanggal: new Date(formData.tanggal),
        deskripsi: formData.deskripsi,
        jumlah,
        kategoriId: formData.kategoriId,
        periodeId,
      })

      if (result.success) {
        onSuccess?.()
        onClose()
        setFormData({
          tanggal: new Date().toISOString().split('T')[0],
          kategoriId: '',
          deskripsi: '',
          jumlah: '',
        })
      } else {
        setError(result.error || 'Gagal menyimpan transaksi')
      }
    } catch (err) {
      setError('Terjadi kesalahan saat menyimpan transaksi')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] border-slate-200 bg-white rounded-2xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-slate-900 font-bold text-lg">Tambah Transaksi Baru</DialogTitle>
          <DialogDescription className="text-slate-500 text-sm">
            Masukkan detail transaksi pengeluaran. Pastikan jumlah tidak melebihi sisa saldo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="tanggal" className="text-slate-700 font-bold text-sm">Tanggal</Label>
              <Input
                id="tanggal"
                type="date"
                value={formData.tanggal}
                onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                required
                min={minDate}
                max={maxDate}
                className="bg-white border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
              />
              {tanggalMulai && tanggalAkhir && (
                <p className="text-[11px] text-slate-500 font-medium">
                  Rentang tanggal periode aktif: <span className="text-slate-800 font-semibold">{new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(tanggalMulai))}</span> - <span className="text-slate-800 font-semibold">{new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(tanggalAkhir))}</span>
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="kategori" className="text-slate-700 font-bold text-sm">Kategori</Label>
              <select
                id="kategori"
                className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 focus:outline-none"
                value={formData.kategoriId}
                onChange={(e) => setFormData({ ...formData, kategoriId: e.target.value })}
                required
              >
                <option value="">Pilih Kategori</option>
                {kategori.map((k) => (
                  <option key={k.id} value={k.id}>
                    {k.nama} (Sisa: {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      minimumFractionDigits: 0,
                    }).format(k.sisaSaldo)})
                  </option>
                ))}
              </select>
              {selectedKategori && (
                <p className="text-xs text-indigo-700 bg-indigo-50/60 p-2.5 rounded-xl border border-indigo-150">
                  <span className="font-semibold">Anggaran:</span> Rp{selectedKategori.anggaranDasar.toLocaleString('id-ID')} | <span className="font-semibold">Sisa:</span>{' '}
                  Rp{selectedKategori.sisaSaldo.toLocaleString('id-ID')}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="deskripsi" className="text-slate-700 font-bold text-sm">Deskripsi</Label>
              <Input
                id="deskripsi"
                placeholder="Contoh: Belanja harian"
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                required
                className="bg-white border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="jumlah" className="text-slate-700 font-bold text-sm">Jumlah (Rp)</Label>
              <Input
                id="jumlah"
                type="number"
                placeholder="0"
                value={formData.jumlah}
                onChange={(e) => setFormData({ ...formData, jumlah: e.target.value })}
                required
                min="0"
                step="1000"
                className="bg-white border-slate-200 text-slate-900 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl"
              />
            </div>

            {error && (
              <div className="text-sm text-rose-800 bg-rose-50 p-3.5 rounded-xl border border-rose-100/80">
                ⚠️ {error}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Batal
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Menyimpan...' : 'Simpan Transaksi'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
