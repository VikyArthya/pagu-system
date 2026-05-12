import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Buat kategori-kategori awal
  const kategori = [
    {
      nama: 'Pos Relawan',
      anggaranDasar: 15000000,
      warna: '#3b82f6',
      ikon: 'Users',
      urutan: 1,
    },
    {
      nama: 'Pos Galon',
      anggaranDasar: 15000000,
      warna: '#10b981',
      ikon: 'Droplets',
      urutan: 2,
    },
    {
      nama: 'Pos BBM',
      anggaranDasar: 15000000,
      warna: '#f59e0b',
      ikon: 'Fuel',
      urutan: 3,
    },
    {
      nama: 'Pos Makan',
      anggaranDasar: 15000000,
      warna: '#ef4444',
      ikon: 'Utensils',
      urutan: 4,
    },
    {
      nama: 'Pos Transport',
      anggaranDasar: 15000000,
      warna: '#8b5cf6',
      ikon: 'Car',
      urutan: 5,
    },
    {
      nama: 'Pos ATK',
      anggaranDasar: 15000000,
      warna: '#ec4899',
      ikon: 'Package',
      urutan: 6,
    },
    {
      nama: 'Pos Lain-lain',
      anggaranDasar: 15000000,
      warna: '#6b7280',
      ikon: 'MoreHorizontal',
      urutan: 7,
    },
  ]

  for (const k of kategori) {
    await prisma.kategoriPagu.create({
      data: k,
    })
  }

  console.log('✅ Kategori created')

  // Buat periode awal
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const startDate = new Date(today)
  const endDate = new Date(today)
  endDate.setDate(endDate.getDate() + 13)
  endDate.setHours(23, 59, 59, 999)

  await prisma.periodeAnggaran.create({
    data: {
      tanggalMulai: startDate,
      tanggalAkhir: endDate,
      isActive: true,
    },
  })

  console.log('✅ Periode created')
  console.log('🎉 Seed completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
