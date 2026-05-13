import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { cn } from '../../utils/cn'

export function StatCard({ title, value, delta, suffix = '', tone = 'success', icon: Icon }) {
  const positive = delta?.startsWith('+')

  return (
    <motion.div transition={{ duration: 0.3, ease: "easeOut" }}>
      <Card className='relative p-6 group border-border bg-background hover:bg-accent/5 transition-all rounded-none'>
        <div className='flex items-center justify-between relative z-10'>
          <p className='text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors'>{title}</p>
          {Icon ? (
            <div className='flex h-10 w-10 items-center justify-center rounded-none bg-accent/10 border border-border text-primary-blue transition-all'>
              <Icon className='h-5 w-5' />
            </div>
          ) : null}
        </div>
        
        <div className='mt-6 flex items-end justify-between relative z-10'>
          <div>
            <p className='font-display text-3xl font-bold text-foreground tracking-tight uppercase'>
              {value}
              {suffix && <span className='text-xl text-muted-foreground font-bold ml-1'>{suffix}</span>}
            </p>
          </div>
          {delta ? (
            <Badge
              className={cn(
                'gap-1 px-3 py-1 rounded-none text-[9px] font-bold uppercase tracking-widest border',
                tone === 'warning' ? 'bg-amber-500/10 text-amber-600 border-amber-600/20' : 
                tone === 'danger' ? 'bg-rose-500/10 text-rose-600 border-rose-600/20' : 
                'bg-emerald-500/10 text-emerald-600 border-emerald-600/20'
              )}
            >
              {positive ? <ArrowUpRight className='h-3 w-3' /> : <ArrowDownRight className='h-3 w-3' />}
              {delta}
            </Badge>
          ) : null}
        </div>
      </Card>
    </motion.div>
  )
}
