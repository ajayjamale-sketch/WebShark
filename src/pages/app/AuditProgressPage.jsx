import { LoaderCircle } from 'lucide-react'
import { PageHeader } from '../../components/common/PageHeader'
import { Card } from '../../components/ui/card'
import { Progress } from '../../components/ui/progress'

export default function AuditProgressPage() {
  return (
    <div className='space-y-6'>
      <PageHeader title='Audit Progress' subtitle='Live crawling and scoring in progress.' />
      <Card className='glass p-6'>
        <div className='mb-3 flex items-center gap-2'>
          <LoaderCircle className='h-4 w-4 animate-spin text-primary' />
          <p className='font-medium'>Scanning website architecture and metadata...</p>
        </div>
        <Progress value={68} />
        <p className='mt-2 text-sm text-slate-500'>68% complete. Estimated 45 seconds remaining.</p>
      </Card>
    </div>
  )
}

