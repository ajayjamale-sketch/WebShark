import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { toast } from 'sonner'
import { User, Mail, Building, Lock, Loader2, ArrowRight } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { motion } from 'framer-motion'

const schema = z
  .object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Enter a valid email'),
    workspace: z.string().min(2, 'Workspace name is required'),
    password: z.string().min(6, 'Use 6+ characters'),
    confirmPassword: z.string(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

export default function SignupPage() {
  const navigate = useNavigate()
  const { register: registerUser, isLoading } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (values) => {
    try {
      await registerUser({
        name: values.name,
        email: values.email,
        password: values.password,
        workspace: values.workspace,
      })
      toast.success('Registration successful. Verify your session.')
      navigate('/otp')
    } catch (error) {
      toast.error(error.message || 'Registration failed.')
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-display font-bold text-foreground mb-2 uppercase tracking-tight">Request Access</h2>
        <p className="text-muted-foreground font-light text-sm uppercase tracking-wide">Initialize your intelligence workspace.</p>
      </div>

      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-blue transition-colors" />
            <Input 
              placeholder='Full Name' 
              className="pl-12 py-6 bg-background border-border rounded-none focus:border-primary-blue transition-all"
              {...register('name')} 
            />
            {errors.name && <p className='mt-2 text-[10px] font-bold text-destructive uppercase tracking-widest'>{errors.name.message}</p>}
          </div>

          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-blue transition-colors" />
            <Input 
              placeholder='Operational Email' 
              className="pl-12 py-6 bg-background border-border rounded-none focus:border-primary-blue transition-all"
              {...register('email')} 
            />
            {errors.email && <p className='mt-2 text-[10px] font-bold text-destructive uppercase tracking-widest'>{errors.email.message}</p>}
          </div>

          <div className="relative group">
            <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-blue transition-colors" />
            <Input 
              placeholder='Workspace Identifier' 
              className="pl-12 py-6 bg-background border-border rounded-none focus:border-primary-blue transition-all"
              {...register('workspace')} 
            />
            {errors.workspace && <p className='mt-2 text-[10px] font-bold text-destructive uppercase tracking-widest'>{errors.workspace.message}</p>}
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-blue transition-colors" />
            <Input 
              type='password' 
              placeholder='Security Password' 
              className="pl-12 py-6 bg-background border-border rounded-none focus:border-primary-blue transition-all"
              {...register('password')} 
            />
            {errors.password && <p className='mt-2 text-[10px] font-bold text-destructive uppercase tracking-widest'>{errors.password.message}</p>}
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary-blue transition-colors" />
            <Input 
              type='password' 
              placeholder='Confirm Password' 
              className="pl-12 py-6 bg-background border-border rounded-none focus:border-primary-blue transition-all"
              {...register('confirmPassword')} 
            />
            {errors.confirmPassword && <p className='mt-2 text-[10px] font-bold text-destructive uppercase tracking-widest'>{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <div className="pt-4">
          <Button 
            className='w-full py-7 rounded-none bg-primary-blue text-white font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-primary-blue/90' 
            type='submit' 
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <span className="flex items-center gap-2">
                Initialize Workspace <ArrowRight className="h-4 w-4" />
              </span>
            )}
          </Button>
        </div>
      </form>
      
      <div className="text-center pt-4 border-t border-border">
         <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider">
            Already registered?{' '}
            <Link className='text-primary-blue hover:text-foreground transition-colors underline underline-offset-4' to='/login'>
              Access Command Center
            </Link>
         </p>
      </div>
    </div>
  )
}
