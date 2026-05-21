'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, Minus, ArrowRight, Calendar, AlertCircle } from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'
import { comparePeriode, getAllPeriode } from '@/lib/actions/periode'

interface ComparisonData {
  period1: any
  period2: any
  comparison: Array<{
    kategori: any
    period1Amount: number
    period2Amount: number
    difference: number
    percentChange: number
    trend: 'up' | 'down' | 'stable'
  }>
  summary: {
    period1Total: number
    period2Total: number
    totalDifference: number
    totalPercentChange: number
  }
}

interface PeriodComparisonProps {
  period1Id?: string
  period2Id?: string
  onPeriodsChange?: (period1Id: string, period2Id: string) => void
}

export function PeriodComparison({
  period1Id,
  period2Id,
  onPeriodsChange,
}: PeriodComparisonProps) {
  const [loading, setLoading] = useState(true)
  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(null)
  const [allPeriods, setAllPeriods] = useState<any[]>([])
  const [selectedPeriod1, setSelectedPeriod1] = useState<string | undefined>(period1Id)
  const [selectedPeriod2, setSelectedPeriod2] = useState<string | undefined>(period2Id)

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      try {
        const periodsResult = await getAllPeriode()
        if (periodsResult.success && periodsResult.data) {
          setAllPeriods(periodsResult.data)

          // Set default periods if not specified and we have at least 2
          if (!period1Id && !period2Id && periodsResult.data.length >= 2) {
            setSelectedPeriod1(periodsResult.data[0].id) // Most recent
            setSelectedPeriod2(periodsResult.data[1].id) // Older
          }
        }
      } catch (error) {
        console.error('Error loading periods:', error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [period1Id, period2Id])

  useEffect(() => {
    async function loadComparison() {
      if (selectedPeriod1 && selectedPeriod2) {
        setLoading(true)
        try {
          const result = await comparePeriode(selectedPeriod1, selectedPeriod2)
          if (result.success && result.data) {
            setComparisonData(result.data)
            onPeriodsChange?.(selectedPeriod1, selectedPeriod2)
          }
        } catch (error) {
          console.error('Error loading comparison:', error)
        } finally {
          setLoading(false)
        }
      } else {
        setComparisonData(null)
      }
    }

    loadComparison()
  }, [selectedPeriod1, selectedPeriod2, onPeriodsChange])

  // Calculation utilities
  const getClientSummary = () => {
    if (!comparisonData) return null
    const recentTotal = comparisonData.summary.period1Total
    const olderTotal = comparisonData.summary.period2Total
    const difference = recentTotal - olderTotal
    const percentChange = olderTotal > 0 ? (difference / olderTotal) * 100 : 0
    const trend: 'up' | 'down' | 'stable' = difference > 0 ? 'up' : difference < 0 ? 'down' : 'stable'

    return {
      recentTotal,
      olderTotal,
      difference: Math.abs(difference),
      percentChange,
      trend,
    }
  }

  const clientSummary = getClientSummary()

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-rose-600" />
      case 'down':
        return <TrendingDown className="h-4 w-4 text-emerald-600" />
      default:
        return <Minus className="h-4 w-4 text-slate-400" />
    }
  }

  const getTrendColor = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return 'text-rose-600'
      case 'down':
        return 'text-emerald-600'
      default:
        return 'text-slate-500'
    }
  }

  if (loading && allPeriods.length === 0) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border border-slate-200 bg-white rounded-2xl animate-pulse shadow-sm">
            <CardContent className="pt-6">
              <div className="h-28 bg-slate-100 rounded-xl" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Period Selection */}
      <Card className="border border-slate-200 bg-white rounded-2xl shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40" />
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2.5 text-base font-bold text-slate-900 uppercase tracking-wider">
            <Calendar className="h-5 w-5 text-indigo-600" />
            Pilih Periode untuk Dibandingkan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Periode 1 (Lebih Baru)
              </label>
              <div className="relative">
                <select
                  className="w-full p-3.5 pr-10 border border-slate-200 rounded-xl bg-white text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 focus:outline-none transition-all duration-300 font-medium text-sm appearance-none cursor-pointer shadow-sm hover:border-slate-300"
                  value={selectedPeriod1 || ''}
                  onChange={(e) => setSelectedPeriod1(e.target.value || undefined)}
                >
                  <option value="" className="bg-white text-slate-400">Pilih periode...</option>
                  {allPeriods.map((period) => (
                    <option key={period.id} value={period.id} className="bg-white text-slate-800">
                      {period.nama || 'Unnamed'} ({formatDate(period.tanggalMulai)} - {formatDate(period.tanggalAkhir)})
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Periode 2 (Lebih Lama)
              </label>
              <div className="relative">
                <select
                  className="w-full p-3.5 pr-10 border border-slate-200 rounded-xl bg-white text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 focus:outline-none transition-all duration-300 font-medium text-sm appearance-none cursor-pointer shadow-sm hover:border-slate-300"
                  value={selectedPeriod2 || ''}
                  onChange={(e) => setSelectedPeriod2(e.target.value || undefined)}
                >
                  <option value="" className="bg-white text-slate-400">Pilih periode...</option>
                  {allPeriods.map((period) => (
                    <option key={period.id} value={period.id} className="bg-white text-slate-800">
                      {period.nama || 'Unnamed'} ({formatDate(period.tanggalMulai)} - {formatDate(period.tanggalAkhir)})
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Loading state for comparison results */}
      {loading && (
        <div className="space-y-6">
          <Card className="border border-slate-200 bg-white rounded-2xl animate-pulse shadow-sm">
            <CardContent className="h-32" />
          </Card>
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i} className="border border-slate-200 bg-white rounded-2xl animate-pulse shadow-sm">
                <CardContent className="h-40" />
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Empty / Not Selected State */}
      {!loading && (!comparisonData || !selectedPeriod1 || !selectedPeriod2) && (
        <Card className="border border-slate-200 bg-white rounded-2xl shadow-sm">
          <CardContent className="py-16 text-center text-slate-500">
            <Calendar className="h-16 w-16 mx-auto mb-4 text-slate-300 animate-bounce" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">Pilih Dua Periode Berbeda</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Silakan pilih dua periode di atas untuk melihat perbandingan pengeluaran, persentase perubahan, serta analisis kategori terperinci.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Comparison Content */}
      {!loading && comparisonData && clientSummary && (
        <>
          {/* Summary Comparison */}
          <Card className="border border-slate-200 bg-white rounded-2xl shadow-sm overflow-hidden relative group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            <CardHeader className="pb-2 border-b border-slate-100 bg-slate-50/50">
              <CardTitle className="flex items-center gap-2.5 text-base font-bold text-slate-900 uppercase tracking-wider">
                <ArrowRight className="h-5 w-5 text-indigo-600" />
                Perbandingan Keseluruhan
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Period 1 (Recent) */}
                <div className="text-center md:text-left space-y-1.5 md:pl-6">
                  <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                    {comparisonData.period1.nama || 'Periode 1'}
                  </div>
                  <div className="text-3xl font-black text-slate-900 tracking-tight">
                    {formatCurrency(clientSummary.recentTotal)}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {comparisonData.period1.transaksi?.length || 0} Transaksi Tercatat
                  </div>
                </div>

                {/* Delta / Comparison Info */}
                <div className="text-center py-4 md:py-0 border-y md:border-y-0 md:border-x border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Selisih Pengeluaran
                  </div>
                  <div className={`text-3xl font-black tracking-tight ${getTrendColor(clientSummary.trend)}`}>
                    {formatCurrency(clientSummary.difference)}
                  </div>
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    clientSummary.trend === 'up' 
                      ? 'bg-rose-50 border border-rose-100 text-rose-700' 
                      : clientSummary.trend === 'down'
                      ? 'bg-emerald-50 border border-emerald-100 text-emerald-700'
                      : 'bg-slate-100 border border-slate-200 text-slate-700'
                  }`}>
                    {getTrendIcon(clientSummary.trend)}
                    <span>
                      {clientSummary.trend === 'up' ? '+' : clientSummary.trend === 'down' ? '-' : ''}
                      {Math.abs(clientSummary.percentChange).toFixed(1)}%
                    </span>
                  </div>
                </div>

                {/* Period 2 (Older) */}
                <div className="text-center md:text-right space-y-1.5 md:pr-6">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    {comparisonData.period2.nama || 'Periode 2'}
                  </div>
                  <div className="text-3xl font-black text-slate-700 tracking-tight">
                    {formatCurrency(clientSummary.olderTotal)}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {comparisonData.period2.transaksi?.length || 0} Transaksi Tercatat
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Insights */}
          <Card className="border border-slate-200 bg-white rounded-2xl shadow-sm overflow-hidden">
            <CardHeader className="pb-4">
              <CardTitle className="text-base font-bold text-slate-900 uppercase tracking-wider">
                Insight Utama
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {clientSummary.trend === 'up' && (
                <div className="flex items-start gap-4 p-5 bg-rose-50/60 rounded-2xl border border-rose-100/80">
                  <div className="p-3 bg-rose-100/50 border border-rose-200/50 rounded-xl flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-rose-700" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-base text-rose-700">Pengeluaran Meningkat</div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Pada periode <strong className="text-slate-900">{comparisonData.period1.nama}</strong>, Anda membelanjakan <strong className="text-rose-700 font-bold">{formatCurrency(clientSummary.difference)}</strong> lebih banyak (<span className="font-bold">+{Math.abs(clientSummary.percentChange).toFixed(1)}%</span>) dibandingkan periode <strong className="text-slate-900">{comparisonData.period2.nama}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {clientSummary.trend === 'down' && (
                <div className="flex items-start gap-4 p-5 bg-emerald-50/60 rounded-2xl border border-emerald-100/80">
                  <div className="p-3 bg-emerald-100/50 border border-emerald-200/50 rounded-xl flex-shrink-0">
                    <TrendingDown className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-base text-emerald-700">Pengeluaran Menurun (Hemat)</div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      Luar biasa! Pada periode <strong className="text-slate-900">{comparisonData.period1.nama}</strong>, Anda berhasil menghemat <strong className="text-emerald-700 font-bold">{formatCurrency(clientSummary.difference)}</strong> lebih sedikit (<span className="font-bold">-{Math.abs(clientSummary.percentChange).toFixed(1)}%</span>) dibandingkan periode <strong className="text-slate-900">{comparisonData.period2.nama}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {clientSummary.trend === 'stable' && (
                <div className="flex items-start gap-4 p-5 bg-slate-50/80 rounded-2xl border border-slate-200/60">
                  <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl flex-shrink-0">
                    <Minus className="h-6 w-6 text-slate-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-base text-slate-800">Pengeluaran Stabil</div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Kedua periode memiliki total pengeluaran yang sama persis yaitu <strong className="text-slate-900">{formatCurrency(clientSummary.recentTotal)}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {(() => {
                if (comparisonData.comparison.length === 0) return null

                // Calculate relative difference for each item on the client side
                const processedComparison = comparisonData.comparison.map(item => {
                  const recentAmt = item.period1Amount
                  const olderAmt = item.period2Amount
                  const diff = recentAmt - olderAmt
                  const pct = olderAmt > 0 ? (diff / olderAmt) * 100 : 0
                  return {
                    ...item,
                    clientDiff: diff,
                    clientPct: pct,
                    clientTrend: diff > 0 ? 'up' : diff < 0 ? 'down' : 'stable'
                  }
                })

                const biggestChange = processedComparison.reduce((max, item) =>
                  Math.abs(item.clientPct) > Math.abs(max.clientPct) ? item : max
                , processedComparison[0])

                if (!biggestChange || Math.abs(biggestChange.clientDiff) === 0) return null

                return (
                  <div className="flex items-start gap-4 p-5 bg-indigo-50/60 rounded-2xl border border-indigo-100/80">
                    <div className="p-3 bg-indigo-100/50 border border-indigo-200/50 rounded-xl flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-indigo-700" />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-base text-indigo-700">
                        Perubahan Terbesar: {biggestChange.kategori.nama}
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Kategori <strong className="text-slate-900">{biggestChange.kategori.nama}</strong> mencatat persentase pergeseran paling signifikan, dengan pengeluaran yang {
                          biggestChange.clientTrend === 'up' 
                            ? <span className="text-rose-700 font-bold">meningkat sebesar {biggestChange.clientPct.toFixed(1)}%</span>
                            : <span className="text-emerald-700 font-bold">menurun sebesar {Math.abs(biggestChange.clientPct).toFixed(1)}%</span>
                        } (<strong className="text-slate-900">{formatCurrency(Math.abs(biggestChange.clientDiff))}</strong>) dari periode sebelumnya.
                      </p>
                    </div>
                  </div>
                )
              })()}
            </CardContent>
          </Card>

          {/* Category Comparison Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Perbandingan per Kategori</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {comparisonData.comparison.map((item) => {
                const recentAmt = item.period1Amount
                const olderAmt = item.period2Amount
                const diff = recentAmt - olderAmt
                const pct = olderAmt > 0 ? (diff / olderAmt) * 100 : 0
                const trend = diff > 0 ? 'up' : diff < 0 ? 'down' : 'stable'
                const maxAmount = Math.max(recentAmt, olderAmt)

                return (
                  <Card 
                    key={item.kategori.id} 
                    className="border border-slate-200 bg-white hover:border-slate-300/80 hover:shadow-lg transition-all duration-300 rounded-2xl shadow-sm overflow-hidden relative"
                    style={{
                      borderTopColor: item.kategori.warna || '#3b82f6',
                      borderTopWidth: '4px',
                    }}
                  >
                    <CardContent className="pt-6 space-y-5">
                      {/* Category Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: item.kategori.warna || '#3b82f6' }}
                          />
                          <span className="font-black text-base text-slate-900">{item.kategori.nama}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {getTrendIcon(trend)}
                          <span className={`text-xs font-bold ${getTrendColor(trend)}`}>
                            {trend === 'up' ? '+' : trend === 'down' ? '-' : ''}
                            {Math.abs(pct).toFixed(1)}%
                          </span>
                        </div>
                      </div>

                      {/* Amounts Breakdown */}
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="space-y-1">
                          <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider truncate">
                            {comparisonData.period1.nama || 'Periode 1'}
                          </div>
                          <div className="font-extrabold text-sm text-slate-900">
                            {formatCurrency(recentAmt)}
                          </div>
                        </div>

                        <div className="text-center space-y-1 border-x border-slate-100 px-2">
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            Selisih
                          </div>
                          <div className={`font-extrabold text-sm ${getTrendColor(trend)}`}>
                            {trend === 'up' ? '+' : trend === 'down' ? '-' : ''}
                            {formatCurrency(Math.abs(diff))}
                          </div>
                        </div>

                        <div className="text-right space-y-1">
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider truncate">
                            {comparisonData.period2.nama || 'Periode 2'}
                          </div>
                          <div className="font-extrabold text-sm text-slate-700">
                            {formatCurrency(olderAmt)}
                          </div>
                        </div>
                      </div>

                      {/* Stacked relative progress visualizer */}
                      {maxAmount > 0 ? (
                        <div className="space-y-3 pt-2">
                          {/* Period 1 Bar */}
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wide">
                              <span>{comparisonData.period1.nama}</span>
                              <span className="text-slate-700 font-extrabold">
                                {((recentAmt / maxAmount) * 100).toFixed(0)}%
                              </span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                                style={{
                                  width: `${(recentAmt / maxAmount) * 100}%`
                                }}
                              />
                            </div>
                          </div>
                          {/* Period 2 Bar */}
                          <div className="space-y-1">
                            <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wide">
                              <span>{comparisonData.period2.nama}</span>
                              <span className="text-slate-600 font-extrabold">
                                {((olderAmt / maxAmount) * 100).toFixed(0)}%
                              </span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-slate-400 rounded-full transition-all duration-500"
                                style={{
                                  width: `${(olderAmt / maxAmount) * 100}%`
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-4 text-xs text-slate-500 font-medium">
                          Tidak ada pengeluaran pada kedua periode untuk kategori ini.
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}