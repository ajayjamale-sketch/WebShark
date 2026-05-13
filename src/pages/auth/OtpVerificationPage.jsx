import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { AuthCard } from '../../components/common/AuthCard'
import { Button } from '../../components/ui/button'

export default function OtpVerificationPage() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [countdown, setCountdown] = useState(60)
  const [loading, setLoading] = useState(false)
  const inputRefs = useRef([])

  useEffect(() => {
    if (countdown <= 0) return
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown])

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    const newOtp = pasted.split('').concat(Array(6).fill('')).slice(0, 6)
    setOtp(newOtp)
    inputRefs.current[Math.min(pasted.length, 5)]?.focus()
    e.preventDefault()
  }

  const handleVerify = async () => {
    const code = otp.join('')
    if (code.length < 6) { toast.error('Enter all 6 digits'); return }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    if (code === '735901') {
      toast.success('Phone verified! Welcome to WebShark.')
      navigate('/app/dashboard')
    } else {
      toast.error('Invalid OTP. Hint: try 735901')
    }
    setLoading(false)
  }

  const handleResend = () => {
    setCountdown(60)
    toast.success('New OTP sent to your mobile number.')
  }

  return (
    <AuthCard
      title='Verify your phone'
      subtitle='Enter the 6-digit code sent to your mobile number.'
    >
      <div className='space-y-6'>
        <div className='flex justify-center gap-3'>
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              id={`otp-${i}`}
              type='text'
              inputMode='numeric'
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              onPaste={handlePaste}
              className={`h-12 w-10 rounded-xl border-2 bg-white text-center text-xl font-bold outline-none transition dark:bg-slate-900 ${
                digit
                  ? 'border-primary text-primary'
                  : 'border-slate-200 dark:border-slate-700'
              } focus:border-primary focus:ring-2 focus:ring-primary/20`}
            />
          ))}
        </div>

        <Button
          id='verify-otp-btn'
          className='w-full'
          onClick={handleVerify}
          disabled={loading || otp.join('').length < 6}
        >
          {loading ? 'Verifying...' : 'Verify Code'}
        </Button>

        <div className='text-center text-sm text-slate-500'>
          {countdown > 0 ? (
            <p>Resend code in <span className='font-semibold text-primary'>{countdown}s</span></p>
          ) : (
            <button type='button' className='font-semibold text-primary hover:underline' onClick={handleResend}>
              Resend OTP
            </button>
          )}
        </div>

        <p className='text-center text-xs text-slate-400'>Hint: use code <span className='font-mono font-bold'>735901</span></p>
      </div>
    </AuthCard>
  )
}
