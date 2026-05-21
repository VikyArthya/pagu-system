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
      data: periode ? {
        id: periode.id,
        nama: periode.nama,
        tanggalMulai: periode.tanggalMulai,
        tanggalAkhir: periode.tanggalAkhir,
        isActive: periode.isActive,
        templateType: periode.templateType,
        notes: periode.notes,
        createdAt: periode.createdAt,
        updatedAt: periode.updatedAt,
        transaksi: (periode.transaksi || []).map((t) => ({
          id: t.id,
          tanggal: t.tanggal,
          deskripsi: t.deskripsi,
          jumlah: Number(t.jumlah),
          kategoriId: t.kategoriId,
          periodeId: t.periodeId,
          createdAt: t.createdAt,
          updatedAt: t.updatedAt,
        })),
      } : null,
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
        id: p.id,
        nama: p.nama,
        tanggalMulai: p.tanggalMulai,
        tanggalAkhir: p.tanggalAkhir,
        isActive: p.isActive,
        templateType: p.templateType,
        notes: p.notes,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        transaksi: p.transaksi.map((t) => ({
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
            anggaranDasar: Number(t.kategori.anggaranDasar),
            warna: t.kategori.warna,
            ikon: t.kategori.ikon,
            urutan: t.kategori.urutan,
            createdAt: t.kategori.createdAt,
            updatedAt: t.kategori.updatedAt,
          } : null,
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
    // Validate id parameter
    if (!id || typeof id !== 'string') {
      return { success: false, error: 'Invalid periode ID' }
    }

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
        id: periode.id,
        nama: periode.nama,
        tanggalMulai: periode.tanggalMulai,
        tanggalAkhir: periode.tanggalAkhir,
        isActive: periode.isActive,
        templateType: periode.templateType,
        notes: periode.notes,
        createdAt: periode.createdAt,
        updatedAt: periode.updatedAt,
        transaksi: periode.transaksi.map((t) => ({
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
            anggaranDasar: Number(t.kategori.anggaranDasar),
            warna: t.kategori.warna,
            ikon: t.kategori.ikon,
            urutan: t.kategori.urutan,
            createdAt: t.kategori.createdAt,
            updatedAt: t.kategori.updatedAt,
          } : null,
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
    return {
      success: true,
      data: {
        id: periode.id,
        nama: periode.nama,
        tanggalMulai: periode.tanggalMulai,
        tanggalAkhir: periode.tanggalAkhir,
        isActive: periode.isActive,
        templateType: periode.templateType,
        notes: periode.notes,
        createdAt: periode.createdAt,
        updatedAt: periode.updatedAt,
      },
    }
  } catch (error) {
    console.error('Error creating periode:', error)
    return { success: false, error: 'Gagal membuat periode baru' }
  }
}

export async function createPeriodeWithTemplate(data: {
  nama?: string
  templateType: 'biweekly' | 'monthly' | 'quarterly' | 'custom'
  tanggalMulai: Date
  tanggalAkhir?: Date
  notes?: string
}) {
  try {
    let { tanggalMulai, tanggalAkhir, templateType } = data

    // Generate end date based on template if not provided
    if (!tanggalAkhir && templateType !== 'custom') {
      const daysMap = {
        biweekly: 14,
        monthly: 30,
        quarterly: 90,
      }
      const days = daysMap[templateType]
      tanggalAkhir = new Date(tanggalMulai)
      tanggalAkhir.setDate(tanggalAkhir.getDate() + days - 1)
      tanggalAkhir.setHours(23, 59, 59, 999)
    }

    if (!tanggalAkhir) {
      return { success: false, error: 'Tanggal akhir harus diisi untuk custom template' }
    }

    // Generate default name if not provided
    let nama = data.nama
    if (!nama) {
      const defaultNames = {
        biweekly: `Period ${Math.ceil((tanggalMulai.getTime() - new Date(tanggalMulai.getFullYear(), 0, 1).getTime()) / (14 * 24 * 60 * 60 * 1000)) + 1}`,
        monthly: tanggalMulai.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }),
        quarterly: `Q${Math.ceil((tanggalMulai.getMonth() + 1) / 3)} ${tanggalMulai.getFullYear()}`,
        custom: 'Custom Period',
      }
      nama = defaultNames[templateType]
    }

    // Nonaktifkan semua periode yang lama
    await prisma.periodeAnggaran.updateMany({
      where: { isActive: true },
      data: { isActive: false },
    })

    const periode = await prisma.periodeAnggaran.create({
      data: {
        nama,
        tanggalMulai,
        tanggalAkhir,
        isActive: true,
        templateType,
        notes: data.notes,
      },
    })

    revalidatePath('/')
    revalidatePath('/rekap')
    revalidatePath('/periode')

    return {
      success: true,
      data: {
        id: periode.id,
        nama: periode.nama,
        tanggalMulai: periode.tanggalMulai,
        tanggalAkhir: periode.tanggalAkhir,
        isActive: periode.isActive,
        templateType: periode.templateType,
        notes: periode.notes,
        createdAt: periode.createdAt,
        updatedAt: periode.updatedAt,
      },
    }
  } catch (error) {
    console.error('Error creating periode with template:', error)
    return { success: false, error: 'Gagal membuat periode baru' }
  }
}

