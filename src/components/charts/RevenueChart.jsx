import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '../ui/card'

export function RevenueChart({ data }) {
  return (
    <Card className='glass-premium p-8 h-full industrial-corner'>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className='font-display text-xl font-black text-foreground tracking-tight uppercase'>Revenue Stream (MRR)</h3>
          <p className='text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1'>Monthly recurring telemetry</p>
        </div>
        <div className="flex items-center gap-2">
           <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-emerald-500/10 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-none bg-emerald-500 shadow-neon-cyan"></span>
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Growth +5.9%</span>
           </div>
        </div>
      </div>

      <div className='mt-4 h-[300px] min-h-0 w-full'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id='mrrGrad' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#06B6D4' stopOpacity={0.3} />
                <stop offset='95%' stopColor='#1D4ED8' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='lineGrad' x1='0' y1='0' x2='1' y2='0'>
                <stop offset='0%' stopColor='#1D4ED8' />
                <stop offset='100%' stopColor='#06B6D4' />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray='3 3' stroke='hsl(var(--border) / 0.5)' />
            <XAxis 
              dataKey='month' 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))', fontWeight: 700 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))', fontWeight: 700 }} 
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))', 
                borderRadius: '0',
                padding: '12px'
              }}
              itemStyle={{ color: 'hsl(var(--foreground))', fontSize: '12px', fontWeight: 'bold' }}
              labelStyle={{ color: 'hsl(var(--muted-foreground))', marginBottom: '4px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}
            />
            <Area 
              type='monotone' 
              dataKey='mrr' 
              stroke='url(#lineGrad)' 
              strokeWidth={3} 
              fillOpacity={1} 
              fill='url(#mrrGrad)' 
              activeDot={{ r: 6, fill: '#06B6D4', stroke: 'hsl(var(--background))', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
