import { Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

export default function NotFoundPage() {
  return (
    <div className='flex min-h-[70vh] flex-col items-center justify-center text-center'>
      <h1 className='font-display text-4xl font-semibold'>404</h1>
      <p className='mt-2 text-slate-500'>Page not found.</p>
      <Button className='mt-4' asChild>
        <Link to='/'><Home className='mr-2 h-4 w-4' />Back Home</Link>
      </Button>
    </div>
  )
}

