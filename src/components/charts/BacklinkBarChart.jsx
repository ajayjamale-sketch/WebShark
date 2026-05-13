import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ChartCard } from './ChartCard'

export function BacklinkBarChart({ data }) {
  return (
    <ChartCard title='Backlink Distribution' description='Referring domains by source type'>
      <div className='h-72'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray='3 3' strokeOpacity={0.2} />
            <XAxis dataKey='source' />
            <YAxis />
            <Tooltip />
            <Bar dataKey='value' fill='#06B6D4' radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

