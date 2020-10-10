import { createContext, useContext, useState, useMemo } from 'react'

const CountContext = createContext(null)

const useCount = () => {
  const context = useContext(CountContext)
  if (!context) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

/**
 * Edit this Simple context to manaage application state
 * Separate Context for domain and try to avoid global state
 */
const CountProvider = (props) => {
  const [count, setCount] = useState(0)
  const value = useMemo(() => [count, setCount], [count])
  return <CountContext.Provider value={value} {...props} />
}

export { CountProvider, useCount }
