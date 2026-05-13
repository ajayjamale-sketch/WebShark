import { useMemo, useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { FunnelChart } from '../../components/charts/FunnelChart'
import { DataTable } from '../../components/common/DataTable'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { leadFunnel } from '../../data/mockData'

const seedLeads = [
  { id: 1, company: 'Orbit Stack', email: 'growth@orbitstack.com', source: 'Organic', score: 82, status: 'Qualified' },
  { id: 2, company: 'Revstream Labs', email: 'hello@revstream.io', source: 'Paid Ads', score: 69, status: 'Contacted' },
  { id: 3, company: 'CloudForge', email: 'marketing@cloudforge.io', source: 'Referral', score: 91, status: 'Qualified' },
  { id: 4, company: 'BrightCom', email: 'sales@brightcom.co', source: 'Organic', score: 54, status: 'New' },
]

const statusVariant = { Qualified: 'success', Contacted: 'warning', New: 'muted', Lost: 'danger' }

export default function LeadGenerationPage() {
  const [leads, setLeads] = useState(seedLeads)
  const [form, setForm] = useState({ company: '', email: '', source: 'Organic' })
  const [adding, setAdding] = useState(false)

  const handleAdd = async () => {
    if (!form.company || !form.email) { toast.error('Company and email are required'); return }
    setAdding(true)
    await new Promise((r) => setTimeout(r, 600))
    setLeads((prev) => [
      {
        id: Date.now(),
        company: form.company,
        email: form.email,
        source: form.source,
        score: Math.floor(40 + Math.random() * 55),
        status: 'New',
      },
      ...prev,
    ])
    setForm({ company: '', email: '', source: 'Organic' })
    setAdding(false)
    toast.success(`Lead "${form.company}" added!`)
  }

  const handleDelete = (id) => {
    setLeads((prev) => prev.filter((l) => l.id !== id))
    toast.info('Lead removed.')
  }

  const columns = useMemo(() => [
    {
      accessorKey: 'company',
      header: 'Company',
      cell: ({ row }) => <span className='font-medium'>{row.original.company}</span>,
    },
    { accessorKey: 'email', header: 'Email' },
    { accessorKey: 'source', header: 'Source' },
    {
      accessorKey: 'score',
      header: 'Lead Score',
      cell: ({ row }) => (
        <Badge variant={row.original.score >= 80 ? 'success' : row.original.score >= 60 ? 'warning' : 'muted'}>
          {row.original.score}
        </Badge>
      ),
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => (
        <Badge variant={statusVariant[row.original.status] || 'muted'}>{row.original.status}</Badge>
      ),
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
        title='Lead Generation'
        subtitle='Capture, score, and manage leads with conversion analytics and CTA optimization.'
      />

      <div className='grid gap-4 md:grid-cols-4'>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Total Leads</p>
          <p className='mt-2 text-3xl font-semibold'>{leads.length}</p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Qualified</p>
          <p className='mt-2 text-3xl font-semibold text-emerald-500'>
            {leads.filter((l) => l.status === 'Qualified').length}
          </p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Avg Lead Score</p>
          <p className='mt-2 text-3xl font-semibold'>
            {leads.length ? Math.round(leads.reduce((a, l) => a + l.score, 0) / leads.length) : 0}
          </p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Conversion Rate</p>
          <p className='mt-2 text-3xl font-semibold'>7.9%</p>
        </Card>
      </div>

      <Tabs defaultValue='leads'>
        <TabsList>
          <TabsTrigger value='leads'>Lead Database</TabsTrigger>
          <TabsTrigger value='add'>Add Lead</TabsTrigger>
          <TabsTrigger value='funnel'>Conversion Funnel</TabsTrigger>
        </TabsList>

        <TabsContent value='leads' className='pt-4'>
          <Card className='glass p-5'>
            <h3 className='mb-4 font-display text-lg font-semibold'>All Leads</h3>
            <DataTable columns={columns} data={leads} searchKey='company' placeholder='Search company...' />
          </Card>
        </TabsContent>

        <TabsContent value='add' className='pt-4'>
          <Card className='glass p-5 max-w-lg'>
            <h3 className='font-display text-lg font-semibold'>Capture New Lead</h3>
            <div className='mt-4 space-y-3'>
              <Input
                id='lead-company'
                placeholder='Company name'
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
              />
              <Input
                id='lead-email'
                placeholder='Contact email'
                type='email'
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
              <Select value={form.source} onValueChange={(v) => setForm((f) => ({ ...f, source: v }))}>
                <SelectTrigger id='lead-source'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='Organic'>Organic</SelectItem>
                  <SelectItem value='Paid Ads'>Paid Ads</SelectItem>
                  <SelectItem value='Referral'>Referral</SelectItem>
                  <SelectItem value='Social'>Social</SelectItem>
                  <SelectItem value='Email'>Email</SelectItem>
                </SelectContent>
              </Select>
              <Button className='gap-2 w-full' onClick={handleAdd} disabled={adding}>
                <Plus className='h-4 w-4' />
                {adding ? 'Adding Lead...' : 'Add Lead'}
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value='funnel' className='pt-4'>
          <FunnelChart data={leadFunnel} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
