import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Funnel,
  FunnelChart,
} from 'recharts'
import { ChartCard } from './ChartCard'

export function LeadFunnelChart({ data }) {
  return (
    <div className='grid gap-4 lg:grid-cols-2'>
      <ChartCard title='Lead Funnel' description='Visitor to qualified lead progression'>
        <div className='h-64'>
          <ResponsiveContainer width='100%' height='100%'>
            <FunnelChart>
              <Tooltip />
              <Funnel dataKey='value' data={data} isAnimationActive fill='#1D4ED8' />
            </FunnelChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
      <ChartCard title='CTA Conversion' description='Top performing calls-to-action'>
        <div className='h-64'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={data}>
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='conversion' fill='#06B6D4' radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>
    </div>
  )
}

