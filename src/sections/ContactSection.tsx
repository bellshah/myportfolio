'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, MapPin, MessageCircle, Send } from 'lucide-react'
import { SectionWrapper } from '@/components/SectionWrapper'
import { staggerContainer, fadeInUp } from '@/lib/animations'
import { personal } from '@/data/portfolio'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('/', {
        method:  'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:    new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper id="contact" className="bg-white dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <motion.div variants={fadeInUp} className="mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-c-coral dark:text-indigo-400">Get in Touch</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-c-navy dark:text-white mt-1 mb-3">Contact</h2>
            <div className="w-12 h-0.5 bg-c-coral dark:bg-indigo-400" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left: info */}
            <motion.div variants={fadeInUp} className="space-y-5">
              <p className="text-c-navy/70 dark:text-slate-400 leading-relaxed text-[0.95rem]">
                I am actively seeking full-time Software Engineer, Software Developer, or System Analyst roles in Malaysia. Graduating August 2026 — feel free to reach out!
              </p>

              <div className="space-y-2.5">
                {[
                  { Icon: Mail,    label: 'Email',    value: personal.email,         href: `mailto:${personal.email}` },
                  { Icon: Phone,   label: 'Phone',    value: personal.phone,         href: `tel:${personal.phone}` },
                  { Icon: Linkedin,label: 'LinkedIn', value: 'nabilahshahidan',      href: personal.linkedin },
                  { Icon: MapPin,  label: 'Location', value: personal.location,      href: undefined },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex gap-3 items-start p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <div className="w-8 h-8 rounded-lg bg-c-coral/10 dark:bg-indigo-400/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-c-coral dark:text-indigo-400" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-c-dim dark:text-slate-500">{label}</div>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm text-c-navy dark:text-slate-300 hover:text-c-coral dark:hover:text-indigo-400 transition-colors mt-0.5 block break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <div className="text-sm text-c-navy dark:text-slate-300 mt-0.5">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${personal.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp Me
              </a>

              <div className="border-l-2 border-c-coral/40 dark:border-indigo-400/40 pl-4 mt-4">
                <p className="text-c-navy/60 dark:text-slate-400 italic text-sm">
                  &ldquo;The secret of getting ahead is getting started.&rdquo;
                </p>
                <p className="font-mono text-xs text-c-dim dark:text-slate-500 mt-1">— Mark Twain</p>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div variants={fadeInUp}>
              {status === 'sent' ? (
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm p-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto text-2xl">✓</div>
                  <h3 className="font-heading font-semibold text-c-navy dark:text-white">Message Sent!</h3>
                  <p className="text-c-navy/60 dark:text-slate-400 text-sm">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm text-c-coral dark:text-indigo-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 shadow-sm p-6 space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  {[
                    { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your full name' },
                    { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-wider text-c-dim dark:text-slate-500 block mb-1.5">
                        {label}
                      </label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        required
                        value={form[id as keyof typeof form]}
                        onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700/40 text-c-navy dark:text-white placeholder-c-dim/50 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-c-coral dark:focus:ring-indigo-400 text-sm transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-wider text-c-dim dark:text-slate-500 block mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="What would you like to discuss?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700/40 text-c-navy dark:text-white placeholder-c-dim/50 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-c-coral dark:focus:ring-indigo-400 text-sm transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-xs">
                      Something went wrong. Please email me directly at {personal.email}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-c-coral hover:bg-c-coral2 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 hover:shadow-lg text-sm"
                  >
                    <Send size={15} />
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>

          </div>

          {/* Footer */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-700/60 text-center space-y-1"
          >
            <p className="font-mono text-xs text-c-dim dark:text-slate-500">
              © 2026 Nabilah binti Mohammad Shahidan · Klang, Selangor, Malaysia
            </p>
            <p className="font-mono text-xs text-c-dim dark:text-slate-500">
              Software Engineering Graduate Portfolio · V2.0
            </p>
          </motion.div>

        </motion.div>
      </div>
    </SectionWrapper>
  )
}
