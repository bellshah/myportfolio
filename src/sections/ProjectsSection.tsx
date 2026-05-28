'use client'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/SectionWrapper'
import { ProjectCard } from '@/components/ProjectCard'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { projects } from '@/data/portfolio'

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <motion.div variants={fadeInUp} className="mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-c-coral dark:text-indigo-400">Selected Work</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-c-navy dark:text-white mt-1 mb-3">Projects</h2>
            <div className="w-12 h-0.5 bg-c-coral dark:bg-indigo-400" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          <motion.p variants={fadeInUp} className="mt-8 text-xs text-c-dim dark:text-slate-500 text-center">
            All projects were developed during the AI & Digitalization internship at TNB Renewables Sdn. Bhd.
          </motion.p>

        </motion.div>
      </div>
    </SectionWrapper>
  )
}
