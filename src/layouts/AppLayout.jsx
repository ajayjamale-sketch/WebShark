import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { appNavigation } from '../constants/navigation'
import { useAppContext } from '../context/AppContext'
import { CommandPalette } from '../components/common/CommandPalette'
import { AIChatWidget } from '../components/common/AIChatWidget'
import { OnboardingTour } from '../components/common/OnboardingTour'
import { Sidebar } from '../components/dashboard/Sidebar'
import { TopNavbar } from '../components/dashboard/TopNavbar'
import { Button } from '../components/ui/button'

export function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsCommandOpen } = useAppContext()
  const location = useLocation()

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIsCommandOpen(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [setIsCommandOpen])

  return (
    <div className='min-h-screen lg:flex bg-background text-foreground'>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {mobileOpen ? (
        <div className='fixed inset-0 z-40 bg-slate-900/50 lg:hidden' onClick={() => setMobileOpen(false)} />
      ) : null}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-72 border-r border-border bg-card p-4 transition-transform lg:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='mb-4 flex items-center justify-between'>
          <p className='font-display text-lg font-semibold'>WebShark</p>
          <Button size='sm' variant='ghost' onClick={() => setMobileOpen(false)}>
            Close
          </Button>
        </div>
        <nav className='space-y-1'>
          {appNavigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className='flex items-center gap-3 rounded-none px-3 py-2 text-sm hover:bg-accent/10 transition-all font-bold uppercase tracking-widest'
              onClick={() => setMobileOpen(false)}
            >
              <item.icon className='h-4 w-4 text-primary-blue' />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className='min-w-0 flex-1'>
        <TopNavbar onMobileMenu={() => setMobileOpen(true)} />
        <div className='p-4 lg:p-6 relative z-0'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <CommandPalette />
      <OnboardingTour />
      <AIChatWidget />
    </div>
  )
}

