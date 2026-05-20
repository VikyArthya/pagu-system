'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { Users, Droplets, Fuel, Utensils, Car, Package, MoreHorizontal } from 'lucide-react'

interface KategoriData {
  id: string
  nama: string
  anggaranDasar: number
  warna?: string | null
  ikon?: string | null
  totalTransaksi: number
  sisaSaldo: number
  persentaseTerpakai: number
}

interface DashboardGridProps {
  kategori: KategoriData[]
}

const iconMap = {
  Users,
  Droplets,
  Fuel,
  Utensils,
  Car,
  Package,
  MoreHorizontal,
}

export function DashboardGrid({ kategori }: DashboardGridProps) {
  const getIcon = (iconName?: string | null) => {
    if (!iconName) return Package
    return iconMap[iconName as keyof typeof iconMap] || Package
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {kategori.map((item) => {
        const Icon = getIcon(item.ikon)
        const persentaseSisa = 100 - item.persentaseTerpakai
        const isLowBalance = persentaseSisa < 20

        return (
          <Card
            key={item.id}
            className={`hover:shadow-lg transition-shadow ${
              isLowBalance ? 'border-destructive' : ''
            }`}
            style={{
              borderTopColor: item.warna || '#3b82f6',
              borderTopWidth: '4px',
            }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: item.warna ? `${item.warna}20` : undefined }}
                  >
                    <Icon className="h-5 w-5" style={{ color: item.warna || '#3b82f6' }} />
                  </div>
                  {item.nama}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-muted-foreground">Sisa Saldo</span>
                    <span
                      className={`text-sm font-medium ${
                        isLowBalance ? 'text-destructive' : 'text-muted-foreground'
                      }`}
                    >
                      {persentaseSisa.toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full transition-all duration-300 ease-in-out"
                      style={{
                        width: `${persentaseSisa}%`,
                        backgroundColor: isLowBalance ? '#ef4444' : item.warna || '#3b82f6',
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Anggaran Dasar</span>
                    <span className="font-semibold">{formatCurrency(item.anggaranDasar)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Terpakai</span>
                    <span className="font-semibold text-destructive">
                      {formatCurrency(item.totalTransaksi)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-sm font-medium">Sisa Saldo</span>
                    <span
                      className={`text-lg font-bold ${
                        isLowBalance ? 'text-destructive' : 'text-primary'
                      }`}
                    >
                      {formatCurrency(item.sisaSaldo)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
