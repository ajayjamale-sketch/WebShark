import { createContext, useContext, useMemo, useState } from 'react'
import { forgotPassword, login, register, verifyOtp } from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('webshark_user')
    return stored ? JSON.parse(stored) : null
  })
  const [token, setToken] = useState(() => localStorage.getItem('webshark_token'))
  const [isLoading, setIsLoading] = useState(false)

  const persist = (nextUser, nextToken) => {
    setUser(nextUser)
    setToken(nextToken)
    localStorage.setItem('webshark_user', JSON.stringify(nextUser))
    localStorage.setItem('webshark_token', nextToken)
  }

  const clear = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('webshark_user')
    localStorage.removeItem('webshark_token')
  }

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token),
      isLoading,
      async login(values) {
        setIsLoading(true)
        try {
          const result = await login(values)
          persist(result.user, result.token)
          return result
        } finally {
          setIsLoading(false)
        }
      },
      async register(values) {
        setIsLoading(true)
        try {
          const result = await register(values)
          persist(result.user, result.token)
          return result
        } finally {
          setIsLoading(false)
        }
      },
      async forgotPassword(email) {
        setIsLoading(true)
        try {
          return await forgotPassword(email)
        } finally {
          setIsLoading(false)
        }
      },
      async verifyOtp(code) {
        setIsLoading(true)
        try {
          return await verifyOtp(code)
        } finally {
          setIsLoading(false)
        }
      },
      logout: clear,
    }),
    [user, token, isLoading],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
