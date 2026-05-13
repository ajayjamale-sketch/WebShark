import { motion } from 'framer-motion'
import { TrendingUp, Shield, Bot, Globe, BarChart3, Lock } from 'lucide-react'
import BaseInfoPage from '../../components/common/BaseInfoPage'

export default function FeaturesPage() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Intelligence Engine',
      desc: 'Track rankings, SERP volatility, and content gaps with sub-millisecond precision.',
    },
    {
      icon: Shield,
      title: 'Operation Shield',
      desc: 'Continuous technical audits and uptime monitoring with predictive failure alerts.',
    },
    {
      icon: Bot,
      title: 'Tactical AI',
      desc: 'Neural-network driven recommendations that adapt to algorithm shifts in real-time.',
    },
    {
      icon: Globe,
      title: 'Global Node Network',
      desc: 'Simulate search performance from 140+ countries with local device parity.',
    },
    {
      icon: BarChart3,
      title: 'Quantum Analytics',
      desc: 'High-dimensional data visualization for stakeholder alignment and growth strategy.',
    },
    {
      icon: Lock,
      title: 'Encrypted Vault',
      desc: 'Enterprise-grade data protection for your most sensitive competitive intelligence.',
    },
  ]

  return (
    <BaseInfoPage 
      title="Platform Features" 
      subtitle="Capability Suite // Operational Readiness" 
      icon={TrendingUp}
    >
      <div className='grid gap-8 md:grid-cols-2 mt-12'>
        {features.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className='group'
          >
            <div className='bg-background p-10 h-full rounded-none border border-border hover:border-primary-blue transition-all duration-300 relative industrial-corner'>
               <div className={`h-14 w-14 bg-primary-blue/5 flex items-center justify-center mb-8 border border-primary-blue/10 group-hover:bg-primary-blue transition-all group-hover:text-white text-primary-blue`}>
                  <item.icon className={`h-6 w-6`} />
               </div>
               <h3 className='font-display text-2xl font-bold text-foreground mb-4 uppercase tracking-tight'>{item.title}</h3>
               <p className='text-muted-foreground leading-relaxed font-light text-sm'>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-12 bg-accent/5 border border-border relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <TrendingUp className="h-24 w-24 text-primary-blue" />
        </div>
        <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-10">Operational <span className="text-primary-blue">Workflow.</span></h3>
        <div className="grid md:grid-cols-4 gap-8">
           {[
             { step: '01', title: 'Ingestion', desc: 'Raw data harvesting from global nodes.' },
             { step: '02', title: 'Processing', desc: 'Neural synthesis and pattern recognition.' },
             { step: '03', title: 'Analysis', desc: 'Strategic directive generation via AI.' },
             { step: '04', title: 'Execution', desc: 'Automated deployment of optimizations.' }
           ].map((phase, i) => (
             <div key={i} className="relative">
                <span className="text-4xl font-black text-primary-blue/20 absolute -top-4 -left-2">{phase.step}</span>
                <div className="relative z-10 pt-4">
                   <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-2">{phase.title}</h4>
                   <p className="text-xs text-muted-foreground font-light">{phase.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32"
      >
        <h3 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-12 text-center">Tactical <span className="text-primary-blue">Integration Ecosystem.</span></h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { name: 'Google Search Console', icon: Globe },
             { name: 'Slack Protocols', icon: Lock },
             { name: 'Jira Tactical', icon: Activity },
             { name: 'AWS Infrastructure', icon: Shield }
           ].map((integration, i) => (
             <div key={i} className="p-8 border border-border bg-background hover:border-primary-blue transition-colors text-center group">
                <integration.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary-blue mx-auto mb-4 transition-colors" />
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground">{integration.name}</p>
             </div>
           ))}
        </div>
      </motion.div>
    </BaseInfoPage>
  )
}
