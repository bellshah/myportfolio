'use client'
import { motion } from 'framer-motion'
import { Download, ExternalLink, FileText } from 'lucide-react'
import { SectionWrapper } from '@/components/SectionWrapper'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { personal, education } from '@/data/portfolio'

export function ResumeSection() {
  return (
    <SectionWrapper id="resume">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <motion.div variants={fadeInUp} className="mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-c-coral dark:text-indigo-400">CV / Resume</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-c-navy dark:text-white mt-1 mb-3">Resume</h2>
            <div className="w-12 h-0.5 bg-c-coral dark:bg-indigo-400 mx-auto" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm p-6 mb-6 text-left"
          >
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100 dark:border-slate-700">
              <div className="w-10 h-10 rounded-xl bg-c-coral/10 dark:bg-indigo-400/10 flex items-center justify-center flex-shrink-0">
                <FileText size={20} className="text-c-coral dark:text-indigo-400" />
              </div>
              <div>
                <div className="font-heading font-semibold text-c-navy dark:text-white text-sm">
                  {personal.name}
                </div>
                <div className="font-mono text-[10px] text-c-dim dark:text-slate-500 mt-0.5">
                  Software Engineering Graduate Portfolio 2026
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                ['Degree',     'B.Sc. CS (Software Engineering) Hons'],
                ['Institution','UMPSA'],
                ['CGPA',       `${education[0].cgpa} / 4.00`],
                ['Honour',     "Dean's List Semester 5"],
                ['Internship', 'AI & Digitalization · TNB Renewables'],
                ['Available',  `From ${personal.available}`],
              ].map(([k, v]) => (
                <div key={k} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-700/40">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-c-dim dark:text-slate-500">{k}</div>
                  <div className="text-xs text-c-navy dark:text-slate-300 mt-0.5">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-c-navy dark:border-white text-c-navy dark:text-white font-medium rounded-lg transition-all duration-200 hover:bg-c-navy hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:-translate-y-0.5 text-sm"
            >
              <ExternalLink size={16} />
              View Resume
            </a>
            <a
              href={personal.resumeUrl}
              download="Nabilah_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-c-coral hover:bg-c-coral2 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <Download size={16} />
              Download PDF
            </a>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-5 text-xs text-c-dim dark:text-slate-500">
            PDF resume — view in browser or download directly
          </motion.p>

        </motion.div>
      </div>
    </SectionWrapper>
  )
}
