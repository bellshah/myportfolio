'use client'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-slate-200/40 dark:bg-slate-700/40 pointer-events-none">
      <div
        className="h-full bg-c-coral dark:bg-indigo-400 transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
