import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  skill: string
  className?: string
}

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium rounded-full',
        'bg-slate-100 dark:bg-slate-700 text-c-navy dark:text-slate-200',
        'border border-slate-200/60 dark:border-slate-600/60',
        className,
      )}
    >
      {skill}
    </span>
  )
}
