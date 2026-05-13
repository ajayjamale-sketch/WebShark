import { useState } from 'react'
import { Download, FileBarChart2, FileText, TrendingUp } from 'lucide-react'
import { toast } from 'sonner'
import { BacklinkBarChart } from '../../components/charts/BacklinkBarChart'
import { TrafficAnalyticsChart } from '../../components/charts/TrafficAnalyticsChart'
import { PageHeader } from '../../components/common/PageHeader'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { backlinkSeries, reports, trafficSeries } from '../../data/mockData'

const typeIcon = { traffic: TrendingUp, audit: FileText, competition: FileBarChart2 }

export default function AnalyticsReportsPage() {
  const [dateRange, setDateRange] = useState('monthly')
  const [reportList, setReportList] = useState(reports)

  const handleGenerate = () => {
    const newReport = {
      id: Date.now(),
      title: `${dateRange.charAt(0).toUpperCase() + dateRange.slice(1)} Analytics Report`,
      type: 'traffic',
      generatedAt: new Date().toISOString().split('T')[0],
      status: 'ready',
    }
    setReportList((prev) => [newReport, ...prev])
    toast.success('New report generated!')
  }

  const handleDownload = (report) => {
    toast.success(`Downloading "${report.title}"...`)
  }

  return (
    <div className='space-y-6'>
      <PageHeader
        title='Analytics & Reports'
        subtitle='Traffic, engagement, and conversion intelligence with export-ready deliverables.'
        actions={
          <>
            <Select defaultValue={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className='w-40' id='analytics-date-range'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='weekly'>Last 7 Days</SelectItem>
                <SelectItem value='monthly'>Last 30 Days</SelectItem>
                <SelectItem value='quarterly'>Last 90 Days</SelectItem>
              </SelectContent>
            </Select>
            <Button className='gap-2' onClick={handleGenerate}>
              <Download className='h-4 w-4' />
              Generate Report
            </Button>
          </>
        }
      />

      <div className='grid gap-4 md:grid-cols-3'>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Engagement Rate</p>
          <p className='mt-2 text-3xl font-semibold'>64.2%</p>
          <p className='text-xs text-emerald-500'>+3.1% vs last period</p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Conversion Rate</p>
          <p className='mt-2 text-3xl font-semibold'>7.9%</p>
          <p className='text-xs text-emerald-500'>+0.4% vs last period</p>
        </Card>
        <Card className='glass p-4'>
          <p className='text-sm text-slate-500'>Revenue Influence</p>
          <p className='mt-2 text-3xl font-semibold'>$184K</p>
          <p className='text-xs text-emerald-500'>Organic channel contribution</p>
        </Card>
      </div>

      <Tabs defaultValue='traffic'>
        <TabsList>
          <TabsTrigger value='traffic'>Traffic</TabsTrigger>
          <TabsTrigger value='backlinks'>Backlinks</TabsTrigger>
          <TabsTrigger value='reports'>Report Library</TabsTrigger>
        </TabsList>

        <TabsContent value='traffic' className='pt-4'>
          <TrafficAnalyticsChart data={trafficSeries} />
        </TabsContent>

        <TabsContent value='backlinks' className='pt-4'>
          <BacklinkBarChart data={backlinkSeries} />
        </TabsContent>

        <TabsContent value='reports' className='pt-4'>
          <Card className='glass p-5'>
            <h3 className='mb-4 font-display text-lg font-semibold'>Generated Reports</h3>
            <div className='space-y-3'>
              {reportList.map((report) => {
                const Icon = typeIcon[report.type] || FileBarChart2
                return (
                  <div
                    key={report.id}
                    className='flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-700'
                  >
                    <div className='flex items-center gap-3'>
                      <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10'>
                        <Icon className='h-4 w-4 text-primary' />
                      </div>
                      <div>
                        <p className='text-sm font-medium'>{report.title}</p>
                        <p className='text-xs text-slate-500'>{report.generatedAt}</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Badge variant={report.status === 'ready' ? 'success' : 'warning'}>
                        {report.status}
                      </Badge>
                      <Button
                        id={`download-report-${report.id}`}
                        size='sm'
                        variant={report.status === 'ready' ? 'outline' : 'secondary'}
                        disabled={report.status !== 'ready'}
                        onClick={() => handleDownload(report)}
                        className='gap-1.5'
                      >
                        <Download className='h-3.5 w-3.5' />
                        {report.status === 'ready' ? 'Download PDF' : 'Processing...'}
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
