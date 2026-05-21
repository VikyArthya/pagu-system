const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function testPeriodeDetail() {
  try {
    const periodeId = 'cmpevih8x0007q0ttosli4rkq'

    console.log('🔍 Testing periode detail for ID:', periodeId)

    // Test the exact query that getPeriodeById uses
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
      console.log('❌ Periode not found in database')
      return
    }

    console.log('✅ Periode found:', periode.nama || 'Unnamed')
    console.log('📅 Dates:', periode.tanggalMulai, 'to', periode.tanggalAkhir)
    console.log('📊 Transactions:', periode.transaksi.length)

    // Test data transformation
    const transformed = {
      ...periode,
      transaksi: periode.transaksi.map((t) => {
        if (!t.kategori) {
          console.log('⚠️  Transaction without kategori:', t.id)
        }
        return {
          ...t,
          jumlah: Number(t.jumlah),
          kategori: t.kategori ? {
            ...t.kategori,
            anggaranDasar: Number(t.kategori.anggaranDasar),
          } : null,
        }
      }),
    }

    console.log('✅ Data transformation successful')
    console.log('📋 Final data structure:', {
      id: transformed.id,
      nama: transformed.nama,
      transactionCount: transformed.transaksi.length,
      hasTransactions: transformed.transaksi.length > 0
    })

  } catch (error) {
    console.error('❌ Error testing periode detail:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testPeriodeDetail()