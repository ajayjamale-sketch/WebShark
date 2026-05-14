import { Briefcase, Cpu, Users, Zap, Globe, Rocket, Terminal, Activity, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function CareersPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <BaseInfoPage 
      title="Careers" 
      subtitle="Recruitment Protocol // Operational Expansion" 
      icon={Briefcase}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        {/* Section 1: Hero & Open Roles */}
        <p className="text-xl text-foreground font-medium">Join the elite unit building the future of search intelligence.</p>
        <p>We are always looking for senior SEO engineers, data scientists, and technical architects who thrive in high-stakes environments.</p>
        
        <div className="grid gap-6 mt-12">
           {[
             { role: 'Senior SEO Engineer', location: 'Remote // Full-Time', stack: 'Rust, Go, K8s' },
             { role: 'Neural Network Scientist', location: 'Zurich // Hybrid', stack: 'PyTorch, TensorFlow' },
             { role: 'Full Stack Architect', location: 'Austin // On-site', stack: 'Next.js, Node, Postgres' }
           ].map((job, i) => (
             <motion.div 
               key={i}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
               variants={fadeUp}
               className="p-8 border border-border bg-accent/5 industrial-corner flex flex-col md:flex-row md:items-center justify-between hover:border-primary-blue/30 transition-all group"
             >
                <div>
                   <h4 className="font-bold text-foreground uppercase tracking-tight text-lg mb-1">{job.role}</h4>
                   <p className="text-[10px] font-bold text-primary-blue uppercase tracking-widest">{job.location}</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-8">
                   <div className="text-right">
                      <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Target Stack</p>
                      <p className="text-xs font-bold text-foreground uppercase">{job.stack}</p>
                   </div>
                   <button className="h-10 w-10 bg-background border border-border flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-all">
                      <ArrowRight className="h-4 w-4" />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Section 2: Engineering Standards */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Engineering <span className="text-primary-blue">Standards.</span></h3>
                 <p className="text-sm leading-relaxed mb-8">We maintain extreme technical standards to ensure our neural engine remains the most powerful tactical asset in the industry.</p>
                 <div className="space-y-4">
                    {[
                      { icon: Terminal, label: 'Memory Safety', desc: 'Strict Rust-based core systems for zero memory leaks.' },
                      { icon: Activity, label: 'Sub-ms Latency', desc: 'Optimization protocols for real-time global telemetry.' }
                    ].map((s, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <div className="mt-1 h-8 w-8 bg-primary-blue/5 border border-primary-blue/20 flex items-center justify-center text-primary-blue">
                            <s.icon className="h-4 w-4" />
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-foreground uppercase tracking-widest">{s.label}</p>
                            <p className="text-xs text-muted-foreground">{s.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-12 border border-border bg-card industrial-corner relative overflow-hidden group">
                 <div className="absolute inset-0 grid-pattern opacity-10" />
                 <pre className="text-[10px] font-mono text-primary-blue/60 group-hover:text-primary-blue transition-colors">
                    {`
[RECRUITMENT_PHASE_01]
> SCANNING_TALENT_VECTORS
> VALIDATING_ARCHITECTURE

fn initialize_hire(candidate: &Operative) {
    if candidate.skill_level > THRESHOLD {
        deploy_contract(candidate);
    }
}
                    `}
                 </pre>
              </div>
           </div>
        </motion.div>

        {/* Section 3: Operative Benefits */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12 text-center">Operative <span className="text-primary-blue">Benefits.</span></h3>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, label: 'Performance Bonus', desc: 'Equity & growth-linked incentives.' },
                { icon: Globe, label: 'Remote First', desc: 'Operate from any global node.' },
                { icon: Users, label: 'Health Defense', desc: 'Comprehensive premium coverage.' },
                { icon: Rocket, label: 'Deep Learning', desc: 'Annual training & equipment budget.' }
              ].map((b, i) => (
                <div key={i} className="p-8 border border-border bg-background hover:bg-accent/5 transition-all group">
                   <b.icon className="h-6 w-6 text-primary-blue mb-6 group-hover:scale-110 transition-transform" />
                   <p className="text-[10px] font-black text-foreground uppercase tracking-widest mb-2">{b.label}</p>
                   <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Section 4: Operational Environment */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 p-12 border border-border bg-accent/5 industrial-corner">
           <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                 <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Operational <span className="text-primary-blue">Environment.</span></h3>
                 <p className="text-sm leading-relaxed mb-8">We provide our operatives with high-performance hardware and a culture of radical autonomy.</p>
                 <div className="flex flex-wrap gap-4">
                    {['M3 Max Standard', 'Async Workflows', 'Zero Meeting Fridays'].map(tag => (
                      <div key={tag} className="px-4 py-2 bg-background border border-border">
                         <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-blue">{tag}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-background border border-border p-8 flex flex-col justify-center text-center">
                 <p className="text-4xl font-black text-foreground mb-1">98%</p>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Retention Rate</p>
              </div>
           </div>
        </motion.div>

        {/* Section 5: Pipeline & CTA */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 mb-20">
           <div className="p-16 border border-primary-blue/30 bg-primary-blue/5 industrial-corner">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Recruitment <span className="text-primary-blue">Pipeline.</span></h3>
                    <div className="space-y-6">
                       {[
                         { step: '01', title: 'Intel Sync', desc: 'Initial tactical alignment call.' },
                         { step: '02', title: 'Tech Trial', desc: 'Engineering challenge.' },
                         { step: '03', title: 'Activation', desc: 'Contract signing.' }
                       ].map((p, i) => (
                         <div key={i} className="flex gap-4 items-start">
                            <span className="text-2xl font-black text-primary-blue/20">{p.step}</span>
                            <div>
                               <h4 className="text-[10px] font-black text-foreground uppercase tracking-widest">{p.title}</h4>
                               <p className="text-[11px] text-muted-foreground">{p.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="text-center">
                    <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Initialize <span className="text-primary-blue">Career.</span></h2>
                    <button className="px-16 py-6 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.4em] hover:bg-primary-blue/90 transition-all shadow-neon-blue">
                       Authorize Application
                    </button>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </BaseInfoPage>
  )
}
