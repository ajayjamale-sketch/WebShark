import { motion } from 'framer-motion'
import { CheckCircle2, Zap } from 'lucide-react'
import BaseInfoPage from '../../components/common/BaseInfoPage'
import { pricingPlans } from '../../data/mockData'

export default function PricingPage() {
  return (
    <BaseInfoPage 
      title="Pricing Strategy" 
      subtitle="Operational Tiers // Resource Allocation" 
      icon={Zap}
    >
      <div className='grid gap-0 md:grid-cols-3 items-stretch border border-border mt-12'>
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-10 flex flex-col border-border industrial-corner ${i !== 2 ? 'md:border-r' : ''} ${plan.popular ? 'bg-accent/5' : 'bg-background'}`}
          >
            <div className="mb-10">
              <h3 className='font-display text-2xl font-bold text-foreground mb-2 uppercase tracking-tighter'>{plan.name}</h3>
              <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">{plan.popular ? 'High-growth operations' : 'Tactical analysis'}</p>
            </div>

            <div className="mb-10 flex items-baseline text-foreground">
              <span className="text-6xl font-bold tracking-tighter">${plan.monthly}</span>
              <span className="ml-2 text-sm font-bold text-muted-foreground uppercase">/ Month</span>
            </div>

            <div className="mb-8 p-4 bg-accent/10 border border-border">
               <p className="text-[10px] font-bold text-primary-blue uppercase tracking-widest mb-3">Technical Specs</p>
               <ul className='space-y-3'>
                  {[plan.seats, plan.projects, 'Full AI Engine', '24/7 Command Support'].map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="h-3 w-3 text-primary-blue" />
                      <span className="text-[11px] font-bold uppercase tracking-tight">{feature}</span>
                    </li>
                  ))}
               </ul>
            </div>

            <div className="mt-auto">
               <button className={`w-full py-4 rounded-none font-bold text-[10px] uppercase tracking-[0.2em] transition-all ${plan.popular ? 'bg-primary-blue text-white hover:bg-primary-blue/90' : 'bg-background text-foreground hover:bg-accent border border-border'}`}>
                 Authorize Deployment
               </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-12">Strategic Partners // Network Integration</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
           {['VERIFY', 'NEXUS', 'CORE', 'SENTINEL'].map(brand => (
             <div key={brand} className="py-8 border border-dashed border-border flex items-center justify-center grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
                <span className="font-display text-xl font-black tracking-[0.3em] group-hover:text-primary-blue">{brand}</span>
             </div>
           ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-12 border border-primary-blue/30 bg-primary-blue/5 industrial-corner"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div>
              <h3 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-6">Enterprise <span className="text-primary-blue">Intelligence.</span></h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
                 For organizations requiring hyper-scale telemetry, dedicated infrastructure, and custom neural model training. Our enterprise division provides tailored weapon-systems for absolute market dominance.
              </p>
              <ul className="space-y-3 mb-10">
                 {['Dedicated Node Arrays', 'Custom Model Ingestion', 'On-Premise Deployment', 'SLA: 99.99% Availability'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-foreground">
                      <Zap className="h-3 w-3 text-primary-blue" />
                      <span className="text-[10px] font-black uppercase tracking-widest">{item}</span>
                   </li>
                 ))}
              </ul>
           </div>
           <div className="text-center">
              <div className="p-10 border border-border bg-background mb-8 inline-block">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] mb-4">Request Operational Briefing</p>
                 <button className="px-12 py-5 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-blue/90 transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                    Contact Command
                 </button>
              </div>
           </div>
        </div>
      </motion.div>
    </BaseInfoPage>
  )
}
