import { Mail, Shield, Globe, Activity, Zap, Lock, Terminal, Phone, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function SecureContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <BaseInfoPage 
      title="Secure Contact" 
      subtitle="Establish Communication // Encryption Active" 
      icon={Mail}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Transmit your inquiries through our encrypted channel.</p>
        
        <div className="grid lg:grid-cols-2 gap-16 mt-12">
           {/* Section 1: Encrypted Channel (Form) */}
           <div className="p-8 border border-border bg-accent/5 industrial-corner relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                 <Lock className="h-24 w-24 text-primary-blue" />
              </div>
              <form className="space-y-6 relative z-10">
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Subject Identifier</label>
                    <input className="w-full bg-background border border-border p-4 text-sm focus:border-primary-blue outline-none rounded-none" placeholder="Operation Query" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Secure Email</label>
                    <input className="w-full bg-background border border-border p-4 text-sm focus:border-primary-blue outline-none rounded-none" placeholder="agent@client.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Encrypted Payload</label>
                    <textarea rows={5} className="w-full bg-background border border-border p-4 text-sm focus:border-primary-blue outline-none rounded-none" placeholder="State your mission..." />
                 </div>
                 <button className="w-full py-5 bg-primary-blue text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-none hover:bg-primary-blue/90 transition-all shadow-neon-blue">
                    Transmit Payload
                 </button>
              </form>
           </div>

           {/* Section 2: Global Command Centers */}
           <div className="space-y-8">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground">Command <span className="text-primary-blue">Centers.</span></h3>
              <p className="text-sm leading-relaxed">Physical intelligence hubs for direct operational alignment and regional tactical support.</p>
              <div className="space-y-4">
                 {[
                   { city: 'Zurich, Switzerland', type: 'High Command', contact: '+41 44 123 4567' },
                   { city: 'Austin, TX', type: 'Tech Ops', contact: '+1 512 987 6543' },
                   { city: 'Singapore', type: 'APAC Node', contact: '+65 6789 0123' }
                 ].map((hq, i) => (
                   <div key={i} className="p-6 border border-border bg-background hover:border-primary-blue/30 transition-all group">
                      <div className="flex items-center gap-4 mb-4">
                         <MapPin className="h-4 w-4 text-primary-blue" />
                         <h4 className="text-xs font-black text-foreground uppercase tracking-widest">{hq.city}</h4>
                      </div>
                      <div className="flex justify-between items-end">
                         <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">{hq.type}</p>
                            <p className="text-xs font-mono text-foreground">{hq.contact}</p>
                         </div>
                         <button className="text-[9px] font-black text-primary-blue uppercase tracking-widest hover:underline">Get Directions</button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Section 3: Communication Protocols */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 p-12 border border-border bg-accent/5 industrial-corner">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Communication <span className="text-primary-blue">Protocols.</span></h3>
                 <p className="text-sm text-muted-foreground leading-relaxed mb-10">We utilize multiple redundant channels for secure communication. Choose the protocol that matches your mission's security clearance.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { icon: Terminal, label: 'Direct Terminal', desc: 'Secure web-based chat.' },
                      { icon: Phone, label: 'Voice Link', desc: 'Encrypted VOIP channel.' },
                      { icon: Shield, label: 'Secure Mail', desc: 'PGP-encrypted submission.' },
                      { icon: Globe, label: 'Global Portal', desc: 'Support ticket system.' }
                    ].map((p, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="mt-1 h-8 w-8 bg-background border border-border flex items-center justify-center text-primary-blue">
                            <p.icon className="h-4 w-4" />
                         </div>
                         <div>
                            <p className="text-[9px] font-black text-foreground uppercase tracking-widest">{p.label}</p>
                            <p className="text-[11px] text-muted-foreground">{p.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-background border border-border p-12 text-center relative overflow-hidden group">
                 <div className="absolute inset-0 grid-pattern opacity-10" />
                 <Activity className="h-24 w-24 text-primary-blue opacity-10 mx-auto mb-8 group-hover:scale-110 transition-transform duration-1000" />
                 <h4 className="text-xs font-black text-foreground uppercase tracking-[0.3em] mb-4">Encryption Level</h4>
                 <p className="text-4xl font-black text-primary-blue mb-2">AES-256</p>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">End-to-End Active</p>
              </div>
           </div>
        </motion.div>

        {/* Section 4: Operational Status */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 text-center">
           <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12">Operational <span className="text-primary-blue">Status.</span></h3>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Technical Support', status: 'Online', color: 'text-emerald-500' },
                { label: 'Sales Comms', status: 'Optimal', color: 'text-primary-blue' },
                { label: 'Neural Engine', status: 'Active', color: 'text-emerald-500' },
                { label: 'Global Proxy', status: 'Online', color: 'text-emerald-500' }
              ].map((s, i) => (
                <div key={i} className="p-8 border border-border bg-background group hover:bg-accent/5 transition-all">
                   <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">{s.label}</p>
                   <div className="flex items-center justify-center gap-2">
                      <div className={`h-2 w-2 rounded-full bg-current ${s.color} animate-pulse`} />
                      <p className={`text-xl font-black uppercase tracking-tighter ${s.color}`}>{s.status}</p>
                   </div>
                </div>
              ))}
           </div>
        </motion.div>

        {/* Section 5: Technical Support Tiers */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32">
           <div className="p-12 border border-border bg-card industrial-corner text-center">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-8">Support <span className="text-primary-blue">SLA Tiers.</span></h3>
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { tier: 'Standard', sla: '48h Response', desc: 'Included in all tiers.' },
                   { tier: 'Priority', sla: '4h Response', desc: 'Professional accounts.' },
                   { tier: 'Mission Critical', sla: '15m Response', desc: 'Enterprise accounts.' }
                 ].map((t, i) => (
                   <div key={i} className="p-8 border border-border bg-background group hover:border-primary-blue/30 transition-all">
                      <p className="text-[10px] font-black text-primary-blue uppercase tracking-[0.4em] mb-4">{t.tier}</p>
                      <p className="text-2xl font-black text-foreground mb-2">{t.sla}</p>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{t.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </motion.div>

        {/* Section 6: Secure Data Ingestion (Upload) */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mt-32 mb-20">
           <div className="p-16 border-2 border-dashed border-border bg-accent/5 text-center group hover:border-primary-blue transition-all cursor-pointer">
              <Zap className="h-12 w-12 text-primary-blue opacity-20 mx-auto mb-8 group-hover:opacity-100 transition-opacity" />
              <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">Secure Data <span className="text-primary-blue">Ingestion.</span></h3>
              <p className="text-sm text-muted-foreground font-light max-w-xl mx-auto mb-8">Have a technical report or market data you need us to analyze? Upload your encrypted payload here for neural synthesis.</p>
              <div className="inline-flex items-center gap-4 px-10 py-5 bg-background border border-border text-[10px] font-black uppercase tracking-[0.3em] text-foreground hover:bg-accent transition-all">
                 Authorize Upload <ArrowRight className="h-4 w-4" />
              </div>
              <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-[0.4em] mt-8">Max Payload: 500MB // Supported: JSON, CSV, PDF, XML</p>
           </div>
        </motion.div>
      </div>
    </BaseInfoPage>
  )
}
