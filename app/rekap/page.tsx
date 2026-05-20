import { getAllPeriode } from '@/lib/actions/periode'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate, formatDateFull } from '@/lib/utils'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

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
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm">
                <a href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Kembali
                </a>
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Rekap Transaksi</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Riwayat pengeluaran per periode
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {periode.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Belum ada periode</h3>
                <p className="text-sm text-muted-foreground">
                  Mulai dengan membuat transaksi baru pada dashboard
                </p>
              </CardContent>
            </Card>
          ) : (
            periode.map((period) => {
              // Calculate total per kategori for this period
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
                <Card key={period.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          {formatDateFull(period.tanggalMulai)} - {formatDateFull(period.tanggalAkhir)}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {period.transaksi.length} transaksi • Total:{' '}
                          {new Intl.NumberFormat('id-ID', {
                            style: 'currency',
                            currency: 'IDR',
                            minimumFractionDigits: 0,
                          }).format(totalPeriod)}
                        </p>
                      </div>
                      {period.isActive && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          Aktif
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    {period.transaksi.length === 0 ? (
                      <div className="py-8 text-center text-muted-foreground">
                        Tidak ada transaksi pada periode ini
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Tanggal</TableHead>
                              <TableHead>Kategori</TableHead>
                              <TableHead>Deskripsi</TableHead>
                              <TableHead className="text-right">Jumlah</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {period.transaksi.map((transaksi) => (
                              <TableRow key={transaksi.id}>
                                <TableCell>{formatDate(transaksi.tanggal)}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <div
                                      className="w-3 h-3 rounded-full"
                                      style={{
                                        backgroundColor: transaksi.kategori.warna || '#3b82f6',
                                      }}
                                    />
                                    {transaksi.kategori.nama}
                                  </div>
                                </TableCell>
                                <TableCell>{transaksi.deskripsi}</TableCell>
                                <TableCell className="text-right font-medium">
                                  {new Intl.NumberFormat('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                    minimumFractionDigits: 0,
                                  }).format(transaksi.jumlah)}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}

                    {/* Summary per kategori */}
                    {Object.keys(totalPerKategori).length > 0 && (
                      <div className="border-t p-4 bg-muted/30">
                        <h4 className="font-medium mb-3">Ringkasan per Kategori</h4>
                        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                          {Object.entries(totalPerKategori).map(([nama, data]) => (
                            <div
                              key={nama}
                              className="flex items-center justify-between p-2 rounded bg-background"
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-3 h-3 rounded-full"
                                  style={{ backgroundColor: data.warna || '#3b82f6' }}
                                />
                                <span className="text-sm">{nama}</span>
                                <span className="text-xs text-muted-foreground">
                                  ({data.count} transaksi)
                                </span>
                              </div>
                              <span className="font-medium text-sm">
                                {new Intl.NumberFormat('id-ID', {
                                  style: 'currency',
                                  currency: 'IDR',
                                  minimumFractionDigits: 0,
                                }).format(data.jumlah)}
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
