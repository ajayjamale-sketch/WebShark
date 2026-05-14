import { FileText, ArrowRight, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function SystemTermsPage() {
  const navigate = useNavigate()
  return (
    <BaseInfoPage 
      title="System Terms" 
      subtitle="Operational Constraints" 
      icon={FileText}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Platform usage policies and operational boundaries.</p>
        <p>By accessing the WebShark Command Center, you agree to abide by our fair-use policy and technical constraints. Automated scraping of our telemetry data is strictly prohibited without explicit API authorization.</p>
      </div>

      {/* Section: Final CTA */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-40 mb-20">
          <div className="p-16 border border-primary-blue/30 bg-primary-blue/5 text-center industrial-corner">
             <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tighter text-foreground mb-8">Authorize Your <span className="text-primary-blue">Operation.</span></h2>
             <p className="text-base text-muted-foreground font-light max-w-xl mx-auto mb-10">Deploy our neural intelligence engine and identify the critical tactical failures that are holding back your search dominance.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button onClick={() => navigate('/contact')} className="px-12 py-5 bg-primary-blue text-white font-black text-[11px] uppercase tracking-[0.3em] hover:bg-primary-blue/90 transition-all shadow-neon-blue flex items-center justify-center gap-4">
                   Launch Operational Scan <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navigate('/pricing')} className="px-12 py-5 bg-background border border-border text-foreground font-black text-[11px] uppercase tracking-[0.3em] hover:bg-accent transition-all flex items-center justify-center gap-4">
                   View Pricing <Zap className="h-4 w-4" />
                </button>
             </div>
          </div>
      </motion.div>
    </BaseInfoPage>
  )
}
