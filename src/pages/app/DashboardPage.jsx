import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarRange, Download, GaugeCircle, Globe, HeartPulse, Plus, ShieldCheck, Zap } from 'lucide-react'
import { BacklinkBarChart } from '../../components/charts/BacklinkBarChart'
import { CompetitorComparisonChart } from '../../components/charts/CompetitorComparisonChart'
import { KeywordRankingChart } from '../../components/charts/KeywordRankingChart'
import { PerformanceRadarChart } from '../../components/charts/PerformanceRadarChart'
import { TrafficAnalyticsChart } from '../../components/charts/TrafficAnalyticsChart'
import { AddWebsiteModal } from '../../components/common/AddWebsiteModal'
import { PageHeader } from '../../components/common/PageHeader'
import { SortableWidgets } from '../../components/dashboard/SortableWidgets'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card } from '../../components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { StatCard } from '../../components/common/StatCard'
import {
  alerts,
  backlinkSeries,
  competitorSeries,
  keywordSeries,
  overviewStats,
  performanceRadar,
  timeline,
  trafficSeries,
} from '../../data/mockData'

export default function DashboardPage() {
  const [showAddWebsite, setShowAddWebsite] = useState(false)

  const widgets = [
    {
      id: 'traffic',
      title: 'Traffic Analytics Graph',
      content: <TrafficAnalyticsChart data={trafficSeries} />,
      className: 'lg:col-span-2',
    },
    {
      id: 'keywords',
      title: 'Keyword Ranking Graph',
      content: <KeywordRankingChart data={keywordSeries} />,
    },
    {
      id: 'performance',
      title: 'Website Performance Chart',
      content: <PerformanceRadarChart data={performanceRadar} />,
    },
    {
      id: 'competitors',
      title: 'Competitor Comparison',
      content: <CompetitorComparisonChart data={competitorSeries} />,
      className: 'lg:col-span-2',
    },
    {
      id: 'backlinks',
      title: 'Backlink Statistics',
      content: <BacklinkBarChart data={backlinkSeries} />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className='space-y-6'
    >
      <motion.div variants={itemVariants}>
        <PageHeader
        title='Main Dashboard'
        subtitle='Enterprise-grade website intelligence overview with AI recommendations.'
        actions={
          <>
            <Select defaultValue='30'>
              <SelectTrigger className='w-[150px] rounded-none' id='dashboard-date-range'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-none">
                <SelectItem value='7'>Last 7 days</SelectItem>
                <SelectItem value='30'>Last 30 days</SelectItem>
                <SelectItem value='90'>Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant='outline' size='sm' className='gap-2 rounded-none font-bold text-[10px] uppercase tracking-widest'>
              <CalendarRange className='h-3 w-3' />
              Filter
            </Button>
            <Button size='sm' className='gap-2 rounded-none font-bold text-[10px] uppercase tracking-widest' variant='outline'>
              <Download className='h-3 w-3' />
              Export
            </Button>
            <Button size='sm' className='gap-2 rounded-none bg-primary-blue text-white font-bold text-[10px] uppercase tracking-widest' onClick={() => setShowAddWebsite(true)}>
              <Plus className='h-3 w-3' />
              Add Website
            </Button>
          </>
        }
      />
      </motion.div>

      <motion.div variants={itemVariants} className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        <StatCard {...overviewStats[0]} icon={GaugeCircle} />
        <StatCard {...overviewStats[1]} icon={HeartPulse} />
        <StatCard {...overviewStats[2]} icon={Zap} />
        <StatCard {...overviewStats[3]} icon={ShieldCheck} />
      </motion.div>

      {/* Quick Website Cards */}
      <motion.div variants={itemVariants} className='grid gap-4 md:grid-cols-2'>
        {[
          { name: 'WebShark Main Site', url: 'https://webshark.ai', seo: 86, uptime: '99.96%', health: 92 },
          { name: 'Northstar Commerce', url: 'https://northstarcommerce.com', seo: 81, uptime: '99.91%', health: 89 },
        ].map((site) => (
          <Card key={site.url} className='flex items-center justify-between p-4 rounded-none border-border bg-background'>
            <div className='flex items-center gap-3'>
              <div className='flex h-10 w-10 items-center justify-center rounded-none bg-primary-blue/5 border border-primary-blue/10'>
                <Globe className='h-5 w-5 text-primary-blue' />
              </div>
              <div>
                <p className='font-bold uppercase tracking-tight text-sm'>{site.name}</p>
                <p className='text-[10px] text-muted-foreground uppercase font-bold tracking-widest'>{site.url}</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='text-right'>
                <p className='text-[10px] text-muted-foreground uppercase font-bold tracking-widest'>SEO</p>
                <p className='font-bold text-foreground'>{site.seo}</p>
              </div>
              <div className='text-right'>
                <p className='text-[10px] text-muted-foreground uppercase font-bold tracking-widest'>Uptime</p>
                <p className='font-bold text-emerald-600'>{site.uptime}</p>
              </div>
              <Badge variant='success' className="rounded-none font-bold text-[9px] uppercase tracking-widest border border-emerald-600/20 bg-emerald-600/10 text-emerald-600">Live</Badge>
            </div>
          </Card>
        ))}
      </motion.div>

      <motion.div variants={itemVariants}>
        <SortableWidgets items={widgets} />
      </motion.div>

      <motion.div variants={itemVariants} className='grid gap-4 lg:grid-cols-2'>
        <Card className='p-6 rounded-none border-border bg-background shadow-sm industrial-corner'>
          <h3 className='font-display text-lg font-bold uppercase tracking-tight mb-6 border-b border-border pb-3'>Recent Alerts</h3>
          <div className='space-y-4'>
            {alerts.map((alert) => (
              <div key={alert.id} className='rounded-none border border-border p-4 bg-accent/5 hover:bg-accent/10 transition-colors'>
                <div className='flex items-center justify-between gap-2'>
                  <p className='text-sm font-bold uppercase tracking-tight text-foreground'>{alert.title}</p>
                  <Badge
                    variant={
                      alert.level === 'high' ? 'danger' : alert.level === 'medium' ? 'warning' : 'muted'
                    }
                    className="rounded-none font-bold text-[9px] uppercase tracking-widest"
                  >
                    {alert.level}
                  </Badge>
                </div>
                <p className='mt-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest'>{alert.time}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className='p-6 rounded-none border-border bg-background shadow-sm industrial-corner'>
          <h3 className='font-display text-lg font-bold uppercase tracking-tight mb-6 border-b border-border pb-3'>Activity Timeline</h3>
          <div className='space-y-6'>
            {timeline.map((entry) => (
              <div key={entry.id} className='relative pl-6 border-l border-border'>
                <span className='absolute -left-[4.5px] top-1 h-2 w-2 bg-primary-blue' />
                <p className='text-sm font-bold uppercase tracking-tight text-foreground'>{entry.activity}</p>
                <p className='text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1'>{entry.at}</p>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      <AddWebsiteModal
        open={showAddWebsite}
        onClose={() => setShowAddWebsite(false)}
        onAdded={() => setShowAddWebsite(false)}
      />
    </motion.div>
  )
}
