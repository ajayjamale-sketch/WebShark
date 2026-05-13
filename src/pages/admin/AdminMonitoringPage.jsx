import { Activity, CheckCircle, Database, Server, ShieldCheck, Wifi, Terminal, Cpu, HardDrive, Zap, AlertTriangle } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Card } from '../../components/ui/card'
import { motion } from 'framer-motion'

const responseData = Array.from({ length: 20 }, (_, i) => ({
  t: `${i + 1}:00`,
  api: 180 + Math.floor(Math.random() * 80),
  crawler: 240 + Math.floor(Math.random() * 100),
}))

const services = [
  { name: 'Web Application', status: 'operational', uptime: '99.97%', icon: Wifi },
  { name: 'REST API', status: 'operational', uptime: '99.94%', icon: Activity },
  { name: 'Crawl Engine', status: 'operational', uptime: '99.88%', icon: Server },
  { name: 'Database Cluster', status: 'operational', uptime: '100%', icon: Database },
  { name: 'Auth Service', status: 'operational', uptime: '100%', icon: ShieldCheck },
  { name: 'Report Generator', status: 'degraded', uptime: '98.2%', icon: CheckCircle },
]

const logs = [
  { id: 1, time: '08:42', service: 'Crawl Engine', message: 'Auto-scaled to 8 workers during peak load', level: 'info' },
  { id: 2, time: '07:15', service: 'REST API', message: 'Rate limit threshold reached for workspace w3', level: 'warn' },
  { id: 3, time: '03:11', service: 'Report Generator', message: 'PDF queue backed up — 48 pending', level: 'error' },
  { id: 4, time: 'Yesterday', service: 'Database', message: 'Nightly backup completed successfully', level: 'info' },
]

const logStyle = { 
  info: { color: 'text-blue-500', border: 'border-blue-500/20', bg: 'bg-blue-500/5' }, 
  warn: { color: 'text-amber-500', border: 'border-amber-500/20', bg: 'bg-amber-500/5' }, 
  error: { color: 'text-rose-500', border: 'border-rose-500/20', bg: 'bg-rose-500/5' } 
}

