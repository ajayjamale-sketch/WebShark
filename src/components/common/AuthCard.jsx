import { motion } from 'framer-motion'
import { Card } from '../ui/card'

export function AuthCard({ title, subtitle, children, footer }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Card className='glass relative w-full max-w-md p-8 overflow-hidden border-white/10'>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-primary"></div>
        <h1 className='font-display text-3xl font-bold tracking-tight text-white'>{title}</h1>
        {subtitle ? <p className='mt-2 text-sm text-slate-400'>{subtitle}</p> : null}
        <div className='mt-8'>{children}</div>
        {footer ? <div className='mt-6 text-center text-sm text-slate-400'>{footer}</div> : null}
      </Card>
    </motion.div>
  )
}
