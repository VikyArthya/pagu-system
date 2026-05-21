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
import { updatePeriodeKategoriBudget } from '@/lib/actions/periode'
import { Edit2, Loader2 } from 'lucide-react'

interface EditPeriodBudgetDialogProps {
  periodeId: string
  kategoriId: string
  kategoriNama: string
  currentAnggaran: number
  trigger?: React.ReactNode
}

export function EditPeriodBudgetDialog({
  periodeId,
  kategoriId,
  kategoriNama,
  currentAnggaran,
  trigger
}: EditPeriodBudgetDialogProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [anggaran, setAnggaran] = useState(String(currentAnggaran))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const budgetNum = Number(anggaran)
    if (isNaN(budgetNum) || budgetNum <= 0) {
      setError('Nominal anggaran harus berupa angka positif')
      return
    }

    setLoading(true)

    try {
      const res = await updatePeriodeKategoriBudget(periodeId, kategoriId, budgetNum)

      if (res.success) {
        setOpen(false)
        router.refresh()
      } else {
        setError(res.error || 'Gagal mengubah anggaran')
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
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg py-1 px-2 text-xs font-bold transition-all duration-200"
          >
            <Edit2 className="h-3 w-3 mr-1 text-indigo-650" />
            Ubah Anggaran
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-md bg-white border border-slate-200 text-slate-800 shadow-2xl rounded-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-black text-slate-900">
              Sesuaikan Anggaran Periode
            </DialogTitle>
            <DialogDescription className="text-slate-500 text-xs mt-1">
              Ubah alokasi anggaran untuk kategori <strong className="text-slate-800">"{kategoriNama}"</strong> khusus untuk periode ini saja. Perubahan tidak akan mempengaruhi periode lain.
            </DialogDescription>
          </DialogHeader>

          {error && (
            <div className="p-3 text-xs bg-rose-50 border border-rose-100/80 text-rose-600 rounded-xl font-semibold">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="anggaran-input" className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Alokasi Anggaran (Rp)
            </Label>
            <Input
              id="anggaran-input"
              type="number"
              value={anggaran}
              onChange={(e) => setAnggaran(e.target.value)}
              placeholder="Contoh: 15000000"
              className="bg-white border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 text-slate-900 font-bold"
            />
            <p className="text-[10px] text-slate-400 font-medium">
              Masukkan jumlah dana operasional yang dianggarkan.
            </p>
          </div>

          <DialogFooter className="border-t border-slate-100 pt-4 flex gap-2 justify-end">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-slate-800 hover:bg-slate-50 border border-transparent hover:border-slate-200 h-10"
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-10 px-5 shadow-sm"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Simpan Anggaran
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
