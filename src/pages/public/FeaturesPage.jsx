import { motion } from 'framer-motion'
import { TrendingUp, Shield, Bot, Globe, BarChart3, Lock, Activity, Terminal } from 'lucide-react'
import BaseInfoPage from '../../components/common/BaseInfoPage'

export default function FeaturesPage() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Intelligence Engine',
      desc: 'Track rankings, SERP volatility, and content gaps with sub-millisecond precision.',
    },
    {
      icon: Shield,
      title: 'Operation Shield',
      desc: 'Continuous technical audits and uptime monitoring with predictive failure alerts.',
    },
    {
      icon: Bot,
      title: 'Tactical AI',
      desc: 'Neural-network driven recommendations that adapt to algorithm shifts in real-time.',
    },
    {
      icon: Globe,
      title: 'Global Node Network',
      desc: 'Simulate search performance from 140+ countries with local device parity.',
    },
    {
      icon: BarChart3,
      title: 'Quantum Analytics',
      desc: 'High-dimensional data visualization for stakeholder alignment and growth strategy.',
    },
    {
      icon: Lock,
      title: 'Encrypted Vault',
      desc: 'Enterprise-grade data protection for your most sensitive competitive intelligence.',
    },
  ]

  return (
    <BaseInfoPage 
      title="Platform Features" 
      subtitle="Capability Suite // Operational Readiness" 
      icon={TrendingUp}
    >
      {/* Section 1: Core Intelligence Suite */}
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 mt-12'>
        {features.slice(0, 4).map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className='group'
          >
            <div className='bg-background p-10 h-full rounded-none border border-border hover:border-primary-blue transition-all duration-300 relative industrial-corner'>
               <div className={`h-14 w-14 bg-primary-blue/5 flex items-center justify-center mb-8 border border-primary-blue/10 group-hover:bg-primary-blue transition-all group-hover:text-white text-primary-blue`}>
                  <item.icon className={`h-6 w-6`} />
               </div>
               <h3 className='font-display text-2xl font-bold text-foreground mb-4 uppercase tracking-tight'>{item.title}</h3>
               <p className='text-muted-foreground leading-relaxed font-light text-sm'>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Section 2: Tactical Operational Phases */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 lg:mt-32 p-6 lg:p-12 border border-primary-blue/30 bg-primary-blue/5 industrial-corner"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tighter text-foreground mb-6">Tactical <span className="text-primary-blue">Operations.</span></h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8 max-w-lg">
                 Our neural engine processes data through four distinct tactical phases to ensure absolute market intelligence.
              </p>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { step: '01', title: 'Ingestion', desc: 'Raw data harvesting from global nodes.' },
                { step: '02', title: 'Processing', desc: 'Neural synthesis and pattern recognition.' },
                { step: '03', title: 'Analysis', desc: 'Strategic directive generation via AI.' },
                { step: '04', title: 'Execution', desc: 'Automated deployment of optimizations.' }
              ].map((phase, i) => (
                <div key={i} className="relative">
                   <span className="text-4xl font-black text-primary-blue/20 absolute -top-4 -left-2">{phase.step}</span>
                   <div className="relative z-10 pt-4">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-2">{phase.title}</h4>
                      <p className="text-xs text-muted-foreground font-light">{phase.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </motion.div>

      {/* Section 3: Real-time Monitoring & Telemetry */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1 p-8 border border-border bg-accent/5 industrial-corner relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                 <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <div className="h-2 w-2 rounded-full bg-amber-500" />
                 </div>
                 <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Live Telemetry Feed</span>
              </div>
              <div className="space-y-4 font-mono text-[10px]">
                 <p className="text-emerald-500">[08:24:12] CRAWL_NODE_ALPHA: SECURED</p>
                 <p className="text-primary-blue">[08:24:15] NEURAL_ENGINE: PROCESSING_V4</p>
                 <p className="text-foreground">[08:24:18] CORE_SYSTEM: GENERATING_REPORT</p>
                 <div className="h-24 w-full bg-background border border-border mt-4 relative">
                    <div className="absolute inset-0 flex items-end px-2 pb-2 gap-1">
                       {[40, 70, 45, 90, 65, 80, 50, 95, 30, 85].map((h, i) => (
                         <motion.div 
                           key={i} 
                           initial={{ height: 0 }} 
                           whileInView={{ height: `${h}%` }} 
                           className="flex-1 bg-primary-blue/30 border-t border-primary-blue"
                         />
                       ))}
                    </div>
                 </div>
              </div>
           </div>
           <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Real-time <span className="text-primary-blue">Monitoring.</span></h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed mb-8">
                 Never miss a beat. Our live telemetry feed provides sub-second updates on crawl status, indexation changes, and system health.
              </p>
              <ul className="space-y-4">
                 {['Instant Error Detection', 'Live Response Logs', 'Predictive Uptime Alerts'].map(f => (
                   <li key={f} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 bg-primary-blue" />
                      <span className="text-xs font-bold uppercase tracking-widest text-foreground">{f}</span>
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </motion.div>

      {/* Section 4: Automated Intelligence Briefings */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 p-12 border border-border bg-accent/5 industrial-corner overflow-hidden relative">
         <div className="absolute top-0 right-0 p-8 opacity-10">
            <Activity className="h-64 w-64" />
         </div>
         <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
               <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Automated <span className="text-primary-blue">Briefings.</span></h2>
               <p className="text-base text-muted-foreground font-light leading-relaxed mb-10">
                  Receive high-caliber intelligence briefings directly in your secure terminal. Custom schedules and multi-format exports.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                     <p className="text-2xl font-black text-foreground mb-1">100%</p>
                     <p className="text-[10px] font-bold uppercase text-primary-blue tracking-widest">Operational Clarity</p>
                  </div>
                  <div>
                     <p className="text-2xl font-black text-foreground mb-1">0%</p>
                     <p className="text-[10px] font-bold uppercase text-primary-blue tracking-widest">Manual Effort</p>
                  </div>
               </div>
            </div>
            <div className="space-y-4">
               {[
                 'White-label PDF/Excel reports',
                 'Scheduled Slack/Email delivery',
                 'Custom data visualization',
                 'Executive summaries via AI'
               ].map(item => (
                 <div key={item} className="p-4 bg-background border border-border flex items-center justify-between group hover:border-primary-blue transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">{item}</span>
                    <div className="h-4 w-4 bg-primary-blue/10 border border-primary-blue/20 group-hover:bg-primary-blue transition-all" />
                 </div>
               ))}
            </div>
         </div>
      </motion.div>

      {/* Section 5: Enterprise OPSEC & API Command */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 mb-20 grid lg:grid-cols-2 gap-16 items-center">
         <div>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Enterprise <span className="text-primary-blue">OPSEC.</span></h2>
            <p className="text-sm text-muted-foreground font-light leading-relaxed mb-8">
               Your competitive intelligence is protected by the highest encryption standards via our REST API and CLI tools.
            </p>
            <div className="bg-slate-950 p-6 border border-slate-800 font-mono text-[10px] text-emerald-500 industrial-corner">
               <p>$ curl -X GET "https://api.webshark.intel/v1/telemetry" \</p>
               <p className="ml-4">-H "Authorization: Bearer [TOKEN]"</p>
            </div>
         </div>
         <div className="p-10 border border-border bg-background shadow-2xl relative industrial-corner">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-12 w-12 bg-primary-blue/10 flex items-center justify-center text-primary-blue border border-primary-blue/20">
                  <Lock className="h-6 w-6" />
               </div>
               <div>
                  <h4 className="text-sm font-bold uppercase text-foreground">Secure Data Vault</h4>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Active AES-256 Protection</p>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {['SOC2 Type II', 'ISO 27001', 'GDPR', 'HIPAA'].map(badge => (
                  <div key={badge} className="px-3 py-2 border border-dashed border-border text-center">
                     <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{badge}</span>
                  </div>
               ))}
            </div>
         </div>
      </motion.div>
    </BaseInfoPage>
  )
}
