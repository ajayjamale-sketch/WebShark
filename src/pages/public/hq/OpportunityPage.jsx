import { Briefcase, Target, Shield, Cpu, Zap, ArrowRight, Terminal, Activity, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function OpportunityPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <BaseInfoPage 
      title="View Opportunity" 
      subtitle="Recruitment Protocol // Role Analysis" 
      icon={Briefcase}
    >
      <div className="space-y-32 text-muted-foreground font-light leading-relaxed">
        
        {/* Section 1: Operative Profile (Hero) */}
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-blue/10 border border-primary-blue/20 mb-6">
                <span className="h-1.5 w-1.5 bg-primary-blue animate-pulse" />
                <span className="text-[10px] font-bold text-primary-blue uppercase tracking-widest">Active Recruitment</span>
              </div>
              <h1 className="font-display text-4xl lg:text-6xl font-bold uppercase tracking-tighter text-foreground mb-6">
                Senior SEO <span className="text-primary-blue">Engineer.</span>
              </h1>
              <p className="text-lg leading-relaxed mb-8">
                We are seeking a high-caliber technical operative to lead our neural search division. You will be responsible for reverse-engineering algorithmic shifts and deploying tactical SEO infrastructure at scale.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-sm font-bold text-foreground">Zurich // Remote</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Clearance</p>
                  <p className="text-sm font-bold text-foreground">L5 Technical</p>
                </div>
              </div>
            </div>
            <div className="p-12 bg-accent/5 border border-border industrial-corner relative overflow-hidden group">
               <div className="absolute inset-0 grid-pattern opacity-10" />
               <pre className="text-[10px] font-mono text-primary-blue/60 group-hover:text-primary-blue transition-colors">
                  {`
[MISSION_DATA_LOADED]
> ROLE: SENIOR_SEO_ENG
> SECTOR: NEURAL_CRAWL
> DEPLOYMENT: GLOBAL

{
  "status": "AWAITING_ACTIVATION",
  "priority": "CRITICAL",
  "requirements": ["RUST", "AI", "SEO"]
}
                  `}
               </pre>
            </div>
          </div>
        </motion.div>

        {/* Section 2: Tactical Objectives (Responsibilities) */}
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={fadeUp}
        >
          <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12">Tactical <span className="text-primary-blue">Objectives.</span></h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: 'Algorithmic Warfare', desc: 'Monitor and counter global search algorithm updates in real-time using predictive modeling.' },
              { icon: Shield, title: 'Defensive Indexing', desc: 'Architect redundant indexing protocols to ensure 100% visibility for critical client assets.' },
              { icon: Cpu, title: 'Neural Optimization', desc: 'Deploy AI-driven content synthesis engines to saturate high-value keyword clusters.' },
              { icon: Activity, title: 'Telemetry Ingestion', desc: 'Manage petabyte-scale data pipelines for real-time SERP telemetry and competitor tracking.' }
            ].map((obj, i) => (
              <div 
                key={i} 
                onClick={() => toast.success(`OBJECTIVE_SYNCED: ${obj.title}`, { description: 'Establishing operational parameters...' })}
                className="p-8 border border-border bg-background hover:border-primary-blue/30 transition-all group cursor-pointer"
              >
                <obj.icon className="h-6 w-6 text-primary-blue mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-foreground uppercase tracking-tight text-lg mb-2">{obj.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: Required Arsenal (Requirements) */}
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="p-12 border border-border bg-accent/5 industrial-corner"
        >
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
               <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-6">Required <span className="text-primary-blue">Arsenal.</span></h3>
               <p className="text-sm leading-relaxed text-muted-foreground">We only deploy operatives with proven technical combat experience in high-concurrency environments.</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
               {[
                 { label: 'Technical Depth', value: '7+ Years in Systems Eng' },
                 { label: 'Language Mastery', value: 'Rust, Go, or C++ Expertise' },
                 { label: 'Neural Intelligence', value: 'LLM & Transformer Architecture' },
                 { label: 'Tactical SEO', value: 'Enterprise-Scale Optimization' }
               ].map((req, i) => (
                 <div key={i} className="border-l-2 border-primary-blue pl-6 py-2">
                    <p className="text-[10px] font-black text-primary-blue uppercase tracking-widest mb-1">{req.label}</p>
                    <p className="text-sm font-bold text-foreground">{req.value}</p>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>

        {/* Section 4: Technical Environment (Tech Stack) */}
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={fadeUp}
        >
          <div className="text-center mb-16">
            <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">Technical <span className="text-primary-blue">Environment.</span></h3>
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Standard Issue Operative Stack</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Terminal, label: 'Systems', stack: 'Rust, WebAssembly' },
              { icon: Globe, label: 'Cloud', stack: 'K8s, AWS, Terraform' },
              { icon: Cpu, label: 'Intelligence', stack: 'PyTorch, CUDA' },
              { icon: Zap, label: 'Real-time', stack: 'Redis, Kafka, gRPC' }
            ].map((stack, i) => (
              <div 
                key={i} 
                onClick={() => toast.info(`STACK_INIT: ${stack.label}`, { description: 'Initializing technical environment protocols...' })}
                className="p-8 border border-border bg-background text-center group hover:bg-primary-blue/5 transition-all cursor-pointer"
              >
                <stack.icon className="h-6 w-6 text-primary-blue mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <p className="text-[10px] font-black text-foreground uppercase tracking-widest mb-2">{stack.label}</p>
                <p className="text-xs text-muted-foreground">{stack.stack}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 5: Recruitment Activation (CTA) */}
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="mt-40 mb-20 text-center"
        >
           <div className="p-16 border border-primary-blue/30 bg-primary-blue/5 industrial-corner">
              <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground mb-8">Ready for <span className="text-primary-blue">Activation?</span></h2>
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto mb-12">If you possess the technical ingenuity to engineer the future of search, transmit your credentials and technical portfolio today.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <button 
                  onClick={() => navigate('/contact')}
                  className="px-16 py-6 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.4em] hover:bg-primary-blue/90 transition-all shadow-neon-blue flex items-center justify-center gap-3"
                 >
                    Authorize Application <ArrowRight className="h-4 w-4" />
                 </button>
                 <button 
                  onClick={() => navigate('/pricing')}
                  className="px-16 py-6 bg-background border border-border text-foreground font-black text-[11px] uppercase tracking-[0.4em] hover:bg-accent transition-all flex items-center justify-center gap-3"
                 >
                    View Tiers <Zap className="h-4 w-4" />
                 </button>
              </div>
              <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-[0.4em] mt-12">Encrypted Submission Channel Active // Response within 24h</p>
           </div>
        </motion.div>

      </div>
    </BaseInfoPage>
  )
}