export async function updatePeriode(
  id: string,
  data: {
    nama?: string
    tanggalMulai?: Date
    tanggalAkhir?: Date
    notes?: string
    isActive?: boolean
  }
) {
  try {
    const periode = await prisma.periodeAnggaran.update({
      where: { id },
      data,
    })

    revalidatePath('/')
    revalidatePath('/rekap')
    revalidatePath('/periode')
    revalidatePath(`/periode/${id}`)

    return {
      success: true,
      data: {
        id: periode.id,
        nama: periode.nama,
        tanggalMulai: periode.tanggalMulai,
        tanggalAkhir: periode.tanggalAkhir,
        isActive: periode.isActive,
        templateType: periode.templateType,
        notes: periode.notes,
        createdAt: periode.createdAt,
        updatedAt: periode.updatedAt,
      },
    }
  } catch (error) {
    console.error('Error updating periode:', error)
    return { success: false, error: 'Gagal mengupdate periode' }
  }
}

export async function comparePeriode(period1Id: string, period2Id: string) {
  try {
    // Validate IDs
    if (!period1Id || !period2Id) {
      return { success: false, error: 'Periode IDs are required' }
    }

    const [periode1, periode2] = await Promise.all([
      getPeriodeById(period1Id),
      getPeriodeById(period2Id),
    ])

    if (!periode1.success || !periode2.success) {
      return { success: false, error: 'Periode tidak ditemukan' }
    }

    const kategori = await prisma.kategoriPagu.findMany({
      orderBy: { urutan: 'asc' },
    })

    // Calculate spending by category for each period
    const calculateCategorySpending = (periode: any) => {
      const spending: Record<string, number> = {}
      kategori.forEach((k) => {
        spending[k.id] = 0
      })

      periode.data.transaksi.forEach((t: any) => {
        if (spending[t.kategoriId] !== undefined) {
          spending[t.kategoriId] += t.jumlah
        }
      })

      return spending
    }

    const spending1 = calculateCategorySpending(periode1)
    const spending2 = calculateCategorySpending(periode2)

    // Generate comparison data
    const comparison = kategori.map((k) => {
      const amount1 = spending1[k.id] || 0
      const amount2 = spending2[k.id] || 0
      const difference = amount2 - amount1
      const percentChange = amount1 > 0 ? ((difference / amount1) * 100) : 0

      const trend: 'up' | 'down' | 'stable' = difference > 0 ? 'up' : difference < 0 ? 'down' : 'stable'

      return {
        kategori: {
          id: k.id,
          nama: k.nama,
          anggaranDasar: Number(k.anggaranDasar),
          warna: k.warna,
          ikon: k.ikon,
          urutan: k.urutan,
          createdAt: k.createdAt,
          updatedAt: k.updatedAt,
        },
        period1Amount: amount1,
        period2Amount: amount2,
        difference,
        percentChange,
        trend,
      }
    })

    const total1 = Object.values(spending1).reduce((sum, amount) => sum + amount, 0)
    const total2 = Object.values(spending2).reduce((sum, amount) => sum + amount, 0)

    return {
      success: true,
      data: {
        period1: periode1.data,
        period2: periode2.data,
        comparison,
        summary: {
          period1Total: total1,
          period2Total: total2,
          totalDifference: total2 - total1,
          totalPercentChange: total1 > 0 ? ((total2 - total1) / total1) * 100 : 0,
        },
      },
    }
  } catch (error) {
    console.error('Error comparing periode:', error)
    return { success: false, error: 'Gagal membandingkan periode' }
  }
}

export async function getPeriodeSummaries() {
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

    const summaries = periode.map((p) => {
      const totalAmount = p.transaksi.reduce((sum, t) => sum + Number(t.jumlah), 0)
      const transactionCount = p.transaksi.length

      // Get spending by category
      const categorySpending: Record<string, { amount: number; count: number; name: string; warna?: string | null }> = {}
      p.transaksi.forEach((t) => {
        if (!categorySpending[t.kategoriId]) {
          categorySpending[t.kategoriId] = {
            amount: 0,
            count: 0,
            name: t.kategori.nama,
            warna: t.kategori.warna,
          }
        }
        categorySpending[t.kategoriId].amount += Number(t.jumlah)
        categorySpending[t.kategoriId].count += 1
      })

      return {
        id: p.id,
        nama: p.nama,
        tanggalMulai: p.tanggalMulai,
        tanggalAkhir: p.tanggalAkhir,
        isActive: p.isActive,
        templateType: p.templateType,
        notes: p.notes,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
        totalAmount,
        transactionCount,
        categorySpending: Object.values(categorySpending),
        averageTransaction: transactionCount > 0 ? totalAmount / transactionCount : 0,
      }
    })

    return {
      success: true,
      data: summaries,
    }
  } catch (error) {
    console.error('Error getting periode summaries:', error)
    return { success: false, error: 'Gagal mengambil ringkasan periode' }
  }
}

export async function deletePeriode(id: string) {
  try {
    // Check if period has transactions
    const periode = await prisma.periodeAnggaran.findUnique({
      where: { id },
      include: {
        transaksi: true,
      },
    })

    if (!periode) {
      return { success: false, error: 'Periode tidak ditemukan' }
    }

    if (periode.transaksi.length > 0) {
      return { success: false, error: 'Tidak dapat menghapus periode yang memiliki transaksi' }
    }

    await prisma.periodeAnggaran.delete({
      where: { id },
    })

    revalidatePath('/')
    revalidatePath('/rekap')
    revalidatePath('/periode')

    return { success: true, data: { message: 'Periode berhasil dihapus' } }
  } catch (error) {
    console.error('Error deleting periode:', error)
    return { success: false, error: 'Gagal menghapus periode' }
  }
}
