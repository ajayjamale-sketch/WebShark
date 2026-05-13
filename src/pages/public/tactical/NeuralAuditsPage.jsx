import { BrainCircuit } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function NeuralAuditsPage() {
  return (
    <BaseInfoPage 
      title="Neural Audits" 
      subtitle="Operational Protocol 0x71" 
      icon={BrainCircuit}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Deep-learning powered technical SEO audits that mimic search engine crawler behavior.</p>
        <p>Our neural crawlers perform exhaustive deep-tissue analysis of your website's architecture, identifying critical failures before they impact your SERP position. By simulating thousands of bot interactions, WebShark uncovers hidden crawl loops, indexation blocks, and performance bottlenecks.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
           <div className="p-6 border border-border bg-accent/5 industrial-corner">
              <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Semantic Mapping</h4>
              <p className="text-sm">Identify thematic clusters and internal linking patterns that drive topical authority.</p>
           </div>
           <div className="p-6 border border-border bg-accent/5 industrial-corner">
              <h4 className="font-bold text-foreground uppercase tracking-tight mb-4">Indexation Shield</h4>
              <p className="text-sm">Real-time alerts when search engines drop critical pages from the global index.</p>
           </div>
        </div>
      </div>
    </BaseInfoPage>
  )
}
