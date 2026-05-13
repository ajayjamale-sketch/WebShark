import { Lock } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function PrivacyPolicyPage() {
  return (
    <BaseInfoPage 
      title="Privacy Policy" 
      subtitle="Data Privacy // V.1.0" 
      icon={Lock}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">We prioritize the anonymity and security of our operatives.</p>
        <p>WebShark does not sell user data. Our privacy policy is designed to provide maximum transparency into what data we collect (telemetry, site URLs, audit history) and how we use it to improve your tactical advantage.</p>
      </div>
    </BaseInfoPage>
  )
}
