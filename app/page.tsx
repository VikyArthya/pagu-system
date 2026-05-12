import { getDashboardData } from '@/lib/actions/dashboard'
import { DashboardGrid } from '@/components/dashboard-grid'
import { TransaksiDialog } from '@/components/transaksi-dialog'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'

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
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Sistem Manajemen PAGU</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Periode Aktif: {formatDate(periode.tanggalMulai)} - {formatDate(periode.tanggalAkhir)}
              </p>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="outline">
                <a href="/rekap">Rekap Transaksi</a>
              </Button>
              <TransaksiDialog
                kategori={kategori}
                periodeId={periode.id}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Kategori
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kategori.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Anggaran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                }).format(kategori.reduce((sum, k) => sum + k.anggaranDasar, 0))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Terpakai
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">
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
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Status Pagu per Kategori</h2>
          <DashboardGrid kategori={kategori} />
        </div>

        {/* Recent Transactions */}
        {periode.transaksi.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Transaksi Terakhir</h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-muted/50">
                      <tr>
                        <th className="text-left p-4 font-medium">Tanggal</th>
                        <th className="text-left p-4 font-medium">Kategori</th>
                        <th className="text-left p-4 font-medium">Deskripsi</th>
                        <th className="text-right p-4 font-medium">Jumlah</th>
                      </tr>
                    </thead>
                    <tbody>
                      {periode.transaksi.slice(0, 5).map((transaksi) => (
                        <tr key={transaksi.id} className="border-b hover:bg-muted/50">
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
