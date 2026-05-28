'use client'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#about',          label: 'About' },
  { href: '#skills',         label: 'Skills' },
  { href: '#projects',       label: 'Projects' },
  { href: '#experience',     label: 'Experience' },
  { href: '#certifications', label: 'Certs' },
  { href: '#resume',         label: 'Resume' },
  { href: '#contact',        label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-[3px] left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-c-paper/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm'
          : 'bg-transparent',
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-heading font-extrabold text-xl text-c-navy dark:text-white tracking-tight hover:opacity-80 transition-opacity"
        >
          N<span className="text-c-coral">·</span>S
        </a>

        <ul className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.slice(1)
            return (
              <li key={href}>
                <a
                  href={href}
                  className={cn(
                    'px-3 py-2 text-sm rounded-lg transition-colors duration-150',
                    active === id
                      ? 'text-c-coral dark:text-indigo-400 font-medium'
                      : 'text-c-navy/60 dark:text-slate-400 hover:text-c-navy dark:hover:text-white',
                  )}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-c-navy dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-c-paper dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-700/60 px-6 py-3">
          <ul className="flex flex-col gap-0.5">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-c-navy/70 dark:text-slate-400 hover:text-c-navy dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
