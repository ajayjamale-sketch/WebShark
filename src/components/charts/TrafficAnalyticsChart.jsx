import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ChartCard } from './ChartCard'

export function TrafficAnalyticsChart({ data }) {
  return (
    <ChartCard title='Traffic Analytics' description='Organic vs paid vs referral sessions'>
      <div className='h-72'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={data}>
            <defs>
              <linearGradient id='organic' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#06B6D4' stopOpacity={0.5} />
                <stop offset='95%' stopColor='#06B6D4' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='paid' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#1D4ED8' stopOpacity={0.5} />
                <stop offset='95%' stopColor='#1D4ED8' stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray='3 3' strokeOpacity={0.1} vertical={false} />
            <XAxis dataKey='month' stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value / 1000}k`} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 0 20px rgba(6,182,212,0.2)' }}
              itemStyle={{ color: '#F1F5F9' }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area type='monotone' dataKey='organic' stroke='#06B6D4' fill='url(#organic)' strokeWidth={3} activeDot={{ r: 6, fill: '#06B6D4', stroke: '#fff', strokeWidth: 2 }} />
            <Area type='monotone' dataKey='paid' stroke='#1D4ED8' fill='url(#paid)' strokeWidth={3} activeDot={{ r: 6, fill: '#1D4ED8', stroke: '#fff', strokeWidth: 2 }} />
            <Area type='monotone' dataKey='referral' stroke='#8B5CF6' fillOpacity={0} strokeWidth={3} strokeDasharray="5 5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}

