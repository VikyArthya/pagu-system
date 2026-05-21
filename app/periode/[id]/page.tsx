import { notFound } from 'next/navigation'
import { getPeriodeById, getAllPeriode } from '@/lib/actions/periode'
import { getKategoriPagu } from '@/lib/actions/kategori'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate, formatDateFull, formatCurrency, calculatePeriodStats } from '@/lib/utils'
import { ArrowLeft, Calendar, TrendingUp, BarChart3, FileText, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'

interface PageProps {
  params: {
    id: string
  }
}

export default async function PeriodeDetailPage({ params }: PageProps) {
  // Validate id parameter
  if (!params?.id) {
    notFound()
  }

  const periodeData = await getPeriodeById(params.id)

  if (!periodeData.success || !periodeData.data) {
    notFound()
  }

  const periode = periodeData.data

  // Get all kategori
  const kategoriData = await getKategoriPagu()
  const kategori = kategoriData.success && kategoriData.data ? kategoriData.data : []

  // Get all periods for navigation
  const allPeriodeData = await getAllPeriode()
  const allPeriode = allPeriodeData.success ? allPeriodeData.data || [] : []
  const currentIndex = allPeriode.findIndex((p) => p.id === periode.id)
  const previousPeriode = currentIndex > 0 ? allPeriode[currentIndex - 1] : null
  const nextPeriode = currentIndex < allPeriode.length - 1 ? allPeriode[currentIndex + 1] : null

  // Calculate period statistics
  const stats = calculatePeriodStats(periode.transaksi)

  // Get category breakdown
  const categoryBreakdown = kategori.map((k) => {
    const categoryTransactions = periode.transaksi.filter((t) => t.kategoriId === k.id)
    const categoryTotal = categoryTransactions.reduce((sum, t) => sum + t.jumlah, 0)
    return {
      ...k,
      totalTransactions: categoryTransactions.length,
      totalAmount: categoryTotal,
      percentageOfPeriod: stats.totalAmount > 0 ? (categoryTotal / stats.totalAmount) * 100 : 0,
    }
  })

  // Calculate insights
  const insights = []
  if (stats.totalAmount > 0) {
    const topCategory = categoryBreakdown.reduce((max, cat) =>
      cat.totalAmount > max.totalAmount ? cat : max, categoryBreakdown[0])
    insights.push({
      type: 'top',
      icon: TrendingUp,
      title: 'Highest Spending',
      description: `${topCategory.nama} leads with ${formatCurrency(topCategory.totalAmount)}`,
      color: topCategory.warna || '#3b82f6',
    })

    if (stats.transactionCount > 0) {
      insights.push({
        type: 'average',
        icon: BarChart3,
        title: 'Average Transaction',
        description: formatCurrency(stats.averageTransaction),
        color: '#8b5cf6',
      })
    }

    const activeCategories = categoryBreakdown.filter((cat) => cat.totalTransactions > 0).length
    insights.push({
      type: 'categories',
      icon: FileText,
      title: 'Active Categories',
      description: `${activeCategories} of ${categoryBreakdown.length} categories used`,
      color: '#10b981',
    })
  }

  return (
    <div className="flex-1 p-6 md:p-10 space-y-10 overflow-y-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="text-slate-500 hover:text-slate-850 hover:bg-slate-100 border border-slate-200 bg-white">
            <Link href="/rekap">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                {periode.nama || 'Unnamed Period'}
              </h1>
              {periode.isActive && (
                <span className="px-3 py-0.5 text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full">
                  Aktif
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-1.5 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="h-3.5 w-3.5 text-indigo-650" />
                {formatDateFull(periode.tanggalMulai)} - {formatDateFull(periode.tanggalAkhir)}
              </span>
              {periode.templateType && (
                <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200 font-bold uppercase tracking-wider text-[9px]">
                  {periode.templateType}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Period Navigation */}
        <div className="flex items-center gap-2">
          {previousPeriode && (
            <Button asChild variant="outline" size="sm" className="h-10 border-slate-200 hover:bg-slate-50 bg-white text-slate-700">
              <Link href={`/periode/${previousPeriode.id}`} className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4 text-slate-555" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </Link>
            </Button>
          )}
          {nextPeriode && (
            <Button asChild variant="outline" size="sm" className="h-10 border-slate-200 hover:bg-slate-50 bg-white text-slate-700">
              <Link href={`/periode/${nextPeriode.id}`} className="flex items-center gap-2">
                <span className="hidden sm:inline">Selanjutnya</span>
                <ChevronRight className="h-4 w-4 text-slate-555" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-10">
        {/* Stat Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Total Transaksi */}
          <Card className="border border-slate-200 bg-white shadow-sm relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all duration-300 rounded-2xl">
            <CardHeader className="pb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Transaksi</span>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-slate-900">{stats.transactionCount}</div>
              <p className="text-[10px] text-slate-500 mt-2 font-medium">Transaksi tercatat</p>
            </CardContent>
          </Card>

          {/* Card 2: Total Pengeluaran */}
          <Card className="border border-slate-200 bg-white shadow-sm relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all duration-300 rounded-2xl">
            <CardHeader className="pb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Pengeluaran</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-rose-605 md:text-3xl">{formatCurrency(stats.totalAmount)}</div>
              <p className="text-[10px] text-slate-500 mt-2 font-medium">Total dana terpakai</p>
            </CardContent>
          </Card>

          {/* Card 3: Rata-rata Transaksi */}
          <Card className="border border-slate-200 bg-white shadow-sm relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all duration-300 rounded-2xl">
            <CardHeader className="pb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rata-rata Transaksi</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-emerald-600 md:text-3xl">{formatCurrency(stats.averageTransaction)}</div>
              <p className="text-[10px] text-slate-500 mt-2 font-medium">Pengeluaran per transaksi</p>
            </CardContent>
          </Card>

          {/* Card 4: Durasi Periode */}
          <Card className="border border-slate-200 bg-white shadow-sm relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all duration-300 rounded-2xl">
            <CardHeader className="pb-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Durasi Periode</span>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1">
                <div className="text-3xl font-black text-slate-900">
                  {Math.ceil((new Date(periode.tanggalAkhir).getTime() - new Date(periode.tanggalMulai).getTime()) / (1000 * 60 * 60 * 24)) + 1}
                </div>
                <span className="text-xs text-slate-500 font-medium">Hari</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 font-medium">Rentang waktu alokasi</p>
            </CardContent>
          </Card>
        </div>

        {/* Key Insights */}
        {insights.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Insight Utama</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {insights.map((insight, index) => {
                const IconComponent = insight.icon
                return (
                  <Card key={index} className="border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 rounded-2xl">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="p-3 rounded-xl flex-shrink-0"
                          style={{ backgroundColor: `${insight.color}15` }}
                        >
                          <IconComponent className="h-6 w-6" style={{ color: insight.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{insight.title}</div>
                          <div className="text-base font-bold text-slate-800 truncate">{insight.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        )}

        {/* Category Breakdown */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">Rincian Per Kategori</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {categoryBreakdown.map((category) => (
              <Card
                key={category.id}
                className={`border border-slate-200 bg-white relative overflow-hidden transition-all duration-300 rounded-2xl shadow-sm ${
                  category.totalAmount > 0 ? 'hover:border-slate-350 hover:shadow-md' : 'opacity-60'
                }`}
                style={{
                  borderTopColor: category.warna || '#3b82f6',
                  borderTopWidth: '4px',
                }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-bold text-slate-900">{category.nama}</CardTitle>
                    {category.totalAmount > 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full">
                        {category.percentageOfPeriod.toFixed(1)}% total
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  {category.totalAmount > 0 ? (
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Total Pengeluaran</span>
                        <span className="font-bold text-rose-600 text-sm">
                          {formatCurrency(category.totalAmount)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Banyak Transaksi</span>
                        <span className="font-bold text-slate-800 text-sm">{category.totalTransactions}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                        <span className="text-slate-500 font-semibold">Rata-rata Transaksi</span>
                        <span className="font-bold text-emerald-600 text-sm">
                          {formatCurrency(category.totalTransactions > 0 ? category.totalAmount / category.totalTransactions : 0)}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-slate-400 py-6 text-xs font-medium">
                      <Eye className="h-8 w-8 mx-auto mb-2 opacity-30 text-slate-450" />
                      <p>Tidak ada transaksi pada kategori ini</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Semua Transaksi</h2>
            {periode.transaksi.length > 0 && (
              <span className="text-xs text-slate-550 font-medium">
                Ditemukan {periode.transaksi.length} transaksi
              </span>
            )}
          </div>
          <Card className="border border-slate-200 bg-white overflow-hidden shadow-sm rounded-2xl">
            <CardContent className="p-0">
              {periode.transaksi.length === 0 ? (
                <div className="py-16 text-center text-slate-500">
                  <FileText className="h-16 w-16 mx-auto mb-4 opacity-30 text-slate-400" />
                  <h3 className="text-lg font-bold mb-1 text-slate-800">Tidak Ada Transaksi</h3>
                  <p className="text-xs text-slate-500">Periode ini belum mencatat transaksi apapun</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-slate-50/50 border-b border-slate-100 uppercase text-[10px] font-bold tracking-wider text-slate-550">
                      <TableRow className="border-slate-100">
                        <TableHead className="font-bold pl-6">Tanggal</TableHead>
                        <TableHead className="font-bold">Kategori</TableHead>
                        <TableHead className="font-bold">Deskripsi</TableHead>
                        <TableHead className="text-right font-bold pr-6">Jumlah</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="divide-y divide-slate-100">
                      {periode.transaksi.map((transaksi) => (
                        <TableRow key={transaksi.id} className="hover:bg-slate-50/30 transition-colors text-slate-655 border-slate-100">
                          <TableCell className="pl-6 text-slate-500 text-xs">{formatDate(transaksi.tanggal)}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div
                                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                style={{
                                  backgroundColor: transaksi.kategori?.warna || '#3b82f6',
                                }}
                              />
                              <span className="font-semibold text-slate-800">{transaksi.kategori?.nama || 'Tanpa Kategori'}</span>
                            </div>
                          </TableCell>
                          <TableCell className="max-w-xs truncate font-medium text-slate-700">{transaksi.deskripsi}</TableCell>
                          <TableCell className="text-right pr-6 font-bold text-rose-600">
                            {formatCurrency(transaksi.jumlah)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Period Notes */}
        {periode.notes && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Catatan Periode</h2>
            <Card className="border border-slate-200 bg-white shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <FileText className="h-5 w-5 text-slate-400 mt-0.5 flex-shrink-0" />
                  <p>{periode.notes}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}