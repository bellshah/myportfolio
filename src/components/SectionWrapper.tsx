import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id: string
  className?: string
  children: React.ReactNode
}

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-20 px-6 md:px-12 lg:px-20', className)}>
      {children}
    </section>
  )
}
