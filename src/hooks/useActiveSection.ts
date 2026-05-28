'use client'
import { useState, useEffect } from 'react'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'resume', 'contact']

export function useActiveSection() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' },
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return active
}
