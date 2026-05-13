import { zodResolver } from '@hookform/resolvers/zod'
import { Globe, KeyRound, Sparkles, Mail, Lock, Loader2, ArrowRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { toast } from 'sonner'
import { useAuth } from '../../context/AuthContext'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { motion } from 'framer-motion'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export default function LoginPage() {
  const navigate = useNavigate()
  const { login, isLoading } = useAuth()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: 'admin@webshark.ai',
      password: 'admin123',
    },
  })

  const onSubmit = async (values) => {
    try {
      const result = await login(values)
      toast.success('Access Granted. Welcome back.')
      if (result.user.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/app/dashboard')
      }
    } catch (error) {
      toast.error(error.message || 'Authentication failed. Check credentials.')
    }
  }

  const fillCredentials = (email, pass) => {
    setValue('email', email)
    setValue('password', pass)
    toast.info('Credentials auto-filled.')
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-2 uppercase tracking-tight">Initialize Session</h2>
        <p className="text-muted-foreground font-light text-sm uppercase tracking-wide">Enter your credentials to access the command center.</p>
      </div>

      {/* Demo credentials hint */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className='flex items-center gap-4 rounded-none border border-border bg-accent/5 p-5 industrial-corner'
      >
        <div className="p-2 rounded-none bg-primary-blue text-white">
          <Sparkles className='h-4 w-4 shadow-neon-blue' />
        </div>
        <div className='text-[10px] text-muted-foreground leading-relaxed uppercase font-bold tracking-widest'>
          Operational Demo: <br />
          <span className='text-foreground'>admin@webshark.ai</span> / <span className='text-foreground'>admin123</span>
        </div>
      </motion.div>

      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-blue transition-colors" />
            <Input 
              id='login-email' 
              placeholder='Email Address' 
              className="pl-12 py-6 bg-background border-border rounded-none focus:border-primary-blue transition-all"
              {...register('email')} 
            />
            {errors.email && <p className='mt-2 text-[10px] font-bold text-destructive uppercase tracking-widest'>{errors.email.message}</p>}
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-blue transition-colors" />
            <Input 
              id='login-password' 
              type='password' 
              placeholder='Security Password' 
              className="pl-12 py-6 bg-background border-border rounded-none focus:border-primary-blue transition-all"
              {...register('password')} 
            />
            {errors.password && <p className='mt-2 text-[10px] font-bold text-destructive uppercase tracking-widest'>{errors.password.message}</p>}
          </div>
        </div>

        <div className='flex justify-end'>
          <Link to='/forgot-password' title='Lost Access' className='text-[10px] font-bold text-primary-blue hover:text-foreground transition-colors uppercase tracking-widest'>
            Lost Access?
          </Link>
        </div>

        <div className="space-y-4">
          <Button 
            id='login-submit' 
            className='w-full py-7 rounded-none bg-primary-blue text-white font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-primary-blue/90' 
            type='submit' 
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <span className="flex items-center gap-2">
                Authorize Entry <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>

          <Button 
            variant='outline' 
            className='w-full py-7 rounded-none border-border bg-background text-foreground font-bold text-xs uppercase tracking-[0.2em] hover:bg-accent/10 transition-all gap-3' 
            type='button' 
            onClick={() => toast.info('Google Authentication coming soon!')}
          >
            <Globe className='h-4 w-4 text-primary-blue' />
            Identity via Google
          </Button>
        </div>

        <div className='flex flex-col items-center gap-4 pt-4 border-t border-border'>
          <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
            <KeyRound className='h-3 w-3' />
            <span>Switch Protocol</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant='outline'
              type='button'
              className='text-[9px] bg-background border-border hover:bg-accent/10 text-muted-foreground hover:text-foreground transition-all rounded-none py-2 px-4 h-auto uppercase tracking-widest font-bold'
              onClick={() => fillCredentials('maya@northstar.com', 'maya123')}
            >
              Load User Credentials
            </Button>
            <Button
              variant='outline'
              type='button'
              className='text-[9px] bg-background border-border hover:bg-accent/10 text-muted-foreground hover:text-foreground transition-all rounded-none py-2 px-4 h-auto uppercase tracking-widest font-bold'
              onClick={() => fillCredentials('seo@webshark.ai', 'seo123')}
            >
              Load SEO Specialist
            </Button>
            <Button
              variant='outline'
              type='button'
              className='text-[9px] bg-background border-border hover:bg-accent/10 text-muted-foreground hover:text-foreground transition-all rounded-none py-2 px-4 h-auto uppercase tracking-widest font-bold'
              onClick={() => fillCredentials('agency@webshark.ai', 'agency123')}
            >
              Load Agency Partner
            </Button>
            <Button
              variant='outline'
              type='button'
              className='text-[9px] bg-background border-border hover:bg-accent/10 text-muted-foreground hover:text-foreground transition-all rounded-none py-2 px-4 h-auto uppercase tracking-widest font-bold'
              onClick={() => fillCredentials('admin@webshark.ai', 'admin123')}
            >
              Load Admin Credentials
            </Button>
          </div>
        </div>
      </form>
      
      <div className="text-center pt-4">
         <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider">
            Unauthorized attempt?{' '}
            <Link className='text-primary-blue hover:text-foreground transition-colors underline underline-offset-4' to='/signup'>
              Request New Credentials
            </Link>
         </p>
      </div>
    </div>
  )
}
