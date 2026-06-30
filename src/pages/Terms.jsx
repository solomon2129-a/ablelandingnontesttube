import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FooterNew from '../components/FooterNew'

const ease = [0.25, 0.46, 0.45, 0.94]

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

function AccordionSection({ num, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const reduce = useReducedMotion()

  return (
    <div className="border-b border-mist last:border-b-0">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between gap-4 px-0 py-5 text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="text-brick font-serif font-black text-xl leading-none shrink-0">{num}</span>
          <span className="font-bold text-forest text-base group-hover:text-brick transition-colors duration-200">
            {title}
          </span>
        </div>
        <motion.span
          animate={reduce ? {} : { rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-sage shrink-0 text-lg leading-none"
        >
          ↓
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={reduce ? {} : { height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-forest/70 text-sm leading-relaxed space-y-3 pl-9">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export default function Terms() {
  const reduce = useReducedMotion()

  return (
    <div className="bg-light">

      {/* Hero */}
      <section className="bg-forest pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-px bg-brick" />
            <span className="text-xs font-bold tracking-widest uppercase text-sage">Legal</span>
          </motion.div>
          <motion.h1
            initial={reduce ? {} : { y: '110%' }}
            animate={reduce ? {} : { y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="font-serif font-black text-5xl md:text-7xl text-light leading-none tracking-tight"
          >
            Terms &<br /><span className="text-brick">Conditions</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease, delay: 0.8 }}
            className="h-px bg-mist/25 origin-left my-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
            className="text-mist text-lg font-light max-w-xl leading-relaxed"
          >
            Trusted infrastructure for talent, NGOs, and corporates. Every clause designed with transparency and fairness.
          </motion.p>
        </div>
      </section>

      {/* Key callouts */}
      <section className="py-12 bg-mist border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '01', label: 'Free for All',   desc: 'No fees for talent or partners' },
              { num: '02', label: 'Transparent',    desc: 'Clear about what we guarantee' },
              { num: '03', label: 'Fair Terms',     desc: 'Equally binding on all parties' },
              { num: '04', label: 'India-First',    desc: 'Governed by Indian law' },
            ].map((c, i) => (
              <div key={i} className="p-5 bg-light border border-forest/10">
                <span className="text-brick font-serif font-black text-3xl leading-none block mb-2">{c.num}</span>
                <p className="font-bold text-forest text-sm mb-1">{c.label}</p>
                <p className="text-forest/50 text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid lg:grid-cols-4 gap-12">

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 border border-mist p-6">
                <h3 className="text-xs font-bold tracking-widest uppercase text-sage mb-5">Sections</h3>
                <div className="space-y-1">
                  {[
                    { num: '01', title: 'Introduction' },
                    { num: '02', title: 'Definitions' },
                    { num: '03', title: 'Services' },
                    { num: '05', title: 'Talent Terms' },
                    { num: '06', title: 'Facility Terms' },
                    { num: '07', title: 'Corporate Terms' },
                    { num: '12', title: 'Disclaimers' },
                    { num: '23', title: 'Acknowledgment' },
                  ].map((s) => (
                    <div key={s.num} className="flex items-center gap-3 py-1">
                      <span className="text-brick text-xs font-bold">{s.num}</span>
                      <span className="text-forest/60 text-xs font-light">{s.title}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-mist">
                  <Link to="/privacy" className="text-xs font-bold text-brick tracking-widest uppercase hover:text-forest transition-colors">
                    → Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="lg:col-span-3"
            >
              <div className="border border-mist">
                <AccordionSection num="01" title="Introduction & Acceptance" defaultOpen>
                  <p className="font-semibold text-forest">These Terms govern your access to and use of Abledots Services.</p>
                  <p>By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.</p>
                  <div className="p-4 bg-mist border-l-4 border-brick mt-3">
                    <p className="text-sm"><strong>Key Point:</strong> We build India's social wellbeing infrastructure, connecting talent, NGOs, training facilities, and corporate partners through verified pipelines.</p>
                  </div>
                </AccordionSection>

                <AccordionSection num="02" title="Definitions">
                  <div className="space-y-2">
                    {[
                      { term: 'Talent / Candidate',              def: 'Individuals seeking employment on AbleHires' },
                      { term: 'Facility Partner / NGO Partner',  def: 'Organizations identifying and referring talent' },
                      { term: 'Corporate Partner / Employer',    def: 'Companies accessing our talent pipeline' },
                      { term: 'Platform',                        def: 'AbleHires application and Abledots digital products' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start p-3 border-l-2 border-sage">
                        <strong className="text-forest text-sm shrink-0">{item.term}:</strong>
                        <span className="text-sm">{item.def}</span>
                      </div>
                    ))}
                  </div>
                </AccordionSection>

                <AccordionSection num="03" title="Services Description">
                  <p className="font-semibold text-forest mb-3">What We Provide:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {['Talent Assessment and Verification', 'AbleHires Platform connecting talent with opportunities', 'AI-Powered Mock Interviews and Feedback', 'Impact Tracking for inclusion outcomes'].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start p-3 border-l-2 border-sage">
                        <span className="text-brick font-bold shrink-0">✓</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-semibold text-forest mt-4 mb-3">What We Are NOT:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {['Employment agency or staffing firm', 'Guarantee of employment', 'Traditional job board', 'RPO provider'].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start p-3 border-l-2 border-mist">
                        <span className="text-forest/40 font-bold shrink-0">✗</span>
                        <span className="text-sm text-forest/50">{item}</span>
                      </div>
                    ))}
                  </div>
                </AccordionSection>

                <AccordionSection num="05" title="Talent-Specific Terms">
                  <div className="space-y-2">
                    {[
                      { ok: true,  label: 'Free Services', text: 'No fees for profiles, assessment, AI tools, or matching' },
                      { ok: true,  label: 'Your Rights',   text: 'Control your profile visibility, update information, request deletion' },
                      { ok: false, label: 'No Guarantee',  text: 'Participation DOES NOT guarantee employment or job offers' },
                      { ok: true,  label: 'Ownership',     text: 'You retain rights to your data with permissions for us to use it for matching' },
                    ].map((item, i) => (
                      <div key={i} className={`flex gap-3 items-start p-3 border-l-2 ${item.ok ? 'border-sage' : 'border-brick'}`}>
                        <span className={`font-bold shrink-0 ${item.ok ? 'text-sage' : 'text-brick'}`}>{item.ok ? '✓' : '✗'}</span>
                        <p><strong className="text-forest">{item.label}:</strong> {item.text}</p>
                      </div>
                    ))}
                  </div>
                </AccordionSection>

                <AccordionSection num="06" title="Facility / NGO Partner Terms">
                  <p className="font-semibold text-forest mb-2">Benefits:</p>
                  {['Free partnership', 'Impact tracking dashboards', 'Direct corporate connections', 'Training support'].map((t, i) => (
                    <div key={i} className="flex gap-2 items-center py-1">
                      <span className="text-sage font-bold">✓</span>
                      <span className="text-sm">{t}</span>
                    </div>
                  ))}
                  <p className="font-semibold text-forest mt-4 mb-2">Obligations:</p>
                  {[
                    { ok: true,  t: "Refer only with individual's consent" },
                    { ok: true,  t: 'Provide accurate information' },
                    { ok: false, t: 'Never charge individuals fees' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 items-center py-1">
                      <span className={item.ok ? 'text-sage font-bold' : 'text-brick font-bold'}>{item.ok ? '✓' : '✗'}</span>
                      <span className="text-sm">{item.t}</span>
                    </div>
                  ))}
                </AccordionSection>

                <AccordionSection num="12" title="Disclaimers">
                  <div className="p-5 border-l-4 border-brick bg-brick/5">
                    <p className="font-bold text-brick mb-2">CRITICAL DISCLAIMER</p>
                    <p className="text-sm mb-3">Services are provided "AS IS" without warranties. We do NOT guarantee:</p>
                    <ul className="space-y-1">
                      {['Job placement or employment outcomes', 'Interview opportunities', 'Hiring decisions or salary levels', 'Uninterrupted platform access'].map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-brick font-bold">✗</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionSection>

                <AccordionSection num="23" title="Acknowledgment">
                  <div className="p-5 border border-sage">
                    <p className="font-bold text-forest mb-4">By using Abledots, you acknowledge:</p>
                    {["You've read and understood these Terms", 'No guarantee of employment—we provide infrastructure', "You're at least 18 years old", 'You consent to our data practices'].map((text, i) => (
                      <div key={i} className="flex gap-3 mb-2">
                        <span className="text-sage font-bold shrink-0">✓</span>
                        <span className="text-sm">{text}</span>
                      </div>
                    ))}
                  </div>
                </AccordionSection>
              </div>

              {/* Contact */}
              <div className="mt-8 p-8 bg-forest">
                <h3 className="font-serif font-black text-xl text-light mb-6">Questions? We're here.</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sage text-xs font-bold tracking-widest uppercase mb-1">Email</p>
                    <a href="mailto:abledots.official@gmail.com" className="text-light hover:text-brick transition-colors font-bold text-sm">
                      abledots.official@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sage text-xs font-bold tracking-widest uppercase mb-1">Phone</p>
                    <a href="tel:+919591562286" className="text-light hover:text-brick transition-colors font-bold text-sm">
                      +91 95915 62286
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-8 bg-mist border-l-4 border-brick flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif font-black text-forest text-lg">Ready to get started?</p>
                  <p className="text-forest/60 text-sm font-light">Join thousands building inclusive futures together.</p>
                </div>
                <div className="flex gap-3">
                  <Link to="/" className="btn-primary text-xs px-6 py-3">Accept & Continue</Link>
                  <Link to="/privacy" className="btn-outline-dark text-xs px-6 py-3">Privacy Policy</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterNew />
    </div>
  )
}
