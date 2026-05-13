import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 12000,
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('webshark_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

