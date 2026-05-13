import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, LayoutDashboard, Menu, X } from 'lucide-react'
import SharkLogo from './SharkLogo'
import { ThemeToggle } from './ThemeToggle'
import { publicLinks } from '../../constants/navigation'
import { useAuth } from '../../context/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function PublicNavbar() {
  const { isAuthenticated, user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className='fixed top-0 left-0 w-full z-[100] border-b border-border bg-background/80 backdrop-blur-xl'>
      <div className="mx-auto max-w-7xl px-4 lg:px-8 h-24 flex items-center justify-between relative">
        <div className="absolute top-0 left-0 w-32 h-[1px] bg-primary-blue shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
        
        <Link to='/' className='flex items-center gap-2 group'>
          <SharkLogo className="h-9 w-44 transition-transform group-hover:scale-[1.02]" animated={false} />
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground lg:flex'>
          {publicLinks.map((item) => (
            item.href.includes('#') ? (
              <a key={item.label} href={item.href} className='relative hover:text-primary-blue transition-all duration-300 group/nav py-2'>
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-blue transition-all duration-300 group-hover/nav:w-full shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
              </a>
            ) : (
              <Link key={item.label} to={item.href} className='relative hover:text-primary-blue transition-all duration-300 group/nav py-2'>
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-blue transition-all duration-300 group-hover/nav:w-full shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
              </Link>
            )
          ))}
        </nav>

        <div className='flex items-center gap-4 lg:gap-8'>
          <ThemeToggle />
          
          <div className="hidden lg:flex items-center gap-8">
            {isAuthenticated ? (
              <Link to={user?.role === 'admin' ? '/admin' : '/app/dashboard'}>
                <button className="relative px-8 py-4 bg-accent/10 text-foreground overflow-hidden transition-all hover:bg-accent/20 border border-border group/btn flex items-center gap-3">
                   <LayoutDashboard className="h-4 w-4 text-primary-blue" />
                   <span className="relative z-10 font-black text-[10px] uppercase tracking-[0.2em]">Go To Dashboard</span>
                </button>
              </Link>
            ) : (
              <>
                <Link to='/login' className="text-[10px] font-black text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.3em]">
                  Auth_Login
                </Link>
                <Link to='/signup'>
                  <button className="relative px-8 py-4 bg-primary-blue text-white overflow-hidden transition-all hover:bg-primary-blue/90 border border-primary-blue shadow-[0_0_20px_rgba(37,99,235,0.15)] group/btn">
                     <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                     <span className="relative z-10 font-black text-[10px] uppercase tracking-[0.2em]">Deploy Now</span>
                  </button>
                </Link>
              </>
            )}
          </div>

          <button 
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              {publicLinks.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.href}
                  className="block text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary-blue transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-border space-y-4">
                {isAuthenticated ? (
                  <Link to={user?.role === 'admin' ? '/admin' : '/app/dashboard'} className="block w-full">
                    <button className="w-full py-5 bg-primary-blue text-white font-black text-[10px] uppercase tracking-[0.3em]">
                      Dashboard Entry
                    </button>
                  </Link>
                ) : (
                  <>
                    <Link to='/login' className="block text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                      Auth_Login
                    </Link>
                    <Link to='/signup' className="block w-full">
                      <button className="w-full py-5 bg-primary-blue text-white font-black text-[10px] uppercase tracking-[0.3em]">
                        Deploy Systems
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
