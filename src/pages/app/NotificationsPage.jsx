import { useState } from 'react'
import { Bell, BellOff, CheckCheck, Trash2, Settings2, Shield, Zap, TrendingUp } from 'lucide-react'
import { toast } from 'sonner'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Switch } from '../../components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { notificationsSeed } from '../../data/mockData'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../utils/cn'

const priorityVariant = { high: 'danger', medium: 'warning', low: 'muted' }

function formatTime(iso) {
  const d = new Date(iso)
  const diff = Date.now() - d.getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return d.toLocaleDateString()
}

const NotificationItem = ({ n, markRead, remove }) => (
  <motion.div
    layout
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 10 }}
    className={cn(
      'flex items-start justify-between gap-4 rounded-2xl border p-5 transition-all group relative overflow-hidden',
      n.read
        ? 'border-white/5 bg-white/5 opacity-60'
        : 'border-primary-blue/20 bg-primary-blue/5 shadow-neon-blue/10'
    )}
  >
    {!n.read && <div className="absolute top-0 left-0 w-1 h-full bg-primary-blue shadow-neon-blue" />}
    
    <div className='flex items-start gap-4'>
      <div className={cn(
        "h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border",
        n.read ? "bg-slate-900 border-white/5 text-slate-500" : "bg-primary-blue/20 border-primary-blue/20 text-accent-cyan"
      )}>
        {n.priority === 'high' ? <Shield className="h-5 w-5" /> : <Bell className="h-5 w-5" />}
      </div>
      <div>
        <div className='flex items-center gap-3 mb-1'>
          <p className='text-sm font-bold text-white'>{n.title}</p>
          <Badge className={cn(
            "text-[8px] font-black uppercase tracking-widest px-2 py-0.5",
            priorityVariant[n.priority] === 'danger' ? 'bg-rose-500/10 text-rose-500' : 
            priorityVariant[n.priority] === 'warning' ? 'bg-amber-500/10 text-amber-500' : 'bg-slate-800 text-slate-400'
          )}>
            {n.priority}
          </Badge>
        </div>
        <p className='text-xs text-slate-400 font-light leading-relaxed'>{n.message}</p>
        <p className='mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest'>{formatTime(n.createdAt)}</p>
      </div>
    </div>
    
    <div className='flex gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity'>
      {!n.read && (
        <Button size='icon' variant='ghost' className='h-9 w-9 rounded-xl bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-500' onClick={() => markRead(n.id)}>
          <CheckCheck className='h-4 w-4' />
        </Button>
      )}
      <Button size='icon' variant='ghost' className='h-9 w-9 rounded-xl bg-white/5 hover:bg-rose-500/10 hover:text-rose-400' onClick={() => remove(n.id)}>
        <Trash2 className='h-4 w-4' />
      </Button>
    </div>
  </motion.div>
)

const NotifList = ({ data, markRead, remove }) => (
  <div className='space-y-3'>
    <AnimatePresence mode='popLayout'>
      {data.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='flex flex-col items-center gap-4 py-20 text-slate-500'
        >
          <div className="p-6 rounded-full bg-white/5 border border-white/5">
             <BellOff className='h-12 w-12 opacity-20' />
          </div>
          <p className='text-sm font-bold uppercase tracking-widest'>Encryption Silent. No Data.</p>
        </motion.div>
      ) : (
        data.map((n) => (
          <NotificationItem key={n.id} n={n} markRead={markRead} remove={remove} />
        ))
      )}
    </AnimatePresence>
  </div>
)

