'use client'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/SectionWrapper'
import { TimelineItem } from '@/components/TimelineItem'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { experience, education } from '@/data/portfolio'

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <motion.div variants={fadeInUp} className="mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-c-coral dark:text-indigo-400">Professional History</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-c-navy dark:text-white mt-1 mb-3">Experience</h2>
            <div className="w-12 h-0.5 bg-c-coral dark:bg-indigo-400" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div variants={fadeInUp}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-c-dim dark:text-slate-500 mb-8">
                Work Experience
              </h3>
              {experience.map((exp, i) => (
                <TimelineItem
                  key={exp.company + i}
                  role={exp.role}
                  company={exp.company}
                  period={`${exp.period} · ${exp.duration}`}
                  location={exp.location}
                  bullets={exp.bullets}
                  isCurrent={i === 0}
                />
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-c-dim dark:text-slate-500 mb-8">
                Education
              </h3>
              {education.map((edu, i) => (
                <TimelineItem
                  key={edu.institution + i}
                  role={[edu.degree, edu.field].filter(Boolean).join(' · ')}
                  company={edu.institution}
                  period={edu.period}
                  bullets={[`CGPA ${edu.cgpa}`, ...edu.honours]}
                  isCurrent={i === 0}
                />
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </SectionWrapper>
  )
}
