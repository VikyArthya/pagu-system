// Test getPeriodeById function
const { PrismaClient } = require('@prisma/client')

async function testGetPeriodeById() {
  const prisma = new PrismaClient()

  try {
    const periodeId = 'cmpevih8x0007q0ttosli4rkq'
    console.log('🔍 Testing getPeriodeById simulation...')

    // Simulate the exact query
    const periode = await prisma.periodeAnggaran.findUnique({
      where: { id: periodeId },
      include: {
        transaksi: {
          include: {
            kategori: true,
          },
        },
      },
    })

    if (!periode) {
      console.log('❌ Periode not found')
      return
    }

    console.log('✅ Periode found:', periode.nama || 'Unnamed')

    // Test data transformation
    const transformed = {
      ...periode,
      transaksi: periode.transaksi.map((t) => ({
        ...t,
        jumlah: Number(t.jumlah),
        kategori: t.kategori ? {
          ...t.kategori,
          anggaranDasar: Number(t.kategori.anggaranDasar),
        } : null,
      })),
    }

    console.log('✅ Data transformation successful')
    console.log('📋 Result:', {
      id: transformed.id,
      nama: transformed.nama || 'Unnamed',
      isActive: transformed.isActive,
      transactions: transformed.transaksi.length,
      hasTransactions: transformed.transaksi.length > 0
    })

    console.log('✅ getPeriodeById simulation completed successfully')

  } catch (error) {
    console.error('❌ Error in getPeriodeById simulation:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testGetPeriodeById()