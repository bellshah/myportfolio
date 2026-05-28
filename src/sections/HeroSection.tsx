'use client'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, Mail } from 'lucide-react'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations'
import { personal, education } from '@/data/portfolio'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-center">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial={false}
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-xs uppercase tracking-widest text-c-coral dark:text-indigo-400">
                Software Engineering Graduate · Class of 2026
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="leading-none">
              <span className="block text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-c-navy dark:text-white">
                NABILAH
              </span>
              <span className="block text-5xl md:text-6xl font-heading font-light italic text-c-coral dark:text-indigo-400">
                Shahidan.
              </span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="w-16 h-0.5 bg-c-coral dark:bg-indigo-400" />

            <motion.div variants={fadeInUp} className="font-mono text-xs text-c-dim dark:text-slate-400 leading-relaxed">
              B.Sc. Computer Science (Software Engineering) Hons · UMPSA · 2026
            </motion.div>

            <motion.p variants={fadeInUp} className="text-c-navy/70 dark:text-slate-400 leading-relaxed max-w-2xl text-[0.95rem]">
              {personal.bio}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
              {['Python', 'Flask', 'SQL', 'GitHub', 'SRS Writing', 'SDLC', 'Agile'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-c-navy/5 dark:bg-slate-800 text-c-navy dark:text-slate-300 border border-c-navy/10 dark:border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-1">
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 bg-c-coral hover:bg-c-coral2 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm">
                View Projects
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-c-navy dark:border-white text-c-navy dark:text-white font-medium rounded-lg transition-all duration-200 hover:bg-c-navy hover:text-white dark:hover:bg-white dark:hover:text-slate-900 hover:-translate-y-0.5 text-sm"
              >
                View Resume
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-4 py-3 text-c-navy dark:text-slate-300 font-medium rounded-lg transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm">
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-2.5 text-sm text-c-navy/60 dark:text-slate-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span>Open to Work · Available August 2026</span>
            </motion.div>
          </motion.div>

          {/* Right: At a Glance */}
          <motion.div
            variants={scaleIn}
            initial={false}
            animate="visible"
            transition={{ delay: 0.5 }}
            className="hidden lg:block bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm p-6 space-y-3"
          >
            <div className="font-mono text-[10px] uppercase tracking-widest text-c-dim dark:text-slate-500 pb-2 border-b border-slate-100 dark:border-slate-700">
              At a Glance
            </div>
            {[
              { Icon: MapPin,         label: 'Location',   value: personal.location },
              { Icon: GraduationCap,  label: 'Degree',     value: `B.Sc. CS (SE) Hons · CGPA ${education[0].cgpa}` },
              { Icon: GraduationCap,  label: 'Diploma',    value: `Diploma CS · CGPA ${education[1].cgpa}` },
              { Icon: Briefcase,      label: 'Internship', value: 'AI & Digitalization Intern · TRe' },
              { Icon: Mail,           label: 'Email',      value: personal.email },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/40">
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={12} className="text-c-coral dark:text-indigo-400 flex-shrink-0" />
                  <span className="font-mono text-[10px] text-c-dim dark:text-slate-500 uppercase tracking-wider">
                    {label}
                  </span>
                </div>
                <div className="text-xs font-medium text-c-navy dark:text-slate-200 pl-5 break-all">{value}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
