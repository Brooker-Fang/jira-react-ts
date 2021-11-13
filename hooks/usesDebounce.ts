import { useState, useEffect } from "react"

export const useDebounceValue = (value: string, delay: number) => {
  const [defaultVal, setDefaultValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDefaultValue(value)
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])
  return defaultVal
}