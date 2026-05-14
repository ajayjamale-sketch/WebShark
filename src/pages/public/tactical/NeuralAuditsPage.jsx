import { BrainCircuit, Scan, ShieldCheck, Activity, Terminal, Lock, Cpu, Globe, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function NeuralAuditsPage() {
  const navigate = useNavigate()
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <BaseInfoPage 
      title="Neural Audits" 
      subtitle="Operational Protocol 0x71 // Technical Clearance" 
      icon={BrainCircuit}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Deep-learning powered technical SEO audits that mimic search engine crawler behavior.</p>
        <p>Our neural crawlers perform exhaustive deep-tissue analysis of your website's architecture, identifying critical failures before they impact your SERP position. By simulating thousands of bot interactions, WebShark uncovers hidden crawl loops, indexation blocks, and performance bottlenecks.</p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
           <div className="p-8 border border-border bg-accent/5 industrial-corner hover:border-primary-blue/30 transition-all group">
              <div className="h-10 w-10 bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all">
                 <BrainCircuit className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Semantic Mapping</h4>
              <p className="text-sm">Identify thematic clusters and internal linking patterns that drive topical authority with sub-millisecond accuracy.</p>
           </div>
           <div className="p-8 border border-border bg-accent/5 industrial-corner hover:border-primary-blue/30 transition-all group">
              <div className="h-10 w-10 bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all">
                 <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Indexation Shield</h4>
              <p className="text-sm">Real-time alerts when search engines drop critical pages from the global index, ensuring immediate tactical response.</p>
           </div>
        </div>

        {/* Section 3: Technical Scan Matrix */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12">Scan <span className="text-primary-blue">Parameters.</span></h3>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Crawl Depth', value: 'Unlimited', icon: Scan },
                { label: 'JS Rendering', value: 'High-Fidelity', icon: Cpu },
                { label: 'Cache Analysis', value: 'Real-time', icon: Activity },
                { label: 'API Integrity', value: 'Verified', icon: Terminal }
              ].map((p, i) => (
                <div key={i} className="p-6 border border-border bg-background text-center">
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4">{p.label}</p>
                   <p className="text-xl font-black text-foreground mb-2">{p.value}</p>
                   <p className="text-[8px] font-bold text-primary-blue uppercase tracking-[0.3em]">Operational</p>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Section 4: Operational Workflow */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 p-12 border border-border bg-accent/5 industrial-corner">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Operational <span className="text-primary-blue">Workflow.</span></h3>
                 <div className="space-y-8">
                    {[
                      { step: '01', title: 'Deep Ingestion', desc: 'Capturing raw technical telemetry across all subdomains.' },
                      { step: '02', title: 'Neural Synthesis', desc: 'Processing data through our proprietary V4 adaptive model.' },
                      { step: '03', title: 'Tactical Briefing', desc: 'Generating prioritized remediation directives.' }
                    ].map((s, i) => (
                      <div key={i} className="flex gap-6">
                         <span className="text-2xl font-black text-primary-blue/30">{s.step}</span>
                         <div>
                            <h4 className="text-sm font-bold uppercase text-foreground mb-2">{s.title}</h4>
                            <p className="text-xs text-muted-foreground">{s.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="aspect-square bg-background border border-border flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 grid-pattern opacity-10" />
                 <BrainCircuit className="h-32 w-32 text-primary-blue opacity-20 group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <span className="text-[8px] font-black uppercase tracking-[0.5em] text-muted-foreground">Neural_Net_Active</span>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Section 5: Global Deployment */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 text-center">
           <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Global <span className="text-primary-blue">Auditing Network.</span></h3>
           <p className="max-w-2xl mx-auto mb-12">We simulate audits from 140+ countries to ensure your site's technical performance is consistent for every user, regardless of their geostationary position.</p>
           <div className="flex flex-wrap justify-center gap-4">
              {['New York', 'London', 'Tokyo', 'Singapore', 'Berlin', 'Dubai'].map(city => (
                <div key={city} className="px-6 py-2 border border-dashed border-border bg-background">
                   <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{city}</span>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Section 6: Compliance & Security */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 grid md:grid-cols-2 gap-12 items-center">
           <div>
              <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Compliance <span className="text-primary-blue">Vault.</span></h3>
              <p className="text-sm mb-8">Our audits cover the full spectrum of technical requirements, from core web vitals to enterprise security standards.</p>
              <div className="grid grid-cols-2 gap-4">
                 {['SOC2 Type II', 'GDPR Audit', 'W3C Standard', 'SSL Protocol'].map(c => (
                   <div key={c} className="flex items-center gap-3">
                      <Lock className="h-3 w-3 text-primary-blue" />
                      <span className="text-[10px] font-bold uppercase text-foreground tracking-widest">{c}</span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="p-8 border border-border bg-accent/5 industrial-corner">
              <p className="text-[10px] font-black uppercase text-primary-blue tracking-[0.4em] mb-4">Neural Security Status</p>
              <div className="space-y-3">
                 <div className="h-1.5 w-full bg-border"><div className="h-full w-full bg-emerald-500 animate-pulse" /></div>
                 <div className="h-1.5 w-3/4 bg-border"><div className="h-full w-full bg-emerald-500" /></div>
                 <div className="h-1.5 w-1/2 bg-border"><div className="h-full w-full bg-emerald-500" /></div>
              </div>
           </div>
        </motion.div>

        {/* Section 7: Final CTA */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40 mb-20">
           <div className="p-16 border border-primary-blue/30 bg-primary-blue/5 text-center industrial-corner">
              <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground mb-8">Authorize Your <span className="text-primary-blue">First Audit.</span></h2>
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto mb-10">Deploy our neural crawlers and identify the critical technical failures that are holding back your search dominance.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <button 
                   onClick={() => navigate('/contact')}
                   className="px-12 py-5 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-blue/90 transition-all shadow-neon-blue flex items-center justify-center gap-4"
                 >
                    Launch Operational Scan <Rocket className="h-4 w-4" />
                 </button>
                 <button 
                   onClick={() => navigate('/pricing')}
                   className="px-12 py-5 bg-background border border-border text-foreground font-black text-[11px] uppercase tracking-[0.3em] hover:bg-accent transition-all flex items-center justify-center gap-4"
                 >
                    View Pricing <ArrowRight className="h-4 w-4" />
                 </button>
              </div>
           </div>
        </motion.div>
      </div>
    </BaseInfoPage>
  )
}
