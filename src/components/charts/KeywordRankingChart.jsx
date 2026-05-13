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

export function KeywordRankingChart({ data }) {
  return (
    <ChartCard title='Keyword Rankings' description='Weekly ranking improvements'>
      <div className='h-72'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' strokeOpacity={0.2} />
            <XAxis dataKey='week' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='top3' stroke='#1D4ED8' strokeWidth={2} dot={false} />
            <Line type='monotone' dataKey='top10' stroke='#06B6D4' strokeWidth={2} dot={false} />
            <Line type='monotone' dataKey='top50' stroke='#10B981' strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

