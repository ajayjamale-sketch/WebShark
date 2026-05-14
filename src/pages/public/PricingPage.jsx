import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Shield, HelpCircle } from 'lucide-react'
import BaseInfoPage from '../../components/common/BaseInfoPage'
import { pricingPlans } from '../../data/mockData'

export default function PricingPage() {
  return (
    <BaseInfoPage 
      title="Pricing Strategy" 
      subtitle="Operational Tiers // Resource Allocation" 
      icon={Zap}
    >
      {/* Section 1: Pricing Tiers */}
      <div className='grid grid-cols-1 md:grid-cols-3 items-stretch border border-border mt-12'>
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-8 lg:p-10 flex flex-col border-b md:border-b-0 border-border industrial-corner ${i !== 2 ? 'md:border-r' : ''} ${plan.popular ? 'bg-accent/5' : 'bg-background'}`}
          >
            <div className="mb-10">
              <h3 className='font-display text-2xl font-bold text-foreground mb-2 uppercase tracking-tighter'>{plan.name}</h3>
              <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">{plan.popular ? 'High-growth operations' : 'Tactical analysis'}</p>
            </div>

            <div className="mb-10 flex items-baseline text-foreground">
              <span className="text-5xl lg:text-6xl font-bold tracking-tighter">${plan.monthly}</span>
              <span className="ml-2 text-sm font-bold text-muted-foreground uppercase">/ Month</span>
            </div>

            <div className="mb-8 p-4 bg-accent/10 border border-border">
               <p className="text-[10px] font-bold text-primary-blue uppercase tracking-widest mb-3">Technical Specs</p>
               <ul className='space-y-3'>
                  {[plan.seats, plan.projects, 'Full AI Engine', '24/7 Support'].map(feature => (
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

      {/* Section 2: Enterprise Intelligence */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 lg:mt-32 p-6 lg:p-12 border border-primary-blue/30 bg-primary-blue/5 industrial-corner"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tighter text-foreground mb-6">Enterprise <span className="text-primary-blue">Intelligence.</span></h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
                 For organizations requiring hyper-scale telemetry and custom neural models. Our enterprise division provides tailored weapon-systems for absolute market dominance.
              </p>
           </div>
           <div className="text-center">
              <button className="w-full sm:w-auto px-12 py-5 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-blue/90 transition-all shadow-neon-blue">
                 Contact Command
              </button>
           </div>
        </div>
      </motion.div>

      {/* Section 3: Feature Matrix */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 overflow-x-auto">
         <h2 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12 text-center">Feature <span className="text-primary-blue">Matrix.</span></h2>
         <table className="w-full border-collapse border border-border bg-background min-w-[800px]">
            <thead>
               <tr className="bg-accent/10">
                  <th className="p-6 text-left text-[10px] font-black uppercase tracking-[0.2em] border border-border">Capability</th>
                  <th className="p-6 text-center text-[10px] font-black uppercase tracking-[0.2em] border border-border">Base</th>
                  <th className="p-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-primary-blue border border-border bg-primary-blue/5">Professional</th>
                  <th className="p-6 text-center text-[10px] font-black uppercase tracking-[0.2em] border border-border">Enterprise</th>
               </tr>
            </thead>
            <tbody>
               {[
                 { f: 'Crawler Capacity', b: '1,000', p: '10,000', e: 'Unlimited' },
                 { f: 'Neural Recommendations', b: 'Basic', p: 'Advanced', e: 'Custom' },
                 { f: 'Global Nodes', b: '5 Nodes', p: '140+ Nodes', e: 'Dedicated' },
                 { f: 'Security Clearance', b: 'Standard', p: 'SOC2 Ready', e: 'Air-Gapped' }
               ].map((row, i) => (
                 <tr key={i}>
                    <td className="p-6 text-xs font-bold uppercase border border-border">{row.f}</td>
                    <td className="p-6 text-center text-[10px] text-muted-foreground border border-border">{row.b}</td>
                    <td className="p-6 text-center text-[10px] text-primary-blue border border-border bg-primary-blue/5">{row.p}</td>
                    <td className="p-6 text-center text-[10px] border border-border">{row.e}</td>
                 </tr>
               ))}
            </tbody>
         </table>
      </motion.div>

      {/* Section 4: Operational Network & Support */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 p-16 border border-border bg-accent/5 industrial-corner">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Global <span className="text-primary-blue">Coverage.</span></h2>
               <div className="flex gap-12 mb-8">
                  <div>
                     <p className="text-4xl font-black text-foreground">140+</p>
                     <p className="text-[10px] font-bold uppercase text-primary-blue tracking-widest">Active Nodes</p>
                  </div>
                  <div>
                     <p className="text-4xl font-black text-foreground">22</p>
                     <p className="text-[10px] font-bold uppercase text-primary-blue tracking-widest">Regions</p>
                  </div>
               </div>
            </div>
            <div className="space-y-4">
               {['48h Support Tier (Base)', '4h Support Tier (Pro)', '15m Support Tier (Ent)'].map(t => (
                 <div key={t} className="p-4 border border-border bg-background flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest">{t}</span>
                    <Shield className="h-4 w-4 text-primary-blue/30" />
                 </div>
               ))}
            </div>
         </div>
      </motion.div>

      {/* Section 5: Security & Intelligence (FAQ) */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 mb-20">
         <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
               <h2 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Security <span className="text-primary-blue">Protocols.</span></h2>
               <div className="grid grid-cols-2 gap-4">
                  {['256-Bit AES', 'SSL Encrypted', 'Daily Backups', 'Audit Logs'].map(s => (
                    <div key={s} className="flex items-center gap-3">
                       <CheckCircle2 className="h-3 w-3 text-primary-blue" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">{s}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="space-y-4">
               {[
                 { q: 'Scalable missions?', a: 'Affirmative. Upgrades are processed instantly.' },
                 { q: 'Enterprise contracts?', a: 'Flexible month-to-month or annual alignment.' }
               ].map((faq, i) => (
                 <div key={i} className="p-6 border border-border bg-accent/5">
                    <h4 className="text-[10px] font-black uppercase text-foreground mb-2">{faq.q}</h4>
                    <p className="text-xs text-muted-foreground font-light">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </motion.div>
    </BaseInfoPage>
  )
}
