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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm">
                <Link href="/rekap">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </Link>
              </Button>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold tracking-tight">{periode.nama || 'Unnamed Period'}</h1>
                  {periode.isActive && (
                    <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-600 border border-green-500/20 rounded-full">
                      Active
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDateFull(periode.tanggalMulai)} - {formatDateFull(periode.tanggalAkhir)}
                  </span>
                  {periode.templateType && (
                    <span className="px-2 py-0.5 bg-background rounded text-xs font-medium border">
                      {periode.templateType}
                    </span>
                  )}
                  {periode.notes && (
                    <span className="text-xs italic">"{periode.notes}"</span>
                  )}
                </div>
              </div>
            </div>

            {/* Period Navigation */}
            <div className="flex items-center gap-2">
              {previousPeriode && (
                <Button asChild variant="outline" size="sm">
                  <Link href={`/periode/${previousPeriode.id}`} className="flex items-center gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </Link>
                </Button>
              )}
              {nextPeriode && (
                <Button asChild variant="outline" size="sm">
                  <Link href={`/periode/${nextPeriode.id}`} className="flex items-center gap-2">
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.transactionCount}</div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-destructive/50 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Spending
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">
                {formatCurrency(stats.totalAmount)}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Average Transaction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {formatCurrency(stats.averageTransaction)}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Period Duration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-bold">
                  {Math.ceil((new Date(periode.tanggalAkhir).getTime() - new Date(periode.tanggalMulai).getTime()) / (1000 * 60 * 60 * 24)) + 1}
                </div>
                <span className="text-sm text-muted-foreground">days</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insights */}
        {insights.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 tracking-tight">Key Insights</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {insights.map((insight, index) => {
                const Icon = insight.icon
                return (
                  <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="p-3 rounded-xl flex-shrink-0"
                          style={{ backgroundColor: `${insight.color}20` }}
                        >
                          <Icon className="h-6 w-6" style={{ color: insight.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-muted-foreground mb-1">{insight.title}</div>
                          <div className="text-lg font-bold truncate">{insight.description}</div>
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
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 tracking-tight">Category Breakdown</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {categoryBreakdown.map((category) => (
              <Card
                key={category.id}
                className={`border-2 hover:shadow-lg transition-all ${
                  category.totalAmount > 0 ? 'hover:border-primary/50' : 'opacity-60'
                }`}
                style={{
                  borderTopColor: category.warna || '#3b82f6',
                  borderTopWidth: '4px',
                }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold">{category.nama}</CardTitle>
                    {category.totalAmount > 0 && (
                      <span className="text-sm font-semibold px-2 py-1 bg-muted rounded">
                        {category.percentageOfPeriod.toFixed(1)}%
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.totalAmount > 0 ? (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Total Spending</span>
                          <span className="font-bold text-destructive text-base">
                            {formatCurrency(category.totalAmount)}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Transactions</span>
                          <span className="font-bold text-base">{category.totalTransactions}</span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t">
                          <span className="text-sm font-semibold">Average per Transaction</span>
                          <span className="font-bold text-base">
                            {formatCurrency(category.totalTransactions > 0 ? category.totalAmount / category.totalTransactions : 0)}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="text-center text-muted-foreground py-6">
                        <Eye className="h-8 w-8 mx-auto mb-2 opacity-50" />
                        <p>No transactions in this category</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold tracking-tight">All Transactions</h2>
            {periode.transaksi.length > 0 && (
              <span className="text-sm text-muted-foreground">
                {periode.transaksi.length} transactions found
              </span>
            )}
          </div>
          <Card className="border-2">
            <CardContent className="p-0">
              {periode.transaksi.length === 0 ? (
                <div className="py-16 text-center text-muted-foreground">
                  <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">No Transactions</h3>
                  <p className="text-sm">This period doesn't have any transactions yet</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Date</TableHead>
                        <TableHead className="font-semibold">Category</TableHead>
                        <TableHead className="font-semibold">Description</TableHead>
                        <TableHead className="text-right font-semibold">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {periode.transaksi.map((transaksi) => (
                        <TableRow key={transaksi.id} className="hover:bg-muted/50">
                          <TableCell className="font-medium">{formatDate(transaksi.tanggal)}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div
                                className="w-3 h-3 rounded-full flex-shrink-0"
                                style={{
                                  backgroundColor: transaksi.kategori.warna || '#3b82f6',
                                }}
                              />
                              <span className="font-medium">{transaksi.kategori.nama}</span>
                            </div>
                          </TableCell>
                          <TableCell>{transaksi.deskripsi}</TableCell>
                          <TableCell className="text-right font-bold">
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
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 tracking-tight">Period Notes</h2>
            <Card className="border-2 bg-muted/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-base leading-relaxed">{periode.notes}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}