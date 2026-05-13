import { Bell, CheckCircle2 } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useAppContext } from '../../context/AppContext'

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
        className='relative'
        onClick={() => setIsNotificationOpen(true)}
      >
        <Bell className='h-4 w-4' />
        {unreadCount ? (
          <span className='absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-[10px] text-white'>
            {unreadCount}
          </span>
        ) : null}
      </Button>

      <AnimatePresence>
        {isNotificationOpen ? (
          <>
            <motion.button
              type='button'
              className='fixed inset-0 z-40 bg-slate-900/50'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNotificationOpen(false)}
            />
            <motion.aside
              initial={{ x: 360 }}
              animate={{ x: 0 }}
              exit={{ x: 360 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className='fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900'
            >
              <div className='mb-4 flex items-center justify-between'>
                <h3 className='font-display text-lg font-semibold'>Notifications</h3>
                <Badge variant='muted'>{unreadCount} unread</Badge>
              </div>
              <div className='space-y-3 overflow-y-auto pr-1 scrollbar-thin'>
                {notifications.map((item) => (
                  <div key={item.id} className='rounded-xl border border-slate-200 p-3 dark:border-slate-700'>
                    <div className='mb-1 flex items-start justify-between gap-2'>
                      <p className='text-sm font-semibold'>{item.title}</p>
                      <Badge
                        variant={
                          item.priority === 'high' ? 'danger' : item.priority === 'medium' ? 'warning' : 'muted'
                        }
                      >
                        {item.priority}
                      </Badge>
                    </div>
                    <p className='text-xs text-slate-500 dark:text-slate-400'>{item.message}</p>
                    {!item.read ? (
                      <button
                        type='button'
                        className='mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary'
                        onClick={() => markAsRead(item.id)}
                      >
                        <CheckCircle2 className='h-3.5 w-3.5' />
                        Mark as read
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}

