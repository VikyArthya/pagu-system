'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function getKategoriPagu() {
  try {
    const kategori = await prisma.kategoriPagu.findMany({
      orderBy: { urutan: 'asc' },
    })
    return {
      success: true,
      data: kategori.map((k) => ({
        ...k,
        anggaranDasar: Number(k.anggaranDasar),
      })),
    }
  } catch (error) {
    console.error('Error fetching kategori:', error)
    return { success: false, error: 'Gagal mengambil data kategori' }
  }
}

export async function getKategoriById(id: string) {
  try {
    const kategori = await prisma.kategoriPagu.findUnique({
      where: { id },
    })
    if (!kategori) {
      return { success: false, error: 'Kategori tidak ditemukan' }
    }
    return {
      success: true,
      data: { ...kategori, anggaranDasar: Number(kategori.anggaranDasar) },
    }
  } catch (error) {
    console.error('Error fetching kategori:', error)
    return { success: false, error: 'Gagal mengambil data kategori' }
  }
}

export async function createKategori(data: {
  nama: string
  anggaranDasar: number
  warna?: string
  ikon?: string
  urutan?: number
}) {
  try {
    const kategori = await prisma.kategoriPagu.create({
      data: {
        nama: data.nama,
        anggaranDasar: data.anggaranDasar || 15000000,
        warna: data.warna,
        ikon: data.ikon,
        urutan: data.urutan ?? 0,
      },
    })
    revalidatePath('/')
    revalidatePath('/rekap')
    return {
      success: true,
      data: { ...kategori, anggaranDasar: Number(kategori.anggaranDasar) },
    }
  } catch (error) {
    console.error('Error creating kategori:', error)
    return { success: false, error: 'Gagal membuat kategori baru' }
  }
}

export async function updateKategori(
  id: string,
  data: {
    nama?: string
    anggaranDasar?: number
    warna?: string
    ikon?: string
    urutan?: number
  }
) {
  try {
    const kategori = await prisma.kategoriPagu.update({
      where: { id },
      data: {
        ...(data.nama && { nama: data.nama }),
        ...(data.anggaranDasar !== undefined && { anggaranDasar: data.anggaranDasar }),
        ...(data.warna !== undefined && { warna: data.warna }),
        ...(data.ikon !== undefined && { ikon: data.ikon }),
        ...(data.urutan !== undefined && { urutan: data.urutan }),
      },
    })
    revalidatePath('/')
    revalidatePath('/rekap')
    return {
      success: true,
      data: { ...kategori, anggaranDasar: Number(kategori.anggaranDasar) },
    }
  } catch (error) {
    console.error('Error updating kategori:', error)
    return { success: false, error: 'Gagal mengupdate kategori' }
  }
}

export async function deleteKategori(id: string) {
  try {
    await prisma.kategoriPagu.delete({
      where: { id },
    })
    revalidatePath('/')
    revalidatePath('/rekap')
    return { success: true }
  } catch (error) {
    console.error('Error deleting kategori:', error)
    return { success: false, error: 'Gagal menghapus kategori' }
  }
}
