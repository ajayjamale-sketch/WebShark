import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { PageHeader } from '../../components/common/PageHeader'
import { Card } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { RevenueChart } from '../../components/charts/RevenueChart'
import { planDistribution, revenueData } from '../../data/mockData'

const subscriptions = [
  { id: 's1', workspace: 'WebShark HQ', plan: 'Scale', monthly: 199, status: 'active', nextRenewal: '2026-06-01' },
  { id: 's2', workspace: 'Northstar Commerce', plan: 'Growth', monthly: 89, status: 'active', nextRenewal: '2026-06-12' },
  { id: 's3', workspace: 'CloudForge Labs', plan: 'Growth', monthly: 89, status: 'active', nextRenewal: '2026-06-18' },
  { id: 's4', workspace: 'FinScope Media', plan: 'Starter', monthly: 39, status: 'active', nextRenewal: '2026-06-22' },
]

export default function AdminSubscriptionsPage() {
  const totalMRR = subscriptions.reduce((a, s) => a + s.monthly, 0)

  return (
    <div className='space-y-6'>
      <PageHeader
        title='Subscription Management'
        subtitle='Platform-wide plan analytics, MRR tracking, and renewal schedules.'
      />

      <div className='grid gap-4 md:grid-cols-3'>
        <Card className='p-4 industrial-corner'>
          <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>Platform MRR</p>
          <p className='mt-2 text-3xl font-black text-foreground uppercase tracking-tighter'>${totalMRR.toLocaleString()}</p>
          <p className='text-[10px] font-bold text-emerald-600 uppercase mt-1'>+5.9% VS PREV CYCLE</p>
        </Card>
        <Card className='p-4 industrial-corner'>
          <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>Active Nodes</p>
          <p className='mt-2 text-3xl font-black text-foreground uppercase tracking-tighter'>{subscriptions.length}</p>
          <p className='text-[10px] font-bold text-primary-blue uppercase mt-1'>SECURED PROTOCOLS</p>
        </Card>
        <Card className='p-4 industrial-corner'>
          <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>Churn Rate</p>
          <p className='mt-2 text-3xl font-black text-foreground uppercase tracking-tighter'>1.2%</p>
          <p className='text-[10px] font-bold text-emerald-600 uppercase mt-1'>BELOW MARGINS</p>
        </Card>
      </div>

      <div className='grid gap-4 lg:grid-cols-2'>
        <RevenueChart data={revenueData} />

        <Card className='p-6 industrial-corner'>
          <h3 className='font-display text-lg font-bold text-foreground uppercase tracking-tight mb-4 border-b border-border pb-2'>Plan Distribution</h3>
          <div className='mt-2 h-56'>
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart>
                <Pie
                  data={planDistribution}
                  cx='50%'
                  cy='50%'
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey='value'
                >
                  {planDistribution.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '0px' }}
                  itemStyle={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}
                />
                <Legend iconType="square" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className='p-6 industrial-corner'>
        <h3 className='mb-6 font-display text-lg font-bold text-foreground uppercase tracking-tight border-b border-border pb-3'>Active Subscriptions</h3>
        <div className='space-y-3'>
          {subscriptions.map((sub) => (
            <div key={sub.id} className='flex flex-wrap items-center justify-between gap-3 rounded-none border border-border p-4 bg-accent/5 hover:bg-accent/10 transition-all group'>
              <div>
                <p className='text-sm font-bold text-foreground uppercase tracking-tight'>{sub.workspace}</p>
                <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1'>RENEWAL PROTOCOL: {sub.nextRenewal}</p>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-sm font-black text-foreground'>${sub.monthly}<span className="text-[10px] text-muted-foreground ml-1">/MO</span></p>
                <Badge variant={sub.plan === 'Scale' ? 'danger' : sub.plan === 'Growth' ? 'warning' : 'muted'} className="rounded-none font-bold text-[9px] uppercase tracking-widest">
                  {sub.plan}
                </Badge>
                <Badge variant='success' className="rounded-none font-bold text-[9px] uppercase tracking-widest border border-emerald-600/20 bg-emerald-600/10 text-emerald-600">SECURED</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
