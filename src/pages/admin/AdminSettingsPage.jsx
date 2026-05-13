import { useState } from 'react'
import { Crown, RefreshCw, Save, Settings2 } from 'lucide-react'
import { toast } from 'sonner'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import { Switch } from '../../components/ui/switch'
import { pricingPlans } from '../../data/mockData'

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    registrationOpen: true,
    emailVerification: true,
    auditRateLimit: true,
    debugLogging: false,
  })

  const toggle = (key) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: !prev[key] }
      toast.success(`${key} ${next[key] ? 'enabled' : 'disabled'}`)
      return next
    })
  }

  return (
    <div className='space-y-6'>
      <PageHeader
        title='Protocol Configuration'
        subtitle='Modify platform behavior, resource allocation, and administrative overrides.'
        actions={
          <Button className='gap-2 rounded-none bg-primary-blue text-white font-bold text-[10px] uppercase tracking-widest' onClick={() => toast.success('Settings saved!')}>
            <Save className='h-4 w-4' />
            Commit Changes
          </Button>
        }
      />

      {/* Pricing Plans Management */}
      <Card className='p-6 rounded-none border border-border bg-card industrial-corner'>
        <div className='flex items-center gap-2 mb-6 border-b border-border pb-3'>
          <Crown className='h-5 w-5 text-amber-500' />
          <h3 className='font-display text-lg font-bold text-foreground uppercase tracking-tight'>Monetization Matrix</h3>
        </div>
        <div className='grid gap-4 md:grid-cols-3'>
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`rounded-none border p-4 bg-accent/5 ${plan.popular ? 'border-primary-blue' : 'border-border'}`}>
              <div className='flex items-center justify-between'>
                <h4 className='font-bold text-xs uppercase tracking-widest text-foreground'>{plan.name}</h4>
                {plan.popular ? <Badge className="rounded-none bg-primary-blue text-white text-[8px] font-black uppercase tracking-widest">Priority</Badge> : null}
              </div>
              <div className='mt-4 space-y-3'>
                <div>
                  <label className='text-[9px] font-bold text-muted-foreground uppercase tracking-widest'>Monthly Rate ($)</label>
                  <Input defaultValue={plan.monthly} type='number' className='mt-1 h-8 text-xs rounded-none border-border bg-background font-bold' />
                </div>
                <div>
                  <label className='text-[9px] font-bold text-muted-foreground uppercase tracking-widest'>Annual Rate ($)</label>
                  <Input defaultValue={plan.yearly} type='number' className='mt-1 h-8 text-xs rounded-none border-border bg-background font-bold' />
                </div>
                <Button size='sm' variant='outline' className='w-full gap-1.5 mt-2 rounded-none border-border text-[9px] font-bold uppercase tracking-widest hover:bg-accent/10 transition-all' onClick={() => toast.success(`${plan.name} plan updated!`)}>
                  <Save className='h-3.5 w-3.5' /> Update Protocol
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* System Configuration */}
      <Card className='p-6 rounded-none border border-border bg-card industrial-corner'>
        <div className='flex items-center gap-2 mb-6 border-b border-border pb-3'>
          <Settings2 className='h-5 w-5 text-primary-blue' />
          <h3 className='font-display text-lg font-bold text-foreground uppercase tracking-tight'>System Directives</h3>
        </div>
        <div className='space-y-3'>
          {[
            ['maintenanceMode', 'Blackout Protocol', 'Temporarily disable access for all non-admin nodes', 'danger'],
            ['registrationOpen', 'Open Influx', 'Allow new entities to create protocols', null],
            ['emailVerification', 'Verification Required', 'New nodes must verify data integrity before access', null],
            ['auditRateLimit', 'Flow Control', 'Limit audit frequency per workspace to prevent overload', null],
            ['debugLogging', 'Verbose Output', 'Enable high-volume logging for system analysis', 'warning'],
          ].map(([key, label, desc, tone]) => (
            <div key={key} className='flex items-center justify-between gap-4 rounded-none border border-border px-4 py-4 bg-accent/5 hover:bg-accent/10 transition-all'>
              <div>
                <div className='flex items-center gap-3'>
                  <p className='text-xs font-bold text-foreground uppercase tracking-widest'>{label}</p>
                  {tone === 'danger' && settings[key] && <Badge className="rounded-none bg-rose-500/10 text-rose-600 border-rose-600/20 text-[8px] font-black">ACTIVE</Badge>}
                  {tone === 'warning' && settings[key] && <Badge className="rounded-none bg-amber-500/10 text-amber-600 border-amber-600/20 text-[8px] font-black">ACTIVE</Badge>}
                </div>
                <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1'>{desc}</p>
              </div>
              <Switch
                id={`setting-${key}`}
                checked={settings[key]}
                onCheckedChange={() => toggle(key)}
                className="data-[state=checked]:bg-primary-blue"
              />
            </div>
          ))}
        </div>
      </Card>

      {/* Admin API Key */}
      <Card className='p-6 rounded-none border border-border bg-card max-w-2xl industrial-corner'>
        <h3 className='font-display text-lg font-bold text-foreground uppercase tracking-tight mb-2'>Master Access Key</h3>
        <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4'>Root authentication key for internal platform systems.</p>
        <div className='flex gap-2'>
          <Input
            value='ws_admin_master_9xas3h2c7ztqa_XXXX'
            readOnly
            className='font-mono text-xs rounded-none border-border bg-background'
            type='password'
          />
          <Button variant='outline' className='gap-2 shrink-0 rounded-none border-border text-[10px] font-bold uppercase tracking-widest hover:bg-accent/10 transition-all' onClick={() => toast.info('Key regenerated!')}>
            <RefreshCw className='h-4 w-4' /> Regenerate Key
          </Button>
        </div>
      </Card>
    </div>
  )
}
