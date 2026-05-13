export function CircularScore({ label, value, color = '#1D4ED8' }) {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference

  return (
    <div className='flex flex-col items-center gap-2'>
      <svg width='90' height='90' viewBox='0 0 90 90'>
        <circle cx='45' cy='45' r={radius} fill='none' stroke='rgba(148,163,184,.2)' strokeWidth='9' />
        <circle
          cx='45'
          cy='45'
          r={radius}
          fill='none'
          stroke={color}
          strokeWidth='9'
          strokeLinecap='round'
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform='rotate(-90 45 45)'
        />
      </svg>
      <p className='-mt-16 text-xl font-semibold'>{value}</p>
      <p className='text-xs text-slate-500'>{label}</p>
    </div>
  )
}

