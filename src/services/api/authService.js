const delay = (ms = 1000) => new Promise(res => setTimeout(res, ms))

export const login = async (values) => {
  await delay()
  let role = 'user'
  let name = 'Operation Lead'

  if (values.email === 'admin@webshark.ai') {
    role = 'admin'
    name = 'Super Admin'
  } else if (values.email === 'agency@webshark.ai') {
    role = 'agency'
    name = 'Agency Partner'
  } else if (values.email === 'seo@webshark.ai') {
    role = 'seo'
    name = 'SEO Specialist'
  }

  return {
    user: { name, email: values.email, role },
    token: 'dummy-jwt-token-' + Math.random()
  }
}

export const register = async (values) => {
  await delay(1200)
  return {
    user: { 
      name: values.name || 'New Operative', 
      email: values.email, 
      role: 'user' 
    },
    token: 'dummy-jwt-token-' + Math.random()
  }
}

export const forgotPassword = async (email) => {
  await delay(800)
  return { success: true, message: 'Reset link transmitted to encrypted relay.' }
}

export const verifyOtp = async (code) => {
  await delay(1000)
  return { success: true, message: 'Identity verified.' }
}

export const logout = async () => {
  await delay(300)
  return true
}
