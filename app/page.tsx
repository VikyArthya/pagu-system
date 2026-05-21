import { getDashboardData } from '@/lib/actions/dashboard'
import { DashboardGrid } from '@/components/dashboard-grid'
import { TransaksiDialog } from '@/components/transaksi-dialog'
import { PeriodDialog } from '@/components/period-dialog'
import { PeriodSwitcher } from '@/components/period-switcher'
import { Button } from '@/components/ui/button'
import { Plus, GitCompare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export default async function Home() {
  const dashboardData = await getDashboardData()

  if (!dashboardData.success || !dashboardData.data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error loading dashboard</h1>
          <p className="text-muted-foreground">{dashboardData.error || 'Unknown error'}</p>
        </div>
      </div>
    )
  }

  const { periode, kategori } = dashboardData.data

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="space-y-4">
            {/* Title Section */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Sistem Manajemen PAGU</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Kelola anggaran dan pantau pengeluaran dengan mudah
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-4">
              {/* Period Switcher - Compact without summary to avoid collision */}
              <div className="flex-1">
                <PeriodSwitcher
                  currentPeriodeId={periode.id}
                  showSummary={false}
                  compact={true}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button asChild variant="outline" size="sm">
                  <Link href="/periode/compare">
                    <GitCompare className="h-4 w-4 mr-2" />
                    Compare
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/rekap">
                    Rekap
                  </Link>
                </Button>
                <PeriodDialog />
                <TransaksiDialog
                  kategori={kategori}
                  periodeId={periode.id}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Kategori
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{kategori.length}</div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Anggaran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                }).format(kategori.reduce((sum, k) => sum + k.anggaranDasar, 0))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-destructive/50 transition-colors">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Terpakai
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-destructive">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                }).format(kategori.reduce((sum, k) => sum + k.totalTransaksi, 0))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Kategori Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold tracking-tight">Status Pagu per Kategori</h2>
          </div>
          <DashboardGrid kategori={kategori} />
        </div>

        {/* Recent Transactions */}
        {periode.transaksi.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold tracking-tight">Transaksi Terakhir</h2>
              <Button asChild variant="outline" size="sm">
                <Link href="/rekap">View All</Link>
              </Button>
            </div>
            <Card className="border-2">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-semibold">Tanggal</th>
                        <th className="text-left p-4 font-semibold">Kategori</th>
                        <th className="text-left p-4 font-semibold">Deskripsi</th>
                        <th className="text-right p-4 font-semibold">Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>
                      {periode.transaksi.slice(0, 5).map((transaksi) => (
                        <tr key={transaksi.id} className="border-b hover:bg-muted/50 transition-colors">
                          <td className="p-4">{formatDate(transaksi.tanggal)}</td>
                          <td className="p-4">{transaksi.kategori.nama}</td>
                          <td className="p-4">{transaksi.deskripsi}</td>
                          <td className="p-4 text-right font-medium">
                            {new Intl.NumberFormat('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                              minimumFractionDigits: 0,
                            }).format(transaksi.jumlah)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
