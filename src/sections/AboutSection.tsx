'use client'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Linkedin, Calendar, Globe } from 'lucide-react'
import { SectionWrapper } from '@/components/SectionWrapper'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { personal, education } from '@/data/portfolio'

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-white dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <motion.div variants={fadeInUp} className="mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-c-coral dark:text-indigo-400">About Me</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-c-navy dark:text-white mt-1 mb-3">
              Background &amp; Profile
            </h2>
            <div className="w-12 h-0.5 bg-c-coral dark:bg-indigo-400" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="space-y-4 text-c-navy/70 dark:text-slate-400 leading-relaxed text-[0.95rem]">
                <p>
                  A Software Engineering graduate from Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA) with a strong academic record (CGPA 3.31, Dean&apos;s List) and hands-on industry experience through a 6-month AI & Digitalization internship at TNB Renewables Sdn. Bhd.
                </p>
                <p>
                  I completed both my Diploma in Computer Science and Bachelor&apos;s Degree in Software Engineering at UMPSA — a dual qualification demonstrating consistent academic commitment. During my degree internship, I independently developed and deployed a production Flask web application now used by the HR department.
                </p>
                <p>
                  I am passionate about building systems that solve real problems, writing clear technical documentation, and continuous learning in AI, cloud, and cybersecurity domains.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  { Icon: MapPin,   label: 'Location',   value: personal.location },
                  { Icon: Mail,     label: 'Email',      value: personal.email },
                  { Icon: Phone,    label: 'Phone',      value: personal.phone },
                  { Icon: Linkedin, label: 'LinkedIn',   value: 'nabilahshahidan' },
                  { Icon: Calendar, label: 'Available',  value: `From ${personal.available}` },
                  { Icon: Globe,    label: 'Open to',    value: personal.openTo.join(', ') },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex gap-3 items-start p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <Icon size={14} className="text-c-coral dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-c-dim dark:text-slate-500">
                        {label}
                      </div>
                      <div className="text-xs text-c-navy dark:text-slate-300 mt-0.5 break-all">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Education */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="font-heading font-semibold text-c-navy dark:text-white">Education</h3>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm p-5 space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="font-heading font-semibold text-c-navy dark:text-white text-sm">
                        {edu.degree}
                      </div>
                      {edu.field && (
                        <div className="text-c-coral dark:text-indigo-400 text-xs font-medium mt-0.5">
                          {edu.field}
                        </div>
                      )}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-heading font-bold text-xl text-c-navy dark:text-white">
                        {edu.cgpa}
                      </div>
                      <div className="font-mono text-[10px] text-c-dim dark:text-slate-500">CGPA</div>
                    </div>
                  </div>
                  <div className="text-xs text-c-dim dark:text-slate-400">{edu.institution}</div>
                  <div className="font-mono text-xs text-c-dim dark:text-slate-500">{edu.period}</div>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {edu.honours.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 rounded-full text-xs bg-c-gold/10 text-c-gold border border-c-gold/30"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </SectionWrapper>
  )
}
