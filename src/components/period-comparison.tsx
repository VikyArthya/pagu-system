'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, Minus, ArrowRight, Calendar } from 'lucide-react'
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

          if (!period1Id && !period2Id && periodsResult.data.length >= 2) {
            setSelectedPeriod1(periodsResult.data[1].id)
            setSelectedPeriod2(periodsResult.data[0].id)
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
      }
    }

    loadComparison()
  }, [selectedPeriod1, selectedPeriod2, onPeriodsChange])

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="pt-6">
              <div className="h-32 bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (!comparisonData || !selectedPeriod1 || !selectedPeriod2) {
    return (
      <Card className="border-2">
        <CardContent className="py-12 text-center text-muted-foreground">
          <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="font-medium">Select two periods to compare</p>
          <p className="text-sm mt-1">Choose different periods from the dropdowns below</p>
        </CardContent>
      </Card>
    )
  }

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-destructive" />
      case 'down':
        return <TrendingDown className="h-4 w-4 text-green-600" />
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getTrendColor = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return 'text-destructive'
      case 'down':
        return 'text-green-600'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <div className="space-y-8">
      {/* Period Selection */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Select Periods to Compare
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold mb-3 block">Period 1 (Recent)</label>
              <select
                className="w-full p-3 border-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                value={selectedPeriod1}
                onChange={(e) => setSelectedPeriod1(e.target.value)}
              >
                <option value="">Select period...</option>
                {allPeriods.map((period) => (
                  <option key={period.id} value={period.id}>
                    {period.nama || 'Unnamed'} ({formatDate(period.tanggalMulai)} - {formatDate(period.tanggalAkhir)})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold mb-3 block">Period 2 (Older)</label>
              <select
                className="w-full p-3 border-2 rounded-lg focus:border-primary focus:outline-none transition-colors"
                value={selectedPeriod2}
                onChange={(e) => setSelectedPeriod2(e.target.value)}
              >
                <option value="">Select period...</option>
                {allPeriods.map((period) => (
                  <option key={period.id} value={period.id}>
                    {period.nama || 'Unnamed'} ({formatDate(period.tanggalMulai)} - {formatDate(period.tanggalAkhir)})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary Comparison */}
      <Card className="border-2 bg-gradient-to-br from-card to-muted/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="h-5 w-5" />
            Overall Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2 font-medium">
                {comparisonData.period1.nama || 'Period 1'}
              </div>
              <div className="text-3xl font-bold mb-1">
                {formatCurrency(comparisonData.summary.period1Total)}
              </div>
              <div className="text-xs text-muted-foreground">
                {comparisonData.period1.transaksi?.length || 0} transactions
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2 font-medium">Difference</div>
              <div className={`text-3xl font-bold mb-1 ${getTrendColor(
                comparisonData.summary.totalDifference > 0 ? 'up' :
                comparisonData.summary.totalDifference < 0 ? 'down' : 'stable'
              )}`}>
                {formatCurrency(Math.abs(comparisonData.summary.totalDifference))}
              </div>
              <div className={`text-sm font-semibold ${getTrendColor(
                comparisonData.summary.totalDifference > 0 ? 'up' :
                comparisonData.summary.totalDifference < 0 ? 'down' : 'stable'
              )}`}>
                {comparisonData.summary.totalDifference > 0 ? '+' : ''}
                {comparisonData.summary.totalPercentChange.toFixed(1)}%
              </div>
            </div>

            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-2 font-medium">
                {comparisonData.period2.nama || 'Period 2'}
              </div>
              <div className="text-3xl font-bold mb-1">
                {formatCurrency(comparisonData.summary.period2Total)}
              </div>
              <div className="text-xs text-muted-foreground">
                {comparisonData.period2.transaksi?.length || 0} transactions
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Comparison */}
      <div>
        <h3 className="text-xl font-bold mb-4 tracking-tight">Category-by-Category Comparison</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {comparisonData.comparison.map((item) => (
            <Card key={item.kategori.id} className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b pb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.kategori.warna || '#3b82f6' }}
                      />
                      <span className="font-bold text-lg">{item.kategori.nama}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {getTrendIcon(item.trend)}
                      <span className={`text-sm font-bold ${getTrendColor(item.trend)}`}>
                        {item.trend === 'up' ? '+' : item.trend === 'down' ? '' : ''}
                        {item.percentChange.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  {/* Amounts */}
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1 font-medium">
                        {comparisonData.period1.nama || 'Period 1'}
                      </div>
                      <div className="font-bold text-base">{formatCurrency(item.period1Amount)}</div>
                    </div>

                    <div className="text-center">
                      <div className="text-xs text-muted-foreground mb-1 font-medium">Difference</div>
                      <div className={`font-bold text-base ${getTrendColor(item.trend)}`}>
                        {item.trend === 'up' ? '+' : item.trend === 'down' ? '' : ''}
                        {formatCurrency(Math.abs(item.difference))}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-muted-foreground mb-1 font-medium">
                        {comparisonData.period2.nama || 'Period 2'}
                      </div>
                      <div className="font-bold text-base">{formatCurrency(item.period2Amount)}</div>
                    </div>
                  </div>

                  {/* Visual Bar */}
                  {Math.max(item.period1Amount, item.period2Amount) > 0 && (
                    <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-500"
                        style={{
                          width: `${Math.min(
                            (item.period1Amount / Math.max(item.period1Amount, item.period2Amount)) * 100,
                            100
                          )}%`,
                        }}
                      />
                      <div
                        className="absolute right-0 top-0 h-full bg-green-500 transition-all duration-500"
                        style={{
                          width: `${Math.min(
                            (item.period2Amount / Math.max(item.period1Amount, item.period2Amount)) * 100,
                            100
                          )}%`,
                        }}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <Card className="border-2 bg-gradient-to-br from-card to-primary/5">
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {comparisonData.summary.totalDifference > 0 && (
              <div className="flex items-start gap-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                <TrendingUp className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-base">Spending Increased</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {comparisonData.period1.nama || 'Period 1'} spent <strong className="text-destructive">{formatCurrency(comparisonData.summary.totalDifference)}</strong> more
                    than {comparisonData.period2.nama || 'Period 2'}
                  </div>
                </div>
              </div>
            )}

            {comparisonData.summary.totalDifference < 0 && (
              <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <TrendingDown className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-base">Spending Decreased</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {comparisonData.period1.nama || 'Period 1'} spent <strong className="text-green-600">{formatCurrency(Math.abs(comparisonData.summary.totalDifference))}</strong> less
                    than {comparisonData.period2.nama || 'Period 2'}
                  </div>
                </div>
              </div>
            )}

            {comparisonData.summary.totalDifference === 0 && (
              <div className="flex items-start gap-4 p-4 bg-muted rounded-lg border">
                <Minus className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-bold text-base">Spending Remained Stable</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Both periods had identical total spending
                  </div>
                </div>
              </div>
            )}

            {(() => {
              const biggestChange = comparisonData.comparison.reduce((max, item) =>
                Math.abs(item.percentChange) > Math.abs(max.percentChange) ? item : max
              )

              return (
                <div className="flex items-start gap-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
                    {getTrendIcon(biggestChange.trend)}
                  </div>
                  <div>
                    <div className="font-bold text-base">Biggest Change: {biggestChange.kategori.nama}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {biggestChange.trend === 'up' ? 'Increased' : biggestChange.trend === 'down' ? 'Decreased' : 'Remained stable'} by
                      <strong> {biggestChange.trend === 'up' ? '+' : biggestChange.trend === 'down' ? '' : ''}{biggestChange.percentChange.toFixed(1)}%</strong>
                      ({formatCurrency(Math.abs(biggestChange.difference))})
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}