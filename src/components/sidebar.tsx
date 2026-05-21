'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { 
  LayoutDashboard, 
  FolderTree, 
  History, 
  GitCompare, 
  Menu, 
  X, 
  Wallet, 
  Calendar, 
  ArrowLeftRight 
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { getPeriodeAktif } from '@/lib/actions/periode'

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [activePeriod, setActivePeriod] = useState<{ nama: string; tgl: string } | null>(null)

  // Fetch active period to display a nice info card in the sidebar
  useEffect(() => {
    async function loadActivePeriod() {
      try {
        const res = await getPeriodeAktif()
        if (res.success && res.data) {
          const start = new Date(res.data.tanggalMulai).toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })
          const end = new Date(res.data.tanggalAkhir).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: '2-digit' })
          setActivePeriod({
            nama: res.data.nama || 'Unnamed Period',
            tgl: `${start} - ${end}`
          })
        }
      } catch (err) {
        console.error('Failed to load active period for sidebar:', err)
      }
    }
    loadActivePeriod()
  }, [])

  const navItems = [
    {
      name: 'Dashboard',
      href: '/',
      icon: LayoutDashboard,
      description: 'Ringkasan & status pagu'
    },
    {
      name: 'Kategori Pagu',
      href: '/kategori',
      icon: FolderTree,
      description: 'Kelola kategori & anggaran'
    },
    {
      name: 'Rekap Transaksi',
      href: '/rekap',
      icon: History,
      description: 'Riwayat pengeluaran'
    },
    {
      name: 'Bandingkan Periode',
      href: '/periode/compare',
      icon: GitCompare,
      description: 'Analisis perbandingan'
    }
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="flex md:hidden items-center justify-between p-4 bg-white/95 border-b border-slate-200 text-slate-900 sticky top-0 z-40 w-full backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-1.5 bg-indigo-600 rounded-lg shadow-md group-hover:bg-indigo-500 transition-colors">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <span className="font-extrabold text-lg tracking-tight text-slate-900">
            PAGU<span className="text-indigo-600">SYSTEM</span>
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors text-slate-600 focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-slate-200/80 text-slate-800 transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
      >
        {/* Brand Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="p-2 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/10 group-hover:bg-indigo-500 transition-all duration-300 group-hover:scale-105">
              <Wallet className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-wider text-indigo-600">
                PAGU<span className="text-slate-900 font-bold">SYSTEM</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">
                Admin Panel v2.0
              </span>
            </div>
          </Link>
          <button 
            onClick={() => setIsOpen(false)} 
            className="md:hidden p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "group flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 relative overflow-hidden",
                  active
                    ? "bg-indigo-50 text-indigo-600 border border-indigo-100/50 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent"
                )}
              >
                {/* Glowing vertical bar on active */}
                {active && (
                  <div className="absolute left-0 top-3 bottom-3 w-1 bg-indigo-600 rounded-r-md" />
                )}
                
                <Icon className={cn(
                  "h-5 w-5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110",
                  active ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"
                )} />
                
                <div className="flex flex-col">
                  <span>{item.name}</span>
                  <span className="text-[10px] font-normal text-slate-400 mt-0.5 group-hover:text-slate-500 transition-colors">
                    {item.description}
                  </span>
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Bottom Active Period Widget */}
        {activePeriod && (
          <div className="p-4 border-t border-slate-100 bg-slate-50/40">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600 mb-2">
                <Calendar className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Periode Aktif</span>
              </div>
              <p className="text-sm font-bold text-slate-800 truncate">{activePeriod.nama}</p>
              <p className="text-xs text-slate-500 mt-1">{activePeriod.tgl}</p>
              
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer" onClick={() => { router.push('/rekap'); setIsOpen(false); }}>
                <span>Kelola semua periode</span>
                <ArrowLeftRight className="h-3 w-3" />
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
