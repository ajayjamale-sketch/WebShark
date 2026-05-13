import { BookOpen } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function IntelBlogPage() {
  return (
    <BaseInfoPage 
      title="Intel Blog" 
      subtitle="Operational Briefings" 
      icon={BookOpen}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Deep technical analysis of algorithmic shifts and search industry trends.</p>
        <p>Our intelligence team regularly publishes detailed breakdowns of search engine updates and new growth tactics. Stay ahead of the curve with our data-driven briefings.</p>
      </div>
    </BaseInfoPage>
  )
}
