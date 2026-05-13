import { useEffect, useState } from 'react'

export function useAsyncData(fetcher, deps = []) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    const run = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await fetcher()
        if (active) {
          setData(result)
        }
      } catch (err) {
        if (active) {
          setError(err)
        }
      } finally {
        if (active) {
          setLoading(false)
        }
      }
    }

    run()

    return () => {
      active = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, setData, loading, error }
}

