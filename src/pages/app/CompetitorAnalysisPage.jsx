import { useMemo, useState } from 'react'
import { Plus, Trash2, TrendingDown, TrendingUp } from 'lucide-react'
import { toast } from 'sonner'
import { CompetitorComparisonChart } from '../../components/charts/CompetitorComparisonChart'
import { DataTable } from '../../components/common/DataTable'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { competitorRows as seedCompetitors, competitorSeries } from '../../data/mockData'

const keywordGaps = [
  { keyword: 'seo audit tool free', difficulty: 52, rankpilot: 3, marketzen: 7, you: '—' },
  { keyword: 'website performance checker', difficulty: 61, rankpilot: 5, marketzen: '—', you: 18 },
  { keyword: 'rank tracking software', difficulty: 74, rankpilot: 2, marketzen: 4, you: '—' },
  { keyword: 'backlink monitor tool', difficulty: 58, rankpilot: '—', marketzen: 6, you: 21 },
]

export default function CompetitorAnalysisPage() {
  const [competitors, setCompetitors] = useState(seedCompetitors)
  const [newDomain, setNewDomain] = useState('')
  const [adding, setAdding] = useState(false)

  const handleAdd = async () => {
    if (!newDomain.trim()) return
    setAdding(true)
    await new Promise((r) => setTimeout(r, 700))
    const c = {
      id: Date.now(),
      domain: newDomain.trim().replace(/https?:\/\//i, ''),
      authority: Math.floor(50 + Math.random() * 40),
      traffic: Math.floor(100000 + Math.random() * 400000),
      keywords: Math.floor(2000 + Math.random() * 4000),
      backlinks: Math.floor(10000 + Math.random() * 30000),
    }
    setCompetitors((prev) => [c, ...prev])
    setNewDomain('')
    setAdding(false)
    toast.success(`Competitor "${c.domain}" added!`)
  }

  const handleRemove = (id) => {
    setCompetitors((prev) => prev.filter((c) => c.id !== id))
    toast.info('Competitor removed.')
  }

  const columns = useMemo(() => [
    {
      accessorKey: 'domain',
      header: 'Domain',
      cell: ({ row }) => <span className='font-medium text-primary'>{row.original.domain}</span>,
    },
    {
      accessorKey: 'authority',
      header: 'DA Score',
      cell: ({ row }) => (
        <Badge variant={row.original.authority >= 75 ? 'danger' : row.original.authority >= 60 ? 'warning' : 'muted'}>
          {row.original.authority}
        </Badge>
      ),
    },
    {
      accessorKey: 'traffic',
      header: 'Est. Traffic',
      cell: ({ row }) => `${(row.original.traffic / 1000).toFixed(0)}K`,
    },
    {
      accessorKey: 'keywords',
      header: 'Keywords',
      cell: ({ row }) => row.original.keywords.toLocaleString(),
    },
    {
      accessorKey: 'backlinks',
      header: 'Backlinks',
      cell: ({ row }) => `${(row.original.backlinks / 1000).toFixed(0)}K`,
    },
    {
      id: 'actions',
      header: '',
      cell: ({ row }) => (
        <Button size='icon' variant='ghost' className='h-7 w-7' onClick={() => handleRemove(row.original.id)}>
          <Trash2 className='h-3.5 w-3.5 text-red-500' />
        </Button>
      ),
    },
  ], [])

  return (
    <div className='space-y-6'>
      <PageHeader
        title='Competitor Analysis'
        subtitle='Track domain visibility, keyword gap, and backlink opportunities against rivals.'
      />

      <div className='grid gap-4 md:grid-cols-3'>
        <Card className='glass p-4'>
          <div className='flex items-center gap-2'>
            <TrendingDown className='h-4 w-4 text-amber-500' />
            <p className='text-sm text-slate-500'>Keyword Gap</p>
          </div>
          <p className='mt-2 text-3xl font-semibold'>1,248</p>
          <p className='text-xs text-slate-500'>Keywords competitors rank for that you don't</p>
        </Card>
        <Card className='glass p-4'>
          <div className='flex items-center gap-2'>
            <TrendingUp className='h-4 w-4 text-emerald-500' />
            <p className='text-sm text-slate-500'>Backlink Gap</p>
          </div>
          <p className='mt-2 text-3xl font-semibold'>+8,740</p>
          <p className='text-xs text-slate-500'>High-value referring domains to target</p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Visibility Index</p>
          <p className='mt-2 text-3xl font-semibold'>90</p>
          <p className='text-xs text-emerald-500'>Leading in 3/5 focus categories</p>
        </Card>
      </div>

      <Card className='glass p-5'>
        <div className='grid gap-3 md:grid-cols-[1fr_auto]'>
          <Input
            id='competitor-domain'
            placeholder='Add competitor domain (e.g., competitor.com)'
            value={newDomain}
            onChange={(e) => setNewDomain(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <Button className='gap-2' onClick={handleAdd} disabled={adding}>
            <Plus className='h-4 w-4' />
            {adding ? 'Adding...' : 'Add Competitor'}
          </Button>
        </div>
      </Card>

      <Tabs defaultValue='overview'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='table'>Comparison Table</TabsTrigger>
          <TabsTrigger value='gap'>Keyword Gap</TabsTrigger>
        </TabsList>

        <TabsContent value='overview' className='pt-4'>
          <CompetitorComparisonChart data={competitorSeries} />
        </TabsContent>

        <TabsContent value='table' className='pt-4'>
          <Card className='glass p-5'>
            <h3 className='mb-4 font-display text-lg font-semibold'>Competitor Metrics</h3>
            <DataTable columns={columns} data={competitors} searchKey='domain' placeholder='Filter domain...' />
          </Card>
        </TabsContent>

        <TabsContent value='gap' className='pt-4'>
          <Card className='glass p-5'>
            <h3 className='font-display text-lg font-semibold'>Keyword Gap Analysis</h3>
            <p className='mt-1 text-sm text-slate-500'>Keywords your competitors rank for where you have an opportunity.</p>
            <div className='mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b border-slate-200 dark:border-slate-700'>
                    <th className='px-4 py-3 text-left font-semibold'>Keyword</th>
                    <th className='px-4 py-3 text-left font-semibold'>Difficulty</th>
                    <th className='px-4 py-3 text-left font-semibold'>rankpilot.io</th>
                    <th className='px-4 py-3 text-left font-semibold'>marketzen.ai</th>
                    <th className='px-4 py-3 text-left font-semibold'>You</th>
                  </tr>
                </thead>
                <tbody>
                  {keywordGaps.map((row) => (
                    <tr key={row.keyword} className='border-b border-slate-100 last:border-0 dark:border-slate-800'>
                      <td className='px-4 py-3 font-medium'>{row.keyword}</td>
                      <td className='px-4 py-3'>
                        <Badge variant={row.difficulty >= 70 ? 'danger' : row.difficulty >= 55 ? 'warning' : 'muted'}>
                          {row.difficulty}
                        </Badge>
                      </td>
                      <td className='px-4 py-3 text-slate-600 dark:text-slate-300'>
                        {row.rankpilot !== '—' ? `#${row.rankpilot}` : <span className='text-slate-400'>—</span>}
                      </td>
                      <td className='px-4 py-3 text-slate-600 dark:text-slate-300'>
                        {row.marketzen !== '—' ? `#${row.marketzen}` : <span className='text-slate-400'>—</span>}
                      </td>
                      <td className='px-4 py-3 text-emerald-600'>
                        {row.you !== '—' ? `#${row.you}` : <span className='text-amber-500'>Opportunity</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
