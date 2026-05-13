import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import BaseInfoPage from '../../components/common/BaseInfoPage'
import { testimonialCards } from '../../data/mockData'

export default function TestimonialsPage() {
  return (
    <BaseInfoPage 
      title="User Telemetry" 
      subtitle="Operational Success // Stakeholder Feedback" 
      icon={Quote}
    >
      <div className='grid gap-8 md:grid-cols-2 mt-12'>
        {testimonialCards.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-background p-8 rounded-none border border-border flex flex-col justify-between shadow-sm industrial-corner"
          >
             <div>
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, i) => <div key={i} className="h-1.5 w-1.5 bg-primary-blue" />)}
                </div>
                <p className="text-lg text-foreground italic font-light leading-relaxed mb-8">"{testimonial.quote}"</p>
             </div>
             <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold text-xs">
                   {testimonial.author[0]}
                </div>
                <div>
                   <p className="text-foreground font-bold text-sm uppercase tracking-tight">{testimonial.author}</p>
                   <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                </div>
             </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-12 bg-card border border-border"
      >
        <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12 text-center">Operational <span className="text-primary-blue">Case Studies.</span></h3>
        <div className="grid md:grid-cols-3 gap-12">
           {[
             { metric: '+240%', label: 'Visibility Increase', brand: 'TechNova' },
             { metric: '-14ms', label: 'Crawl Latency', brand: 'Vertex' },
             { metric: '1.2M', label: 'Rankings Secured', brand: 'BrightCom' }
           ].map((stat, i) => (
             <div key={i} className="text-center group">
                <p className="text-5xl font-black text-primary-blue mb-2 tracking-tighter group-hover:scale-110 transition-transform">{stat.metric}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-1">{stat.label}</p>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.brand}</p>
             </div>
           ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 text-center border-t border-border pt-32"
      >
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Contribute to the <span className="text-primary-blue">Intelligence Archive.</span></h3>
        <p className="text-sm text-muted-foreground font-light max-w-2xl mx-auto mb-12">
           Have you achieved significant market dominance using WebShark? Submit your tactical report and help us refine the neural engine for future operations.
        </p>
        <button className="px-16 py-6 bg-background border border-primary-blue text-primary-blue font-black text-[11px] uppercase tracking-[0.4em] hover:bg-primary-blue hover:text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.1)]">
           Submit Field Report
        </button>
      </motion.div>
    </BaseInfoPage>
  )
}
