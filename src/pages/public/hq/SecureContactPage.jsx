import { Mail } from 'lucide-react'
import BaseInfoPage from '../../../components/common/BaseInfoPage'

export default function SecureContactPage() {
  return (
    <BaseInfoPage 
      title="Secure Contact" 
      subtitle="Establish Communication" 
      icon={Mail}
    >
      <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
        <p className="text-xl text-foreground font-medium">Transmit your inquiries through our encrypted channel.</p>
        <div className="max-w-xl p-8 border border-border bg-accent/5 industrial-corner">
           <form className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Subject Identifier</label>
                 <input className="w-full bg-background border border-border p-4 text-sm focus:border-primary-blue outline-none rounded-none" placeholder="Operation Query" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Secure Email</label>
                 <input className="w-full bg-background border border-border p-4 text-sm focus:border-primary-blue outline-none rounded-none" placeholder="agent@client.com" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Encrypted Payload</label>
                 <textarea rows={5} className="w-full bg-background border border-border p-4 text-sm focus:border-primary-blue outline-none rounded-none" placeholder="State your mission..." />
              </div>
              <button className="w-full py-5 bg-primary-blue text-white font-bold text-[10px] uppercase tracking-widest rounded-none">Transmit Payload</button>
           </form>
        </div>
      </div>
    </BaseInfoPage>
  )
}
