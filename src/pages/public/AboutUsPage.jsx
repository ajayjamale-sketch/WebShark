import { motion } from 'framer-motion'
import { Rocket, Target, Zap, ArrowLeft, User } from 'lucide-react'
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
              
              <motion.h1 variants={fadeUp} className='font-display text-4xl sm:text-5xl font-bold leading-[1.1] lg:text-[80px] tracking-tight text-foreground mb-8 lg:mb-10 uppercase'>
                Engineering the Future of <br />
                <span className="text-primary-blue">Search Intelligence.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className='text-xl text-muted-foreground font-light leading-relaxed mb-16 max-w-3xl mx-auto'>
                WebShark was founded by elite SEO engineers and data scientists to build the ultimate weapon for digital dominance. We process billions of data points daily to give our operatives an unfair advantage in the SERPs.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto border border-border">
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
                     className={`p-8 lg:p-10 border-b md:border-b-0 border-border ${i !== 2 ? 'md:border-r' : ''} ${item.bg} hover:bg-background transition-colors group`}
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
                    <div key={i} className="flex flex-col sm:flex-row gap-6 lg:gap-12 items-start relative">
                       <div className="h-16 w-16 sm:h-24 sm:w-24 rounded-none bg-primary-blue text-white flex items-center justify-center font-black shrink-0 relative z-10 border border-primary-blue shadow-[0_0_20px_rgba(37,99,235,0.2)] text-sm sm:text-base">
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
                  <div className="p-8 lg:p-0">
                     <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground mb-8">Global <span className="text-primary-blue">Intelligence Network.</span></h2>
                     <p className="text-base lg:text-lg text-muted-foreground font-light leading-relaxed mb-10">
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

            {/* Section 6: Leadership Operatives */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40">
              <div className="text-center mb-16">
                 <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-4">Command <span className="text-primary-blue">Leadership.</span></h2>
                 <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Elite Operatives Behind the Protocol</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { name: 'Dr. Elias Vance', role: 'Chief Architect', specialized: 'Neural Systems' },
                   { name: "Sarah 'Shark' Chen", role: 'Head of Intel', specialized: 'Algorithmic Warfare' },
                   { name: 'Marcus Thorne', role: 'Ops Director', specialized: 'Infrastructure' },
                   { name: 'Elena Rossi', role: 'Chief Scientist', specialized: 'Data Synthesis' }
                 ].map((leader, i) => (
                   <div key={i} className="group p-8 border border-border bg-accent/5 hover:border-primary-blue transition-all industrial-corner">
                      <div className="aspect-square bg-background border border-border mb-6 flex items-center justify-center relative grayscale group-hover:grayscale-0 transition-all">
                         <User className="h-12 w-12 text-primary-blue opacity-20 group-hover:opacity-100 transition-opacity" />
                         <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                      </div>
                      <h4 className="font-bold text-foreground uppercase tracking-tight">{leader.name}</h4>
                      <p className="text-[10px] font-bold text-primary-blue uppercase tracking-widest mt-1">{leader.role}</p>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Expert: {leader.specialized}</p>
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* Section 7: Technology Stack */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Engineering <span className="text-primary-blue">Standards.</span></h2>
                 <p className="text-base text-muted-foreground font-light leading-relaxed mb-8">
                    Our platform is built on a distributed, low-latency architecture designed to handle petabytes of SERP data with 99.999% reliability.
                 </p>
                 <div className="space-y-4">
                    {[
                      { label: 'Neural Processing', value: 98 },
                      { label: 'Data Integrity', value: 100 },
                      { label: 'System Uptime', value: 99 }
                    ].map((stat, i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex justify-between items-end">
                            <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">{stat.label}</span>
                            <span className="text-[10px] font-bold text-primary-blue uppercase tracking-widest">{stat.value}%</span>
                         </div>
                         <div className="h-1 w-full bg-border">
                            <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: `${stat.value}%` }} 
                              transition={{ duration: 1, delay: 0.5 }}
                              className="h-full bg-primary-blue"
                            />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { title: 'Rust Core', desc: 'Memory Safety' },
                   { title: 'Go Nodes', desc: 'Concurrency' },
                   { title: 'PostgreSQL', desc: 'Persistence' },
                   { title: 'Redis Cache', desc: 'Velocity' }
                 ].map((tech, i) => (
                   <div key={i} className="p-8 border border-border bg-background hover:bg-accent/5 transition-colors">
                      <h4 className="font-bold text-foreground uppercase tracking-tight text-sm">{tech.title}</h4>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2">{tech.desc}</p>
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* Section 8: Strategic Partners / Press */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40 py-20 border-y border-border">
              <div className="text-center mb-12">
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Strategic Partners // Network Integration</p>
              </div>
              <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
                 {['TECHCRUNCH', 'FORBES', 'WIRED', 'VERGE', 'IGN'].map(brand => (
                   <span key={brand} className="text-2xl font-black tracking-widest text-foreground hover:text-primary-blue transition-colors cursor-default">{brand}</span>
                 ))}
              </div>
            </motion.div>

            {/* Section 9: Operational Values */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40 grid md:grid-cols-3 gap-12">
               {[
                 { title: 'Radical Honesty', desc: 'No vanity metrics. Just raw, actionable intelligence that drives real growth.' },
                 { title: 'Speed is Safety', desc: 'In the digital arena, the slow are consumed. We move faster than the algorithms.' },
                 { title: 'Deep Precision', desc: 'Details are not details; they are the foundation of absolute market dominance.' }
               ].map((value, i) => (
                 <div key={i} className="text-center">
                    <div className="h-[1px] w-12 bg-primary-blue mx-auto mb-8"></div>
                    <h3 className="text-xl font-bold text-foreground uppercase tracking-tighter mb-4">{value.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.desc}</p>
                 </div>
               ))}
            </motion.div>

            {/* Section 10: Call to Action */}
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40 text-center">
               <div className="p-16 border border-primary-blue/20 bg-primary-blue/5 industrial-corner relative overflow-hidden">
                  <div className="relative z-10">
                     <h2 className="font-display text-4xl lg:text-6xl font-bold uppercase tracking-tighter text-foreground mb-8">Join the <span className="text-primary-blue">Intelligence Collective.</span></h2>
                     <p className="text-base text-muted-foreground font-light max-w-2xl mx-auto mb-12">
                        We are always seeking elite talent to join our global engineering network. Are you ready to shape the future of search?
                     </p>
                     <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="px-10 py-4 bg-primary-blue text-white font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-primary-blue/90 transition-all shadow-neon-blue">
                           View Opportunities
                        </Link>
                        <Link to="/pricing" className="px-10 py-4 bg-background border border-border text-foreground font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-accent transition-all">
                           Deploy Platform
                        </Link>
                     </div>
                  </div>
               </div>
            </motion.div>
          </section>
        </main>
      </div>
    )
  }
