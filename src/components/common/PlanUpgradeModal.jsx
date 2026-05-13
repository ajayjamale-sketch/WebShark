import { useState } from 'react'
import { Zap } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { pricingPlans } from '../../data/mockData'
import { toast } from 'sonner'

export function PlanUpgradeModal({ open, onClose, currentPlan }) {
  const [billing, setBilling] = useState('monthly')
  const [loading, setLoading] = useState(false)

  const handleUpgrade = async (plan) => {
    setLoading(plan.id)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    toast.success(`Switched to ${plan.name} plan!`)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='flex items-center gap-2'>
            <Zap className='h-5 w-5 text-primary' />
            Change Plan
          </DialogTitle>
        </DialogHeader>
        <div className='mb-4 flex justify-center gap-2 pt-2'>
          <button
            type='button'
            onClick={() => setBilling('monthly')}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition ${billing === 'monthly' ? 'bg-primary text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
          >
            Monthly
          </button>
          <button
            type='button'
            onClick={() => setBilling('yearly')}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition ${billing === 'yearly' ? 'bg-primary text-white' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
          >
            Yearly <span className='ml-1 text-xs text-emerald-500'>Save 17%</span>
          </button>
        </div>
        <div className='grid gap-3 sm:grid-cols-3'>
          {pricingPlans.map((plan) => {
            const isCurrent = plan.name.toLowerCase() === currentPlan?.toLowerCase()
            const price = billing === 'monthly' ? plan.monthly : Math.round(plan.yearly / 12)
            return (
              <div
                key={plan.id}
                className={`rounded-2xl border p-4 ${plan.popular ? 'border-primary bg-primary/5' : 'border-slate-200 dark:border-slate-700'}`}
              >
                {plan.popular ? <Badge className='mb-2'>Most Popular</Badge> : null}
                <h3 className='font-display text-lg font-semibold'>{plan.name}</h3>
                <p className='mt-1 text-2xl font-bold'>
                  ${price}<span className='text-sm font-normal text-slate-500'>/mo</span>
                </p>
                <ul className='mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-300'>
                  <li>✓ {plan.seats}</li>
                  <li>✓ {plan.projects}</li>
                  <li>✓ AI insights included</li>
                </ul>
                <Button
                  className='mt-4 w-full'
                  size='sm'
                  variant={isCurrent ? 'outline' : plan.popular ? 'default' : 'outline'}
                  disabled={isCurrent || loading === plan.id}
                  onClick={() => handleUpgrade(plan)}
                >
                  {loading === plan.id ? 'Switching...' : isCurrent ? 'Current Plan' : `Switch to ${plan.name}`}
                </Button>
              </div>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}
