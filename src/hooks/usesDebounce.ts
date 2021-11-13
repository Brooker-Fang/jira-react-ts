import { useState, useEffect } from "react"

export const useDebounceValue = <T>(value: T, delay?: number ): T => {
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