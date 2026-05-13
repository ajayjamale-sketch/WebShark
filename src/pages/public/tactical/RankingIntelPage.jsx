import { Target } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function RankingIntelPage() {
  return (
    <BaseInfoPage 
      title="Ranking Intel" 
      subtitle="SERP Domination Protocol" 
      icon={Target}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Real-time keyword telemetry and SERP volatility monitoring.</p>
        <p>WebShark's Ranking Intelligence module provides sub-millisecond updates on your critical search positions. We track not just the rank, but the pixel-depth, rich snippet presence, and competitor ad-spend across 140+ countries.</p>
        <div className="p-8 border border-border bg-accent/5 industrial-corner">
           <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Competitor Displacement</h4>
           <p className="text-sm">Identify vulnerable competitor rankings and receive tactical plans for displacement via content delta analysis.</p>
        </div>
      </div>
    </BaseInfoPage>
  )
}
