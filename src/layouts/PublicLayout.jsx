import { Outlet } from 'react-router-dom'
import PublicNavbar from '../components/common/PublicNavbar'
import PublicFooter from '../components/common/PublicFooter'

export function PublicLayout() {
  return (
    <div className='min-h-screen bg-background text-foreground antialiased selection:bg-primary-blue/20'>
      <PublicNavbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <PublicFooter />
      </div>
    </div>
  )
}
