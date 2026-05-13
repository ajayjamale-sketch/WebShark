import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ChartCard } from './ChartCard'

export function CompetitorComparisonChart({ data }) {
  return (
    <ChartCard title='Competitor Comparison' description='Domain visibility trend over time'>
      <div className='h-72'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' strokeOpacity={0.2} />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='webshark' stroke='#1D4ED8' strokeWidth={2.5} />
            <Line type='monotone' dataKey='competitorA' stroke='#06B6D4' strokeWidth={2} />
            <Line type='monotone' dataKey='competitorB' stroke='#94A3B8' strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

