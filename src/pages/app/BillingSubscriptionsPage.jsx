import { useState } from 'react'
import { Crown, Download, Zap } from 'lucide-react'
import { toast } from 'sonner'
import { PlanUpgradeModal } from '../../components/common/PlanUpgradeModal'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Progress } from '../../components/ui/progress'
import { Switch } from '../../components/ui/switch'
import { pricingPlans } from '../../data/mockData'

const invoices = [
  { date: 'May 1, 2026', plan: 'Growth', amount: '$89.00', status: 'paid' },
  { date: 'Apr 1, 2026', plan: 'Growth', amount: '$89.00', status: 'paid' },
  { date: 'Mar 1, 2026', plan: 'Growth', amount: '$89.00', status: 'paid' },
  { date: 'Feb 1, 2026', plan: 'Growth', amount: '$89.00', status: 'paid' },
  { date: 'Jan 1, 2026', plan: 'Starter', amount: '$39.00', status: 'paid' },
]

const usage = [
  { label: 'Audits Used', used: 742, limit: 1200, color: 'bg-primary' },
  { label: 'Keyword Seats', used: 3220, limit: 5000, color: 'bg-accent' },
  { label: 'Team Members', used: 7, limit: 10, color: 'bg-emerald-500' },
  { label: 'Websites', used: 8, limit: 20, color: 'bg-amber-500' },
]

export default function BillingSubscriptionsPage() {
  const [yearly, setYearly] = useState(false)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const currentPlan = 'Growth'

  return (
    <div className='space-y-6'>
      <PageHeader
        title='Billing & Subscriptions'
        subtitle='Manage plans, usage, invoices, and upgrades for your workspace.'
        actions={
          <Button className='gap-2' onClick={() => setShowUpgradeModal(true)}>
            <Zap className='h-4 w-4' />
            Change Plan
          </Button>
        }
      />

      {/* Current Plan Banner */}
      <Card className='glass border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 p-5'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <Crown className='h-6 w-6 text-amber-500' />
            <div>
              <p className='font-display font-semibold'>Growth Plan</p>
              <p className='text-sm text-slate-500'>Renews May 30, 2026 · $89/month</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <Badge variant='success'>Active</Badge>
            <Button variant='outline' size='sm' onClick={() => setShowUpgradeModal(true)}>
              Upgrade to Scale
            </Button>
          </div>
        </div>
      </Card>

      {/* Billing Cycle Toggle */}
      <Card className='glass flex flex-wrap items-center justify-between gap-3 p-5'>
        <div>
          <p className='font-semibold'>Billing Cycle</p>
          <p className='text-sm text-slate-500'>Switch between monthly and yearly pricing.</p>
        </div>
        <div className='flex items-center gap-3'>
          <span className={`text-sm ${!yearly ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-500'}`}>Monthly</span>
          <Switch id='billing-toggle' checked={yearly} onCheckedChange={setYearly} />
          <span className={`text-sm ${yearly ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-500'}`}>Yearly</span>
          <Badge variant='success'>Save 18%</Badge>
        </div>
      </Card>

      {/* Plan Cards */}
      <div className='grid gap-4 md:grid-cols-3'>
        {pricingPlans.map((plan) => {
          const price = yearly ? Math.round(plan.yearly / 12) : plan.monthly
          const isCurrent = plan.name === currentPlan
          return (
            <Card key={plan.id} className={`glass p-5 ${isCurrent ? 'border-primary ring-1 ring-primary/30' : ''}`}>
              <div className='flex items-center justify-between'>
                {plan.popular ? <Badge>Most Popular</Badge> : <span />}
                {isCurrent ? <Badge variant='success'>Current</Badge> : null}
              </div>
              <h3 className='mt-2 font-display text-xl font-semibold'>{plan.name}</h3>
              <p className='mt-1 text-3xl font-bold'>
                ${price}<span className='text-sm font-normal text-slate-500'>/{yearly ? 'mo (billed yr)' : 'mo'}</span>
              </p>
              <ul className='mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300'>
                <li>✓ {plan.seats}</li>
                <li>✓ {plan.projects}</li>
                <li>✓ AI insights included</li>
                {plan.id === 'scale' ? <li>✓ White-label reports</li> : null}
              </ul>
              <Button
                className='mt-5 w-full'
                variant={isCurrent ? 'outline' : plan.popular ? 'default' : 'outline'}
                onClick={() => !isCurrent && setShowUpgradeModal(true)}
                disabled={isCurrent}
              >
                {isCurrent ? 'Current Plan' : `Switch to ${plan.name}`}
              </Button>
            </Card>
          )
        })}
      </div>

      {/* Usage + Invoices */}
      <div className='grid gap-4 lg:grid-cols-2'>
        <Card className='glass p-5'>
          <h3 className='font-display text-lg font-semibold'>Usage Tracking</h3>
          <div className='mt-4 space-y-5'>
            {usage.map((u) => (
              <div key={u.label}>
                <div className='mb-1 flex items-center justify-between text-sm'>
                  <p>{u.label}</p>
                  <p className='text-slate-500'>{u.used.toLocaleString()} / {u.limit.toLocaleString()}</p>
                </div>
                <Progress value={(u.used / u.limit) * 100} indicatorClassName={u.color} />
                <p className='mt-0.5 text-right text-xs text-slate-400'>
                  {Math.round((u.used / u.limit) * 100)}% used
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className='glass p-5'>
          <div className='mb-4 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Crown className='h-4 w-4 text-amber-500' />
              <h3 className='font-display text-lg font-semibold'>Payment History</h3>
            </div>
            <Button variant='ghost' size='sm' className='gap-1.5' onClick={() => toast.info('All invoices downloaded!')}>
              <Download className='h-3.5 w-3.5' /> All
            </Button>
          </div>
          <div className='space-y-2'>
            {invoices.map((inv, i) => (
              <div key={i} className='flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2.5 dark:border-slate-700'>
                <div>
                  <p className='text-sm font-medium'>{inv.date}</p>
                  <p className='text-xs text-slate-500'>{inv.plan} Plan</p>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-sm font-semibold'>{inv.amount}</span>
                  <Badge variant='success'>{inv.status}</Badge>
                  <Button size='icon' variant='ghost' className='h-7 w-7' onClick={() => toast.success(`Invoice for ${inv.date} downloaded!`)}>
                    <Download className='h-3.5 w-3.5' />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <PlanUpgradeModal open={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} currentPlan={currentPlan} />
    </div>
  )
}
