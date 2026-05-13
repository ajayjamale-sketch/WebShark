import { Briefcase } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function CareersPage() {
  return (
    <BaseInfoPage 
      title="Careers" 
      subtitle="Recruitment Protocol" 
      icon={Briefcase}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Join the elite unit building the future of search intelligence.</p>
        <p>We are always looking for senior SEO engineers, data scientists, and technical architects who thrive in high-stakes environments. If you want to build the ultimate weapon for digital growth, we want to talk.</p>
        <div className="p-8 border border-border bg-accent/5 industrial-corner">
           <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Open Positions</h4>
           <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-primary-blue">
             <li className="flex items-center justify-between border-b border-border pb-4">
                <span>Senior SEO Engineer</span>
                <span className="text-muted-foreground">Remote // Full-Time</span>
             </li>
             <li className="flex items-center justify-between border-b border-border pb-4">
                <span>Neural Network Scientist</span>
                <span className="text-muted-foreground">Zurich // Hybrid</span>
             </li>
           </ul>
        </div>
      </div>
    </BaseInfoPage>
  )
}
