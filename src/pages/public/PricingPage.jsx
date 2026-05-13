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
        className="mt-20 lg:mt-32 text-center"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-12 px-4">Strategic Partners // Network Integration</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 opacity-40 px-4">
           {['VERIFY', 'NEXUS', 'CORE', 'SENTINEL'].map(brand => (
             <div key={brand} className="py-6 lg:py-8 border border-dashed border-border flex items-center justify-center grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default group">
                <span className="font-display text-lg lg:text-xl font-black tracking-[0.3em] group-hover:text-primary-blue">{brand}</span>
             </div>
           ))}
        </div>
      </motion.div>

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
              <div className="p-8 lg:p-10 border border-border bg-background mb-8 inline-block w-full sm:w-auto">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] mb-4">Request Operational Briefing</p>
                 <button className="w-full sm:w-auto px-8 lg:px-12 py-5 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-blue/90 transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                    Contact Command
                 </button>
              </div>
           </div>
        </div>
      </motion.div>

      {/* Section 5: Feature Comparison Table */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 overflow-x-auto scrollbar-none">
         <h2 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12 text-center">Feature <span className="text-primary-blue">Matrix.</span></h2>
         <table className="w-full border-collapse border border-border bg-background min-w-[800px]">
            <thead>
               <tr className="bg-accent/10">
                  <th className="p-6 text-left text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground border border-border">Capability</th>
                  <th className="p-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-foreground border border-border">Base</th>
                  <th className="p-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-primary-blue border border-border bg-primary-blue/5">Professional</th>
                  <th className="p-6 text-center text-[10px] font-black uppercase tracking-[0.2em] text-foreground border border-border">Enterprise</th>
               </tr>
            </thead>
            <tbody>
               {[
                 { f: 'Daily Crawler Capacity', b: '1,000', p: '10,000', e: 'Unlimited' },
                 { f: 'Neural Recommendations', b: 'Basic', p: 'Advanced', e: 'Custom Models' },
                 { f: 'Global Integration Nodes', b: '5 Locations', p: '140+ Locations', e: 'Dedicated Arrays' },
                 { f: 'Data Persistence', b: '30 Days', p: '2 Years', e: 'Permanent' },
                 { f: 'Security Clearance', b: 'Standard', p: 'SOC2 Ready', e: 'Air-Gapped' }
               ].map((row, i) => (
                 <tr key={i} className="hover:bg-accent/5 transition-colors">
                    <td className="p-6 text-xs font-bold uppercase tracking-tight text-foreground border border-border">{row.f}</td>
                    <td className="p-6 text-center text-[10px] font-bold text-muted-foreground border border-border">{row.b}</td>
                    <td className="p-6 text-center text-[10px] font-bold text-primary-blue border border-border bg-primary-blue/5">{row.p}</td>
                    <td className="p-6 text-center text-[10px] font-bold text-foreground border border-border">{row.e}</td>
                 </tr>
               ))}
            </tbody>
         </table>
      </motion.div>

      {/* Section 6: Operational Support */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 grid lg:grid-cols-3 gap-8">
         {[
           { title: 'Standard Comms', desc: '48h Response Time // Email Support' },
           { title: 'Priority Access', desc: '4h Response Time // Dedicated Slack Channel' },
           { title: 'Command Control', desc: '15m Response Time // 24/7 Phone & Zoom' }
         ].map((tier, i) => (
           <div key={i} className="p-8 border border-border bg-background hover:border-primary-blue transition-all group">
              <h4 className="text-sm font-black text-foreground uppercase tracking-widest mb-4">{tier.title}</h4>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">{tier.desc}</p>
           </div>
         ))}
      </motion.div>

      {/* Section 7: Global Network Map (Simplified) */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 p-16 border border-border bg-accent/5 industrial-corner text-center relative overflow-hidden">
         <div className="absolute inset-0 grid-pattern opacity-10" />
         <div className="relative z-10">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Global Node <span className="text-primary-blue">Coverage.</span></h2>
            <p className="text-sm text-muted-foreground font-light max-w-2xl mx-auto mb-12">
               Our pricing scales with your global reach. Access high-fidelity telemetry from 140+ countries, ensuring your rankings are secured across every major digital territory.
            </p>
            <div className="flex justify-center gap-12">
               <div>
                  <p className="text-4xl font-black text-foreground">140+</p>
                  <p className="text-[10px] font-bold uppercase text-primary-blue tracking-widest">Active Nodes</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-foreground">22</p>
                  <p className="text-[10px] font-bold uppercase text-primary-blue tracking-widest">Server Regions</p>
               </div>
            </div>
         </div>
      </motion.div>

      {/* Section 8: Security & Compliance */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Security <span className="text-primary-blue">Protocols.</span></h2>
               <p className="text-base text-muted-foreground font-light leading-relaxed mb-8">
                  Security is not an add-on; it is our foundation. Every pricing tier includes advanced encryption and operational security standards to protect your mission data.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  {['256-Bit AES', 'SSL Encryption', 'Daily Backups', 'Audit Logs'].map(s => (
                    <div key={s} className="flex items-center gap-3">
                       <CheckCircle2 className="h-4 w-4 text-primary-blue" />
                       <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">{s}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="p-8 border border-border bg-background industrial-corner flex items-center justify-center">
               <div className="text-center">
                  <Shield className="h-24 w-24 text-primary-blue opacity-20 mx-auto mb-6" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground">Data Privacy Secured</p>
               </div>
            </div>
         </div>
      </motion.div>

      {/* Section 9: FAQ */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 mb-20">
         <h2 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12 text-center">Operational <span className="text-primary-blue">Intel (FAQ).</span></h2>
         <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: 'Can I scale my operational tier mid-mission?', a: 'Affirmative. Upgrades are processed instantly with pro-rated billing adjustments.' },
              { q: 'Is there a contract for enterprise deployment?', a: 'We offer flexible month-to-month protocols for Base and Pro. Enterprise may require annual alignment.' },
              { q: 'Do you offer custom data ingestion protocols?', a: 'Negative on Base/Pro. Custom ingestion is exclusively reserved for Enterprise operatives.' }
            ].map((faq, i) => (
              <div key={i} className="p-6 border border-border bg-accent/5 hover:border-primary-blue/50 transition-all cursor-pointer group">
                 <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-black uppercase text-foreground tracking-widest">{faq.q}</h4>
                    <HelpCircle className="h-4 w-4 text-primary-blue opacity-50 group-hover:opacity-100 transition-all" />
                 </div>
                 <p className="text-xs text-muted-foreground font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
         </div>
      </motion.div>
    </BaseInfoPage>
  )
}
