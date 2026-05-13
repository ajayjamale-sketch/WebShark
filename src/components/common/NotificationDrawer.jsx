import { Bell, CheckCircle2 } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useAppContext } from '../../context/AppContext'
import { cn } from '../../utils/cn'

export function NotificationDrawer() {
  const {
    notifications,
    unreadCount,
    isNotificationOpen,
    setIsNotificationOpen,
    markAsRead,
  } = useAppContext()

  return (
    <>
      <Button
        variant='ghost'
        size='icon'
        className='relative h-10 w-10 flex items-center justify-center rounded-none bg-accent/5 border border-border hover:bg-accent/10 transition-all group'
        onClick={() => setIsNotificationOpen(true)}
      >
        <Bell className={cn(
          'h-5 w-5 transition-colors',
          unreadCount > 0 ? 'text-primary-blue' : 'text-muted-foreground group-hover:text-foreground'
        )} />
        {unreadCount ? (
          <span className='absolute top-2.5 right-2.5 h-2 w-2 bg-primary-blue rounded-full shadow-neon-blue' />
        ) : null}
      </Button>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isNotificationOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsNotificationOpen(false)}
                className='fixed inset-0 z-[999] bg-background/80 backdrop-blur-sm'
              />
              <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className='fixed right-0 top-0 z-[1000] h-full w-full max-w-md border-l border-border bg-card/50 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col'
              >
                {/* Header */}
                <div className='p-8 border-b border-border flex items-center justify-between relative overflow-hidden'>
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary-blue shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                  <div>
                    <h3 className='font-display text-2xl font-black text-foreground uppercase tracking-tighter mb-1'>Tactical <span className="text-primary-blue">Intel</span></h3>
                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.3em]">Operational Telemetry // {unreadCount} Active</p>
                  </div>
                  <button 
                    onClick={() => setIsNotificationOpen(false)}
                    className="h-10 w-10 flex items-center justify-center bg-accent/10 border border-border hover:bg-accent/20 transition-all text-muted-foreground hover:text-foreground"
                  >
                    <span className="text-xl">×</span>
                  </button>
                </div>

                {/* Notifications List */}
                <div className='flex-1 overflow-y-auto p-6 space-y-4 scrollbar-cyber'>
                  {notifications.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center opacity-20 py-20">
                      <Bell className="h-16 w-16 mb-4" />
                      <p className="text-[10px] font-black uppercase tracking-[0.4em]">Zero Active Threats</p>
                    </div>
                  ) : (
                    notifications.map((item) => (
                      <motion.div 
                        key={item.id} 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={cn(
                          'p-5 border border-border industrial-corner relative group transition-all duration-300',
                          !item.read ? 'bg-primary-blue/5 border-primary-blue/30' : 'bg-accent/5 hover:bg-accent/10'
                        )}
                      >
                        {!item.read && (
                          <div className="absolute top-0 right-0 p-1">
                            <div className="h-1.5 w-1.5 bg-primary-blue shadow-neon-blue" />
                          </div>
                        )}
                        
                        <div className='mb-3 flex items-start justify-between gap-4'>
                          <p className={cn(
                            'text-xs font-black uppercase tracking-widest transition-colors',
                            !item.read ? 'text-primary-blue' : 'text-foreground'
                          )}>{item.title}</p>
                          <Badge 
                            className={cn(
                              "text-[8px] font-black tracking-widest uppercase rounded-none border-none",
                              item.priority === 'high' ? 'bg-rose-500 text-white' : item.priority === 'medium' ? 'bg-amber-500 text-white' : 'bg-muted text-muted-foreground'
                            )}
                          >
                            {item.priority}
                          </Badge>
                        </div>
                        <p className='text-xs text-muted-foreground font-light leading-relaxed mb-4'>{item.message}</p>
                        
                        {!item.read && (
                          <button
                            type='button'
                            className='flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary-blue hover:text-foreground transition-colors'
                            onClick={() => markAsRead(item.id)}
                          >
                            <CheckCircle2 className='h-3 w-3' />
                            Acknowledge
                          </button>
                        )}
                      </motion.div>
                    ))
                  )}
                </div>
                
                {/* Footer */}
                <div className="p-6 border-t border-border bg-accent/5 flex justify-center">
                  <button className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em] hover:text-primary-blue transition-colors">
                    Archive All Data
                  </button>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
