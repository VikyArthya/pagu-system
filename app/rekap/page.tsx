import { getAllPeriode } from '@/lib/actions/periode'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate, formatDateFull, formatCurrency } from '@/lib/utils'
import { ArrowLeft, Calendar, GitCompare, Eye } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { PeriodDialog } from '@/components/period-dialog'
import Link from 'next/link'

export default async function RekapPage() {
  const periodeData = await getAllPeriode()

  if (!periodeData.success || !periodeData.data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error loading rekap</h1>
          <p className="text-muted-foreground">{periodeData.error || 'Unknown error'}</p>
        </div>
      </div>
    )
  }

  const periode = periodeData.data

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Rekap Transaksi</h1>
                <p className="text-muted-foreground mt-1">
                  Riwayat pengeluaran per periode
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="outline">
                <Link href="/periode/compare">
                  <GitCompare className="h-4 w-4 mr-2" />
                  Compare Periods
                </Link>
              </Button>
              <PeriodDialog />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {periode.length === 0 ? (
            <Card className="border-2">
              <CardContent className="py-16 text-center">
                <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Belum ada periode</h3>
                <p className="text-muted-foreground mb-6">
                  Mulai dengan membuat periode baru dan transaksi
                </p>
                <PeriodDialog />
              </CardContent>
            </Card>
          ) : (
            periode.map((period) => {
              const totalPerKategori = period.transaksi.reduce((acc, transaksi) => {
                const kategoriNama = transaksi.kategori.nama
                if (!acc[kategoriNama]) {
                  acc[kategoriNama] = {
                    jumlah: 0,
                    count: 0,
                    warna: transaksi.kategori.warna || undefined,
                  }
                }
                acc[kategoriNama].jumlah += transaksi.jumlah
                acc[kategoriNama].count += 1
                return acc
              }, {} as Record<string, { jumlah: number; count: number; warna?: string | null }>)

              const totalPeriod = period.transaksi.reduce(
                (sum, t) => sum + t.jumlah,
                0
              )

              return (
                <Card key={period.id} className="border-2 overflow-hidden hover:border-primary/50 transition-colors">
                  <CardHeader className="bg-muted/50 border-b">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="flex items-center gap-2 text-xl">
                            <Calendar className="h-5 w-5" />
                            {period.nama || 'Unnamed Period'}
                          </CardTitle>
                          {period.isActive && (
                            <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-600 border border-green-500/20 rounded-full">
                              Aktif
                            </span>
                          )}
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <span>{formatDateFull(period.tanggalMulai)} - {formatDateFull(period.tanggalAkhir)}</span>
                            {period.templateType && (
                              <span className="px-2 py-0.5 bg-background rounded text-xs font-medium">
                                {period.templateType}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-base">
                            <span><strong>{period.transaksi.length}</strong> transaksi</span>
                            <span>•</span>
                            <span>Total: <strong className="text-destructive">{formatCurrency(totalPeriod)}</strong></span>
                          </div>
                        </div>
                      </div>
                      <Button asChild variant="outline" className="flex-shrink-0">
                        <Link href={`/periode/${period.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          Detail
                        </Link>
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    {period.transaksi.length === 0 ? (
                      <div className="py-12 text-center text-muted-foreground">
                        <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50" />
                        <p>Tidak ada transaksi pada periode ini</p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="font-semibold">Tanggal</TableHead>
                              <TableHead className="font-semibold">Kategori</TableHead>
                              <TableHead className="font-semibold">Deskripsi</TableHead>
                              <TableHead className="text-right font-semibold">Jumlah</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {period.transaksi.map((transaksi) => (
                              <TableRow key={transaksi.id} className="hover:bg-muted/50">
                                <TableCell>{formatDate(transaksi.tanggal)}</TableCell>
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
                                <TableCell className="text-right font-medium">
                                  {formatCurrency(transaksi.jumlah)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}

                    {/* Summary per kategori */}
                    {Object.keys(totalPerKategori).length > 0 && (
                      <div className="border-t bg-muted/30 p-6">
                        <h4 className="font-semibold mb-4 text-base">Ringkasan per Kategori</h4>
                        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                          {Object.entries(totalPerKategori).map(([nama, data]) => (
                            <div
                              key={nama}
                              className="flex items-center justify-between p-3 rounded-lg bg-background border hover:border-primary/30 transition-colors"
                            >
                              <div className="flex items-center gap-2 flex-1 min-w-0">
                                <div
                                  className="w-3 h-3 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: data.warna || '#3b82f6' }}
                                />
                                <div className="min-w-0">
                                  <span className="text-sm font-medium block truncate">{nama}</span>
                                  <span className="text-xs text-muted-foreground">
                                    {data.count} transaksi
                                  </span>
                                </div>
                              </div>
                              <span className="font-semibold text-sm ml-2 flex-shrink-0">
                                {formatCurrency(data.jumlah)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>
      </main>
    </div>
  )
}