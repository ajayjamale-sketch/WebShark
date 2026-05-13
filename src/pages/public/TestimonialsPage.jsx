import { motion } from 'framer-motion'
import { Quote, Video, ArrowRight, Globe, Users, Target, BarChart, User } from 'lucide-react'
import BaseInfoPage from '../../components/common/BaseInfoPage'
import { testimonialCards } from '../../data/mockData'

export default function TestimonialsPage() {
  return (
    <BaseInfoPage 
      title="User Telemetry" 
      subtitle="Operational Success // Stakeholder Feedback" 
      icon={Quote}
    >
      <div className='grid gap-8 md:grid-cols-2 mt-12'>
        {testimonialCards.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-background p-8 rounded-none border border-border flex flex-col justify-between shadow-sm industrial-corner"
          >
             <div>
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, i) => <div key={i} className="h-1.5 w-1.5 bg-primary-blue" />)}
                </div>
                <p className="text-lg text-foreground italic font-light leading-relaxed mb-8">"{testimonial.quote}"</p>
             </div>
             <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-primary-blue/10 flex items-center justify-center text-primary-blue font-bold text-xs">
                   {testimonial.author[0]}
                </div>
                <div>
                   <p className="text-foreground font-bold text-sm uppercase tracking-tight">{testimonial.author}</p>
                   <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{testimonial.role}</p>
                </div>
             </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-12 bg-card border border-border"
      >
        <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12 text-center">Operational <span className="text-primary-blue">Case Studies.</span></h3>
        <div className="grid md:grid-cols-3 gap-12">
           {[
             { metric: '+240%', label: 'Visibility Increase', brand: 'TechNova' },
             { metric: '-14ms', label: 'Crawl Latency', brand: 'Vertex' },
             { metric: '1.2M', label: 'Rankings Secured', brand: 'BrightCom' }
           ].map((stat, i) => (
             <div key={i} className="text-center group">
                <p className="text-5xl font-black text-primary-blue mb-2 tracking-tighter group-hover:scale-110 transition-transform">{stat.metric}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-1">{stat.label}</p>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.brand}</p>
             </div>
           ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 text-center border-t border-border pt-32"
      >
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Contribute to the <span className="text-primary-blue">Intelligence Archive.</span></h3>
        <p className="text-sm text-muted-foreground font-light max-w-2xl mx-auto mb-12">
           Have you achieved significant market dominance using WebShark? Submit your tactical report and help us refine the neural engine for future operations.
        </p>
        <button className="px-16 py-6 bg-background border border-primary-blue text-primary-blue font-black text-[11px] uppercase tracking-[0.4em] hover:bg-primary-blue hover:text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.1)]">
           Submit Field Report
        </button>
      </motion.div>

      {/* Section 4: Global Client Logos */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-40">
         <p className="text-[10px] font-black uppercase tracking-[0.5em] text-center text-muted-foreground mb-12">Verified Operational Partners</p>
         <div className="flex flex-wrap justify-center gap-x-20 gap-y-12 opacity-30 grayscale hover:grayscale-0 transition-all">
            {['NEXUS', 'SYNERGY', 'QUANTUM', 'APEX', 'VORTEX', 'SIGNAL'].map(logo => (
              <span key={logo} className="text-2xl font-black tracking-widest text-foreground hover:text-primary-blue transition-colors cursor-default">{logo}</span>
            ))}
         </div>
      </motion.div>

      {/* Section 5: Video Field Reports */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 grid lg:grid-cols-2 gap-16 items-center">
         <div className="aspect-video bg-slate-900 border border-slate-800 flex items-center justify-center relative group overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
            <div className="relative z-10 h-20 w-20 rounded-full bg-primary-blue flex items-center justify-center shadow-neon-blue cursor-pointer group-hover:scale-110 transition-transform">
               <Video className="h-8 w-8 text-white fill-white" />
            </div>
            <div className="absolute bottom-6 left-6 z-10">
               <p className="text-xs font-black text-white uppercase tracking-widest">Case Study: Global Expansion</p>
               <p className="text-[10px] text-primary-blue font-bold uppercase tracking-widest">TechCorp International</p>
            </div>
         </div>
         <div>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Video <span className="text-primary-blue">Intelligence briefings.</span></h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed mb-8">
               Watch elite marketing directors explain how they utilized WebShark's neural engine to dismantle competitor moats and secure sustainable market dominance.
            </p>
            <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary-blue hover:text-foreground transition-colors">
               Explore Full Archive <ArrowRight className="h-4 w-4" />
            </button>
         </div>
      </motion.div>

      {/* Section 6: Sector Dominance Stats */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 text-center">
         <h2 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12">Sector <span className="text-primary-blue">Dominance Matrix.</span></h2>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { sector: 'E-Commerce', growth: '312%', nodes: 42 },
              { sector: 'SaaS / Tech', growth: '184%', nodes: 28 },
              { sector: 'FinTech', growth: '95%', nodes: 15 },
              { sector: 'Healthcare', growth: '240%', nodes: 22 }
            ].map((s, i) => (
              <div key={i} className="p-8 border border-border bg-accent/5 industrial-corner hover:border-primary-blue transition-all group">
                 <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-4">{s.sector}</p>
                 <p className="text-4xl font-black text-foreground mb-1 group-hover:text-primary-blue transition-colors">{s.growth}</p>
                 <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Avg. Growth Delta</p>
              </div>
            ))}
         </div>
      </motion.div>

      {/* Section 7: Operative Spotlight */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 p-16 border border-border bg-background relative overflow-hidden">
         <div className="absolute top-0 left-0 w-2 h-full bg-primary-blue" />
         <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
               <div className="aspect-[3/4] bg-accent/10 border border-border flex items-center justify-center relative grayscale">
                  <User className="h-20 w-20 text-primary-blue opacity-20" />
               </div>
            </div>
            <div className="lg:col-span-2">
               <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <div key={i} className="h-1.5 w-1.5 bg-primary-blue" />)}
               </div>
               <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-6">"WebShark didn't just give us data; it gave us a <span className="text-primary-blue">battle plan</span> that worked."</h3>
               <p className="text-base text-muted-foreground font-light italic leading-relaxed mb-8">
                  "We were struggling to maintain our position in the highly competitive insurance sector. After deploying WebShark, we identified three critical keyword clusters that our competitors had neglected. Within 6 months, we dominated those clusters, resulting in a 400% increase in qualified leads."
               </p>
               <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-primary-blue" />
                  <div>
                     <p className="text-sm font-black text-foreground uppercase tracking-widest">Julian Thorne</p>
                     <p className="text-[10px] font-bold text-primary-blue uppercase tracking-widest">Director of Performance, InsureNext</p>
                  </div>
               </div>
            </div>
         </div>
      </motion.div>

      {/* Section 8: Global Testimonial Map */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 mb-20 text-center">
         <div className="p-12 border border-border bg-accent/5 industrial-corner">
            <Globe className="h-16 w-16 text-primary-blue opacity-20 mx-auto mb-8" />
            <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Global <span className="text-primary-blue">Deployment Success.</span></h2>
            <p className="text-sm text-muted-foreground font-light max-w-2xl mx-auto mb-12">
               Our operatives are active in every major market across the globe. Join the network of thousands of successful teams already dominating their SERPs with WebShark.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               {['North America', 'Europe', 'APAC', 'LATAM', 'Middle East'].map(region => (
                 <div key={region} className="px-6 py-2 border border-dashed border-border">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">{region}</span>
                 </div>
               ))}
            </div>
         </div>
      </motion.div>
    </BaseInfoPage>
  )
}
