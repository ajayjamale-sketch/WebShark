import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BaseInfoPage({ title, subtitle, icon: Icon, children }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <div className='relative min-h-full py-20 px-4 lg:px-8 bg-background'>
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      
      <motion.div 
        initial="hidden" 
        animate="show" 
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold text-muted-foreground hover:text-primary-blue transition-colors uppercase tracking-[0.3em]">
             <ArrowLeft className="h-3 w-3" /> Back to Intelligence Feed
          </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-16">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-16 w-16 bg-primary-blue/5 border border-primary-blue/20 flex items-center justify-center text-primary-blue industrial-corner">
              {Icon && <Icon className="h-8 w-8" />}
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground uppercase tracking-tighter mb-2">{title}</h1>
              <p className="text-[10px] font-bold text-primary-blue uppercase tracking-[0.3em]">{subtitle}</p>
            </div>
          </div>
          <div className="h-px w-full bg-border" />
        </motion.div>

        <motion.div variants={fadeUp} className="prose prose-invert max-w-none">
          {children}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-24 p-8 bg-accent/5 border border-border industrial-corner">
           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Operational Disclaimer</p>
           <p className="text-xs text-muted-foreground font-light leading-relaxed">
             This intelligence node contains sensitive operational data. Unauthorized reproduction or redistribution of WebShark proprietary telemetry is strictly prohibited under the Digital Defense Protocol.
           </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
