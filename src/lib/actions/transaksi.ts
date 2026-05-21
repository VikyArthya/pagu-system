'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

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
      data: transaksi.map((t) => ({
        ...t,
        jumlah: Number(t.jumlah),
        kategori: {
          ...t.kategori,
          anggaranDasar: Number(t.kategori.anggaranDasar),
        },
      })),
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
      data: transaksi.map((t) => ({
        ...t,
        jumlah: Number(t.jumlah),
      })),
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
  tanggal: Date
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

    const totalTransaksi = await prisma.transaksi.aggregate({
      where: {
        kategoriId: data.kategoriId,
        periodeId: data.periodeId,
      },
      _sum: {
        jumlah: true,
      },
    })

    const sisaSaldo = Number(kategori.anggaranDasar) - Number(totalTransaksi._sum.jumlah || 0)

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
        tanggal: data.tanggal,
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

    revalidatePath('/')
    revalidatePath('/rekap')
    return {
      success: true,
      data: {
        ...transaksi,
        jumlah: Number(transaksi.jumlah),
        kategori: {
          ...transaksi.kategori,
          anggaranDasar: Number(transaksi.kategori.anggaranDasar),
        },
      },
    }
  } catch (error) {
    console.error('Error creating transaksi:', error)
    return { success: false, error: 'Gagal membuat transaksi baru' }
  }
}

export async function updateTransaksi(
  id: string,
  data: {
    tanggal?: Date
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

    if (data.tanggal) {
      const start = new Date(existingTx.periode.tanggalMulai)
      start.setHours(0, 0, 0, 0)
      const end = new Date(existingTx.periode.tanggalAkhir)
      end.setHours(23, 59, 59, 999)
      
      const txDate = new Date(data.tanggal)
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
        ...(data.tanggal && { tanggal: data.tanggal }),
        ...(data.deskripsi && { deskripsi: data.deskripsi }),
        ...(data.jumlah !== undefined && { jumlah: data.jumlah }),
        ...(data.kategoriId && { kategoriId: data.kategoriId }),
      },
      include: {
        kategori: true,
        periode: true,
      },
    })
    revalidatePath('/')
    revalidatePath('/rekap')
    return {
      success: true,
      data: {
        ...transaksi,
        jumlah: Number(transaksi.jumlah),
        kategori: {
          ...transaksi.kategori,
          anggaranDasar: Number(transaksi.kategori.anggaranDasar),
        },
      },
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
