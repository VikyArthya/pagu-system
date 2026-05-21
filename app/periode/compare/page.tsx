import { Button } from '@/components/ui/button'
import { ArrowLeft, GitCompare } from 'lucide-react'
import { PeriodComparison } from '@/components/period-comparison'
import Link from 'next/link'

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link href="/rekap">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <GitCompare className="h-6 w-6" />
                Period Comparison
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Compare spending patterns between different periods
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <PeriodComparison />
      </main>
    </div>
  )
}