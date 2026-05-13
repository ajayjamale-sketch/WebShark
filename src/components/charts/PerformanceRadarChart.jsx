import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { ChartCard } from './ChartCard'

export function PerformanceRadarChart({ data }) {
  return (
    <ChartCard title='Performance Spectrum' description='Core Web Vitals and technical health'>
      <div className='h-72'>
        <ResponsiveContainer width='100%' height='100%'>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey='metric' />
            <Tooltip />
            <Radar dataKey='score' stroke='#1D4ED8' fill='#1D4ED8' fillOpacity={0.45} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

