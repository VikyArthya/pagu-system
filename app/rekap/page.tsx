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
    <div className="flex-1 p-6 md:p-10 space-y-10 overflow-y-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-slate-200 pb-8">
        <div>
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1.5">
            Laporan Keuangan
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Rekap Transaksi
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Riwayat pengeluaran per masing-masing periode anggaran.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="h-10 border-slate-200 hover:bg-slate-50 bg-white text-slate-700">
            <Link href="/periode/compare" className="flex items-center">
              <GitCompare className="h-4 w-4 mr-2 text-indigo-650" />
              Bandingkan Periode
            </Link>
          </Button>
          <PeriodDialog />
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {periode.length === 0 ? (
          <Card className="border border-slate-200 bg-white shadow-sm">
            <CardContent className="py-16 text-center">
              <Calendar className="h-16 w-16 mx-auto mb-4 text-slate-400 opacity-50" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">Belum ada periode</h3>
              <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">
                Mulai dengan membuat periode baru untuk mencatat pengeluaran Anda.
              </p>
              <PeriodDialog />
            </CardContent>
          </Card>
        ) : (
          periode.map((period: any) => {
            const totalPerKategori = period.transaksi.reduce((acc: Record<string, { jumlah: number; count: number; warna?: string | null }>, transaksi: any) => {
              const kategoriNama = transaksi.kategori?.nama || 'Tanpa Kategori'
              if (!acc[kategoriNama]) {
                acc[kategoriNama] = {
                  jumlah: 0,
                  count: 0,
                  warna: transaksi.kategori?.warna || undefined,
                }
              }
              acc[kategoriNama].jumlah += Number(transaksi.jumlah)
              acc[kategoriNama].count += 1
              return acc
            }, {} as Record<string, { jumlah: number; count: number; warna?: string | null }>)

            const totalPeriod = period.transaksi.reduce(
              (sum: number, t: any) => sum + Number(t.jumlah),
              0
            )

            return (
              <Card key={period.id} className="border border-slate-200 bg-white overflow-hidden hover:border-slate-300 transition-all duration-300 rounded-2xl shadow-sm">
                <CardHeader className="bg-slate-50/75 border-b border-slate-100 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="flex items-center gap-2 text-xl font-black text-slate-900">
                          <Calendar className="h-5 w-5 text-indigo-650" />
                          {period.nama || 'Unnamed Period'}
                        </CardTitle>
                        {period.isActive && (
                          <span className="px-3 py-0.5 text-xs font-bold bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full">
                            Aktif
                          </span>
                        )}
                      </div>
                      <div className="space-y-1.5 text-xs text-slate-550">
                        <div className="flex items-center gap-4">
                          <span>{formatDateFull(period.tanggalMulai)} - {formatDateFull(period.tanggalAkhir)}</span>
                          {period.templateType && (
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200 font-bold uppercase tracking-wider text-[9px]">
                              {period.templateType}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-650 pt-1 font-medium">
                          <span><strong>{period.transaksi.length}</strong> transaksi</span>
                          <span>•</span>
                          <span>Total Pengeluaran: <strong className="text-rose-600 font-bold">{formatCurrency(totalPeriod)}</strong></span>
                        </div>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm" className="h-9 border-slate-200 hover:bg-slate-50 bg-white text-slate-750 flex-shrink-0">
                      <Link href={`/periode/${period.id}`}>
                        <Eye className="h-4 w-4 mr-2 text-slate-500" />
                        Detail Analisis
                      </Link>
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  {period.transaksi.length === 0 ? (
                    <div className="py-12 text-center text-slate-500 bg-slate-50/10 border-b border-slate-100">
                      <Calendar className="h-12 w-12 mx-auto mb-3 opacity-30" />
                      <p className="text-xs">Tidak ada transaksi pada periode ini</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto border-b border-slate-100">
                      <Table>
                        <TableHeader className="bg-slate-50/50 text-slate-550 uppercase text-[10px] font-bold tracking-wider">
                          <TableRow className="border-slate-100">
                            <TableHead className="font-bold pl-6">Tanggal</TableHead>
                            <TableHead className="font-bold">Kategori</TableHead>
                            <TableHead className="font-bold">Deskripsi</TableHead>
                            <TableHead className="text-right font-bold pr-6">Jumlah</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-slate-100">
                          {period.transaksi.map((transaksi: any) => (
                            <TableRow key={transaksi.id} className="hover:bg-slate-50/30 text-slate-650 border-slate-100">
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

                  {/* Summary per kategori */}
                  {Object.keys(totalPerKategori).length > 0 && (
                    <div className="bg-slate-50/30 p-6">
                      <h4 className="font-bold text-slate-500 mb-4 text-xs uppercase tracking-wider">Ringkasan per Kategori</h4>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {Object.entries(totalPerKategori).map(([nama, data]: [string, any]) => (
                          <div
                            key={nama}
                            className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 transition-colors"
                          >
                            <div className="flex items-center gap-3.5 flex-1 min-w-0">
                              <div
                                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: data.warna || '#3b82f6' }}
                              />
                              <div className="min-w-0">
                                <span className="text-sm font-bold text-slate-800 block truncate">{nama}</span>
                                <span className="text-[10px] text-slate-400 font-bold">
                                  {data.count} transaksi
                                </span>
                              </div>
                            </div>
                            <span className="font-bold text-sm text-slate-900 ml-2 flex-shrink-0">
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
    </div>
  )
}