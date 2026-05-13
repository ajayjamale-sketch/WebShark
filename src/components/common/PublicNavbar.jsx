import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SharkLogo from './SharkLogo'
import { ThemeToggle } from './ThemeToggle'
import { publicLinks } from '../../constants/navigation'

export default function PublicNavbar() {
  return (
    <header className='fixed top-0 left-0 w-full z-[100] border-b border-border bg-background/80 backdrop-blur-xl'>
      <div className="mx-auto max-w-7xl px-4 lg:px-8 h-24 flex items-center justify-between relative">
        <div className="absolute top-0 left-0 w-32 h-[1px] bg-primary-blue shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
        
        <Link to='/' className='flex items-center gap-2 group'>
          <SharkLogo className="h-9 w-44 transition-transform group-hover:scale-[1.02]" animated={false} />
        </Link>

        <nav className='hidden items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground md:flex'>
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

        <div className='flex items-center gap-8'>
          <ThemeToggle />
          <Link to='/login' className="text-[10px] font-black text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.3em]">
            Auth_Login
          </Link>
          <Link to='/signup'>
            <button className="relative px-8 py-4 bg-primary-blue text-white overflow-hidden transition-all hover:bg-primary-blue/90 border border-primary-blue shadow-[0_0_20px_rgba(37,99,235,0.15)] group/btn">
               <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
               <span className="relative z-10 font-black text-[10px] uppercase tracking-[0.2em]">Deploy Now</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
