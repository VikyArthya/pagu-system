import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number | string): string {
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numAmount)
}

export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(dateObj)
}

export function formatDateFull(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(dateObj)
}

export function getDateRangeForPeriod(periodIndex: number = 0): { startDate: Date; endDate: Date } {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() + (periodIndex * 14))
  startDate.setHours(0, 0, 0, 0)

  const endDate = new Date(startDate)
  endDate.setDate(endDate.getDate() + 13)
  endDate.setHours(23, 59, 59, 999)

  return { startDate, endDate }
}

export interface PeriodTemplate {
  type: 'biweekly' | 'monthly' | 'quarterly' | 'custom'
  name: string
  days: number
  description: string
  defaultNamePattern: string
}

export const PERIOD_TEMPLATES: Record<string, PeriodTemplate> = {
  biweekly: {
    type: 'biweekly',
    name: '2 Minggu',
    days: 14,
    description: 'Periode 2 minggu (14 hari) - cocok untuk kontrol pengeluaran jangka pendek',
    defaultNamePattern: 'Period {n}',
  },
  monthly: {
    type: 'monthly',
    name: '1 Bulan',
    days: 30,
    description: 'Periode 1 bulan - cocok untuk kontrol pengeluaran bulanan',
    defaultNamePattern: '{Month} {Year}',
  },
  quarterly: {
    type: 'quarterly',
    name: '3 Bulan',
    days: 90,
    description: 'Periode 3 bulan - cocok untuk kontrol pengeluaran kuartalan',
    defaultNamePattern: 'Q{q} {Year}',
  },
  custom: {
    type: 'custom',
    name: 'Custom',
    days: 0,
    description: 'Tentukan periode sesuai kebutuhan Anda',
    defaultNamePattern: 'Custom Period',
  },
}

export function getAvailableTemplates(): PeriodTemplate[] {
  return Object.values(PERIOD_TEMPLATES)
}

export function generatePeriodFromTemplate(
  template: 'biweekly' | 'monthly' | 'quarterly' | 'custom',
  startDate: Date = new Date(),
  customEndDate?: Date
): { startDate: Date; endDate: Date; suggestedName: string } {
  const start = new Date(startDate)
  start.setHours(0, 0, 0, 0)

  let end: Date
  let suggestedName: string

  if (template === 'custom') {
    if (!customEndDate) {
      throw new Error('Custom template requires end date')
    }
    end = new Date(customEndDate)
    end.setHours(23, 59, 59, 999)
    suggestedName = generateDefaultPeriodName(start, end, 'custom')
  } else {
    const templateData = PERIOD_TEMPLATES[template]
    end = new Date(start)
    end.setDate(end.getDate() + templateData.days - 1)
    end.setHours(23, 59, 59, 999)
    suggestedName = generateDefaultPeriodName(start, end, template)
  }

  return { startDate: start, endDate: end, suggestedName }
}

export function generateDefaultPeriodName(
  startDate: Date,
  endDate: Date,
  template: 'biweekly' | 'monthly' | 'quarterly' | 'custom'
): string {
  switch (template) {
    case 'biweekly':
      const weekNumber = Math.ceil(
        (startDate.getTime() - new Date(startDate.getFullYear(), 0, 1).getTime()) /
          (14 * 24 * 60 * 60 * 1000)
      ) + 1
      return `Period ${weekNumber}`

    case 'monthly':
      return startDate.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })

    case 'quarterly':
      const quarter = Math.ceil((startDate.getMonth() + 1) / 3)
      return `Q${quarter} ${startDate.getFullYear()}`

    case 'custom':
      const startFormatted = formatDate(startDate)
      const endFormatted = formatDate(endDate)
      return `${startFormatted} - ${endFormatted}`

    default:
      return 'Period'
  }
}

export function calculatePeriodStats(transactions: Array<{ jumlah: number; kategoriId: string }>) {
  const totalAmount = transactions.reduce((sum, t) => sum + Number(t.jumlah), 0)
  const categoryBreakdown: Record<string, { amount: number; count: number }> = {}

  transactions.forEach((t) => {
    if (!categoryBreakdown[t.kategoriId]) {
      categoryBreakdown[t.kategoriId] = { amount: 0, count: 0 }
    }
    categoryBreakdown[t.kategoriId].amount += Number(t.jumlah)
    categoryBreakdown[t.kategoriId].count += 1
  })

  return {
    totalAmount,
    transactionCount: transactions.length,
    averageTransaction: transactions.length > 0 ? totalAmount / transactions.length : 0,
    categoryBreakdown,
  }
}

export function getPeriodTemplateInfo(templateType: string): PeriodTemplate | undefined {
  return PERIOD_TEMPLATES[templateType]
}

export function isPeriodActive(tanggalAkhir: Date): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const endDate = new Date(tanggalAkhir)
  endDate.setHours(23, 59, 59, 999)
  return today <= endDate
}

export function getPeriodDuration(startDate: Date, endDate: Date): number {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffTime = Math.abs(end.getTime() - start.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}
