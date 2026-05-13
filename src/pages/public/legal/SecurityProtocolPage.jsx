import { Shield } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function SecurityProtocolPage() {
  return (
    <BaseInfoPage 
      title="Security Protocol" 
      subtitle="Compliance // V.1.0" 
      icon={Shield}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Enterprise-grade data protection and platform integrity standards.</p>
        <p>WebShark employs advanced encryption and zero-knowledge architecture to ensure your competitive intelligence remains exclusively yours. Our systems are audited quarterly for compliance with international data defense standards.</p>
      </div>
    </BaseInfoPage>
  )
}
