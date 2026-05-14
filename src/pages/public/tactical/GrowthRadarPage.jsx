import { Radar, Zap, TrendingUp, Activity, Target, Shield, Rocket, ArrowRight, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function GrowthRadarPage() {
  const navigate = useNavigate()
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <BaseInfoPage 
      title="Growth Radar" 
      subtitle="Predictive Momentum Analysis // Scaling Readiness" 
      icon={Radar}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Identify viral opportunities and keyword trends before they peak.</p>
        <p>The Growth Radar uses proprietary signal-detection algorithms to scan social media, news feeds, and search spikes. It identifies low-difficulty, high-volume opportunities for rapid traffic acquisition.</p>
        
        {/* Section 2: Predictive Scaling Matrix */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
           <div className="p-8 border border-border bg-accent/5 industrial-corner hover:border-primary-blue/30 transition-all group">
              <div className="h-10 w-10 bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all">
                 <Zap className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Signal Detection</h4>
              <p className="text-sm">Identify emerging search trends 48-72 hours before they appear in standard keyword research tools.</p>
           </div>
           <div className="p-8 border border-border bg-accent/5 industrial-corner hover:border-primary-blue/30 transition-all group">
              <div className="h-10 w-10 bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:bg-primary-blue group-hover:text-white transition-all">
                 <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Velocity Scoring</h4>
              <p className="text-sm">Quantify the momentum of new search queries to prioritize high-velocity growth vectors.</p>
           </div>
        </div>

        {/* Section 3: Growth Vector Visualization */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <div className="p-12 border border-border bg-slate-950 industrial-corner relative overflow-hidden group">
              <div className="absolute inset-0 grid-pattern opacity-10" />
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-white mb-6">Momentum <span className="text-primary-blue">Forecasting.</span></h3>
                    <p className="text-sm text-slate-400 mb-8">Utilize our predictive neural models to visualize the future growth of specific keyword clusters and content themes.</p>
                    <div className="space-y-4">
                       {[
                         { label: 'Signal Strength', val: '84%' },
                         { label: 'Forecast Accuracy', val: '92%' }
                       ].map((s, i) => (
                         <div key={i} className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{s.label}</span>
                            <span className="text-sm font-black text-primary-blue">{s.val}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="relative aspect-square flex items-center justify-center">
                    <Radar className="h-48 w-48 text-primary-blue opacity-20 animate-spin-slow" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="h-2 w-2 bg-primary-blue shadow-neon-blue" />
                    </div>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Section 4: Opportunity Identification */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12 text-center">Operational <span className="text-primary-blue">Readiness.</span></h3>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Viral Thresholds', desc: 'Alerts when a niche keyword cluster crosses the high-momentum threshold.', icon: Activity },
                { title: 'Difficulty Decay', desc: 'Identify when high-volume keywords experience temporary drops in ranking difficulty.', icon: Target },
                { title: 'Competitive Latency', desc: 'Exploit the gap between a trend starting and your competitors reacting.', icon: Shield }
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

        {/* Section 5: Content Scaling Specs */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 p-12 border border-border bg-accent/5 industrial-corner relative overflow-hidden">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Tactical <span className="text-primary-blue">Scaling.</span></h3>
                 <p className="text-sm leading-relaxed mb-8">Once a growth vector is identified, our system provides exact specifications for content volume, technical requirements, and authority building to secure the opportunity.</p>
                 <div className="grid grid-cols-2 gap-6">
                    {['Automated Content Briefs', 'Internal Linking Blueprints', 'Authority Acquisition Plans', 'Scaling Checklists'].map(f => (
                      <div key={f} className="flex items-center gap-3">
                         <div className="h-1.5 w-1.5 bg-primary-blue" />
                         <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{f}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-10 border border-border bg-background flex flex-col gap-6">
                 {[
                   { label: 'Momentum', val: 'CRITICAL', color: 'text-rose-500' },
                   { label: 'Opportunity ID', val: 'GR-842', color: 'text-primary-blue' },
                   { label: 'Status', val: 'READY_TO_SCALE', color: 'text-emerald-500' }
                 ].map((d, i) => (
                   <div key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{d.label}</span>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${d.color}`}>{d.val}</span>
                   </div>
                 ))}
              </div>
           </div>
        </motion.div>

        {/* Section 6: Tactical Reporting */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <div className="text-center mb-16">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">Radar <span className="text-primary-blue">Deliverables.</span></h3>
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Priority Growth Briefings</p>
           </div>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {['Trend Forecasts', 'Momentum Reports', 'Scaling Directives', 'Niche Alerts'].map((item, i) => (
                <div key={i} className="p-8 border border-border bg-background text-center hover:border-primary-blue transition-all cursor-pointer group">
                   <BarChart3 className="h-6 w-6 text-muted-foreground mx-auto mb-4 group-hover:text-primary-blue transition-colors" />
                   <p className="text-[10px] font-black text-foreground uppercase tracking-widest group-hover:text-primary-blue transition-colors">{item}</p>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Section 7: Final CTA */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40 mb-20">
           <div className="p-16 border border-primary-blue/30 bg-primary-blue/5 text-center industrial-corner relative overflow-hidden group">
              <div className="relative z-10">
                 <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground mb-8">Deploy Your <span className="text-primary-blue">Growth Radar.</span></h2>
                 <p className="text-base text-muted-foreground font-light max-w-xl mx-auto mb-12">Stop reacting to the market. Start predicting it. Deploy WebShark's proprietary momentum analysis tools today.</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="px-12 py-5 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-blue/90 transition-all shadow-neon-blue flex items-center justify-center gap-4"
                    >
                       Initialize Tracking <Rocket className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => navigate('/pricing')}
                      className="px-12 py-5 bg-background border border-border text-foreground font-black text-[11px] uppercase tracking-[0.3em] hover:bg-accent transition-all flex items-center justify-center gap-4"
                    >
                       View Pricing <ArrowRight className="h-4 w-4" />
                    </button>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </BaseInfoPage>
  )
}
