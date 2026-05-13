import { useMemo, useState } from 'react'
import { ArrowDown, ArrowUp, Minus, Plus, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { BacklinkBarChart } from '../../components/charts/BacklinkBarChart'
import { KeywordRankingChart } from '../../components/charts/KeywordRankingChart'
import { DataTable } from '../../components/common/DataTable'
import { EmptyState } from '../../components/common/EmptyState'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { keywordRows as seedKeywords, keywordSeries, backlinkSeries } from '../../data/mockData'

function TrendIndicator({ trend }) {
  if (trend === 'up') return <ArrowUp className='h-4 w-4 text-emerald-500' />
  if (trend === 'down') return <ArrowDown className='h-4 w-4 text-red-500' />
  return <Minus className='h-4 w-4 text-slate-400' />
}

const metaTags = [
  { page: '/home', title: 'WebShark — AI Website Intelligence Platform', desc: 'Unify technical audits, ranking intelligence…', status: 'Optimized' },
  { page: '/pricing', title: 'Pricing — WebShark', desc: 'Choose the right plan.', status: 'Too short' },
  { page: '/features', title: 'Features', desc: '—', status: 'Missing desc' },
  { page: '/blog', title: 'WebShark Blog | SEO Insights & Growth Tips', desc: 'Read the latest SEO strategies…', status: 'Optimized' },
]

const sitemapWarnings = [
  { url: '/old-page', issue: 'Page returns 404 but is in sitemap.xml' },
  { url: '/duplicate-slug', issue: 'Duplicate URL variant without canonical' },
]

export default function SEOIntelligencePage() {
  const [keywords, setKeywords] = useState(seedKeywords)
  const [newKeyword, setNewKeyword] = useState('')
  const [adding, setAdding] = useState(false)

  const handleAddKeyword = async () => {
    if (!newKeyword.trim()) return
    setAdding(true)
    await new Promise((r) => setTimeout(r, 600))
    const kw = {
      id: Date.now(),
      keyword: newKeyword.trim(),
      volume: Math.floor(500 + Math.random() * 5000),
      difficulty: Math.floor(30 + Math.random() * 60),
      position: Math.floor(4 + Math.random() * 30),
      trend: ['up', 'down', 'flat'][Math.floor(Math.random() * 3)],
    }
    setKeywords((prev) => [kw, ...prev])
    setNewKeyword('')
    setAdding(false)
    toast.success(`Keyword "${kw.keyword}" added for tracking!`)
  }

  const handleDelete = (id) => {
    setKeywords((prev) => prev.filter((k) => k.id !== id))
    toast.info('Keyword removed from tracking.')
  }

  const columns = useMemo(() => [
    {
      accessorKey: 'keyword',
      header: 'Keyword',
      cell: ({ row }) => <span className='font-medium'>{row.original.keyword}</span>,
    },
    { accessorKey: 'volume', header: 'Volume' },
    { accessorKey: 'difficulty', header: 'Difficulty' },
    {
      accessorKey: 'position',
      header: 'Position',
      cell: ({ row }) => <Badge variant='default'>#{row.original.position}</Badge>,
    },
    {
      accessorKey: 'trend',
      header: 'Trend',
      cell: ({ row }) => <TrendIndicator trend={row.original.trend} />,
    },
    {
      id: 'actions',
      header: '',
      cell: ({ row }) => (
        <Button size='icon' variant='ghost' className='h-7 w-7' onClick={() => handleDelete(row.original.id)}>
          <Trash2 className='h-3.5 w-3.5 text-red-500' />
        </Button>
      ),
    },
  ], [])

  return (
    <div className='space-y-6'>
      <PageHeader
        title='SEO Intelligence Dashboard'
        subtitle='Keyword tracking, SERP movement, backlinks, and technical metadata insights.'
      />

      <div className='grid gap-4 md:grid-cols-3'>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>SERP Winners</p>
          <p className='mt-2 text-3xl font-semibold'>+18 keywords</p>
          <p className='text-xs text-emerald-500'>Top 3 rankings gained this week</p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Meta Tag Coverage</p>
          <p className='mt-2 text-3xl font-semibold'>94%</p>
          <p className='text-xs text-slate-500'>Titles and descriptions optimized</p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Sitemap Validator</p>
          <p className='mt-2 text-3xl font-semibold'>2 warnings</p>
          <p className='text-xs text-amber-500'>Last crawl: 14 minutes ago</p>
        </Card>
      </div>

      <Tabs defaultValue='keywords'>
        <TabsList>
          <TabsTrigger value='keywords'>Keywords</TabsTrigger>
          <TabsTrigger value='backlinks'>Backlinks</TabsTrigger>
          <TabsTrigger value='meta'>Meta Analysis</TabsTrigger>
          <TabsTrigger value='sitemap'>Sitemap</TabsTrigger>
        </TabsList>

        {/* ── Keywords Tab ── */}
        <TabsContent value='keywords' className='space-y-4 pt-4'>
          <div className='grid gap-4 lg:grid-cols-2'>
            <KeywordRankingChart data={keywordSeries} />
            <Card className='glass p-5'>
              <h3 className='mb-3 font-display text-lg font-semibold'>Add Keyword</h3>
              <div className='flex gap-2'>
                <Input
                  id='new-keyword'
                  placeholder='Enter keyword to track...'
                  value={newKeyword}
                  onChange={(e) => setNewKeyword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddKeyword()}
                />
                <Button onClick={handleAddKeyword} disabled={adding} className='gap-1.5 shrink-0'>
                  <Plus className='h-4 w-4' />
                  {adding ? 'Adding...' : 'Add'}
                </Button>
              </div>
              <div className='mt-4'>
                <h4 className='mb-3 text-sm font-semibold text-slate-500'>SEO Score Heatmap</h4>
                <div className='grid grid-cols-4 gap-2'>
                  {[95, 88, 79, 91, 84, 73, 67, 90].map((score, i) => (
                    <div
                      key={i}
                      className='rounded-xl p-3 text-center text-xs font-semibold'
                      style={{
                        background: `rgba(29, 78, 216, ${Math.max(0.15, score / 130)})`,
                        color: score > 75 ? '#FFFFFF' : '#0F172A',
                      }}
                    >
                      <p>Page {i + 1}</p>
                      <p className='text-base mt-0.5'>{score}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <Card className='glass p-5'>
            <h3 className='mb-4 font-display text-lg font-semibold'>Keyword Tracking Table</h3>
            {keywords.length === 0 ? (
              <EmptyState title='No keywords tracked yet' description='Add your first keyword above.' />
            ) : (
              <DataTable columns={columns} data={keywords} searchKey='keyword' placeholder='Search keyword...' />
            )}
          </Card>
        </TabsContent>

        {/* ── Backlinks Tab ── */}
        <TabsContent value='backlinks' className='pt-4'>
          <div className='grid gap-4 lg:grid-cols-2'>
            <BacklinkBarChart data={backlinkSeries} />
            <Card className='glass p-5'>
              <h3 className='font-display text-lg font-semibold'>Top Referring Domains</h3>
              <div className='mt-4 space-y-3'>
                {[
                  { domain: 'techcrunch.com', da: 94, links: 12 },
                  { domain: 'producthunt.com', da: 91, links: 8 },
                  { domain: 'smashingmagazine.com', da: 88, links: 5 },
                  { domain: 'dev.to', da: 82, links: 19 },
                  { domain: 'css-tricks.com', da: 80, links: 7 },
                ].map((d) => (
                  <div key={d.domain} className='flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700'>
                    <div>
                      <p className='text-sm font-medium'>{d.domain}</p>
                      <p className='text-xs text-slate-500'>DA {d.da}</p>
                    </div>
                    <Badge variant='muted'>{d.links} links</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* ── Meta Analysis Tab ── */}
        <TabsContent value='meta' className='pt-4'>
          <Card className='glass p-5'>
            <h3 className='font-display text-lg font-semibold'>Meta Tags Analysis</h3>
            <p className='mt-1 text-sm text-slate-500'>Title and description optimization status per page.</p>
            <div className='mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b border-slate-200 dark:border-slate-700'>
                    <th className='px-4 py-3 text-left font-semibold'>Page</th>
                    <th className='px-4 py-3 text-left font-semibold'>Title</th>
                    <th className='px-4 py-3 text-left font-semibold'>Description Preview</th>
                    <th className='px-4 py-3 text-left font-semibold'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {metaTags.map((row) => (
                    <tr key={row.page} className='border-b border-slate-100 last:border-0 dark:border-slate-800'>
                      <td className='px-4 py-3 font-mono text-xs text-slate-500'>{row.page}</td>
                      <td className='max-w-[200px] truncate px-4 py-3'>{row.title}</td>
                      <td className='max-w-[200px] truncate px-4 py-3 text-slate-500'>{row.desc}</td>
                      <td className='px-4 py-3'>
                        <Badge variant={row.status === 'Optimized' ? 'success' : row.status === 'Too short' ? 'warning' : 'danger'}>
                          {row.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        {/* ── Sitemap Tab ── */}
        <TabsContent value='sitemap' className='space-y-4 pt-4'>
          <Card className='glass p-5'>
            <div className='flex items-center justify-between'>
              <h3 className='font-display text-lg font-semibold'>Sitemap.xml Validator</h3>
              <Badge variant={sitemapWarnings.length ? 'warning' : 'success'}>
                {sitemapWarnings.length ? `${sitemapWarnings.length} warnings` : 'Valid'}
              </Badge>
            </div>
            <p className='mt-1 text-sm text-slate-500'>Last validated: 14 minutes ago · 247 URLs indexed</p>
            <div className='mt-4 space-y-2'>
              {sitemapWarnings.map((w) => (
                <div key={w.url} className='flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-900/40 dark:bg-amber-950/20'>
                  <p className='text-xs font-mono text-amber-700 dark:text-amber-300'>{w.url}</p>
                  <p className='text-xs text-amber-600 dark:text-amber-400'>— {w.issue}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card className='glass p-5'>
            <h3 className='font-display text-lg font-semibold'>Robots.txt Review</h3>
            <div className='mt-3 rounded-xl bg-slate-900 p-4 text-xs text-green-400 font-mono'>
              <p>User-agent: *</p>
              <p>Disallow: /admin</p>
              <p>Disallow: /api</p>
              <p>Allow: /</p>
              <p className='mt-2'>Sitemap: https://webshark.ai/sitemap.xml</p>
            </div>
            <div className='mt-3 flex items-center gap-2 text-sm text-emerald-600'>
              <Badge variant='success'>Valid</Badge>
              <span>No blocked important pages detected</span>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
