import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../ui/button'
import { useAppContext } from '../../context/AppContext'

const steps = [
  'Create your first workspace audit to establish a baseline score.',
  'Connect Google Search Console for live keyword insights.',
  'Set uptime and SEO alerts so your team gets proactive warnings.',
]

export function OnboardingTour() {
  const { onboardingOpen, setOnboardingOpen } = useAppContext()

  return (
    <AnimatePresence>
      {onboardingOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className='fixed bottom-5 right-5 z-30 w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900'
        >
          <button
            type='button'
            className='absolute right-2 top-2 rounded-md p-1 hover:bg-slate-100 dark:hover:bg-slate-800'
            onClick={() => setOnboardingOpen(false)}
          >
            <X className='h-4 w-4' />
          </button>
          <p className='text-xs uppercase tracking-wide text-accent'>Interactive onboarding</p>
          <h4 className='mt-1 font-display text-lg font-semibold'>Get value in 5 minutes</h4>
          <ul className='mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300'>
            {steps.map((step, index) => (
              <li key={step} className='flex gap-2'>
                <span className='mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary'>
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
          <Button className='mt-4 w-full' onClick={() => setOnboardingOpen(false)}>
            Start exploring
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

