import { motion } from 'framer-motion'
import { Rocket, Target, Zap, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutUsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <div className='min-h-screen bg-background relative overflow-x-hidden selection:bg-primary-blue/20'>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-[0.05] dark:opacity-10" />
      </div>

      <main className="relative z-10 pt-24 pb-32">
         <section className='mx-auto max-w-7xl px-4 lg:px-8'>
            <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl mx-auto text-center">
              <motion.div variants={fadeUp} className="mb-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-none border border-border bg-accent/10">
                  <div className="h-2 w-2 bg-primary-blue animate-pulse"></div>
                  <span className="text-[10px] font-bold text-foreground uppercase tracking-[0.3em]">Operational Protocol</span>
                </div>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className='font-display text-5xl font-bold leading-[1.1] lg:text-[80px] tracking-tight text-foreground mb-10 uppercase'>
                Engineering the Future of <br />
                <span className="text-primary-blue">Search Intelligence.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className='text-xl text-muted-foreground font-light leading-relaxed mb-16 max-w-3xl mx-auto'>
                WebShark was founded by elite SEO engineers and data scientists to build the ultimate weapon for digital dominance. We process billions of data points daily to give our operatives an unfair advantage in the SERPs.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-3 gap-0 max-w-6xl mx-auto border border-border">
               {[
                 {
                   icon: Target,
                   title: 'Lethal Precision',
                   desc: "Our neural crawlers don't just find 404s; they reverse-engineer competitor ranking strategies with sub-millisecond precision.",
                   color: 'text-primary-blue',
                   bg: 'bg-primary-blue/5'
                 },
                 {
                   icon: Zap,
                   title: 'Hyper Velocity',
                   desc: 'Insights delivered instantly. WebShark operates at the speed of thought, allowing you to react to algorithmic shifts before your competitors even wake up.',
                   color: 'text-primary-blue',
                   bg: 'bg-accent/5'
                 },
                 {
                   icon: Rocket,
                   title: 'Apex Dominance',
                   desc: 'We equip modern marketing teams with enterprise-grade armaments to completely saturate target verticals and defend critical rankings.',
                   color: 'text-primary-blue',
                   bg: 'bg-primary-blue/5'
                 }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    variants={fadeUp} 
                    className={`p-10 border-border ${i !== 2 ? 'md:border-r' : ''} ${item.bg} hover:bg-background transition-colors group`}
                 >
                    <div className="h-12 w-12 rounded-none bg-primary-blue text-white flex items-center justify-center mb-8 border border-primary-blue transition-all">
                       <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-muted-foreground font-light text-sm leading-relaxed">
                       {item.desc}
                    </p>
                 </motion.div>
               ))}
            </motion.div>
            
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Our Core <span className="text-primary-blue">Mission.</span></h2>
              <div className="grid md:grid-cols-2 gap-12 text-left">
                <div className="p-8 bg-accent/5 border-l-2 border-primary-blue">
                   <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary-blue mb-4">Democratizing Intel</h4>
                   <p className="text-sm text-muted-foreground font-light leading-relaxed">
                     To provide every enterprise, regardless of size, with the same high-caliber competitive intelligence that was previously reserved for the world's largest tech giants.
                   </p>
                </div>
                <div className="p-8 bg-accent/5 border-l-2 border-primary-blue">
                   <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary-blue mb-4">Algorithmic Transparency</h4>
                   <p className="text-sm text-muted-foreground font-light leading-relaxed">
                     To demystify the "black box" of search algorithms through rigorous data analysis and ethical engineering practices, fostering a more transparent digital ecosystem.
                   </p>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40">
              <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-16 text-center">Strategic <span className="text-primary-blue">Timeline.</span></h2>
              <div className="max-w-4xl mx-auto space-y-16 relative">
                 <div className="absolute left-12 top-0 bottom-0 w-px bg-border hidden md:block" />
                 {[
                   { year: '2022', title: 'Genesis Protocol', desc: 'WebShark core neural engine architecture completed and stress-tested against historical SERP datasets.' },
                   { year: '2023', title: 'Global Node Expansion', desc: 'Deployment of 140+ geostationary sensory arrays across 6 continents for decentralized telemetry.' },
                   { year: '2024', title: 'Tactical AI V4.0', desc: 'Integration of real-time algorithmic adaptation models for predictive scaling and threat neutralization.' }
                 ].map((milestone, i) => (
                   <div key={i} className="flex gap-12 items-start relative">
                      <div className="h-24 w-24 rounded-none bg-primary-blue text-white flex items-center justify-center font-black shrink-0 relative z-10 border border-primary-blue shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                         {milestone.year}
                      </div>
                      <div className="pt-2">
                         <h4 className="text-xl font-bold uppercase tracking-tight text-foreground mb-3">{milestone.title}</h4>
                         <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-2xl">{milestone.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40 p-16 bg-accent/5 border border-border industrial-corner relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Rocket className="h-64 w-64" />
              </div>
              <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                 <div>
                    <h2 className="font-display text-5xl font-bold uppercase tracking-tighter text-foreground mb-8">Global <span className="text-primary-blue">Intelligence Network.</span></h2>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
                       Our infrastructure spans across every major digital sector, providing redundant telemetry paths and low-latency data ingestion for real-time market dominance.
                    </p>
                    <div className="grid grid-cols-2 gap-12">
                       <div>
                          <p className="text-4xl font-black text-foreground mb-1">140+</p>
                          <p className="text-[10px] font-bold uppercase text-primary-blue tracking-[0.3em]">Operational Nodes</p>
                       </div>
                       <div>
                          <p className="text-4xl font-black text-foreground mb-1">12ms</p>
                          <p className="text-[10px] font-bold uppercase text-primary-blue tracking-[0.3em]">Telemetry Latency</p>
                       </div>
                    </div>
                 </div>
                 <div className="aspect-video bg-background border border-border flex items-center justify-center relative group">
                    <div className="absolute inset-0 grid-pattern opacity-10" />
                    <div className="relative">
                       <div className="h-3 w-3 bg-primary-blue animate-ping absolute -top-1 -left-1" />
                       <div className="h-1.5 w-1.5 bg-primary-blue relative z-10" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground ml-6">Accessing Live Feed...</span>
                 </div>
              </div>
            </motion.div>
         </section>
      </main>
    </div>
  )
}
