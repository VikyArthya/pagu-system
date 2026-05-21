'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

function mapTransaksiPlain(t: any) {
  if (!t) return null
  return {
    id: t.id,
    tanggal: t.tanggal instanceof Date ? t.tanggal.toISOString() : (t.tanggal ? new Date(t.tanggal).toISOString() : null),
    deskripsi: t.deskripsi,
    jumlah: Number(t.jumlah),
    kategoriId: t.kategoriId,
    periodeId: t.periodeId,
    createdAt: t.createdAt instanceof Date ? t.createdAt.toISOString() : (t.createdAt ? new Date(t.createdAt).toISOString() : null),
    updatedAt: t.updatedAt instanceof Date ? t.updatedAt.toISOString() : (t.updatedAt ? new Date(t.updatedAt).toISOString() : null),
    ...(t.kategori ? {
      kategori: {
        id: t.kategori.id,
        nama: t.kategori.nama,
        anggaranDasar: Number(t.kategori.anggaranDasar),
        warna: t.kategori.warna,
        ikon: t.kategori.ikon,
        urutan: t.kategori.urutan,
        createdAt: t.kategori.createdAt instanceof Date ? t.kategori.createdAt.toISOString() : (t.kategori.createdAt ? new Date(t.kategori.createdAt).toISOString() : null),
        updatedAt: t.kategori.updatedAt instanceof Date ? t.kategori.updatedAt.toISOString() : (t.kategori.updatedAt ? new Date(t.kategori.updatedAt).toISOString() : null),
      }
    } : {}),
    ...(t.periode ? {
      periode: {
        id: t.periode.id,
        nama: t.periode.nama,
        tanggalMulai: t.periode.tanggalMulai instanceof Date ? t.periode.tanggalMulai.toISOString() : (t.periode.tanggalMulai ? new Date(t.periode.tanggalMulai).toISOString() : null),
        tanggalAkhir: t.periode.tanggalAkhir instanceof Date ? t.periode.tanggalAkhir.toISOString() : (t.periode.tanggalAkhir ? new Date(t.periode.tanggalAkhir).toISOString() : null),
        isActive: t.periode.isActive,
        templateType: t.periode.templateType,
        notes: t.periode.notes,
        createdAt: t.periode.createdAt instanceof Date ? t.periode.createdAt.toISOString() : (t.periode.createdAt ? new Date(t.periode.createdAt).toISOString() : null),
        updatedAt: t.periode.updatedAt instanceof Date ? t.periode.updatedAt.toISOString() : (t.periode.updatedAt ? new Date(t.periode.updatedAt).toISOString() : null),
      }
    } : {}),
  }
}

export async function getTransaksiByPeriode(periodeId: string) {
  try {
    const transaksi = await prisma.transaksi.findMany({
      where: { periodeId },
      include: {
        kategori: true,
      },
      orderBy: { tanggal: 'desc' },
    })
    return {
      success: true,
      data: transaksi.map(mapTransaksiPlain),
    }
  } catch (error) {
    console.error('Error fetching transaksi:', error)
    return { success: false, error: 'Gagal mengambil data transaksi' }
  }
}

export async function getTransaksiByKategori(
  kategoriId: string,
  periodeId: string
) {
  try {
    const transaksi = await prisma.transaksi.findMany({
      where: {
        kategoriId,
        periodeId,
      },
      orderBy: { tanggal: 'desc' },
    })
    return {
      success: true,
      data: transaksi.map(mapTransaksiPlain),
    }
  } catch (error) {
    console.error('Error fetching transaksi:', error)
    return { success: false, error: 'Gagal mengambil data transaksi' }
  }
}

export async function getTotalTransaksiByKategori(
  kategoriId: string,
  periodeId: string
) {
  try {
    const result = await prisma.transaksi.aggregate({
      where: {
        kategoriId,
        periodeId,
      },
      _sum: {
        jumlah: true,
      },
    })
    return {
      success: true,
      data: Number(result._sum.jumlah || 0),
    }
  } catch (error) {
    console.error('Error fetching total transaksi:', error)
    return { success: false, error: 'Gagal mengambil total transaksi' }
  }
}

