'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown, Calendar, Check, TrendingUp } from 'lucide-react'
import { formatDate, formatCurrency, isPeriodActive } from '@/lib/utils'
import { getAllPeriode, getPeriodeAktif } from '@/lib/actions/periode'

interface PeriodeData {
  id: string
  nama?: string | null
  tanggalMulai: Date
  tanggalAkhir: Date
  isActive: boolean
  templateType?: string | null
  notes?: string | null
  transaksi: Array<{
    id: string
    jumlah: number | any
    deskripsi: string
    kategoriId: string
    kategori: {
      id: string
      nama: string
      warna?: string | null
    } | null
  }>
}

interface PeriodSwitcherProps {
  currentPeriodeId?: string
  onPeriodChange?: (periode: PeriodeData) => void
  showSummary?: boolean
  compact?: boolean
  className?: string
}

export function PeriodSwitcher({
  currentPeriodeId,
  onPeriodChange,
  showSummary = false,
  compact = false,
  className = '',
}: PeriodSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [periode, setPeriode] = useState<PeriodeData[]>([])
  const [selectedPeriode, setSelectedPeriode] = useState<PeriodeData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPeriode() {
      setLoading(true)
      try {
        const result = await getAllPeriode()
        if (result.success && result.data) {
          setPeriode(result.data)

          if (currentPeriodeId) {
            const current = result.data.find((p) => p.id === currentPeriodeId)
            if (current) setSelectedPeriode(current as unknown as PeriodeData)
          } else {
            const activeResult = await getPeriodeAktif()
            if (activeResult.success && activeResult.data) {
              setSelectedPeriode(activeResult.data as unknown as PeriodeData)
            }
          }
        }
      } catch (error) {
        console.error('Error loading periode:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPeriode()
  }, [currentPeriodeId])

  const handlePeriodSelect = (period: PeriodeData) => {
    setSelectedPeriode(period)
    setIsOpen(false)
    onPeriodChange?.(period)
  }

  const getPeriodSummary = (period: PeriodeData) => {
    const total = period.transaksi.reduce((sum, t) => sum + Number(t.jumlah), 0)
    const transactionCount = period.transaksi.length
    return { total, transactionCount }
  }

  if (loading) {
    return (
      <div className={`animate-pulse bg-slate-100 h-12 rounded-xl ${className}`}></div>
    )
  }

  if (!selectedPeriode) {
    return (
      <Button variant="outline" className={`h-12 rounded-xl border-slate-200 ${className}`} disabled>
        <Calendar className="h-4 w-4 mr-2" />
        No period selected
      </Button>
    )
  }

  const summary = getPeriodSummary(selectedPeriode)

  if (compact) {
    return (
      <div className={`relative ${className}`}>
        <Button
          variant="outline"
          className="h-10 justify-start px-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Calendar className="h-4 w-4 mr-2 flex-shrink-0 text-slate-500" />
          <div className="flex items-center gap-2 truncate">
            <span className="font-medium truncate text-slate-800">{selectedPeriode.nama || 'Unnamed Period'}</span>
            <ChevronDown className={`h-4 w-4 flex-shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </Button>

        {isOpen && (
          <>
            {/* Backdrop overlay - premium soft slate blur */}
            <div
              className="fixed inset-0 bg-slate-900/10 backdrop-blur-xs z-[60]"
              onClick={() => setIsOpen(false)}
            />
            <Card className="absolute z-[70] w-full mt-2 max-h-80 overflow-y-auto shadow-lg border border-slate-200 bg-white rounded-xl">
              <CardContent className="p-0">
                <div className="sticky top-0 bg-white border-b border-slate-100 p-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-indigo-600" />
                      <h4 className="font-bold text-sm text-slate-900">Pilih Periode</h4>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {periode.length} periode
                    </span>
                  </div>
                </div>

                <div className="p-2 space-y-1 bg-white">
                  {periode.map((period) => {
                    const periodSummary = getPeriodSummary(period)
                    const isActive = isPeriodActive(period.tanggalAkhir)
                    const isSelected = selectedPeriode.id === period.id

                    return (
                      <button
                        key={period.id}
                        onClick={() => handlePeriodSelect(period)}
                        className={`w-full text-left p-3 rounded-lg transition-all border ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                            : 'bg-white hover:bg-slate-50 border-slate-100 hover:border-slate-200/80 hover:shadow-xs'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`font-semibold text-sm truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                                {period.nama || 'Unnamed Period'}
                              </span>
                              {isActive && (
                                <span className={`px-2 py-0.5 text-xs rounded-full flex-shrink-0 ${
                                  isSelected
                                    ? 'bg-white/20 text-white'
                                    : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                                }`}>
                                  Aktif
                                </span>
                              )}
                            </div>
                            <div className={`text-xs ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                              <div className="flex items-center gap-2 mb-1">
                                <Calendar className="h-3 w-3" />
                                {formatDate(period.tanggalMulai)} - {formatDate(period.tanggalAkhir)}
                              </div>
                              <div className="flex items-center gap-2">
                                <span>{periodSummary.transactionCount} transaksi</span>
                                <span>•</span>
                                <span className="font-semibold">{formatCurrency(periodSummary.total)}</span>
                              </div>
                            </div>
                          </div>
                          {isSelected && (
                            <Check className="h-4 w-4 text-white flex-shrink-0" />
                          )}
                        </div>
                      </button>
                    )
                  })}

                  {periode.length === 0 && (
                    <div className="py-8 text-center text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-200">
                      <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50 text-slate-400" />
                      <p className="font-semibold text-sm">Belum ada periode</p>
                      <p className="text-xs text-slate-400 mt-1">Buat periode baru untuk memulai</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Card */}
      <Card className="border border-slate-200 bg-white hover:border-indigo-500/50 hover:shadow-md transition-all duration-300 cursor-pointer shadow-sm rounded-2xl" onClick={() => setIsOpen(!isOpen)}>
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            {/* Period Info */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 border border-indigo-100 rounded-xl flex-shrink-0">
                <Calendar className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-slate-900 text-base truncate">{selectedPeriode.nama || 'Unnamed Period'}</h3>
                  {selectedPeriode.isActive && (
                    <span className="px-2.5 py-0.5 text-xs bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full flex-shrink-0">
                      Aktif
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-500">
                  {formatDate(selectedPeriode.tanggalMulai)} - {formatDate(selectedPeriode.tanggalAkhir)}
                  {selectedPeriode.templateType && (
                    <span className="ml-2 text-xs text-slate-400">• {selectedPeriode.templateType}</span>
                  )}
                </p>
              </div>
            </div>

            {/* Toggle Button */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {showSummary && (
                <div className="hidden md:flex items-center gap-4 text-sm border-l border-r border-slate-100 px-4">
                  <div className="text-center">
                    <div className="text-xs text-slate-400 mb-1">Transaksi</div>
                    <div className="font-bold text-slate-800 text-base">{summary.transactionCount}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-400 mb-1">Total</div>
                    <div className="font-bold text-slate-800 text-base text-rose-600">{formatCurrency(summary.total)}</div>
                  </div>
                </div>
              )}
              <div className={`p-3 rounded-xl transition-all shadow-xs ${
                isOpen
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}>
                <ChevronDown className="h-5 w-5" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop overlay - premium soft slate blur */}
          <div
            className="fixed inset-0 bg-slate-900/10 backdrop-blur-xs z-[60]"
            onClick={() => setIsOpen(false)}
          />
          <Card className="absolute z-[70] w-full mt-2 max-h-96 overflow-y-auto shadow-xl border border-slate-200 bg-white rounded-2xl">
            <CardContent className="p-0">
              <div className="sticky top-0 bg-white border-b border-slate-100 p-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-indigo-600" />
                    <h4 className="font-bold text-base text-slate-900">Pilih Periode</h4>
                  </div>
                  <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {periode.length} periode
                  </span>
                </div>
              </div>

              <div className="p-3 space-y-2 bg-white">
                {periode.map((period) => {
                  const periodSummary = getPeriodSummary(period)
                  const isActive = isPeriodActive(period.tanggalAkhir)
                  const isSelected = selectedPeriode.id === period.id

                  return (
                    <button
                      key={period.id}
                      onClick={() => handlePeriodSelect(period)}
                      className={`w-full text-left p-4 rounded-xl transition-all border ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-md font-semibold'
                          : 'bg-white hover:bg-slate-50 border-slate-200/85 hover:border-indigo-500/40 shadow-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`font-bold text-base ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                              {period.nama || 'Unnamed Period'}
                            </span>
                            {isActive && (
                              <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full flex-shrink-0 ${
                                isSelected
                                  ? 'bg-white/20 text-white'
                                  : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                              }`}>
                                Aktif
                              </span>
                            )}
                            {isSelected && (
                              <Check className="h-4 w-4 text-white flex-shrink-0" />
                            )}
                          </div>

                          <div className={`space-y-1 text-xs ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-3 w-3" />
                              {formatDate(period.tanggalMulai)} - {formatDate(period.tanggalAkhir)}
                            </div>
                            <div className="flex items-center gap-3">
                              <span>{periodSummary.transactionCount} transaksi</span>
                              <span>•</span>
                              <span className="font-semibold">{formatCurrency(periodSummary.total)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}

                {periode.length === 0 && (
                  <div className="py-12 text-center text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    <Calendar className="h-12 w-12 mx-auto mb-3 opacity-50 text-slate-400" />
                    <p className="font-semibold">Belum ada periode</p>
                    <p className="text-sm text-slate-400 mt-1">Buat periode baru untuk memulai</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}