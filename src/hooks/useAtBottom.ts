import { useState, useEffect } from 'react'

export function useAtBottom(offset = 200) {
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const check = () => {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      setAtBottom(scrolled >= total - offset)
    }

    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [offset])

  return atBottom
}
