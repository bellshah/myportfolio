'use client'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/SectionWrapper'
import { CertCard } from '@/components/CertCard'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { certifications } from '@/data/portfolio'

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="bg-white dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <motion.div variants={fadeInUp} className="mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-c-coral dark:text-indigo-400">Credentials</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-c-navy dark:text-white mt-1 mb-3">Certifications</h2>
            <div className="w-12 h-0.5 bg-c-coral dark:bg-indigo-400" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {certifications.map((cert) => (
              <motion.div key={cert.name} variants={fadeInUp}>
                <CertCard cert={cert} />
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-8 text-xs text-c-dim dark:text-slate-500 text-center">
            All original certificates available upon request · Degree certificate pending confer Aug 2026
          </motion.p>

        </motion.div>
      </div>
    </SectionWrapper>
  )
}