export default function AdminMonitoringPage() {
  return (
    <div className='space-y-8 pb-10'>
      <PageHeader
        title='Infrastructure Monitoring'
        subtitle='Real-time platform health, API performance, and node status.'
      />

      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
        <Card className='p-6 relative overflow-hidden group industrial-corner'>
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
             <Activity className="h-12 w-12 text-emerald-500" />
          </div>
          <div className='flex items-center gap-3 mb-4'>
            <span className='h-2.5 w-2.5 rounded-none bg-emerald-500 shadow-neon-blue animate-pulse' />
            <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>Platform Integrity</p>
          </div>
          <p className='text-2xl font-black text-emerald-500 uppercase tracking-tighter'>All Systems Active</p>
          <p className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-widest">NODES OPERATING WITHIN MARGINS</p>
        </Card>

        {[
          { label: 'CPU Usage', value: 38, icon: Cpu, tone: 'emerald-500' },
          { label: 'Memory Allocation', value: 61, icon: HardDrive, tone: 'amber-500' },
          { label: 'Active Jobs', value: 12, icon: Zap, tone: 'accent-cyan', text: '3 QUEUED, 9 RUNNING' },
        ].map((item) => (
          <Card key={item.label} className='p-6 industrial-corner'>
            <div className="flex items-center justify-between mb-4">
               <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>{item.label}</p>
               <item.icon className={`h-4 w-4 text-${item.tone}`} />
            </div>
            <div className="flex items-baseline gap-2">
               <p className='text-3xl font-black text-foreground'>{item.value}{item.label.includes('Usage') || item.label.includes('Allocation') ? '%' : ''}</p>
            </div>
            {item.label.includes('Usage') || item.label.includes('Allocation') ? (
               <div className="mt-3 h-1.5 w-full bg-accent/10 rounded-none overflow-hidden border border-border">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full bg-${item.tone} rounded-none`}
                  />
               </div>
            ) : (
               <p className='text-[10px] font-bold text-muted-foreground mt-3 uppercase tracking-widest'>{item.text}</p>
            )}
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className='glass-premium p-8'>
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary-blue/10">
                   <Activity className="h-5 w-5 text-primary-blue" />
                </div>
                <h3 className='font-display text-lg font-black text-foreground uppercase tracking-tight'>Service Mesh</h3>
             </div>
             <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px] font-bold uppercase tracking-widest px-3 py-1">Operational</Badge>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {services.map((svc) => {
              const Icon = svc.icon
              return (
                <div key={svc.name} className='flex items-center justify-between rounded-none border border-border bg-accent/5 p-4 hover:bg-accent/10 transition-all'>
                  <div className='flex items-center gap-3'>
                    <div className={`p-2 rounded-none border border-border ${svc.status === 'operational' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                       <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className='text-sm font-bold text-foreground'>{svc.name}</p>
                      <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>{svc.uptime} UP</p>
                    </div>
                  </div>
                  <div className={`h-2 w-2 rounded-none ${svc.status === 'operational' ? 'bg-emerald-500 shadow-neon-blue' : 'bg-amber-500 animate-pulse'}`} />
                </div>
              )
            })}
          </div>
        </Card>

        <Card className='glass-premium p-8'>
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-cyan/10">
                   <Zap className="h-5 w-5 text-accent-cyan" />
                </div>
                <h3 className='font-display text-lg font-black text-foreground uppercase tracking-tight'>Latency Matrix</h3>
             </div>
             <div className="flex gap-4">
                <div className="flex items-center gap-2">
                   <span className="h-2 w-2 rounded-full bg-primary-blue"></span>
                   <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">API</span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="h-2 w-2 rounded-full bg-accent-cyan"></span>
                   <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Crawler</span>
                </div>
             </div>
          </div>
          <div className='mt-4 h-[300px] min-h-0 w-full'>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={responseData} margin={{ top: 0, right: 0, bottom: 0, left: -25 }}>
                <defs>
                  <linearGradient id='apiGrad' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#1D4ED8' stopOpacity={0.2} />
                    <stop offset='95%' stopColor='#1D4ED8' stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id='crawlGrad' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#06B6D4' stopOpacity={0.2} />
                    <stop offset='95%' stopColor='#06B6D4' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray='3 3' stroke='hsl(var(--border) / 0.5)' />
                <XAxis dataKey='t' hide />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))', fontWeight: 700 }} tickFormatter={(v) => `${v}ms`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '0' }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Area type='monotone' dataKey='api' stroke='#1D4ED8' strokeWidth={2} fill='url(#apiGrad)' dot={false} />
                <Area type='monotone' dataKey='crawler' stroke='#06B6D4' strokeWidth={2} fill='url(#crawlGrad)' dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className='glass-premium p-8'>
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-3">
              <div className="p-2 rounded-none bg-accent/10 border border-border">
                 <Terminal className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className='font-display text-lg font-black text-foreground uppercase tracking-tight'>Operational Log</h3>
           </div>
           <button className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors">Clear Protocol</button>
        </div>
        
        <div className='space-y-3 font-mono'>
          {logs.map((log) => {
             const style = logStyle[log.level];
             return (
              <motion.div 
                key={log.id} 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-4 rounded-2xl border ${style.border} ${style.bg} p-4 group hover:bg-white/5 transition-all`}
              >
                <div className={`mt-1 h-2 w-2 rounded-full ${log.level === 'error' ? 'bg-rose-500 shadow-neon' : log.level === 'warn' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                     <p className={`text-[10px] font-bold uppercase tracking-widest ${style.color}`}>[{log.level}] {log.service}</p>
                     <p className='text-[10px] font-bold text-muted-foreground'>{log.time}</p>
                  </div>
                  <p className='text-sm text-foreground/80 font-light'>{log.message}</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-foreground text-muted-foreground">
                   <AlertTriangle className="h-3 w-3" />
                </button>
              </motion.div>
             )
          })}
        </div>
      </Card>
    </div>
  )
}
