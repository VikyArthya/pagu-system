'use server'

import { prisma } from '@/lib/prisma'

export async function getDashboardData(periodeId?: string) {
  try {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    let periode = null

    if (periodeId) {
      periode = await prisma.periodeAnggaran.findUnique({
        where: { id: periodeId },
        include: {
          transaksi: {
            include: {
              kategori: true,
            },
          },
        },
      })
    }

    if (!periode) {
      // Ambil periode aktif
      periode = await prisma.periodeAnggaran.findFirst({
        where: {
          isActive: true,
          tanggalAkhir: {
            gte: today,
          },
        },
        include: {
          transaksi: {
            include: {
              kategori: true,
            },
          },
        },
      })
    }

    // Jika tidak ada periode aktif, buat periode baru
    if (!periode) {
      const lastPeriode = await prisma.periodeAnggaran.findFirst({
        orderBy: { createdAt: 'desc' },
      })

      let periodIndex = 0
      if (lastPeriode) {
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

      const startDate = new Date()
      startDate.setDate(startDate.getDate() + (periodIndex * 14))
      startDate.setHours(0, 0, 0, 0)

      const endDate = new Date(startDate)
      endDate.setDate(endDate.getDate() + 13)
      endDate.setHours(23, 59, 59, 999)

      // Nonaktifkan semua periode yang lama
      await prisma.periodeAnggaran.updateMany({
        where: { isActive: true },
        data: { isActive: false },
      })

      periode = await prisma.periodeAnggaran.create({
        data: {
          tanggalMulai: startDate,
          tanggalAkhir: endDate,
          isActive: true,
        },
        include: {
          transaksi: {
            include: {
              kategori: true,
            },
          },
        },
      })
    }

    // Ambil semua kategori
    const kategori = await prisma.kategoriPagu.findMany({
      orderBy: { urutan: 'asc' },
    })

    // Ambil semua transaksi untuk periode aktif
    const transaksi = await prisma.transaksi.findMany({
      where: { periodeId: periode.id },
      include: {
        kategori: true,
      },
    })

    // Hitung total transaksi per kategori
    const kategoriWithSaldo = kategori.map((k) => {
      const totalTransaksi = transaksi
        .filter((t) => t.kategoriId === k.id)
        .reduce((sum, t) => sum + Number(t.jumlah), 0)

      return {
        ...k,
        anggaranDasar: Number(k.anggaranDasar),
        totalTransaksi,
        sisaSaldo: Number(k.anggaranDasar) - totalTransaksi,
        persentaseTerpakai: (totalTransaksi / Number(k.anggaranDasar)) * 100,
      }
    })

    return {
      success: true,
      data: {
        periode: {
          ...periode,
          transaksi: transaksi.map((t) => ({
            ...t,
            jumlah: Number(t.jumlah),
            kategori: {
              ...t.kategori,
              anggaranDasar: Number(t.kategori.anggaranDasar),
            },
          })),
        },
        kategori: kategoriWithSaldo,
      },
    }
  } catch (error) {
    console.error('Error fetching dashboard data:', error)
    return { success: false, error: 'Gagal mengambil data dashboard' }
  }
}

export async function getSisaSaldo(kategoriId: string, periodeId: string) {
  try {
    const kategori = await prisma.kategoriPagu.findUnique({
      where: { id: kategoriId },
    })

    if (!kategori) {
      return { success: false, error: 'Kategori tidak ditemukan' }
    }

    const totalTransaksi = await prisma.transaksi.aggregate({
      where: {
        kategoriId,
        periodeId,
      },
      _sum: {
        jumlah: true,
      },
    })

    const sisaSaldo = Number(kategori.anggaranDasar) - Number(totalTransaksi._sum.jumlah || 0)

    return {
      success: true,
      data: {
        sisaSaldo,
        anggaranDasar: Number(kategori.anggaranDasar),
        totalTransaksi: Number(totalTransaksi._sum.jumlah || 0),
      },
    }
  } catch (error) {
    console.error('Error fetching sisa saldo:', error)
    return { success: false, error: 'Gagal mengambil sisa saldo' }
  }
}
