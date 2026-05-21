'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Calendar, Check } from 'lucide-react'
import { createPeriodeWithTemplate } from '@/lib/actions/periode'
import {
  getAvailableTemplates,
  generatePeriodFromTemplate,
  PERIOD_TEMPLATES,
} from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface PeriodTemplate {
  type: 'biweekly' | 'monthly' | 'quarterly' | 'custom'
  name: string
  days: number
  description: string
  defaultNamePattern: string
}

export function PeriodDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<'biweekly' | 'monthly' | 'quarterly' | 'custom'>('biweekly')
  const [periodName, setPeriodName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [notes, setNotes] = useState('')
  const [showCustomDates, setShowCustomDates] = useState(false)
  const router = useRouter()

  const templates = getAvailableTemplates()

  const handleTemplateSelect = (templateType: 'biweekly' | 'monthly' | 'quarterly' | 'custom') => {
    setSelectedTemplate(templateType)

    // Generate default dates based on template
    if (templateType !== 'custom') {
      const today = new Date()
      const { startDate: generatedStart, endDate: generatedEnd, suggestedName } =
        generatePeriodFromTemplate(templateType, today)

      setStartDate(generatedStart.toISOString().split('T')[0])
      setEndDate(generatedEnd.toISOString().split('T')[0])
      setPeriodName(suggestedName)
      setShowCustomDates(false)
    } else {
      setShowCustomDates(true)
      // Keep current dates for custom editing
      if (!startDate) {
        const today = new Date()
        setStartDate(today.toISOString().split('T')[0])
        const nextWeek = new Date(today)
        nextWeek.setDate(nextWeek.getDate() + 7)
        setEndDate(nextWeek.toISOString().split('T')[0])
      }
      if (!periodName) {
        setPeriodName('Custom Period')
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await createPeriodeWithTemplate({
        nama: periodName || undefined,
        templateType: selectedTemplate,
        tanggalMulai: new Date(startDate),
        tanggalAkhir: new Date(endDate),
        notes: notes || undefined,
      })

      if (result.success) {
        setOpen(false)
        router.refresh()
        // Reset form
        setPeriodName('')
        setStartDate('')
        setEndDate('')
        setNotes('')
        setSelectedTemplate('biweekly')
        setShowCustomDates(false)
      } else {
        alert(result.error || 'Gagal membuat periode baru')
      }
    } catch (error) {
      console.error('Error creating period:', error)
      alert('Terjadi kesalahan saat membuat periode baru')
    } finally {
      setLoading(false)
    }
  }

  const handleQuickCreate = (templateType: 'biweekly' | 'monthly' | 'quarterly') => {
    setSelectedTemplate(templateType)
    const today = new Date()
    const { startDate: generatedStart, endDate: generatedEnd, suggestedName } =
      generatePeriodFromTemplate(templateType, today)

    setStartDate(generatedStart.toISOString().split('T')[0])
    setEndDate(generatedEnd.toISOString().split('T')[0])
    setPeriodName(suggestedName)

    // Auto-submit
    setTimeout(() => {
      const form = document.getElementById('period-form') as HTMLFormElement
      if (form) {
        form.requestSubmit()
      }
    }, 100)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Buat Periode Baru
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Buat Periode Anggaran Baru
          </DialogTitle>
          <DialogDescription>
            Pilih template atau buat periode custom sesuai kebutuhan Anda
          </DialogDescription>
        </DialogHeader>

        <form id="period-form" onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Template Selection */}
            <div>
              <Label className="text-base font-semibold mb-3 block">Pilih Template</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {templates.map((template) => {
                  const isSelected = selectedTemplate === template.type
                  return (
                    <button
                      key={template.type}
                      type="button"
                      onClick={() => handleTemplateSelect(template.type)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        isSelected
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-medium">{template.name}</div>
                        {isSelected && <Check className="h-4 w-4 text-primary" />}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {template.description}
                      </div>
                      {template.type !== 'custom' && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="mt-2 w-full"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleQuickCreate(template.type as any)
                          }}
                        >
                          Quick Create
                        </Button>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Period Details */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="periodName">Nama Periode</Label>
                <Input
                  id="periodName"
                  value={periodName}
                  onChange={(e) => setPeriodName(e.target.value)}
                  placeholder={selectedTemplate === 'custom' ? 'Custom Period' : 'Auto-generated'}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Tanggal Mulai</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate">Tanggal Akhir</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              {showCustomDates && (
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-sm font-medium mb-1">Custom Period</div>
                  <div className="text-xs text-muted-foreground">
                    Tentukan tanggal mulai dan akhir sesuai kebutuhan Anda
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="notes">Catatan (Opsional)</Label>
                <Input
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Catatan khusus untuk periode ini..."
                  className="mt-1"
                />
              </div>

              {/* Period Summary */}
              {startDate && endDate && (
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="text-sm font-medium mb-1">Period Summary</div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>Template: {PERIOD_TEMPLATES[selectedTemplate]?.name}</div>
                    <div>Durasi: {Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)) + 1} hari</div>
                    <div>
                      Periode: {new Date(startDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })} - {new Date(endDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Batal
            </Button>
            <Button type="submit" disabled={loading || !startDate || !endDate}>
              {loading ? 'Menyimpan...' : 'Buat Periode'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}