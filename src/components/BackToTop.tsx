'use client'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-40 w-11 h-11 flex items-center justify-center rounded-full bg-c-coral dark:bg-indigo-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
