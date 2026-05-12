'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { getDateRangeForPeriod } from '@/lib/utils'

export async function getPeriodeAktif() {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    let periode = await prisma.periodeAnggaran.findFirst({
      where: {
        isActive: true,
        tanggalAkhir: {
          gte: today,
        },
      },
      include: {
        transaksi: true,
      },
    })

    // Jika tidak ada periode aktif atau periode aktif sudah lewat, buat periode baru
    if (!periode) {
      // Cari periode terakhir untuk menentukan periode baru
      const lastPeriode = await prisma.periodeAnggaran.findFirst({
        orderBy: { createdAt: 'desc' },
      })

      let periodIndex = 0
      if (lastPeriode) {
        // Hitung jumlah periode dari periode pertama
        const firstPeriode = await prisma.periodeAnggaran.findFirst({
          orderBy: { createdAt: 'asc' },
        })
        if (firstPeriode) {
          const daysDiff = Math.floor(
            (new Date(lastPeriode.tanggalMulai).getTime() -
              new Date(firstPeriode.tanggalMulai).getTime()) /
              (1000 * 60 * 60 * 24)
          )
          periodIndex = Math.floor(daysDiff / 14) + 1
        }
      }

      const { startDate, endDate } = getDateRangeForPeriod(periodIndex)

      // Nonaktifkan semua periode yang lama
      await prisma.periodeAnggaran.updateMany({
        where: { isActive: true },
        data: { isActive: false },
      })

      // Buat periode baru
      periode = await prisma.periodeAnggaran.create({
        data: {
          tanggalMulai: startDate,
          tanggalAkhir: endDate,
          isActive: true,
        },
        include: {
          transaksi: true,
        },
      })
    }

    // Cek apakah periode aktif sudah lewat
    if (periode && new Date(periode.tanggalAkhir) < today) {
      // Nonaktifkan periode ini
      await prisma.periodeAnggaran.update({
        where: { id: periode.id },
        data: { isActive: false },
      })

      // Buat periode baru
      const lastPeriodeDate = new Date(periode.tanggalMulai)
      const daysDiff = Math.floor(
        (lastPeriodeDate.getTime() - lastPeriodeDate.getTime()) / (1000 * 60 * 60 * 24)
      )
      const periodIndex = Math.floor(daysDiff / 14) + 1

      const { startDate, endDate } = getDateRangeForPeriod(periodIndex)

      periode = await prisma.periodeAnggaran.create({
        data: {
          tanggalMulai: startDate,
          tanggalAkhir: endDate,
          isActive: true,
        },
        include: {
          transaksi: true,
        },
      })
    }

    return {
      success: true,
      data: periode,
    }
  } catch (error) {
    console.error('Error fetching periode aktif:', error)
    return { success: false, error: 'Gagal mengambil data periode aktif' }
  }
}

export async function getAllPeriode() {
  try {
    const periode = await prisma.periodeAnggaran.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        transaksi: {
          include: {
            kategori: true,
          },
        },
      },
    })
    return {
      success: true,
      data: periode.map((p) => ({
        ...p,
        transaksi: p.transaksi.map((t) => ({
          ...t,
          jumlah: Number(t.jumlah),
          kategori: {
            ...t.kategori,
            anggaranDasar: Number(t.kategori.anggaranDasar),
          },
        })),
      })),
    }
  } catch (error) {
    console.error('Error fetching all periode:', error)
    return { success: false, error: 'Gagal mengambil data periode' }
  }
}

export async function getPeriodeById(id: string) {
  try {
    const periode = await prisma.periodeAnggaran.findUnique({
      where: { id },
      include: {
        transaksi: {
          include: {
            kategori: true,
          },
        },
      },
    })
    if (!periode) {
      return { success: false, error: 'Periode tidak ditemukan' }
    }
    return {
      success: true,
      data: {
        ...periode,
        transaksi: periode.transaksi.map((t) => ({
          ...t,
          jumlah: Number(t.jumlah),
          kategori: {
            ...t.kategori,
            anggaranDasar: Number(t.kategori.anggaranDasar),
          },
        })),
      },
    }
  } catch (error) {
    console.error('Error fetching periode:', error)
    return { success: false, error: 'Gagal mengambil data periode' }
  }
}

export async function createPeriode(data: { tanggalMulai: Date; tanggalAkhir: Date }) {
  try {
    const periode = await prisma.periodeAnggaran.create({
      data: {
        tanggalMulai: data.tanggalMulai,
        tanggalAkhir: data.tanggalAkhir,
      },
    })
    revalidatePath('/')
    revalidatePath('/rekap')
    return { success: true, data: periode }
  } catch (error) {
    console.error('Error creating periode:', error)
    return { success: false, error: 'Gagal membuat periode baru' }
  }
}
