'use client'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/SectionWrapper'
import { SkillBadge } from '@/components/SkillBadge'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { skillCategories } from '@/data/portfolio'

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <motion.div variants={fadeInUp} className="mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-c-coral dark:text-indigo-400">Technical Expertise</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-c-navy dark:text-white mt-1 mb-3">Skills</h2>
            <div className="w-12 h-0.5 bg-c-coral dark:bg-indigo-400" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.label}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm p-5 space-y-3"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest text-c-coral dark:text-indigo-400 font-semibold">
                  {cat.label}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </SectionWrapper>
  )
}