export default function NotificationsPage() {
  const [items, setItems] = useState(notificationsSeed)
  const [prefs, setPrefs] = useState({
    seoRankAlerts: true,
    downtimeAlerts: true,
    securityAlerts: true,
    weeklyDigest: false,
    emailAlerts: true,
  })

  const unreadCount = items.filter((n) => !n.read).length

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })))
    toast.success('Protocol Synchronized. All records marked as read.')
  }

  const markRead = (id) => setItems((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n))
  const remove = (id) => {
    setItems((prev) => prev.filter((n) => n.id !== id))
    toast.info('Telemetry record dismissed.')
  }

  const filterItems = (filter) => {
    if (filter === 'unread') return items.filter((n) => !n.read)
    if (filter === 'high') return items.filter((n) => n.priority === 'high')
    return items
  }

  return (
    <div className='space-y-8 pb-10'>
      <PageHeader
        title='Intelligence Feed'
        subtitle='Real-time telemetry on SEO nodes, site availability, and security protocols.'
        actions={
          unreadCount > 0 ? (
            <Button className='bg-primary-blue/10 border-primary-blue/20 text-primary-blue hover:bg-primary-blue hover:text-white transition-all gap-2 rounded-xl' onClick={markAllRead}>
              <CheckCheck className='h-4 w-4' />
              Mark All Synchronized
            </Button>
          ) : null
        }
      />

      <div className='grid gap-6 md:grid-cols-4'>
        {[
          { label: 'Total Logs', value: items.length, icon: Bell, color: 'text-slate-400' },
          { label: 'Unread Intel', value: unreadCount, icon: Zap, color: 'text-primary-blue' },
          { label: 'Critical Errors', value: items.filter((n) => n.priority === 'high').length, icon: Shield, color: 'text-rose-500' },
          { label: 'Dismissed', value: 12, icon: TrendingUp, color: 'text-emerald-500' },
        ].map((s) => (
          <Card key={s.label} className='glass-premium p-6 group'>
            <div className="flex items-center justify-between mb-4">
              <p className='text-[10px] font-bold text-slate-500 uppercase tracking-widest'>{s.label}</p>
              <s.icon className={cn("h-4 w-4", s.color)} />
            </div>
            <p className={`text-3xl font-black text-white`}>{s.value}</p>
          </Card>
        ))}
      </div>

      <Tabs defaultValue='all' className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-2">
           <TabsList className="bg-white/5 border border-white/5 rounded-2xl p-1 h-auto">
             <TabsTrigger value='all' className="rounded-xl px-6 py-2.5 data-[state=active]:bg-primary-blue data-[state=active]:text-white transition-all">
                All Logs <Badge className='ml-2 bg-white/10 text-[10px]'>{items.length}</Badge>
             </TabsTrigger>
             <TabsTrigger value='unread' className="rounded-xl px-6 py-2.5 data-[state=active]:bg-primary-blue data-[state=active]:text-white transition-all">
                Active <Badge className='ml-2 bg-white/10 text-[10px]'>{unreadCount}</Badge>
             </TabsTrigger>
             <TabsTrigger value='high' className="rounded-xl px-6 py-2.5 data-[state=active]:bg-rose-500 data-[state=active]:text-white transition-all">
                Critical
             </TabsTrigger>
             <TabsTrigger value='preferences' className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white/10 data-[state=active]:text-white transition-all">
                Protocols
             </TabsTrigger>
           </TabsList>
        </div>

        <TabsContent value='all'>
          <div className='max-w-4xl'>
            <NotifList data={filterItems('all')} markRead={markRead} remove={remove} />
          </div>
        </TabsContent>

        <TabsContent value='unread'>
          <div className='max-w-4xl'>
            <NotifList data={filterItems('unread')} markRead={markRead} remove={remove} />
          </div>
        </TabsContent>

        <TabsContent value='high'>
          <div className='max-w-4xl'>
            <NotifList data={filterItems('high')} markRead={markRead} remove={remove} />
          </div>
        </TabsContent>

        <TabsContent value='preferences'>
          <Card className='glass-premium p-8 max-w-2xl'>
            <div className="flex items-center gap-3 mb-8">
               <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <Settings2 className="h-5 w-5 text-accent-cyan" />
               </div>
               <div>
                  <h3 className='font-display text-xl font-black text-white uppercase tracking-tight'>Notification Protocols</h3>
                  <p className='text-xs font-bold text-slate-500 uppercase tracking-widest mt-1'>Control intelligence stream triggers</p>
               </div>
            </div>
            
            <div className='space-y-4'>
              {[
                ['seoRankAlerts', 'SEO Ranking Alerts', 'Notify when keyword positions change significantly', TrendingUp],
                ['downtimeAlerts', 'Downtime Notifications', 'Instant alert when any monitored site goes down', Zap],
                ['securityAlerts', 'Security Alerts', 'SSL expiry, header issues, and vulnerabilities', Shield],
                ['weeklyDigest', 'Weekly Digest Email', 'Summary of all activity every Monday', Bell],
                ['emailAlerts', 'Email Notifications', 'Receive all alerts to your registered email', Settings2],
              ].map(([key, label, desc, Icon]) => (
                <div key={key} className='flex items-center justify-between gap-6 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 hover:bg-white/10 transition-all'>
                  <div className="flex items-center gap-4">
                     <div className="h-10 w-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-500">
                        <Icon className="h-5 w-5" />
                     </div>
                     <div>
                        <p className='text-sm font-bold text-white'>{label}</p>
                        <p className='text-xs text-slate-500 font-light'>{desc}</p>
                     </div>
                  </div>
                  <Switch
                    id={`pref-${key}`}
                    checked={prefs[key]}
                    onCheckedChange={(v) => {
                      setPrefs((p) => ({ ...p, [key]: v }))
                      toast.success(`${label} ${v ? 'initialized' : 'terminated'}`)
                    }}
                    className="data-[state=checked]:bg-accent-cyan"
                  />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
