import { cn } from '@/lib/utils'

interface TimelineItemProps {
  role: string
  company: string
  period: string
  location?: string
  bullets?: string[]
  isCurrent?: boolean
  className?: string
}

export function TimelineItem({ role, company, period, location, bullets, isCurrent, className }: TimelineItemProps) {
  return (
    <div className={cn('relative pl-8 pb-8 last:pb-0', className)}>
      <div className="absolute left-[11px] top-4 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
      <div
        className={cn(
          'absolute left-0 top-2 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center bg-c-paper dark:bg-slate-900',
          isCurrent
            ? 'border-c-coral dark:border-indigo-400'
            : 'border-slate-300 dark:border-slate-600',
        )}
      >
        {isCurrent && (
          <div className="w-2.5 h-2.5 rounded-full bg-c-coral dark:bg-indigo-400 animate-pulse" />
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-heading font-semibold text-c-navy dark:text-white text-sm leading-snug">
          {role}
        </h3>
        <div className="text-c-coral dark:text-indigo-400 text-sm font-medium">{company}</div>
        <div className="font-mono text-xs text-c-dim dark:text-slate-500">
          {period}
          {location && ` · ${location}`}
        </div>
        {bullets && bullets.length > 0 && (
          <ul className="mt-2 space-y-1.5">
            {bullets.map((b, i) => (
              <li key={i} className="text-sm text-c-navy/70 dark:text-slate-400 flex gap-2 items-start">
                <span className="text-c-coral dark:text-indigo-400 flex-shrink-0 mt-0.5 text-xs">→</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
