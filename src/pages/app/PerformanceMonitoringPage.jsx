import { Activity, RefreshCw, Server, ShieldAlert, Wifi, WifiOff } from 'lucide-react'
import { UptimeChart } from '../../components/charts/UptimeChart'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Progress } from '../../components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { uptimeHistory } from '../../data/mockData'
import { toast } from 'sonner'

const incidents = [
  { id: 1, service: 'api.webshark.ai', impact: 'Medium', duration: '2m 11s', when: 'Today 08:42', resolved: true },
  { id: 2, service: 'crawler node - us-east', impact: 'Low', duration: '58s', when: 'Yesterday 18:17', resolved: true },
  { id: 3, service: 'dashboard.webshark.ai', impact: 'High', duration: '8m 42s', when: 'May 9 03:11', resolved: true },
]

const monitors = [
  { id: 1, url: 'https://webshark.ai', status: 'up', uptime: 99.96, responseMs: 241, checkEvery: '1 min' },
  { id: 2, url: 'https://api.webshark.ai', status: 'up', uptime: 99.91, responseMs: 182, checkEvery: '30 sec' },
  { id: 3, url: 'https://docs.webshark.ai', status: 'up', uptime: 100, responseMs: 130, checkEvery: '5 min' },
]

export default function PerformanceMonitoringPage() {
  return (
    <div className='space-y-6'>
      <PageHeader
        title='Performance Monitoring'
        subtitle='Real-time uptime, speed tests, response trends, and alert status across all monitored endpoints.'
        actions={
          <Button variant='outline' size='sm' className='gap-2' onClick={() => toast.success('Monitors refreshed!')}>
            <RefreshCw className='h-4 w-4' /> Refresh
          </Button>
        }
      />

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        <Card className='glass p-4'>
          <div className='flex items-center justify-between'>
            <p className='text-sm text-slate-500'>Realtime Uptime</p>
            <span className='flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_2px_rgba(16,185,129,0.5)]' />
          </div>
          <p className='mt-2 text-3xl font-semibold'>99.96%</p>
          <p className='mt-1 text-xs text-emerald-500'>All systems operational</p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Avg Response Time</p>
          <p className='mt-2 text-3xl font-semibold'>241ms</p>
          <Progress className='mt-3' value={82} indicatorClassName='bg-accent' />
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Server Health</p>
          <p className='mt-2 text-3xl font-semibold'>Healthy</p>
          <div className='mt-2 flex items-center gap-2 text-xs text-emerald-500'>
            <Server className='h-3.5 w-3.5' /> All regions operational
          </div>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Active Alerts</p>
          <p className='mt-2 text-3xl font-semibold'>3</p>
          <div className='mt-2 flex items-center gap-2 text-xs text-amber-500'>
            <ShieldAlert className='h-3.5 w-3.5' /> Requires review
          </div>
        </Card>
      </div>

      <Tabs defaultValue='monitors'>
        <TabsList>
          <TabsTrigger value='monitors'>Active Monitors</TabsTrigger>
          <TabsTrigger value='uptime'>Uptime History</TabsTrigger>
          <TabsTrigger value='speed'>Speed Test</TabsTrigger>
          <TabsTrigger value='incidents'>Incidents</TabsTrigger>
        </TabsList>

        {/* ── Monitors Tab ── */}
        <TabsContent value='monitors' className='space-y-4 pt-4'>
          <Card className='glass p-5'>
            <div className='mb-4 flex flex-wrap items-center justify-between gap-3'>
              <h3 className='font-display text-lg font-semibold'>Monitored Endpoints</h3>
              <div className='flex gap-2'>
                <Input className='w-56' placeholder='https://add-new-site.com' />
                <Select defaultValue='1min'>
                  <SelectTrigger className='w-32'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='30sec'>Every 30s</SelectItem>
                    <SelectItem value='1min'>Every 1 min</SelectItem>
                    <SelectItem value='5min'>Every 5 min</SelectItem>
                  </SelectContent>
                </Select>
                <Button size='sm' onClick={() => toast.success('Monitor added!')}>Add</Button>
              </div>
            </div>
            <div className='space-y-3'>
              {monitors.map((m) => (
                <div key={m.id} className='flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-700'>
                  <div className='flex items-center gap-3'>
                    {m.status === 'up' ? (
                      <Wifi className='h-4 w-4 text-emerald-500' />
                    ) : (
                      <WifiOff className='h-4 w-4 text-red-500' />
                    )}
                    <div>
                      <p className='text-sm font-medium'>{m.url}</p>
                      <p className='text-xs text-slate-500'>Check: {m.checkEvery}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='text-right'>
                      <p className='text-xs text-slate-500'>Response</p>
                      <p className='text-sm font-semibold'>{m.responseMs}ms</p>
                    </div>
                    <div className='text-right'>
                      <p className='text-xs text-slate-500'>Uptime</p>
                      <p className='text-sm font-semibold text-emerald-500'>{m.uptime}%</p>
                    </div>
                    <Badge variant={m.status === 'up' ? 'success' : 'danger'}>
                      {m.status === 'up' ? 'Up' : 'Down'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* ── Uptime History Tab ── */}
        <TabsContent value='uptime' className='pt-4'>
          <UptimeChart data={uptimeHistory} />
        </TabsContent>

        {/* ── Speed Test Tab ── */}
        <TabsContent value='speed' className='space-y-4 pt-4'>
          <div className='grid gap-4 md:grid-cols-3'>
            {[
              { label: 'Desktop Load Time', value: '2.1s', progress: 72, color: 'bg-primary' },
              { label: 'Mobile Load Time', value: '3.4s', progress: 53, color: 'bg-amber-500' },
              { label: 'Server Response (TTFB)', value: '241ms', progress: 86, color: 'bg-emerald-500' },
            ].map((s) => (
              <Card key={s.label} className='glass p-5'>
                <p className='text-sm text-slate-500'>{s.label}</p>
                <p className='mt-2 text-3xl font-semibold'>{s.value}</p>
                <Progress className='mt-3' value={s.progress} indicatorClassName={s.color} />
              </Card>
            ))}
          </div>
          <Card className='glass p-5'>
            <h3 className='font-display text-lg font-semibold'>Core Web Vitals Breakdown</h3>
            <div className='mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                { metric: 'LCP (Largest Contentful Paint)', value: '2.4s', status: 'good', threshold: 'Good < 2.5s' },
                { metric: 'CLS (Cumulative Layout Shift)', value: '0.07', status: 'good', threshold: 'Good < 0.1' },
                { metric: 'INP (Interaction to Next Paint)', value: '218ms', status: 'warning', threshold: 'Good < 200ms' },
                { metric: 'TTFB (Time to First Byte)', value: '241ms', status: 'good', threshold: 'Good < 800ms' },
                { metric: 'FCP (First Contentful Paint)', value: '1.8s', status: 'good', threshold: 'Good < 1.8s' },
                { metric: 'TBT (Total Blocking Time)', value: '310ms', status: 'warning', threshold: 'Good < 200ms' },
              ].map((v) => (
                <div key={v.metric} className='rounded-xl border border-slate-200 p-3 dark:border-slate-700'>
                  <div className='flex items-center justify-between gap-2'>
                    <p className='text-xs font-medium text-slate-600 dark:text-slate-300'>{v.metric}</p>
                    <Badge variant={v.status === 'good' ? 'success' : 'warning'}>{v.status}</Badge>
                  </div>
                  <p className='mt-2 text-xl font-semibold'>{v.value}</p>
                  <p className='text-xs text-slate-500'>{v.threshold}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* ── Incidents Tab ── */}
        <TabsContent value='incidents' className='pt-4'>
          <Card className='glass p-5'>
            <h3 className='font-display text-lg font-semibold'>Downtime Incidents</h3>
            <div className='mt-4 space-y-3'>
              {incidents.map((i) => (
                <div key={i.id} className='flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-700'>
                  <div className='flex items-center gap-2'>
                    <Activity className='h-4 w-4 text-slate-400' />
                    <div>
                      <p className='text-sm font-medium'>{i.service}</p>
                      <p className='mt-0.5 text-xs text-slate-500'>Duration: {i.duration} · {i.when}</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Badge variant={i.impact === 'High' ? 'danger' : i.impact === 'Medium' ? 'warning' : 'muted'}>
                      {i.impact}
                    </Badge>
                    <Badge variant='success'>Resolved</Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
