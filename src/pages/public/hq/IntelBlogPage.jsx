import { BookOpen, Search, Activity, Zap, TrendingUp, Mail, ArrowRight, Clock, User } from 'lucide-react'
import { motion } from 'framer-motion'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function IntelBlogPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <BaseInfoPage 
      title="Intel Blog" 
      subtitle="Operational Briefings // Sector Telemetry" 
      icon={BookOpen}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Deep technical analysis of algorithmic shifts and search industry trends.</p>
        <p>Our intelligence team regularly publishes detailed breakdowns of search engine updates and new growth tactics. Stay ahead of the curve with our data-driven briefings, harvested from millions of SERP data points.</p>
        
        {/* Section 1: Featured Intelligence */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-12">
           <div className="group relative border border-border bg-accent/5 overflow-hidden industrial-corner p-1">
              <div className="aspect-[21/9] bg-background border border-border relative overflow-hidden">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-4 mb-4">
                       <span className="px-3 py-1 bg-primary-blue text-white text-[8px] font-black uppercase tracking-widest">CRITICAL_INTEL</span>
                       <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">March 24, 2024</span>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-bold text-white uppercase tracking-tighter mb-4">Reverse-Engineering the V4 Semantic Core Update</h2>
                    <p className="text-sm text-white/70 max-w-2xl mb-6">A deep dive into how recent neural weight adjustments have impacted e-commerce topical authority scores.</p>
                    <button className="flex items-center gap-3 text-[10px] font-black text-primary-blue uppercase tracking-[0.3em] hover:text-white transition-colors">
                       Access Full Report <ArrowRight className="h-4 w-4" />
                    </button>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Section 2: Recent Briefings Grid */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <div className="flex items-center justify-between mb-12">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground">Recent <span className="text-primary-blue">Briefings.</span></h3>
              <div className="flex items-center gap-4 px-4 py-2 bg-background border border-border">
                 <Search className="h-4 w-4 text-muted-foreground" />
                 <input type="text" placeholder="Filter Intel..." className="bg-transparent border-none outline-none text-[10px] font-bold uppercase tracking-widest w-32 focus:w-48 transition-all" />
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'The Rise of Zero-Click SERPs', category: 'Market Trend', date: '2d ago' },
                { title: 'Internal Linking Protocols', category: 'Technical', date: '4d ago' },
                { title: 'Crawl Budget Optimization', category: 'Infrastructure', date: '1w ago' },
                { title: 'AI Content Infiltration', category: 'Neural', date: '10d ago' },
                { title: 'Local Search Geostationary Nodes', category: 'Growth', date: '2w ago' },
                { title: 'Encrypted Meta-Data Signals', category: 'Security', date: '3w ago' }
              ].map((post, i) => (
                <div key={i} className="p-8 border border-border bg-background hover:border-primary-blue/30 transition-all group cursor-pointer">
                   <div className="flex items-center justify-between mb-6">
                      <span className="text-[8px] font-black text-primary-blue uppercase tracking-widest">{post.category}</span>
                      <div className="flex items-center gap-2 text-muted-foreground">
                         <Clock className="h-3 w-3" />
                         <span className="text-[8px] font-bold uppercase tracking-widest">{post.date}</span>
                      </div>
                   </div>
                   <h4 className="text-lg font-bold text-foreground uppercase tracking-tight mb-6 group-hover:text-primary-blue transition-colors leading-tight">{post.title}</h4>
                   <div className="flex items-center gap-3">
                      <div className="h-6 w-6 bg-accent/10 border border-border rounded-full" />
                      <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest italic">Authored by Operative_71</span>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Section 3: Sector Categories */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Activity, label: 'Technical SEO', count: 42 },
                { icon: TrendingUp, label: 'Market Intel', count: 28 },
                { icon: Zap, label: 'Neural AI', count: 15 },
                { icon: User, label: 'Case Reports', count: 31 }
              ].map((cat, i) => (
                <div key={i} className="p-8 border border-border bg-accent/5 industrial-corner text-center hover:bg-primary-blue/5 transition-all cursor-pointer group">
                   <cat.icon className="h-8 w-8 text-primary-blue/50 mx-auto mb-4 group-hover:text-primary-blue transition-colors" />
                   <p className="text-[10px] font-black text-foreground uppercase tracking-widest mb-1">{cat.label}</p>
                   <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{cat.count} Briefings</p>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Section 4: Operational Insights (Feed) */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 p-12 border border-border bg-card industrial-corner relative overflow-hidden">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Operational <span className="text-primary-blue">Telemetry Feed.</span></h3>
                 <p className="text-sm text-muted-foreground leading-relaxed mb-8">Stay updated with micro-briefings delivered directly from our neural engine. Real-time shifts in global search patterns recorded in real-time.</p>
                 <div className="space-y-4">
                    {[
                      'Volatility detected in Finance sector (NA Region).',
                      'New crawl patterns identified for GoogleBot-Mobile.',
                      'Core vitals threshold adjustment for Web-Vitals-V4.'
                    ].map((msg, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-background border border-border font-mono text-[10px] text-emerald-500">
                         <span>[{new Date().getHours()}:{i}4:12]</span>
                         <span className="text-foreground/70">{msg}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-background border border-border p-12 flex flex-col justify-center text-center relative overflow-hidden">
                 <div className="absolute inset-0 grid-pattern opacity-10" />
                 <TrendingUp className="h-24 w-24 text-primary-blue opacity-10 mx-auto mb-8" />
                 <h4 className="text-xs font-black text-foreground uppercase tracking-[0.3em] mb-4">Neural Predictive Index</h4>
                 <p className="text-4xl font-black text-primary-blue mb-2">0.84</p>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Market Instability Rating</p>
              </div>
           </div>
        </motion.div>

        {/* Section 5: Subscription Protocol */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-40 mb-20 text-center">
           <div className="max-w-2xl mx-auto">
              <Mail className="h-12 w-12 text-primary-blue opacity-20 mx-auto mb-8" />
              <h2 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground mb-8">Initialize Intel <span className="text-primary-blue">Subscription.</span></h2>
              <p className="text-sm text-muted-foreground font-light mb-12">Get detailed mission reports and strategic directives delivered directly to your secure inbox. No vanity metrics, just actionable intelligence.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <input type="email" placeholder="Enter Secure Email Address" className="flex-1 bg-background border border-border px-8 py-5 text-xs font-bold uppercase tracking-widest outline-none focus:border-primary-blue transition-all" />
                 <button className="px-12 py-5 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-blue/90 transition-all shadow-neon-blue">
                    Authorize Feed
                 </button>
              </div>
              <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-[0.4em] mt-8">Secure Protocol Encrypted // Zero Spam Commitment</p>
           </div>
        </motion.div>
      </div>
    </BaseInfoPage>
  )
}
