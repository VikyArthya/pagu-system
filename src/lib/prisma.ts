import { PrismaClient } from '../generated/client'

const globalForPrisma = globalThis as unknown as {
  prisma: any
}

if (globalForPrisma.prisma && (!globalForPrisma.prisma.anggaranKategoriPeriode || typeof globalForPrisma.prisma.anggaranKategoriPeriode === 'undefined')) {
  globalForPrisma.prisma = undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
