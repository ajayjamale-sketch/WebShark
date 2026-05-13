import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there is no hash, scroll to top
    if (!hash) {
      window.scrollTo(0, 0)
    } 
    // If there is a hash, it's handled by the browser or hash-link
  }, [pathname, hash])

  return null
}
