import { Target, TrendingUp, BarChart3, Activity, Zap, Shield, Globe, Terminal, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function RankingIntelPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <BaseInfoPage 
      title="Ranking Intel" 
      subtitle="SERP Domination Protocol // Vector Tracking" 
      icon={Target}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Real-time keyword telemetry and SERP volatility monitoring.</p>
        <p>WebShark's Ranking Intelligence module provides sub-millisecond updates on your critical search positions. We track not just the rank, but the pixel-depth, rich snippet presence, and competitor ad-spend across 140+ countries.</p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
           <div className="p-8 border border-border bg-accent/5 industrial-corner hover:border-primary-blue/30 transition-all group">
              <div className="h-10 w-10 bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all">
                 <Target className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Competitor Displacement</h4>
              <p className="text-sm">Identify vulnerable competitor rankings and receive tactical plans for displacement via content delta analysis.</p>
           </div>
           <div className="p-8 border border-border bg-accent/5 industrial-corner hover:border-primary-blue/30 transition-all group">
              <div className="h-10 w-10 bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all">
                 <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Volatility Detection</h4>
              <p className="text-sm">Real-time alerts on algorithmic shifts before they stabilize, allowing for immediate defensive maneuvers.</p>
           </div>
        </div>

        {/* Section 3: SERP Volatility Monitor */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <div className="p-12 border border-border bg-slate-950 industrial-corner relative overflow-hidden group">
              <div className="absolute inset-0 grid-pattern opacity-10" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-white mb-6">SERP <span className="text-primary-blue">Volatility Monitor.</span></h3>
                    <p className="text-sm text-slate-400 mb-8">Continuous monitoring of the global search landscape to identify anomalies and emerging ranking trends across 40+ verticals.</p>
                    <div className="flex gap-4">
                       <div className="p-4 bg-slate-900 border border-slate-800">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">24h Volatility</p>
                          <p className="text-xl font-black text-rose-500 flex items-center gap-2">8.4 <ArrowUpRight className="h-4 w-4" /></p>
                       </div>
                       <div className="p-4 bg-slate-900 border border-slate-800">
                          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">System Status</p>
                          <p className="text-xl font-black text-emerald-500">Active</p>
                       </div>
                    </div>
                 </div>
                 <div className="h-48 w-full bg-slate-900/50 border border-slate-800 flex items-end px-4 pb-4 gap-2">
                    {[30, 45, 60, 40, 80, 50, 90, 70, 40, 65, 85, 30].map((h, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }} 
                        whileInView={{ height: `${h}%` }} 
                        className={`flex-1 ${h > 70 ? 'bg-rose-500/40 border-t border-rose-500' : 'bg-primary-blue/30 border-t border-primary-blue'}`}
                      />
                    ))}
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Section 4: Intelligence Capabilities */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12 text-center">Operational <span className="text-primary-blue">Capabilities.</span></h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Pixel Depth Tracking', desc: 'Monitor the exact vertical position of your result on all device types.', icon: Activity },
                { title: 'Rich Snippet Intel', desc: 'Detect and capture featured snippets, PAA, and local pack entries.', icon: Zap },
                { title: 'Ad-Spend Analysis', desc: 'Identify competitor SEM aggressive tactics and counter-plan.', icon: Shield }
              ].map((item, i) => (
                <div key={i} className="p-8 border border-border bg-background hover:bg-accent/5 transition-all">
                   <div className="h-10 w-10 rounded-none border border-primary-blue/20 bg-primary-blue/5 flex items-center justify-center text-primary-blue mb-6">
                      <item.icon className="h-5 w-5" />
                   </div>
                   <h4 className="text-sm font-bold uppercase text-foreground mb-4">{item.title}</h4>
                   <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Section 5: Global Geostationary Nodes */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 p-12 border border-border bg-accent/5 industrial-corner relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-5">
              <Globe className="h-64 w-64" />
           </div>
           <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                 <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Global <span className="text-primary-blue">Parity.</span></h3>
                 <p className="text-sm mb-10 leading-relaxed">Search intent varies by geostationary position. WebShark simulates local search behavior across 140+ countries to ensure your strategy is globally effective.</p>
                 <div className="grid grid-cols-2 gap-4">
                    {['Device-Specific Parity', 'Local ISP Simulation', 'Language Synthesis', 'Timezone Alignment'].map(f => (
                      <div key={f} className="flex items-center gap-3">
                         <div className="h-1 w-1 bg-primary-blue" />
                         <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">{f}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-8 bg-background border border-border">
                 <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em] mb-4">Active Telemetry Node: SYD_01</p>
                 <div className="aspect-video bg-accent/5 border border-border flex items-center justify-center">
                    <span className="text-[10px] font-black uppercase text-primary-blue animate-pulse">Syncing Global Data...</span>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Section 6: Data Visualization */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Quantum <span className="text-primary-blue">Visuals.</span></h3>
                 <p className="text-sm leading-relaxed mb-8">Massive datasets are synthesized into high-dimensional visualizations, allowing stakeholders to identify growth opportunities at a glance.</p>
                 <ul className="space-y-4">
                    {['Multi-vector growth charts', 'Competitive heatmap overlays', 'Share of voice diagnostics'].map(l => (
                      <li key={l} className="flex items-center justify-between p-4 bg-background border border-border hover:border-primary-blue/30 transition-all">
                         <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">{l}</span>
                         <BarChart3 className="h-4 w-4 text-primary-blue/50" />
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="aspect-square bg-accent/5 border border-border industrial-corner relative flex items-center justify-center">
                 <Activity className="h-32 w-32 text-primary-blue opacity-10" />
                 <div className="absolute inset-0 grid-pattern opacity-5" />
              </div>
           </div>
        </motion.div>

        {/* Section 7: Final CTA */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40 mb-20 text-center">
           <div className="p-16 border border-border bg-background industrial-corner relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary-blue/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
              <div className="relative z-10">
                 <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground mb-8">Secure Your <span className="text-primary-blue">SERP Dominance.</span></h2>
                 <p className="text-base text-muted-foreground font-light max-w-xl mx-auto mb-10">Deploy the world's most aggressive ranking intelligence platform and start securing your market share today.</p>
                 <button className="px-12 py-5 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-blue/90 transition-all shadow-neon-blue">
                    Initialize Command Center
                 </button>
              </div>
           </div>
        </motion.div>
      </div>
    </BaseInfoPage>
  )
}
