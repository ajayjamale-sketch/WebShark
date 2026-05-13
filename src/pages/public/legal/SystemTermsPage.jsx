import { FileText } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function SystemTermsPage() {
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
    </BaseInfoPage>
  )
}
