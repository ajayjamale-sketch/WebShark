import { Building2, Briefcase } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function CompanyBriefPage() {
  return (
    <BaseInfoPage 
      title="Company Brief" 
      subtitle="Operational History // 0x01" 
      icon={Building2}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">WebShark is a mission-driven intelligence firm dedicated to digital dominance.</p>
        <p>Founded in 2024, our objective has always been to level the playing field for growth teams by providing enterprise-grade armaments. We operate at the intersection of data science and architectural SEO.</p>
      </div>
    </BaseInfoPage>
  )
}
