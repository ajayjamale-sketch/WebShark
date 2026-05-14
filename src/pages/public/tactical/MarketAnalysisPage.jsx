import { Search, PieChart, BarChart, Activity, Zap, Globe, Shield, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function MarketAnalysisPage() {
  const navigate = useNavigate()
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <BaseInfoPage 
      title="Market Analysis" 
      subtitle="Vertical Saturation Intelligence // Market Dominance" 
      icon={Search}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Map the entire competitive landscape of your industry.</p>
        <p>Understand who owns the conversation. Our Market Analysis tool visualizes market share by topical cluster, identifying emerging threats and untapped traffic reservoirs before they become mainstream.</p>
        
        {/* Section 2: Sector Saturation Matrix */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
           <div className="p-8 border border-border bg-accent/5 industrial-corner hover:border-primary-blue/30 transition-all group">
              <div className="h-10 w-10 bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all">
                 <PieChart className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Share of Voice</h4>
              <p className="text-sm">Quantify your brand's presence across target verticals compared to key competitors with real-time saturation data.</p>
           </div>
           <div className="p-8 border border-border bg-accent/5 industrial-corner hover:border-primary-blue/30 transition-all group">
              <div className="h-10 w-10 bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all">
                 <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Content Velocity</h4>
              <p className="text-sm">Track how fast competitors are scaling their content infrastructure and identify strategic gaps for infiltration.</p>
           </div>
        </div>

        {/* Section 3: Market Share Visualization */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <div className="p-12 border border-border bg-card industrial-corner relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <BarChart className="h-64 w-64 text-primary-blue" />
              </div>
              <div className="relative z-10">
                 <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Intelligence <span className="text-primary-blue">Visualization.</span></h3>
                 <p className="text-sm max-w-2xl mb-12">Our high-dimensional charts synthesize millions of data points into a single tactical view of your industry's power dynamics.</p>
                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { label: 'Market Cap (Search)', value: '$1.2B' },
                      { label: 'Total Volume', value: '450M+' },
                      { label: 'Niche Saturation', value: '64%' },
                      { label: 'Growth Delta', value: '+12%' }
                    ].map((stat, i) => (
                      <div key={i}>
                         <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                         <p className="text-2xl font-black text-foreground">{stat.value}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Section 4: Topic Cluster Infiltration */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12 text-center">Infiltration <span className="text-primary-blue">Strategies.</span></h3>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Thematic Mapping', desc: 'Identify the exact semantic clusters your competitors are defending.', icon: Globe },
                { title: 'Gap Exploitation', desc: 'Find high-volume search territories that lack high-fidelity content.', icon: Zap },
                { title: 'Authority Synthesis', desc: 'Model the internal linking required to dominate a new vertical.', icon: Shield }
              ].map((s, i) => (
                <div key={i} className="p-8 border border-border bg-background hover:bg-accent/5 transition-all group">
                   <div className="h-10 w-10 border border-primary-blue/20 bg-primary-blue/5 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all">
                      <s.icon className="h-5 w-5" />
                   </div>
                   <h4 className="text-sm font-bold uppercase text-foreground mb-4">{s.title}</h4>
                   <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Section 5: Real-time Sector Tracking */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 p-12 border border-border bg-accent/5 industrial-corner relative overflow-hidden">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Sector <span className="text-primary-blue">Telemetry.</span></h3>
                 <p className="text-sm leading-relaxed mb-8">WebShark maintains constant surveillance on 4,000+ niche sectors, providing real-time data on emerging competitors and shifting user intent.</p>
                 <div className="space-y-4">
                    {['Automated Competitor Discovery', 'Niche Volatility Scoring', 'User Intent Classification'].map(f => (
                      <div key={f} className="flex items-center gap-4 p-4 bg-background border border-border hover:border-primary-blue/30 transition-all">
                         <Activity className="h-4 w-4 text-primary-blue/50" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{f}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-8 bg-slate-950 border border-slate-900 font-mono text-[10px] text-emerald-500 overflow-hidden relative">
                 <div className="absolute top-0 right-0 p-2 opacity-20"><Activity className="h-16 w-16" /></div>
                 <p className="mb-2 text-slate-500">// INITIALIZING_SECTOR_SCAN...</p>
                 <p>[OK] SCANNING: "FINTECH_MORTGAGES_UK"</p>
                 <p>[OK] IDENTIFIED: 14_NEW_NODES</p>
                 <p>[WARN] COMPETITOR_VELOCITY: HIGH</p>
                 <div className="h-1 w-full bg-slate-900 mt-8 relative overflow-hidden">
                    <motion.div 
                      animate={{ x: ['-100%', '100%'] }} 
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-1/2 bg-emerald-500" 
                    />
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Section 6: Strategic Reporting */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <div className="text-center mb-16">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">Strategic <span className="text-primary-blue">Deliverables.</span></h3>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">High-Caliber Intelligence Briefings</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Market Share PDFs', 'Gap Analysis Sheets', 'Cluster Maps', 'Velocity Reports'].map((rep, i) => (
                <div key={i} className="p-6 border border-border bg-background text-center hover:border-primary-blue transition-all cursor-pointer group">
                   <p className="text-[10px] font-black text-foreground uppercase tracking-widest group-hover:text-primary-blue transition-colors">{rep}</p>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Section 7: Final CTA */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40 mb-20">
           <div className="p-16 border border-primary-blue/30 bg-primary-blue/5 industrial-corner relative overflow-hidden group text-center">
              <div className="relative z-10">
                 <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground mb-8">Own Your <span className="text-primary-blue">Market Segment.</span></h2>
                 <p className="text-base text-muted-foreground font-light max-w-xl mx-auto mb-10">Get the deep market intelligence required to dismantle competitor moats and secure absolute vertical dominance.</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button 
                       onClick={() => navigate('/contact')}
                       className="px-12 py-5 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-blue/90 transition-all shadow-neon-blue flex items-center justify-center gap-4"
                     >
                       Launch Market Scan <ArrowRight className="h-4 w-4" />
                    </button>
                    <button 
                       onClick={() => navigate('/pricing')}
                       className="px-12 py-5 bg-background border border-border text-foreground font-black text-[11px] uppercase tracking-[0.3em] hover:bg-accent transition-all flex items-center justify-center gap-4"
                     >
                       View Pricing <Zap className="h-4 w-4" />
                    </button>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </BaseInfoPage>
  )
}
