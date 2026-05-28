import { cn } from '@/lib/utils'
import type { Certification } from '@/data/portfolio'

const CATEGORY_ICONS: Record<string, string> = {
  cloud:      '☁️',
  ai:         '🤖',
  security:   '🛡️',
  networking: '🌐',
  academic:   '🎓',
  merit:      '🏆',
}

const CATEGORY_LABELS: Record<string, string> = {
  cloud:      'Cloud',
  ai:         'AI',
  security:   'Security',
  networking: 'Networking',
  academic:   'Academic',
  merit:      'Merit',
}

interface CertCardProps {
  cert: Certification
}

export function CertCard({ cert }: CertCardProps) {
  return (
    <div className={cn('bg-white dark:bg-slate-800 rounded-xl border-t-4 shadow-sm p-5 flex flex-col gap-3', cert.accentColor)}>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-wider text-c-dim dark:text-slate-500">
          {CATEGORY_LABELS[cert.category]}
        </span>
        <span className="text-xl">{CATEGORY_ICONS[cert.category]}</span>
      </div>
      <h3 className="font-medium text-sm text-c-navy dark:text-white leading-snug flex-1">
        {cert.name}
      </h3>
      <div className="mt-auto space-y-0.5">
        <div className="text-xs text-c-dim dark:text-slate-400">{cert.issuer}</div>
        <div className="font-mono text-xs text-c-coral dark:text-indigo-400">{cert.year}</div>
      </div>
    </div>
  )
}
