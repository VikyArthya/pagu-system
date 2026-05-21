'use server'

import { prisma } from '@/lib/prisma'
import { ensurePeriodBudgetsInitialized } from './periode'

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

    // Ensure budgets are initialized
    await ensurePeriodBudgetsInitialized(periode.id)

    // Ambil anggaran per kategori untuk periode ini
    const periodBudgets = await prisma.anggaranKategoriPeriode.findMany({
      where: { periodeId: periode.id },
    })
    const budgetMap = new Map<string, number>(
      periodBudgets.map((pb: any) => [pb.kategoriId, Number(pb.anggaran)] as [string, number])
    )

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

    const kategoriWithSaldo = kategori.map((k: any) => {
      const totalTransaksi = transaksi
        .filter((t: any) => t.kategoriId === k.id)
        .reduce((sum: number, t: any) => sum + Number(t.jumlah), 0)

      const actualAnggaran = budgetMap.get(k.id) ?? Number(k.anggaranDasar)

      return {
        id: k.id,
        nama: k.nama,
        anggaranDasar: actualAnggaran,
        warna: k.warna,
        ikon: k.ikon,
        urutan: k.urutan,
        createdAt: k.createdAt,
        updatedAt: k.updatedAt,
        totalTransaksi,
        sisaSaldo: actualAnggaran - totalTransaksi,
        persentaseTerpakai: actualAnggaran > 0 ? (totalTransaksi / actualAnggaran) * 100 : 0,
      }
    })

    return {
      success: true,
      data: {
        periode: {
          id: periode.id,
          nama: periode.nama,
          tanggalMulai: periode.tanggalMulai,
          tanggalAkhir: periode.tanggalAkhir,
          isActive: periode.isActive,
          templateType: periode.templateType,
          notes: periode.notes,
          createdAt: periode.createdAt,
          updatedAt: periode.updatedAt,
          transaksi: transaksi.map((t: any) => ({
            id: t.id,
            tanggal: t.tanggal,
            deskripsi: t.deskripsi,
            jumlah: Number(t.jumlah),
            kategoriId: t.kategoriId,
            periodeId: t.periodeId,
            createdAt: t.createdAt,
            updatedAt: t.updatedAt,
            kategori: t.kategori ? {
              id: t.kategori.id,
              nama: t.kategori.nama,
              anggaranDasar: budgetMap.get(t.kategori.id) ?? Number(t.kategori.anggaranDasar),
              warna: t.kategori.warna,
              ikon: t.kategori.ikon,
              urutan: t.kategori.urutan,
              createdAt: t.kategori.createdAt,
              updatedAt: t.kategori.updatedAt,
            } : null,
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

    await ensurePeriodBudgetsInitialized(periodeId)

    const periodBudget = await prisma.anggaranKategoriPeriode.findUnique({
      where: {
        kategoriId_periodeId: {
          kategoriId,
          periodeId,
        },
      },
    })

    const budgetAmount = periodBudget ? Number(periodBudget.anggaran) : Number(kategori.anggaranDasar)

    const totalTransaksi = await prisma.transaksi.aggregate({
      where: {
        kategoriId,
        periodeId,
      },
      _sum: {
        jumlah: true,
      },
    })

    const sisaSaldo = budgetAmount - Number(totalTransaksi._sum.jumlah || 0)

    return {
      success: true,
      data: {
        sisaSaldo,
        anggaranDasar: budgetAmount,
        totalTransaksi: Number(totalTransaksi._sum.jumlah || 0),
      },
    }
  } catch (error) {
    console.error('Error fetching sisa saldo:', error)
    return { success: false, error: 'Gagal mengambil sisa saldo' }
  }
}
