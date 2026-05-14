import { BarChart3, ShieldCheck, TrendingUp, Users, Wallet, ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react'
import { RevenueChart } from '../../components/charts/RevenueChart'
import { PageHeader } from '../../components/common/PageHeader'
import { Card } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { adminWorkspaces, revenueData } from '../../data/mockData'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboardPage() {
  const navigate = useNavigate()
  const stats = [
    { label: 'Active Users', value: '2,418', change: '+73', trend: 'up', icon: Users, color: 'primary-blue' },
    { label: 'System Health', value: '100%', change: 'Stable', trend: 'up', icon: ShieldCheck, color: 'emerald-500' },
    { label: 'MRR', value: '$284K', change: '+5.9%', trend: 'up', icon: Wallet, color: 'accent-cyan' },
    { label: 'Workspace Growth', value: '+12.4%', change: '+1.2%', trend: 'up', icon: BarChart3, color: 'amber-500' },
  ]

  return (
    <div className='space-y-8 pb-10'>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <PageHeader
          title='Command Center'
          subtitle='Platform-wide monitoring, subscriptions, and active nodes.'
        />
        <div className="flex items-center gap-3">
           <button 
            onClick={() => toast.success('INTEL_EXPORT_INITIATED', { description: 'Compiling platform-wide telemetry brief...' })}
            className="px-4 py-2 rounded-none bg-accent/5 border border-border hover:bg-accent/10 text-[10px] font-bold uppercase tracking-widest transition-all"
           >
              Export Intel
           </button>
           <button 
            onClick={() => {
              const toastId = toast.loading('FORCE_UPDATE_ACTIVE', { description: 'Syncing tactical nodes... Please hold.' });
              setTimeout(() => {
                toast.success('SYNC_COMPLETE', { id: toastId, description: 'All nodes updated to latest tactical version.' });
              }, 2000);
            }}
            className="px-4 py-2 rounded-none bg-primary-blue text-white text-[10px] font-bold uppercase tracking-widest shadow-neon-blue transition-all hover:translate-y-[-2px]"
           >
              Force Update
           </button>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className='p-6 group hover:border-primary-blue/50 transition-all industrial-corner'>
              <div className='flex items-center justify-between mb-4'>
                <div className={`p-3 rounded-none bg-${stat.color}/10 border border-${stat.color}/20 group-hover:bg-${stat.color}/20 transition-all`}>
                  <stat.icon className={`h-5 w-5 text-${stat.color === 'primary-blue' ? 'primary-blue' : stat.color === 'accent-cyan' ? 'accent-cyan' : stat.color}`} />
                </div>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
              <p className='text-xs font-bold text-muted-foreground uppercase tracking-widest'>{stat.label}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <p className='text-3xl font-black text-foreground'>{stat.value}</p>
                <div className={`flex items-center text-[10px] font-bold ${stat.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.change}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart data={revenueData} />
        </div>
        
        <Card className='p-6 flex flex-col industrial-corner'>
          <div className='flex items-center justify-between mb-8'>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-none bg-primary-blue/10 border border-primary-blue/20">
                <TrendingUp className='h-5 w-5 text-primary-blue' />
              </div>
              <h3 className='font-display text-lg font-bold text-foreground uppercase tracking-tight'>Active Nodes</h3>
            </div>
            <button 
              onClick={() => navigate('/admin/monitoring')}
              className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest hover:underline"
            >
              View All
            </button>
          </div>
          
          <div className='space-y-4 flex-1 overflow-y-auto scrollbar-none'>
            {adminWorkspaces.map((ws, i) => (
              <motion.div 
                key={ws.id} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.05) }}
                className='flex items-center justify-between rounded-none border border-border bg-accent/5 p-4 hover:bg-accent/10 transition-all cursor-default group'
              >
                <div className='flex items-center gap-4'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-none bg-background border border-border text-[10px] font-black text-muted-foreground group-hover:text-primary-blue group-hover:border-primary-blue/50 transition-all shadow-sm'>
                    0{i + 1}
                  </div>
                  <div>
                    <p className='text-sm font-bold text-foreground'>{ws.name}</p>
                    <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>{ws.members} ACTIVE NODES</p>
                  </div>
                </div>
                <Badge className={cn(
                  "px-3 py-1 rounded-none text-[10px] font-bold uppercase tracking-widest",
                  ws.plan === 'Scale' ? 'bg-primary-blue/20 text-primary-blue border-primary-blue/20' : 
                  ws.plan === 'Growth' ? 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/20' : 
                  'bg-accent/10 text-muted-foreground border-border'
                )}>
                  {ws.plan}
                </Badge>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
