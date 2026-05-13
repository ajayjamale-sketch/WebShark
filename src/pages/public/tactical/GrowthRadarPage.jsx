import { Radar } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function GrowthRadarPage() {
  return (
    <BaseInfoPage 
      title="Growth Radar" 
      subtitle="Predictive Momentum Analysis" 
      icon={Radar}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Identify viral opportunities and keyword trends before they peak.</p>
        <p>The Growth Radar uses proprietary signal-detection algorithms to scan social media, news feeds, and search spikes. It identifies low-difficulty, high-volume opportunities for rapid traffic acquisition.</p>
      </div>
    </BaseInfoPage>
  )
}
