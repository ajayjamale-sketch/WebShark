import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

export function ChartCard({ title, description, action, children, className = '' }) {
  return (
    <Card className={`glass ${className}`}>
      <CardHeader className='flex-row items-center justify-between'>
        <div>
          <CardTitle>{title}</CardTitle>
          {description ? <CardDescription>{description}</CardDescription> : null}
        </div>
        {action}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

