import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDownIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Privacy(){
  const [expandedSections, setExpandedSections] = useState({})
  const reduce = useReducedMotion()

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const containerVariants = {
    hidden: reduce ? {} : { opacity: 0 },
    visible: reduce ? {} : { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
  }
  const itemVariants = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    visible: reduce ? {} : { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const sections = [
    { id: 1, title: 'Introduction', num: '1' },
    { id: 2, title: 'Information We Collect', num: '2' },
    { id: 3, title: 'How We Use Info', num: '3' },
    { id: 4, title: 'How We Share Info', num: '4' },
    { id: 5, title: 'Data Security', num: '5' },
    { id: 6, title: 'Data Retention', num: '6' },
    { id: 7, title: 'Your Rights', num: '7' },
    { id: 8, title: 'Sensitive Info', num: '8' },
    { id: 9, title: "Children's Privacy", num: '9' },
    { id: 12, title: 'CCPA', num: '12' },
    { id: 13, title: 'GDPR', num: '13' },
    { id: 14, title: 'AI Decisions', num: '14' },
    { id: 16, title: 'Contact Us', num: '16' },
    { id: 18, title: 'Your Acceptance', num: '18' }
  ]

  const colors = ['from-teal-500 to-teal-600','from-coral-500 to-coral-600','from-sunny-500 to-sunny-600','from-poppy-400 to-poppy-500','from-teal-400 to-teal-600','from-coral-400 to-sunny-500','from-sunny-400 to-coral-500','from-teal-500 to-teal-600','from-poppy-500 to-poppy-600','from-coral-500 to-coral-600','from-sunny-500 to-sunny-600','from-teal-400 to-teal-600','from-poppy-400 to-coral-500','from-teal-500 to-sunny-500']

  const Section = ({ number, title, children, id, ci = 0 }) => {
    const open = expandedSections[id] !== false
    return (
      <motion.div variants={itemVariants} className="mb-4" id={`section-${id}`}>
        <motion.button onClick={() => toggleSection(id)} className="w-full text-left group" whileHover={reduce ? {} : { x: 4 }}>
          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/60 transition-all border border-transparent hover:border-choco-200/50">
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${colors[ci % colors.length]} flex items-center justify-center text-white font-bold text-sm shadow-warm`}>{number}</div>
            <h3 className="flex-grow text-lg font-bold text-choco-700 group-hover:text-teal-600 transition-colors">{title}</h3>
            <motion.div animate={reduce ? {} : { rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDownIcon className="w-5 h-5 text-teal-500" /></motion.div>
          </div>
        </motion.button>
        <motion.div initial={reduce ? {} : { opacity: 0, height: 0 }} animate={reduce ? {} : { opacity: open ? 1 : 0, height: open ? 'auto' : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
          <div className="pl-14 pr-4 pb-4 text-choco-600 space-y-3 leading-relaxed">{children}</div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-choco-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-choco-700 via-choco-800 to-choco-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-16 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-bloom" />
          <div className="absolute -bottom-10 right-10 w-80 h-80 bg-coral-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-sunny-400/10 rounded-full blur-3xl" />
          <div className="absolute top-24 right-[15%] w-3 h-3 rounded-full bg-teal-400/60 animate-float" />
          <div className="absolute top-36 left-[20%] w-2 h-2 rounded-full bg-sunny-400/60 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-12 right-[40%] w-4 h-4 rounded-full bg-coral-400/40 animate-float" style={{ animationDelay: '4s' }} />
        </div>
        <motion.div initial={reduce ? {} : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-bold bg-teal-500/30 text-teal-200 rounded-full border border-teal-400/30">PRIVACY</span>
            <span className="px-3 py-1 text-xs font-bold bg-coral-500/30 text-coral-200 rounded-full border border-coral-400/30">V1.0</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-teal-100 to-sunny-200 bg-clip-text text-transparent">Privacy</span><br />
            <span className="bg-gradient-to-r from-teal-300 via-sunny-300 to-coral-300 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="mt-6 text-choco-100 text-lg max-w-xl leading-relaxed">Your privacy matters. We protect your data so you can focus on building your future.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#section-1" className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-full shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1">Read Policy</a>
            <Link to="/terms" className="px-6 py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all">Terms & Conditions</Link>
          </div>
        </motion.div>
      </section>

      {/* Highlight Cards */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'No Data Sales', desc: 'We never sell your info', icon: '🔒', gradient: 'from-teal-500 to-teal-600' },
            { title: 'Your Control', desc: 'Access, delete, port anytime', icon: '🎯', gradient: 'from-coral-500 to-coral-600' },
            { title: 'Encrypted', desc: 'Industry standard encryption', icon: '🛡', gradient: 'from-sunny-500 to-sunny-600' },
            { title: 'Transparent', desc: 'Clear about everything', icon: '✨', gradient: 'from-poppy-400 to-coral-500' },
          ].map((c, i) => (
            <motion.div key={i} initial={reduce ? {} : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 border border-choco-100 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all cursor-default">
              <span className="text-2xl">{c.icon}</span>
              <div className={`mt-2 text-base font-bold bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent`}>{c.title}</div>
              <p className="text-choco-500 text-xs mt-1">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div initial={reduce ? {} : { opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-1">
            <div className="sticky top-24 bg-white/90 backdrop-blur-sm rounded-2xl shadow-warm p-5 border border-choco-100">
              <h3 className="font-bold text-choco-700 mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-sunny-400"></span> Sections
              </h3>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#section-${s.id}`} className="block text-xs text-choco-500 hover:text-teal-600 hover:bg-teal-50 px-3 py-2 rounded-lg transition-all font-medium">
                    {'\u00A7'}{s.num} {s.title}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-choco-100 shadow-warm">

              <Section number="1" title="1. INTRODUCTION" id="1" ci={0}>
                <p>Abledots is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, store, share, and protect your information.</p>
                <p className="mt-2 font-semibold text-choco-800">Applies to: abledots.com, AbleHires app, all related services, and partner-collected information.</p>
                <p className="mt-2">By using our Services, you consent to this policy. We may update it with notice via email, platform, or website.</p>
              </Section>

              <Section number="2" title="2. INFORMATION WE COLLECT" id="2" ci={1}>
                {[
                  { label: 'For Talent', items: ['Personal & identity info', 'Disability info (voluntary)', 'Education, work history, skills', 'Assessment data & documents'] },
                  { label: 'For Partners', items: ['Organization & representative details', 'Partnership & referral data'] },
                  { label: 'Automatic', items: ['Device info, IP, usage analytics', 'Location (approximate or with permission)', 'Cookies: Essential, Analytics, Functional, Marketing'] },
                ].map((g, i) => (
                  <div key={i} className="mt-3 p-4 bg-gradient-to-r from-coral-50 to-sunny-50/50 rounded-xl border border-coral-100">
                    <p className="font-semibold text-choco-800 mb-2">{g.label}:</p>
                    <ul className="space-y-1 text-sm">{g.items.map((item, j) => (<li key={j} className="flex gap-2"><span className="text-coral-400">&#9679;</span>{item}</li>))}</ul>
                  </div>
                ))}
              </Section>

              <Section number="3" title="3. HOW WE USE YOUR INFORMATION" id="3" ci={2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { t: 'Provide Services', items: ['Account management', 'Job matching', 'AI tools & feedback'], c: 'bg-teal-50 border-teal-100' },
                    { t: 'Quality & Safety', items: ['Verify info', 'Prevent fraud', 'Improve platform'], c: 'bg-coral-50 border-coral-100' },
                    { t: 'Communication', items: ['Transactional emails', 'Support', 'Marketing (opt-out)'], c: 'bg-sunny-50 border-sunny-100' },
                    { t: 'Operations', items: ['Manage partnerships', 'Legal compliance', 'Impact reports'], c: 'bg-poppy-50 border-poppy-100' },
                  ].map((card, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${card.c}`}>
                      <p className="font-semibold text-sm text-choco-800 mb-2">{card.t}</p>
                      <ul className="text-xs space-y-1">{card.items.map((item, j) => (<li key={j} className="flex gap-2"><span className="text-teal-400">&#10003;</span>{item}</li>))}</ul>
                    </div>
                  ))}
                </div>
              </Section>

              <Section number="4" title="4. HOW WE SHARE YOUR INFORMATION" id="4" ci={3}>
                <div className="p-4 bg-teal-50 rounded-xl border border-teal-100 mb-3">
                  <p className="font-semibold text-sm text-choco-800">With your consent:</p>
                  <p className="text-sm mt-1">Profile, skills, and contact info shared with employers when you agree to interview. You control visibility.</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-poppy-50 to-coral-50 rounded-xl border-l-4 border-poppy-500">
                  <p className="font-semibold text-choco-800 mb-2">We DO NOT:</p>
                  {['Sell your personal information', 'Share with advertisers', 'Disclose disability info without consent', 'Give contact info to spammers'].map((item, i) => (
                    <div key={i} className="flex gap-2 text-poppy-700 text-sm"><span className="text-poppy-500 font-bold">&#10005;</span>{item}</div>
                  ))}
                </div>
              </Section>

              <Section number="5" title="5. DATA SECURITY" id="5" ci={4}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
                    <p className="font-semibold text-sm mb-2 text-choco-800">Technical</p>
                    <ul className="text-xs space-y-1">{['Encryption (SSL/TLS + AES-256)', 'Role-based access & MFA', 'Continuous monitoring', 'Regular backups'].map((t, i) => (<li key={i} className="flex gap-2"><span className="text-teal-500">&#10003;</span>{t}</li>))}</ul>
                  </div>
                  <div className="p-4 bg-coral-50 rounded-xl border border-coral-100">
                    <p className="font-semibold text-sm mb-2 text-choco-800">Organizational</p>
                    <ul className="text-xs space-y-1">{['Data minimization', 'Staff training', 'Vendor vetting', 'Incident response'].map((t, i) => (<li key={i} className="flex gap-2"><span className="text-coral-500">&#10003;</span>{t}</li>))}</ul>
                  </div>
                </div>
                <div className="mt-3 p-4 bg-sunny-50 rounded-xl border border-sunny-200">
                  <p className="font-semibold text-choco-800 text-sm">&#9888; Breach Notification: Within 72 hours with full details and protective measures.</p>
                </div>
              </Section>

              <Section number="6" title="6. DATA RETENTION" id="6" ci={5}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { t: 'Active', items: ['Profiles: active + 24mo', 'Assessments: indefinite', 'Comms: 12mo'], c: 'bg-teal-50 border-teal-100' },
                    { t: 'Inactive', items: ['24+ mo: archived', 'Notified before deletion'], c: 'bg-sunny-50 border-sunny-100' },
                    { t: 'Closed', items: ['Deleted in 90 days', 'Backups: 90 days'], c: 'bg-coral-50 border-coral-100' },
                  ].map((card, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${card.c}`}>
                      <p className="font-semibold text-sm text-choco-800 mb-2">{card.t}</p>
                      <ul className="text-xs space-y-1">{card.items.map((item, j) => (<li key={j} className="flex gap-2"><span className="text-teal-400">&#9679;</span>{item}</li>))}</ul>
                    </div>
                  ))}
                </div>
              </Section>

              <Section number="7" title="7. YOUR RIGHTS AND CHOICES" id="7" ci={6}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { t: 'Access & Portability', d: 'Request data within 30 days via antomichae03@gmail.com', c: 'bg-teal-50 border-teal-100' },
                    { t: 'Correction', d: 'Edit profile or contact us. Updated in 15 days.', c: 'bg-coral-50 border-coral-100' },
                    { t: 'Deletion', d: 'Deleted within 90 days (some exceptions).', c: 'bg-sunny-50 border-sunny-100' },
                    { t: 'Restrict & Object', d: 'Object to marketing & automated decisions.', c: 'bg-poppy-50 border-poppy-100' },
                  ].map((card, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${card.c}`}>
                      <p className="font-semibold text-sm text-choco-800">{card.t}</p>
                      <p className="text-xs mt-1">{card.d}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-teal-700">No Cost. Free for all users.</p>
              </Section>

              <Section number="8" title="8. SENSITIVE INFORMATION" id="8" ci={7}>
                {[
                  { t: 'Disability Info', d: 'Voluntary only. Enhanced security. You control disclosure.', icon: '🤝' },
                  { t: 'Financial Info', d: 'PCI-DSS compliant. No card numbers stored.', icon: '💳' },
                  { t: 'Government ID', d: 'Encrypted. Deleted after 90 days.', icon: '🪪' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-choco-100 shadow-soft mb-2">
                    <p className="font-semibold text-choco-800 flex items-center gap-2"><span className="text-lg">{item.icon}</span>{item.t}</p>
                    <p className="text-sm mt-1">{item.d}</p>
                  </div>
                ))}
              </Section>

              <Section number="9" title="9. CHILDREN'S PRIVACY" id="9" ci={8}>
                <div className="p-5 bg-gradient-to-r from-poppy-50 to-coral-50 border-l-4 border-poppy-500 rounded-xl">
                  <p className="font-bold text-poppy-700">Age Requirement: 18+</p>
                  <p className="text-sm text-poppy-800 mt-1">Not intended for minors. Contact antomichae03@gmail.com if a minor has provided data.</p>
                </div>
              </Section>

              <Section number="12" title="12. CCPA RIGHTS" id="12" ci={9}>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {['Right to Know', 'Right to Delete', 'Right to Opt-Out', 'Non-Discrimination'].map((r, i) => {
                    const c = ['bg-teal-100 text-teal-700 border-teal-200','bg-coral-100 text-coral-700 border-coral-200','bg-sunny-100 text-sunny-700 border-sunny-200','bg-poppy-100 text-poppy-700 border-poppy-200']
                    return <div key={i} className={`p-3 rounded-xl text-center text-xs font-semibold border ${c[i]}`}>{r}</div>
                  })}
                </div>
                <p className="text-sm"><strong className="text-choco-800">We do not sell personal information.</strong> Exercise rights at antomichae03@gmail.com.</p>
              </Section>

              <Section number="13" title="13. GDPR RIGHTS" id="13" ci={10}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                  {['Access', 'Rectification', 'Erasure', 'Restrict', 'Portability', 'Object', 'Withdraw Consent', 'Lodge Complaint'].map((r, i) => {
                    const c = ['bg-teal-50 text-teal-700 border-teal-100','bg-coral-50 text-coral-700 border-coral-100','bg-sunny-50 text-sunny-700 border-sunny-100','bg-poppy-50 text-poppy-700 border-poppy-100']
                    return <div key={i} className={`p-2 rounded-xl text-center text-xs font-medium border ${c[i % c.length]}`}>{r}</div>
                  })}
                </div>
                <p className="text-sm"><strong>DPO:</strong> <a href="mailto:antomichae03@gmail.com" className="text-teal-600 hover:underline font-semibold">antomichae03@gmail.com</a></p>
              </Section>

              <Section number="14" title="14. AUTOMATED DECISION-MAKING" id="14" ci={11}>
                <p className="text-sm">We use AI for skill assessment, job matching, and interview practice. Significant decisions involve human review.</p>
                <p className="text-sm mt-2 font-semibold text-choco-800">Hiring decisions are always made by employers, not algorithms.</p>
              </Section>

              <Section number="16" title="16. CONTACT US" id="16" ci={12}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl border bg-teal-50 border-teal-100">
                    <p className="font-semibold text-sm text-choco-800">Email</p>
                    <a href="mailto:antomichae03@gmail.com" className="text-teal-600 text-sm hover:underline font-semibold">antomichae03@gmail.com</a>
                  </div>
                  <div className="p-4 rounded-xl border bg-coral-50 border-coral-100">
                    <p className="font-semibold text-sm text-choco-800">Phone</p>
                    <a href="tel:+919591562286" className="text-coral-600 text-sm hover:underline font-semibold">+91 95915 62286</a>
                  </div>
                </div>
              </Section>

              <Section number="18" title="18. YOUR ACCEPTANCE" id="18" ci={13}>
                <div className="bg-gradient-to-r from-teal-50 via-sunny-50 to-coral-50 rounded-2xl p-6 border border-teal-100">
                  <p className="font-bold text-choco-800 mb-4 flex items-center gap-2"><SparklesIcon className="w-5 h-5 text-sunny-500" /> By using our Services:</p>
                  {['You have read and understood this Privacy Policy', 'You consent to the collection, use, and sharing of information', 'You understand your rights and how to exercise them', 'You agree to receive necessary privacy communications'].map((text, i) => (
                    <div key={i} className="flex gap-3 mb-2"><ShieldCheckIcon className="w-5 h-5 text-teal-500 flex-shrink-0" /><span className="text-choco-700">{text}</span></div>
                  ))}
                </div>
              </Section>
            </div>

            {/* Contact + CTA */}
            <motion.div variants={itemVariants} className="mt-8 bg-gradient-to-br from-choco-700 via-choco-800 to-choco-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-coral-500/15 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-300 via-sunny-300 to-coral-300 bg-clip-text text-transparent mb-6 relative">Privacy Questions? We're Here</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                <div><p className="text-choco-300 text-sm">Email</p><a href="mailto:antomichae03@gmail.com" className="text-teal-300 font-semibold hover:underline">antomichae03@gmail.com</a></div>
                <div><p className="text-choco-300 text-sm">Phone</p><a href="tel:+919591562286" className="text-coral-300 font-semibold hover:underline">+91 95915 62286</a></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 p-8 bg-gradient-to-r from-teal-50 via-sunny-50 to-coral-50 border-2 border-teal-200 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute top-2 right-6 text-4xl opacity-20">🔒</div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-choco-700 bg-clip-text text-transparent mb-3">Your privacy is important to us</h3>
              <p className="text-choco-500 text-sm mb-6">We protect your data so you can focus on your future.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold rounded-full shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1">Back to Home</Link>
                <Link to="/terms" className="px-8 py-3 bg-white text-teal-600 font-bold rounded-full border-2 border-teal-200 hover:border-teal-400 shadow-soft hover:shadow-warm transition-all">Read Terms</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
