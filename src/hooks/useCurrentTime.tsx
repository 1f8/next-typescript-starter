import { useState, useEffect } from 'react'

const getTime = () => new Date().toLocaleTimeString()

/**
 * Example of a custom hook
 * Use custom hooks to abstract local state logic
 */
const useCurrentTime = () => {
  const [time, setTime] = useState(getTime())
  
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(getTime())
    }, 1000)
    return () => clearInterval(timeInterval)
  }, [])

  return time
}

export default useCurrentTime
