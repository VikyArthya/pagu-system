import { Button } from '@/components/ui/button'
import { ArrowLeft, GitCompare } from 'lucide-react'
import { PeriodComparison } from '@/components/period-comparison'
import Link from 'next/link'

export default function ComparePage() {
  return (
    <div className="flex-1 p-6 md:p-10 space-y-10 overflow-y-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-slate-900 pb-8">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800">
            <Link href="/rekap">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali
            </Link>
          </Button>
          <div>
            <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1.5">
              Analisis Komparatif
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl flex items-center gap-3">
              <GitCompare className="h-8 w-8 text-indigo-400 hidden sm:inline-block" />
              Perbandingan Periode
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Bandingkan pola pengeluaran antara dua periode anggaran berbeda.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <PeriodComparison />
      </div>
    </div>
  )
}