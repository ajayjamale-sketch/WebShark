import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { useAuth } from '../../context/AuthContext'
import { AuthCard } from '../../components/common/AuthCard'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'

const schema = z.object({
  email: z.string().email('Enter a valid email address'),
})

export default function ForgotPasswordPage() {
  const navigate = useNavigate()
  const { forgotPassword, isLoading } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (values) => {
    try {
      await forgotPassword(values.email)
      navigate('/otp')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <AuthCard
      title='Reset your password'
      subtitle='We will send a one-time verification code to your email.'
      footer={
        <Link className='font-semibold text-primary' to='/login'>
          Back to login
        </Link>
      }
    >
      <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input placeholder='name@company.com' {...register('email')} />
          {errors.email ? <p className='mt-1 text-xs text-danger'>{errors.email.message}</p> : null}
        </div>
        <Button className='w-full' type='submit' disabled={isLoading}>
          {isLoading ? 'Sending code...' : 'Send OTP'}
        </Button>
      </form>
    </AuthCard>
  )
}

