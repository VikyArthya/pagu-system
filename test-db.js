const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function testDatabase() {
  try {
    console.log('🔍 Testing database connection...')

    // Test basic connection
    await prisma.$connect()
    console.log('✅ Database connected successfully')

    // Check if there are any periods
    const periodeCount = await prisma.periodeAnggaran.count()
    console.log(`📊 Found ${periodeCount} periode(s) in database`)

    if (periodeCount > 0) {
      const firstPeriode = await prisma.periodeAnggaran.findFirst({
        include: {
          transaksi: {
            include: {
              kategori: true
            }
          }
        }
      })
      console.log('✅ First periode:', firstPeriode?.nama || 'Unnamed', 'ID:', firstPeriode?.id)
    } else {
      console.log('⚠️  No periode found, creating initial data...')

      // Create some test data
      const kategori = await prisma.kategoriPagu.findMany()
      console.log(`📊 Found ${kategori.length} kategori`)

      if (kategori.length > 0) {
        const today = new Date()
        const startDate = new Date(today)
        startDate.setHours(0, 0, 0, 0)

        const endDate = new Date(startDate)
        endDate.setDate(endDate.getDate() + 13)
        endDate.setHours(23, 59, 59, 999)

        const newPeriode = await prisma.periodeAnggaran.create({
          data: {
            nama: 'Initial Period',
            tanggalMulai: startDate,
            tanggalAkhir: endDate,
            isActive: true,
            templateType: 'biweekly',
          }
        })
        console.log('✅ Created initial periode:', newPeriode.nama, 'ID:', newPeriode.id)
      }
    }

    console.log('✅ Database test completed successfully')
  } catch (error) {
    console.error('❌ Database test failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testDatabase()