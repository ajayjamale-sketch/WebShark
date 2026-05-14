import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Terminal, Activity } from 'lucide-react'
import { toast } from 'sonner'
import SharkLogo from './SharkLogo'

export default function PublicFooter() {
  return (
    <footer className='relative border-t border-border bg-card pt-32 pb-16 overflow-hidden'>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-blue/30 to-transparent" />
      <div className='mx-auto max-w-7xl px-4 lg:px-8 relative z-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20 lg:mb-32">
          <div className="lg:col-span-1 text-center md:text-left">
            <Link to="/" className='flex items-center justify-center md:justify-start gap-3 mb-10 group'>
               <SharkLogo className="h-9 w-48 transition-transform group-hover:scale-[1.02]" animated={false} />
            </Link>
            <p className="text-muted-foreground font-light text-sm leading-relaxed mb-10 max-w-sm mx-auto md:mx-0 tracking-wide">
              The global standard for cyber intelligence, technical auditing, and strategic growth operations. Built for the elite teams that demand data dominance.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {[Globe, Terminal, Activity].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); toast.info('LINK_RESTRICTED', { description: 'Encrypted social channels available to verified operatives only.' }); }}
                  className="h-12 w-12 border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary-blue hover:border-primary-blue/50 transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.1)] group/icon"
                >
                  <Icon className="h-5 w-5 transition-transform group-hover/icon:scale-110" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-3 gap-12 lg:gap-16">
             <div className="text-center sm:text-left">
               <h4 className="font-black text-foreground mb-8 lg:mb-10 uppercase tracking-[0.4em] text-[10px]">Tactical Suite</h4>
               <ul className="space-y-4 lg:space-y-5 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                 {[
                   { label: 'Neural Audits', to: '/tactical/neural-audits' },
                   { label: 'Ranking Intel', to: '/tactical/ranking-intel' },
                   { label: 'Market Analysis', to: '/tactical/market-analysis' },
                   { label: 'Growth Radar', to: '/tactical/growth-radar' }
                 ].map(link => (
                   <li key={link.label}><Link to={link.to} className="hover:text-primary-blue transition-colors relative group/link">{link.label}<span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-primary-blue opacity-0 group-hover/link:opacity-100 transition-opacity hidden md:block" /></Link></li>
                 ))}
               </ul>
             </div>
             
             <div className="text-center sm:text-left">
               <h4 className="font-black text-foreground mb-8 lg:mb-10 uppercase tracking-[0.4em] text-[10px]">HQ Operations</h4>
               <ul className="space-y-4 lg:space-y-5 text-[11px] font-black text-muted-foreground uppercase tracking-widest">
                 {[
                   { label: 'Company Brief', to: '/hq/company-brief' },
                   { label: 'Careers', to: '/hq/careers' },
                   { label: 'Intel Blog', to: '/hq/intel-blog' },
                   { label: 'Secure Contact', to: '/hq/secure-contact' }
                 ].map(link => (
                   <li key={link.label}><Link to={link.to} className="hover:text-primary-blue transition-colors relative group/link">{link.label}<span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-primary-blue opacity-0 group-hover/link:opacity-100 transition-opacity hidden md:block" /></Link></li>
                 ))}
               </ul>
             </div>

             <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
                <h4 className="font-black text-foreground mb-8 lg:mb-10 uppercase tracking-[0.4em] text-[10px]">Operational Feed</h4>
                <p className="text-muted-foreground text-xs font-light mb-8 tracking-wide">Receive priority intelligence updates and technical briefings.</p>
                <div className="flex group/input max-w-md mx-auto sm:mx-0">
                   <input 
                     type="email" 
                     placeholder="NODE_IDENTIFIER@SECURE.COM" 
                     className="flex-1 bg-background border border-border border-r-0 px-6 py-4 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-primary-blue transition-all w-full"
                   />
                   <button 
                    onClick={() => toast.success('SUBSCRIPTION_INITIALIZED', { description: 'Establishing secure communication nodes...' })}
                    className="bg-primary-blue text-white px-6 flex items-center justify-center hover:bg-primary-blue/90 transition-all border border-primary-blue shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                   >
                      <ArrowRight className="h-4 w-4" />
                   </button>
                </div>
             </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-border flex flex-col lg:flex-row items-center justify-between gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/50 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
             <div className="h-1.5 w-1.5 bg-emerald-500 animate-pulse hidden sm:block" />
             <p>© 2026 WebShark Intelligence Operations. All nodes active.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
            <Link to="/legal/security-protocol" className="hover:text-foreground transition-colors">Security_Vault</Link>
            <Link to="/legal/system-terms" className="hover:text-foreground transition-colors">Tactical_Terms</Link>
            <Link to="/legal/privacy-policy" className="hover:text-foreground transition-colors">Data_Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
