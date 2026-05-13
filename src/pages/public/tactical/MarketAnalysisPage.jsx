import { Search } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function MarketAnalysisPage() {
  return (
    <BaseInfoPage 
      title="Market Analysis" 
      subtitle="Vertical Saturation Intelligence" 
      icon={Search}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Map the entire competitive landscape of your industry.</p>
        <p>Understand who owns the conversation. Our Market Analysis tool visualizes market share by topical cluster, identifying emerging threats and untapped traffic reservoirs before they become mainstream.</p>
      </div>
    </BaseInfoPage>
  )
}
