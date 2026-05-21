'use client'

import { useState } from 'react'
import { TransaksiForm } from './transaksi-form'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface KategoriOption {
  id: string
  nama: string
  anggaranDasar: number
  sisaSaldo: number
}

interface TransaksiDialogProps {
  kategori: KategoriOption[]
  periodeId: string
  tanggalMulai?: Date | string
  tanggalAkhir?: Date | string
}

export function TransaksiDialog({ 
  kategori, 
  periodeId, 
  tanggalMulai, 
  tanggalAkhir 
}: TransaksiDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} size="sm">
        <Plus className="h-4 w-4 mr-2" />
        Tambah Transaksi
      </Button>
      <TransaksiForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        kategori={kategori}
        periodeId={periodeId}
        tanggalMulai={tanggalMulai}
        tanggalAkhir={tanggalAkhir}
        onSuccess={() => {
          setIsOpen(false)
          window.location.reload()
        }}
      />
    </>
  )
}
