import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { Card } from '../ui/card'

const COLORS = ['#1D4ED8', '#06B6D4', '#10B981', '#F59E0B']

export function FunnelChart({ data }) {
  return (
    <Card className='glass p-5'>
      <h3 className='font-display text-lg font-semibold'>Lead Conversion Funnel</h3>
      <p className='mt-1 text-sm text-slate-500'>Visitor → Signup → Trial → Paid conversion stages</p>
      <div className='mt-4 h-52'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
            <CartesianGrid strokeDasharray='3 3' className='stroke-slate-200 dark:stroke-slate-700' />
            <XAxis dataKey='stage' tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 10 }} tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v} />
            <Tooltip
              formatter={(v) => [v.toLocaleString(), 'Count']}
            />
            <Bar dataKey='count' radius={[6, 6, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
