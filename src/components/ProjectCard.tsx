'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/data/portfolio'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm p-6 flex flex-col gap-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <span className="font-mono text-xs text-c-coral dark:text-indigo-400 font-semibold">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-heading font-semibold text-base text-c-navy dark:text-white mt-0.5 leading-snug">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-2 flex-shrink-0 mt-1">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-c-dim dark:text-slate-400 hover:text-c-navy dark:hover:text-white transition-colors"
            >
              <Github size={17} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-c-dim dark:text-slate-400 hover:text-c-navy dark:hover:text-white transition-colors"
            >
              <ExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-c-navy/65 dark:text-slate-400 leading-relaxed">
        {project.description}
      </p>

      {project.highlight && (
        <div className="flex items-center gap-2 px-3 py-2 bg-c-teal/10 dark:bg-teal-900/20 rounded-lg border border-c-teal/20 dark:border-teal-700/30">
          <span className="text-c-teal text-xs flex-shrink-0">★</span>
          <span className="text-xs text-c-teal dark:text-teal-400 font-medium">{project.highlight}</span>
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 dark:bg-slate-700/60 text-c-navy/70 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/40"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