export async function createTransaksi(data: {
  tanggal: string | Date
  deskripsi: string
  jumlah: number
  kategoriId: string
  periodeId: string
}) {
  try {
    // Validasi: Cek apakah tanggal berada dalam rentang periode
    const periode = await prisma.periodeAnggaran.findUnique({
      where: { id: data.periodeId },
    })

    if (!periode) {
      return { success: false, error: 'Periode tidak ditemukan' }
    }

    const start = new Date(periode.tanggalMulai)
    start.setHours(0, 0, 0, 0)
    const end = new Date(periode.tanggalAkhir)
    end.setHours(23, 59, 59, 999)
    
    const txDate = new Date(data.tanggal)
    if (isNaN(txDate.getTime())) {
      return { success: false, error: 'Format tanggal tidak valid' }
    }

    if (txDate < start || txDate > end) {
      const formatDateLocal = (date: Date) => {
        return new Intl.DateTimeFormat('id-ID', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }).format(date)
      }
      return {
        success: false,
        error: `Tanggal transaksi harus berada dalam rentang periode: ${formatDateLocal(periode.tanggalMulai)} - ${formatDateLocal(periode.tanggalAkhir)}`
      }
    }

    // Validasi: Cek sisa saldo sebelum membuat transaksi
    const kategori = await prisma.kategoriPagu.findUnique({
      where: { id: data.kategoriId },
    })

    if (!kategori) {
      return { success: false, error: 'Kategori tidak ditemukan' }
    }

    // Pastikan anggaran periode diinisialisasi
    const { ensurePeriodBudgetsInitialized } = await import('./periode')
    await ensurePeriodBudgetsInitialized(data.periodeId)

    const periodBudget = await prisma.anggaranKategoriPeriode.findUnique({
      where: {
        kategoriId_periodeId: {
          kategoriId: data.kategoriId,
          periodeId: data.periodeId,
        },
      },
    })

    const totalTransaksi = await prisma.transaksi.aggregate({
      where: {
        kategoriId: data.kategoriId,
        periodeId: data.periodeId,
      },
      _sum: {
        jumlah: true,
      },
    })

    const budgetAmount = periodBudget ? Number(periodBudget.anggaran) : Number(kategori.anggaranDasar)
    const sisaSaldo = budgetAmount - Number(totalTransaksi._sum.jumlah || 0)

    if (data.jumlah > sisaSaldo) {
      return {
        success: false,
        error: `Jumlah transaksi melebihi sisa saldo. Sisa saldo: ${new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          minimumFractionDigits: 0,
        }).format(sisaSaldo)}`,
      }
    }

    const transaksi = await prisma.transaksi.create({
      data: {
        tanggal: txDate,
        deskripsi: data.deskripsi,
        jumlah: data.jumlah,
        kategoriId: data.kategoriId,
        periodeId: data.periodeId,
      },
      include: {
        kategori: true,
        periode: true,
      },
    })

    try {
      revalidatePath('/')
      revalidatePath('/rekap')
    } catch (revalError) {
      console.error('Error during revalidation in createTransaksi:', revalError)
    }

    return {
      success: true,
      data: mapTransaksiPlain(transaksi),
    }
  } catch (error) {
    console.error('Error creating transaksi:', error)
    return { success: false, error: 'Gagal membuat transaksi baru' }
  }
}

export async function updateTransaksi(
  id: string,
  data: {
    tanggal?: string | Date
    deskripsi?: string
    jumlah?: number
    kategoriId?: string
  }
) {
  try {
    const existingTx = await prisma.transaksi.findUnique({
      where: { id },
      include: { periode: true },
    })

    if (!existingTx) {
      return { success: false, error: 'Transaksi tidak ditemukan' }
    }

    let txDate: Date | undefined = undefined
    if (data.tanggal) {
      txDate = new Date(data.tanggal)
      if (isNaN(txDate.getTime())) {
        return { success: false, error: 'Format tanggal tidak valid' }
      }

      const start = new Date(existingTx.periode.tanggalMulai)
      start.setHours(0, 0, 0, 0)
      const end = new Date(existingTx.periode.tanggalAkhir)
      end.setHours(23, 59, 59, 999)
      
      if (txDate < start || txDate > end) {
        const formatDateLocal = (date: Date) => {
          return new Intl.DateTimeFormat('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }).format(date)
        }
        return {
          success: false,
          error: `Tanggal transaksi harus berada dalam rentang periode: ${formatDateLocal(existingTx.periode.tanggalMulai)} - ${formatDateLocal(existingTx.periode.tanggalAkhir)}`
        }
      }
    }

    const transaksi = await prisma.transaksi.update({
      where: { id },
      data: {
        ...(txDate && { tanggal: txDate }),
        ...(data.deskripsi && { deskripsi: data.deskripsi }),
        ...(data.jumlah !== undefined && { jumlah: data.jumlah }),
        ...(data.kategoriId && { kategoriId: data.kategoriId }),
      },
      include: {
        kategori: true,
        periode: true,
      },
    })

    try {
      revalidatePath('/')
      revalidatePath('/rekap')
    } catch (revalError) {
      console.error('Error during revalidation in updateTransaksi:', revalError)
    }

    return {
      success: true,
      data: mapTransaksiPlain(transaksi),
    }
  } catch (error) {
    console.error('Error updating transaksi:', error)
    return { success: false, error: 'Gagal mengupdate transaksi' }
  }
}

export async function deleteTransaksi(id: string) {
  try {
    await prisma.transaksi.delete({
      where: { id },
    })
    revalidatePath('/')
    revalidatePath('/rekap')
    return { success: true }
  } catch (error) {
    console.error('Error deleting transaksi:', error)
    return { success: false, error: 'Gagal menghapus transaksi' }
  }
}
