import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { appNavigation } from '../../constants/navigation'
import { useAppContext } from '../../context/AppContext'
import { useDebounce } from '../../hooks/useDebounce'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'

export function CommandPalette() {
  const navigate = useNavigate()
  const { isCommandOpen, setIsCommandOpen } = useAppContext()
  const [query, setQuery] = useState('')
  const debounced = useDebounce(query)

  const results = useMemo(() => {
    if (!debounced.trim()) {
      return appNavigation
    }
    return appNavigation.filter((item) =>
      item.label.toLowerCase().includes(debounced.trim().toLowerCase()),
    )
  }, [debounced])

  return (
    <Dialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
      <DialogContent className='max-w-2xl p-0'>
        <DialogTitle className='sr-only'>Command Palette</DialogTitle>
        <div className='border-b border-slate-200 p-4 dark:border-slate-700'>
          <div className='relative'>
            <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500' />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search pages, commands, reports...'
              className='pl-10'
              autoFocus
            />
          </div>
        </div>
        <div className='max-h-[400px] overflow-y-auto p-2 scrollbar-thin'>
          {results.map((item) => (
            <button
              type='button'
              key={item.to}
              className='flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-slate-800'
              onClick={() => {
                navigate(item.to)
                setIsCommandOpen(false)
                setQuery('')
              }}
            >
              <item.icon className='h-4 w-4 text-primary' />
              {item.label}
            </button>
          ))}
          {!results.length ? (
            <p className='px-3 py-6 text-center text-sm text-slate-500'>No commands matched your search.</p>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}

