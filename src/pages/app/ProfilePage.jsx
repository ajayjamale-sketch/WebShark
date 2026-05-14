import { User, Mail, Shield, Key, Bell, CreditCard, Save } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { cn } from '../../utils/cn'

export default function ProfilePage() {
  const navigate = useNavigate()
  const [isSaving, setIsSaving] = useState(false)
  const [isTwoFactor, setIsTwoFactor] = useState(true)
  const [isAlerts, setIsAlerts] = useState(true)

  const handleToggle2FA = () => {
    const newState = !isTwoFactor
    setIsTwoFactor(newState)
    toast.info(newState ? '2FA_ACTIVATED' : '2FA_DEACTIVATED', { 
      description: newState ? 'Secondary security layer is now online.' : 'Security protocol downgraded. Exercise caution.' 
    })
  }

  const handleToggleAlerts = () => {
    const newState = !isAlerts
    setIsAlerts(newState)
    toast.info(newState ? 'COMMS_ONLINE' : 'COMMS_OFFLINE', { 
      description: newState ? 'Real-time intelligence feed active.' : 'Intelligence alerts suppressed.' 
    })
  }

  const handleSave = () => {
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      toast.success('Security Profile Updated Successfully')
    }, 1500)
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="p-4 lg:p-8 space-y-8 max-w-5xl">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <h1 className="text-3xl font-black text-foreground uppercase tracking-tighter mb-2">User <span className="text-primary-blue">Profile.</span></h1>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Operational Identity // Security Clearance</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Basic Info */}
        <motion.div 
          initial="hidden" 
          animate="show" 
          variants={fadeUp}
          className="lg:col-span-1 space-y-8"
        >
          <div className="bg-card border border-border p-8 text-center industrial-corner">
             <div className="relative inline-block mb-6">
                <div className="h-32 w-32 bg-primary-blue/10 border-2 border-primary-blue flex items-center justify-center text-primary-blue">
                   <User className="h-16 w-16" />
                </div>
                <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-background border border-border flex items-center justify-center text-primary-blue cursor-pointer hover:bg-primary-blue hover:text-white transition-colors">
                   <Save className="h-4 w-4" />
                </div>
             </div>
             <h3 className="text-xl font-black text-foreground uppercase tracking-tight mb-1">Agent Alpha-9</h3>
             <p className="text-[10px] font-black text-primary-blue uppercase tracking-widest">Master Operative</p>
             
             <div className="mt-8 pt-8 border-t border-border space-y-4">
                <div className="flex items-center justify-between text-left">
                   <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Status</span>
                   <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20">Active</span>
                </div>
                <div className="flex items-center justify-between text-left">
                   <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Encryption</span>
                   <span className="text-[10px] font-black text-primary-blue uppercase tracking-widest">Level 4</span>
                </div>
             </div>
          </div>

          <div className="bg-card border border-border p-8 industrial-corner">
             <h4 className="text-[10px] font-black text-foreground uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <CreditCard className="h-3 w-3 text-primary-blue" />
                Active Subscription
             </h4>
             <div className="space-y-4">
                <div className="p-4 bg-accent/5 border border-border">
                   <p className="text-xs font-black text-foreground uppercase mb-1">Enterprise Tier</p>
                   <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Renews in 12 Days</p>
                </div>
                <button 
                  onClick={() => navigate('/app/billing')}
                  className="w-full py-3 bg-transparent border border-primary-blue/30 text-primary-blue text-[10px] font-black uppercase tracking-widest hover:bg-primary-blue/10 transition-colors"
                >
                   Manage Billing
                </button>
             </div>
          </div>
        </motion.div>

        {/* Right Column: Settings Form */}
        <motion.div 
          initial="hidden" 
          animate="show" 
          variants={fadeUp}
          className="lg:col-span-2 space-y-8"
        >
          <div className="bg-card border border-border p-8 industrial-corner">
             <h3 className="text-sm font-black text-foreground uppercase tracking-widest mb-8 border-b border-border pb-4">Security Parameters</h3>
             
             <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Full Name</label>
                   <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-primary-blue" />
                      <input 
                        type="text" 
                        defaultValue="Agent Alpha-9"
                        className="w-full bg-background border border-border px-12 py-3 text-sm text-foreground focus:border-primary-blue outline-none transition-colors"
                      />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Intelligence Node Email</label>
                   <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-primary-blue" />
                      <input 
                        type="email" 
                        defaultValue="alpha9@webshark.intel"
                        className="w-full bg-background border border-border px-12 py-3 text-sm text-foreground focus:border-primary-blue outline-none transition-colors"
                      />
                   </div>
                </div>
             </div>

             <div className="space-y-6">
                 <div 
                  onClick={handleToggle2FA}
                  className="flex items-center justify-between p-4 bg-accent/5 border border-border group cursor-pointer hover:border-primary-blue/50 transition-colors"
                 >
                    <div className="flex items-center gap-4">
                       <div className="h-8 w-8 bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                          <Key className="h-4 w-4" />
                       </div>
                       <div>
                          <p className="text-[11px] font-black text-foreground uppercase tracking-tight">Two-Factor Authentication</p>
                          <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{isTwoFactor ? 'Additional security layer active' : 'Standard security mode'}</p>
                       </div>
                    </div>
                    <div className={cn("h-4 w-8 rounded-full relative transition-colors", isTwoFactor ? "bg-primary-blue" : "bg-muted/30")}>
                       <div className={cn("absolute top-1 h-2 w-2 bg-white rounded-full transition-all", isTwoFactor ? "right-1" : "left-1")} />
                    </div>
                 </div>

                 <div 
                  onClick={handleToggleAlerts}
                  className="flex items-center justify-between p-4 bg-accent/5 border border-border group cursor-pointer hover:border-primary-blue/50 transition-colors"
                 >
                    <div className="flex items-center gap-4">
                       <div className="h-8 w-8 bg-primary-blue/10 flex items-center justify-center text-primary-blue">
                          <Bell className="h-4 w-4" />
                       </div>
                       <div>
                          <p className="text-[11px] font-black text-foreground uppercase tracking-tight">Intelligence Alerts</p>
                          <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{isAlerts ? 'Real-time ranking shift notifications' : 'Notifications disabled'}</p>
                       </div>
                    </div>
                    <div className={cn("h-4 w-8 rounded-full relative transition-colors", isAlerts ? "bg-primary-blue" : "bg-muted/30")}>
                       <div className={cn("absolute top-1 h-2 w-2 bg-white rounded-full transition-all", isAlerts ? "right-1" : "left-1")} />
                    </div>
                 </div>
             </div>

             <div className="mt-12 flex justify-end">
                <button 
                  onClick={handleSave}
                  disabled={isSaving}
                  className="px-10 py-4 bg-primary-blue text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-primary-blue/90 transition-all flex items-center gap-3 disabled:opacity-50"
                >
                  {isSaving ? 'Syncing...' : 'Save Configuration'}
                  {!isSaving && <Save className="h-3.5 w-3.5" />}
                </button>
             </div>
          </div>

          <div className="bg-red-500/5 border border-red-500/20 p-8 industrial-corner">
             <h3 className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Shield className="h-3 w-3" />
                Critical Zone
             </h3>
             <p className="text-xs text-muted-foreground font-light mb-6">Termination of this node will permanently delete all captured intelligence and tactical configurations.</p>
             <button className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:underline">Self-Destruct Account</button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
