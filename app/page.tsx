import { getDashboardData } from '@/lib/actions/dashboard'
import { DashboardGrid } from '@/components/dashboard-grid'
import { TransaksiDialog } from '@/components/transaksi-dialog'
import { PeriodDialog } from '@/components/period-dialog'
import { PeriodSwitcher } from '@/components/period-switcher'
import { Button } from '@/components/ui/button'
import { 
  GitCompare, 
  History, 
  Wallet, 
  Tag, 
  TrendingUp, 
  TrendingDown, 
  Coins, 
  ArrowUpRight 
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate, formatCurrency } from '@/lib/utils'
import Link from 'next/link'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Home(props: {
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const periodeId = typeof searchParams.periodeId === 'string' ? searchParams.periodeId : undefined
  const dashboardData = await getDashboardData(periodeId)

  if (!dashboardData.success || !dashboardData.data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-md p-8 rounded-2xl bg-white border border-slate-200 shadow-lg">
          <h1 className="text-2xl font-bold text-rose-600 mb-4">Gagal memuat dashboard</h1>
          <p className="text-slate-500 mb-6">{dashboardData.error || 'Terjadi kesalahan sistem'}</p>
          <Button asChild>
            <Link href="/">Coba Lagi</Link>
          </Button>
        </div>
      </div>
    )
  }

  const { periode, kategori } = dashboardData.data

  const totalAnggaran = kategori.reduce((sum, k) => sum + k.anggaranDasar, 0)
  const totalTerpakai = kategori.reduce((sum, k) => sum + k.totalTransaksi, 0)
  const sisaSaldo = totalAnggaran - totalTerpakai

  return (
    <div className="flex-1 p-6 md:p-10 space-y-10 overflow-y-auto">
      {/* Welcome & Action Header */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 border-b border-slate-200 pb-8">
        <div>
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1.5">
            Ikhtisar Anggaran
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Dashboard Panel
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Kelola anggaran periode aktif dan pantau pengeluaran Anda secara real-time.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Period Switcher */}
          <div className="min-w-[200px]">
            <PeriodSwitcher
              currentPeriodeId={periode.id}
              showSummary={false}
              compact={true}
            />
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="h-10 border-slate-200 hover:bg-slate-50 bg-white text-slate-700">
              <Link href="/periode/compare" className="flex items-center">
                <GitCompare className="h-4 w-4 mr-2 text-indigo-600" />
                Bandingkan
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="h-10 border-slate-200 hover:bg-slate-50 bg-white text-slate-700">
              <Link href="/rekap" className="flex items-center">
                <History className="h-4 w-4 mr-2 text-slate-500" />
                Rekap
              </Link>
            </Button>
            <PeriodDialog />
            <TransaksiDialog
              kategori={kategori}
              periodeId={periode.id}
              tanggalMulai={periode.tanggalMulai}
              tanggalAkhir={periode.tanggalAkhir}
            />
          </div>
        </div>
      </div>

      {/* Modern Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat 1: Total Kategori */}
        <Card className="border border-slate-200 bg-white shadow-sm relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-[0.06] text-indigo-600 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
            <Tag className="h-28 w-28" />
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Kategori</span>
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 border border-indigo-100">
                <Tag className="h-4 w-4" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-slate-900">{kategori.length}</div>
            <p className="text-[10px] text-slate-500 mt-2 font-medium">Kategori pos pagu aktif</p>
          </CardContent>
        </Card>

        {/* Stat 2: Total Anggaran */}
        <Card className="border border-slate-200 bg-white shadow-sm relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-[0.06] text-emerald-650 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
            <Wallet className="h-28 w-28" />
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Anggaran</span>
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 border border-emerald-100">
                <Wallet className="h-4 w-4" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-emerald-600 md:text-3xl">
              {formatCurrency(totalAnggaran)}
            </div>
            <p className="text-[10px] text-slate-500 mt-2 font-medium">Alokasi pagu dasar periode ini</p>
          </CardContent>
        </Card>

        {/* Stat 3: Total Terpakai */}
        <Card className="border border-slate-200 bg-white shadow-sm relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-[0.06] text-rose-600 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
            <TrendingDown className="h-28 w-28" />
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Terpakai</span>
              <div className="p-2 bg-rose-50 rounded-lg text-rose-600 border border-rose-100">
                <TrendingDown className="h-4 w-4" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-rose-600 md:text-3xl">
              {formatCurrency(totalTerpakai)}
            </div>
            <p className="text-[10px] text-slate-500 mt-2 font-medium">
              {(totalAnggaran > 0 ? (totalTerpakai / totalAnggaran) * 100 : 0).toFixed(1)}% anggaran terpakai
            </p>
          </CardContent>
        </Card>

        {/* Stat 4: Sisa Saldo (NEW CARD!) */}
        <Card className="border border-slate-200 bg-white shadow-sm relative overflow-hidden group hover:border-slate-300 hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-[0.06] text-violet-650 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
            <Coins className="h-28 w-28" />
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sisa Saldo</span>
              <div className="p-2 bg-violet-50 rounded-lg text-violet-600 border border-violet-100">
                <Coins className="h-4 w-4" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-violet-600 md:text-3xl">
              {formatCurrency(sisaSaldo)}
            </div>
            <p className="text-[10px] text-slate-500 mt-2 font-medium">
              Sisa anggaran bersih yang tersedia
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Kategori Grid Status */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Status Pagu Kategori</h2>
            <p className="text-xs text-slate-500 mt-0.5">Sisa saldo dan pemakaian per masing-masing pos pagu</p>
          </div>
          <Button asChild variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-750">
            <Link href="/kategori" className="flex items-center gap-1">
              Kelola Kategori <ArrowUpRight className="h-3 w-3" />
            </Link>
          </Button>
        </div>
        <DashboardGrid kategori={kategori} />
      </div>

      {/* Recent Transactions Table */}
      {periode.transaksi.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">Transaksi Terakhir</h2>
              <p className="text-xs text-slate-500 mt-0.5">Daftar transaksi pengeluaran terbaru pada periode aktif</p>
            </div>
            <Button asChild variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50 bg-white text-slate-700">
              <Link href="/rekap">Lihat Semua</Link>
            </Button>
          </div>

          <Card className="border border-slate-200 bg-white overflow-hidden shadow-sm rounded-xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50/75 text-slate-500 border-b border-slate-100 uppercase text-[10px] font-bold tracking-wider">
                    <tr>
                      <th className="p-4 pl-6">Tanggal</th>
                      <th className="p-4">Kategori</th>
                      <th className="p-4">Deskripsi</th>
                      <th className="p-4 text-right pr-6">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {periode.transaksi.slice(0, 5).map((transaksi) => (
                      <tr 
                        key={transaksi.id} 
                        className="hover:bg-slate-50/50 transition-colors text-slate-650 border-slate-100"
                      >
                        <td className="p-4 pl-6 text-slate-500">{formatDate(transaksi.tanggal)}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: transaksi.kategori?.warna || '#3b82f6' }}
                            />
                            <span className="font-semibold text-slate-800">{transaksi.kategori?.nama || 'Tanpa Kategori'}</span>
                          </div>
                        </td>
                        <td className="p-4 max-w-xs truncate text-slate-700 font-medium">{transaksi.deskripsi}</td>
                        <td className="p-4 text-right pr-6 font-bold text-rose-600">
                          {formatCurrency(transaksi.jumlah)}
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
    </div>
  )
}
