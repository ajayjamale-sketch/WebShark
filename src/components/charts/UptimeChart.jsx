import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '../ui/card'

export function UptimeChart({ data }) {
  return (
    <Card className='glass p-5'>
      <h3 className='font-display text-lg font-semibold'>30-Day Uptime History</h3>
      <p className='mt-1 text-sm text-slate-500'>Daily uptime % over the last month</p>
      <div className='mt-4 h-52'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id='uptimeGrad' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#10B981' stopOpacity={0.3} />
                <stop offset='95%' stopColor='#10B981' stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray='3 3' className='stroke-slate-200 dark:stroke-slate-700' />
            <XAxis dataKey='day' tick={{ fontSize: 10 }} interval={4} />
            <YAxis domain={[99, 100]} tick={{ fontSize: 10 }} tickFormatter={(v) => `${v}%`} />
            <Tooltip
              contentStyle={{ background: 'var(--tw-bg-opacity)', borderRadius: 12 }}
              formatter={(v) => [`${v.toFixed(3)}%`, 'Uptime']}
            />
            <Area type='monotone' dataKey='uptime' stroke='#10B981' strokeWidth={2} fill='url(#uptimeGrad)' dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
