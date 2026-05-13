import { motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import BaseInfoPage from '../../components/common/BaseInfoPage'
import { faqItems } from '../../data/mockData'

export default function FAQPage() {
  return (
    <BaseInfoPage 
      title="Intelligence Briefing" 
      subtitle="Operational Documentation // FAQ" 
      icon={HelpCircle}
    >
      <div className='space-y-4 mt-12 max-w-3xl'>
        {faqItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
             <details className="group bg-background border border-border overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-accent/5 transition-colors">
                   <p className='font-bold text-sm text-foreground uppercase tracking-tight'>{item.q}</p>
                   <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pt-2">
                   <p className='text-muted-foreground leading-relaxed font-light text-sm border-t border-border pt-4'>{item.a}</p>
                </div>
             </details>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 grid md:grid-cols-2 gap-8"
      >
        <div className="p-8 bg-primary-blue/5 border border-primary-blue/20 industrial-corner">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary-blue mb-4">Tactical Support</h4>
          <p className="text-sm text-muted-foreground font-light mb-6">Need immediate assistance with your intelligence node?</p>
          <button className="text-[10px] font-black uppercase tracking-widest text-primary-blue hover:underline">Open Secure Channel</button>
        </div>
        <div className="p-8 bg-accent/5 border border-border industrial-corner">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-foreground mb-4">Resource Center</h4>
          <p className="text-sm text-muted-foreground font-light mb-6">Access deep-dive technical documentation and playbooks.</p>
          <button className="text-[10px] font-black uppercase tracking-widest text-foreground hover:underline">Access Repository</button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32"
      >
        <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12">Intelligence <span className="text-primary-blue">Glossary.</span></h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
           {[
             { term: 'SERP Telemetry', definition: 'The continuous collection and transmission of search engine results page data for real-time analysis.' },
             { term: 'Neural Crawler', definition: 'An autonomous data harvesting agent driven by high-dimensional machine learning models.' },
             { term: 'Algorithmic Drift', definition: 'Spontaneous shifts in search engine weighting protocols that impact ranking stability.' },
             { term: 'Geostationary Node', definition: 'A fixed digital observation point used to simulate local search environments with absolute parity.' }
           ].map((item, i) => (
             <div key={i} className="border-l border-primary-blue/30 pl-6 py-2">
                <h4 className="text-[11px] font-black uppercase tracking-widest text-primary-blue mb-2">{item.term}</h4>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.definition}</p>
             </div>
           ))}
        </div>
      </motion.div>
    </BaseInfoPage>
  )
}
