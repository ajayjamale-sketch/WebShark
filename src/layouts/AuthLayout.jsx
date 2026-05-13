import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'
import PublicNavbar from '../components/common/PublicNavbar'
import PublicFooter from '../components/common/PublicFooter'

export function AuthLayout() {
  return (
    <div className='min-h-screen bg-background text-foreground antialiased selection:bg-primary-blue/20 flex flex-col'>
      <PublicNavbar />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-4 relative overflow-hidden bg-card">
        {/* Stunning Background Detail */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/5 blur-[150px]" />
           <div className="absolute top-0 left-0 w-full h-full blueprint-grid opacity-[0.02]" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-lg p-12 bg-background border border-border industrial-corner shadow-[0_40px_100px_rgba(0,0,0,0.2)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
        >
          {/* Decorative Corner Detail */}
          <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-primary-blue" />
          <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-primary-blue" />
          
          <Outlet />
        </motion.div>
      </main>

      <PublicFooter />
    </div>
  )
}
