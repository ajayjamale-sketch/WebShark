import { useState } from 'react'
import { Globe, X, Plus, Terminal } from 'lucide-react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { websitesService } from '../../services/api'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

export function AddWebsiteModal({ open, onClose, onAdded }) {
  const [url, setUrl] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!url.startsWith('http')) {
      toast.error('Protocol mismatch. URL must start with http:// or https://')
      return
    }
    setLoading(true)
    try {
      const website = await websitesService.create({
        url,
        name: name || new URL(url).hostname,
        workspaceId: 'w1',
        seoScore: Math.floor(70 + Math.random() * 20),
        health: Math.floor(80 + Math.random() * 15),
        performance: Math.floor(65 + Math.random() * 25),
        uptime: 99.9,
      })
      toast.success(`Node ${website.name} successfully integrated into grid.`)
      onAdded?.(website)
      setUrl('')
      setName('')
      onClose()
    } catch {
      toast.error('Grid integration failed. Target unreachable.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-md bg-white dark:bg-slate-900/90 backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-3xl p-0 overflow-hidden shadow-2xl'>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-blue/50 to-transparent"></div>
        
        <DialogHeader className="p-8 pb-4">
          <DialogTitle className='flex items-center gap-3'>
            <div className="p-2 rounded-lg bg-primary-blue/20 border border-primary-blue/20">
               <Globe className='h-5 w-5 text-accent-cyan' />
            </div>
            <div>
               <span className="block text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Deploy New Node</span>
               <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Initialize grid expansion protocol</span>
            </div>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='p-8 pt-4 space-y-6'>
          <div className="space-y-4">
             <div className="group">
                <label className='mb-2 block text-[10px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-accent-cyan transition-colors'>Protocol Address (URL)</label>
                <div className="relative">
                   <Terminal className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-600 group-focus-within:text-accent-cyan transition-colors" />
                   <Input
                     id='website-url'
                     placeholder='https://target-node.com'
                     value={url}
                     onChange={(e) => setUrl(e.target.value)}
                     className="pl-12 py-6 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 rounded-2xl focus:bg-slate-100 dark:focus:bg-white/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 font-mono text-sm dark:text-white"
                     required
                   />
                </div>
             </div>
             
             <div className="group">
                <label className='mb-2 block text-[10px] font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-accent-cyan transition-colors'>Node Identifier (Optional)</label>
                <Input
                  id='website-name'
                  placeholder='Primary Alpha'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="py-6 bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 rounded-2xl focus:bg-slate-100 dark:focus:bg-white/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 dark:text-white"
                />
             </div>
          </div>

          <div className='flex gap-3 pt-2'>
            <Button type='button' variant='ghost' className="flex-1 py-6 rounded-2xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 font-bold uppercase tracking-widest text-xs" onClick={onClose}>
              Abort
            </Button>
            <Button type='submit' className="flex-[2] py-6 rounded-2xl bg-gradient-to-r from-primary-blue to-accent-cyan text-white font-bold shadow-neon-blue hover:scale-[1.02] transition-all group" disabled={loading}>
              {loading ? (
                <span className="flex items-center gap-2">
                   <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Plus className='h-4 w-4' />
                   </motion.div>
                   Deploying...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                   <Plus className='h-4 w-4' />
                   Authorize Deployment
                </span>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
