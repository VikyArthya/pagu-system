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
  onSuccess?: () => void
}

export function TransaksiForm({
  isOpen,
  onClose,
  kategori,
  periodeId,
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Tambah Transaksi Baru</DialogTitle>
          <DialogDescription>
            Masukkan detail transaksi pengeluaran. Pastikan jumlah tidak melebihi sisa saldo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="tanggal" className="text-gray-700 font-medium">Tanggal</Label>
              <Input
                id="tanggal"
                type="date"
                value={formData.tanggal}
                onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                required
                className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="kategori" className="text-gray-700 font-medium">Kategori</Label>
              <select
                id="kategori"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
                <p className="text-xs text-gray-600 bg-blue-50 p-2 rounded-md border border-blue-200">
                  <span className="font-medium">Anggaran:</span> Rp{selectedKategori.anggaranDasar.toLocaleString('id-ID')} | <span className="font-medium">Sisa:</span>{' '}
                  Rp{selectedKategori.sisaSaldo.toLocaleString('id-ID')}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="deskripsi" className="text-gray-700 font-medium">Deskripsi</Label>
              <Input
                id="deskripsi"
                placeholder="Contoh: Belanja harian"
                value={formData.deskripsi}
                onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                required
                className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="jumlah" className="text-gray-700 font-medium">Jumlah (Rp)</Label>
              <Input
                id="jumlah"
                type="number"
                placeholder="0"
                value={formData.jumlah}
                onChange={(e) => setFormData({ ...formData, jumlah: e.target.value })}
                required
                min="0"
                step="1000"
                className="bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-200">
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
