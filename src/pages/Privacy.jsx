import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FooterNew from '../components/FooterNew'

const ease = [0.25, 0.46, 0.45, 0.94]

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

export default function Privacy() {
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
            Privacy<br /><span className="text-brick">Policy</span>
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
            Your data is yours. We're transparent about what we collect, why we collect it, and how we protect it.
          </motion.p>
        </div>
      </section>

      {/* Key callouts */}
      <section className="py-12 bg-mist border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '01', label: 'Data Ownership',  desc: 'Your data belongs to you' },
              { num: '02', label: 'No Selling',       desc: 'We never sell your information' },
              { num: '03', label: 'Secure Storage',   desc: 'Industry-standard encryption' },
              { num: '04', label: 'India-First',      desc: 'Compliant with Indian data laws' },
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
                    { num: '02', title: 'What We Collect' },
                    { num: '03', title: 'How We Use Info' },
                    { num: '04', title: 'How We Share Info' },
                    { num: '05', title: 'Data Security' },
                    { num: '06', title: 'Data Retention' },
                    { num: '07', title: 'Your Rights' },
                    { num: '09', title: "Children's Privacy" },
                    { num: '14', title: 'AI Decisions' },
                    { num: '16', title: 'Contact Us' },
                  ].map((s) => (
                    <div key={s.num} className="flex items-center gap-3 py-1">
                      <span className="text-brick text-xs font-bold">{s.num}</span>
                      <span className="text-forest/60 text-xs font-light">{s.title}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-mist">
                  <Link to="/terms" className="text-xs font-bold text-brick tracking-widest uppercase hover:text-forest transition-colors">
                    → Terms & Conditions
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
                <AccordionSection num="01" title="Introduction" defaultOpen>
                  <p className="font-semibold text-forest">
                    Abledots ("Company", "we", "us") is committed to protecting your personal information and your right to privacy.
                  </p>
                  <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
                  <p>By using our services, you consent to the data practices described in this policy.</p>
                </AccordionSection>

                <AccordionSection num="02" title="Information We Collect">
                  <p className="font-semibold text-forest mb-3">Information you provide:</p>
                  <div className="space-y-2">
                    {['Name, email address, phone number', 'Educational qualifications and work experience', 'Skills, career goals, and aspirations', 'Profile photos and documents (optional)', 'Communication preferences'].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start p-2 border-l-2 border-sage">
                        <span className="text-sage font-bold shrink-0">→</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-semibold text-forest mt-4 mb-3">Automatically collected:</p>
                  <div className="space-y-2">
                    {['Device information and browser type', 'IP address and location data (city level)', 'Usage patterns and feature interactions', 'Performance data and error logs'].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start p-2 border-l-2 border-mist">
                        <span className="text-mist font-bold shrink-0">→</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </AccordionSection>

                <AccordionSection num="03" title="How We Use Your Information">
                  <div className="space-y-2">
                    {[
                      { purpose: 'Service Delivery',    desc: 'Matching talent with opportunities, assessments, AI coaching' },
                      { purpose: 'Verification',         desc: 'Confirming credentials, qualifications, and work history' },
                      { purpose: 'Communication',        desc: 'Updates, opportunities, platform notifications' },
                      { purpose: 'Analytics',            desc: 'Improving our services and matching algorithms' },
                      { purpose: 'Impact Tracking',      desc: 'Measuring inclusion outcomes for partners' },
                      { purpose: 'Legal Compliance',     desc: 'Meeting regulatory requirements under Indian law' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start p-3 border-l-2 border-sage">
                        <strong className="text-forest text-sm shrink-0 w-32">{item.purpose}:</strong>
                        <span className="text-sm">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </AccordionSection>

                <AccordionSection num="04" title="How We Share Your Information">
                  <div className="p-4 border-l-4 border-brick bg-brick/5 mb-4">
                    <p className="font-bold text-brick text-sm">We NEVER sell your personal information.</p>
                  </div>
                  <p className="font-semibold text-forest mb-3">We share data with:</p>
                  <div className="space-y-2">
                    {[
                      { who: 'Corporate Partners',    when: 'When you are matched to a hiring opportunity (with your consent)' },
                      { who: 'Facility Partners',     when: 'To verify credentials and track talent outcomes' },
                      { who: 'Service Providers',     when: 'Cloud hosting, analytics, AI services (under strict agreements)' },
                      { who: 'Legal Authorities',     when: 'When required by law or court order' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start p-3 border-l-2 border-sage">
                        <strong className="text-forest text-sm shrink-0">{item.who}:</strong>
                        <span className="text-sm">{item.when}</span>
                      </div>
                    ))}
                  </div>
                </AccordionSection>

                <AccordionSection num="05" title="Data Security">
                  <p>We implement industry-standard security measures to protect your information:</p>
                  <div className="space-y-2 mt-3">
                    {['Encryption in transit (TLS) and at rest', 'Access controls and authentication', 'Regular security audits', 'Incident response procedures'].map((item, i) => (
                      <div key={i} className="flex gap-2 items-center py-1">
                        <span className="text-sage font-bold">✓</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-l-2 border-mist mt-3">
                    <p className="text-sm">No method of internet transmission is 100% secure. We cannot guarantee absolute security but commit to prompt notification if a breach occurs.</p>
                  </div>
                </AccordionSection>

                <AccordionSection num="06" title="Data Retention">
                  <p>We retain your information for as long as necessary to:</p>
                  <div className="space-y-1 mt-3">
                    {['Provide our services', 'Comply with legal obligations', 'Resolve disputes', 'Enforce agreements'].map((item, i) => (
                      <div key={i} className="flex gap-2 items-center py-1">
                        <span className="text-sage font-bold">→</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm">Upon account deletion, we delete or anonymize your data within 30 days, except where legally required to retain it.</p>
                </AccordionSection>

                <AccordionSection num="07" title="Your Rights">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { right: 'Access',       desc: 'Request a copy of your data' },
                      { right: 'Rectification', desc: 'Correct inaccurate information' },
                      { right: 'Deletion',      desc: 'Request erasure of your data' },
                      { right: 'Portability',   desc: 'Receive data in a portable format' },
                      { right: 'Objection',     desc: 'Object to certain processing' },
                      { right: 'Withdrawal',    desc: 'Withdraw consent at any time' },
                    ].map((item, i) => (
                      <div key={i} className="p-3 border-l-2 border-sage">
                        <strong className="text-forest text-sm">{item.right}:</strong>
                        <p className="text-sm text-forest/60">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm">To exercise any right, contact us at <a href="mailto:abledots.official@gmail.com" className="text-brick font-bold">abledots.official@gmail.com</a></p>
                </AccordionSection>

                <AccordionSection num="09" title="Children's Privacy">
                  <p>Our Services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18.</p>
                  <p className="mt-2">If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information.</p>
                </AccordionSection>

                <AccordionSection num="14" title="AI & Automated Decisions">
                  <p>We use AI for:</p>
                  <div className="space-y-2 mt-2">
                    {['Mock interview coaching and feedback', 'Talent-opportunity matching suggestions', 'Profile completeness recommendations'].map((item, i) => (
                      <div key={i} className="flex gap-2 items-center py-1">
                        <span className="text-sage font-bold">→</span>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-l-2 border-brick mt-3">
                    <p className="text-sm font-semibold text-brick">Important:</p>
                    <p className="text-sm">AI suggestions are decision-support tools, not final decisions. Human review is always part of our process. You can request human review of any AI-influenced decision.</p>
                  </div>
                </AccordionSection>

                <AccordionSection num="16" title="Contact Us">
                  <p>For privacy-related questions or to exercise your rights:</p>
                  <div className="grid md:grid-cols-2 gap-4 mt-3">
                    <div className="p-4 border-l-2 border-sage">
                      <p className="text-xs font-bold text-sage tracking-widest uppercase mb-2">Email</p>
                      <a href="mailto:abledots.official@gmail.com" className="text-brick font-bold text-sm">abledots.official@gmail.com</a>
                    </div>
                    <div className="p-4 border-l-2 border-sage">
                      <p className="text-xs font-bold text-sage tracking-widest uppercase mb-2">Phone</p>
                      <a href="tel:+919591562286" className="text-brick font-bold text-sm">+91 95915 62286</a>
                    </div>
                  </div>
                  <p className="mt-3 text-sm">We will respond to your request within 30 days. For complex requests, we may extend this period with prior notice.</p>
                </AccordionSection>
              </div>

              {/* CTA */}
              <div className="mt-8 p-8 bg-forest">
                <h3 className="font-serif font-black text-xl text-light mb-4">Your data is yours.</h3>
                <p className="text-mist text-sm font-light mb-6 max-w-lg">We verify you. We don't sell you. Every policy here exists to protect the people we serve.</p>
                <div className="flex gap-3">
                  <Link to="/terms" className="btn-outline text-xs px-6 py-3">Terms & Conditions</Link>
                  <Link to="/" className="btn-primary text-xs px-6 py-3">Back to Home</Link>
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
