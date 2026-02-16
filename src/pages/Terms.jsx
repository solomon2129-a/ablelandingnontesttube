import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDownIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Terms(){
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
    { id: 1, title: 'INTRODUCTION', num: '1' },
    { id: 2, title: 'DEFINITIONS', num: '2' },
    { id: 3, title: 'SERVICES', num: '3' },
    { id: 5, title: 'TALENT TERMS', num: '5' },
    { id: 6, title: 'FACILITY TERMS', num: '6' },
    { id: 7, title: 'CORPORATE TERMS', num: '7' },
    { id: 9, title: 'INTELLECTUAL PROPERTY', num: '9' },
    { id: 10, title: 'DATA & PRIVACY', num: '10' },
    { id: 11, title: 'PROHIBITED CONDUCT', num: '11' },
    { id: 12, title: 'DISCLAIMERS', num: '12' },
    { id: 15, title: 'DISPUTE RESOLUTION', num: '15' },
    { id: 23, title: 'ACKNOWLEDGMENT', num: '23' }
  ]

  const colors = ['from-coral-500 to-coral-600','from-teal-500 to-teal-600','from-sunny-500 to-sunny-600','from-poppy-500 to-poppy-600','from-coral-500 to-sunny-500','from-teal-500 to-teal-600','from-sunny-500 to-coral-500','from-poppy-400 to-coral-500','from-teal-400 to-teal-600','from-coral-400 to-poppy-500','from-sunny-400 to-coral-500','from-teal-500 to-sunny-500']

  const Section = ({ number, title, children, id, ci = 0 }) => {
    const open = expandedSections[id] !== false
    return (
      <motion.div variants={itemVariants} className="mb-4" id={`section-${id}`}>
        <motion.button onClick={() => toggleSection(id)} className="w-full text-left group" whileHover={reduce ? {} : { x: 4 }}>
          <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/60 transition-all border border-transparent hover:border-choco-200/50">
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${colors[ci % colors.length]} flex items-center justify-center text-white font-bold text-sm shadow-warm`}>{number}</div>
            <h3 className="flex-grow text-lg font-bold text-choco-700 group-hover:text-coral-600 transition-colors">{title}</h3>
            <motion.div animate={reduce ? {} : { rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDownIcon className="w-5 h-5 text-coral-500" /></motion.div>
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
          <div className="absolute top-10 right-16 w-72 h-72 bg-coral-500/20 rounded-full blur-3xl animate-bloom" />
          <div className="absolute -bottom-10 left-10 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-sunny-400/10 rounded-full blur-3xl" />
          {/* Floating dots */}
          <div className="absolute top-20 left-[15%] w-3 h-3 rounded-full bg-coral-400/60 animate-float" />
          <div className="absolute top-32 right-[20%] w-2 h-2 rounded-full bg-sunny-400/60 animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-16 left-[40%] w-4 h-4 rounded-full bg-teal-400/40 animate-float" style={{ animationDelay: '4s' }} />
        </div>
        <motion.div initial={reduce ? {} : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-bold bg-coral-500/30 text-coral-200 rounded-full border border-coral-400/30">LEGAL</span>
            <span className="px-3 py-1 text-xs font-bold bg-teal-500/30 text-teal-200 rounded-full border border-teal-400/30">V1.0</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-coral-100 to-sunny-200 bg-clip-text text-transparent">Terms &</span><br />
            <span className="bg-gradient-to-r from-coral-300 via-sunny-300 to-teal-300 bg-clip-text text-transparent">Conditions</span>
          </h1>
          <p className="mt-6 text-choco-100 text-lg max-w-xl leading-relaxed">Trusted infrastructure for talent, NGOs, and corporates. Every clause designed with transparency and fairness.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#section-1" className="px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-bold rounded-full shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1">Read Terms</a>
            <Link to="/privacy" className="px-6 py-3 bg-white/10 backdrop-blur text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all">Privacy Policy</Link>
          </div>
        </motion.div>
      </section>

      {/* Highlight Cards */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Free for All', desc: 'No fees for talent or partners', icon: '🎉', gradient: 'from-coral-500 to-coral-600' },
            { title: 'Transparent', desc: 'Clear about what we guarantee', icon: '✨', gradient: 'from-teal-500 to-teal-600' },
            { title: 'Fair Terms', desc: 'Equally binding on all parties', icon: '🤝', gradient: 'from-sunny-500 to-sunny-600' },
            { title: 'India-First', desc: 'Governed by Indian law', icon: '🇮🇳', gradient: 'from-poppy-400 to-coral-500' },
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
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-coral-500 to-sunny-400"></span> Sections
              </h3>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                {sections.map((s, i) => (
                  <a key={s.id} href={`#section-${s.id}`} className="block text-xs text-choco-500 hover:text-coral-600 hover:bg-coral-50 px-3 py-2 rounded-lg transition-all font-medium">
                    {'\u00A7'}{s.num} {s.title}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-choco-100 shadow-warm">
              <Section number="1" title="1. INTRODUCTION AND ACCEPTANCE" id="1" ci={0}>
                <p className="font-semibold text-choco-800">These Terms govern your access to and use of Abledots Services.</p>
                <p className="mt-2">By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.</p>
                <div className="mt-4 p-4 bg-sunny-50 rounded-xl border border-sunny-200">
                  <p className="text-sm"><strong className="text-sunny-700">Key Point:</strong> We build India's social wellbeing infrastructure, connecting talent, NGOs, training facilities, and corporate partners through verified pipelines.</p>
                </div>
              </Section>

              <Section number="2" title="2. DEFINITIONS" id="2" ci={1}>
                <div className="space-y-2">
                  {[
                    { term: 'Talent/Candidate', def: 'Individuals seeking employment on AbleHires' },
                    { term: 'Facility Partner/NGO Partner', def: 'Organizations identifying and referring talent' },
                    { term: 'Corporate Partner/Employer', def: 'Companies accessing our talent pipeline' },
                    { term: 'Platform', def: 'AbleHires application and Abledots digital products' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-teal-50/50 border border-teal-100/50">
                      <span className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0"></span>
                      <p><strong className="text-choco-800">{item.term}:</strong> {item.def}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section number="3" title="3. SERVICES DESCRIPTION" id="3" ci={2}>
                <p className="font-semibold text-choco-800 mb-3">What We Provide:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Talent Assessment and Verification', 'AbleHires Platform connecting talent with opportunities', 'AI-Powered Mock Interviews and Feedback', 'Impact Tracking for inclusion outcomes'].map((item, i) => (
                    <div key={i} className="flex gap-2 items-start p-3 rounded-xl bg-teal-50 border border-teal-100"><span className="text-teal-500 font-bold">&#10003;</span><span className="text-sm">{item}</span></div>
                  ))}
                </div>
                <p className="font-semibold text-choco-800 mt-4 mb-3">What We Are NOT:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Employment agency or staffing firm', 'Guarantee of employment', 'Traditional job board', 'RPO provider'].map((item, i) => (
                    <div key={i} className="flex gap-2 items-start p-3 rounded-xl bg-poppy-50 border border-poppy-100"><span className="text-poppy-500 font-bold">&#10005;</span><span className="text-sm text-poppy-700">{item}</span></div>
                  ))}
                </div>
              </Section>

              <Section number="5" title="5. TALENT-SPECIFIC TERMS" id="5" ci={3}>
                {[
                  { icon: '✓', ok: true, label: 'Free Services', text: 'No fees for profiles, assessment, AI tools, or matching' },
                  { icon: '✓', ok: true, label: 'Your Rights', text: 'Control your profile visibility, update information, request deletion' },
                  { icon: '✗', ok: false, label: 'No Guarantee', text: 'Participation DOES NOT guarantee employment or job offers' },
                  { icon: '✓', ok: true, label: 'Ownership', text: 'You retain rights to your data with permissions for us to use it for matching' },
                ].map((item, i) => (
                  <div key={i} className={`flex gap-3 items-start p-3 rounded-xl ${item.ok ? 'bg-teal-50 border border-teal-100' : 'bg-poppy-50 border border-poppy-100'}`}>
                    <span className={`font-bold text-lg leading-none ${item.ok ? 'text-teal-500' : 'text-poppy-500'}`}>{item.icon}</span>
                    <p><strong className="text-choco-800">{item.label}:</strong> {item.text}</p>
                  </div>
                ))}
              </Section>

              <Section number="6" title="6. FACILITY/NGO PARTNER TERMS" id="6" ci={4}>
                <p className="font-semibold text-choco-800 mb-2">Benefits:</p>
                {['Free partnership', 'Impact tracking dashboards', 'Direct corporate connections', 'Training support'].map((t, i) => (
                  <div key={i} className="flex gap-2 items-center p-2 pl-3 rounded-lg bg-teal-50/50"><span className="text-teal-500">&#10003;</span><span className="text-sm">{t}</span></div>
                ))}
                <p className="font-semibold text-choco-800 mt-4 mb-2">Obligations:</p>
                {[{ ok: true, t: "Refer only with individual's consent" },{ ok: true, t: 'Provide accurate information' },{ ok: false, t: 'Never charge individuals fees' }].map((item, i) => (
                  <div key={i} className={`flex gap-2 items-center p-2 pl-3 rounded-lg ${item.ok ? 'bg-teal-50/50' : 'bg-poppy-50/50'}`}><span className={item.ok ? 'text-teal-500' : 'text-poppy-500'}>{item.ok ? '✓' : '✗'}</span><span className="text-sm">{item.t}</span></div>
                ))}
              </Section>

              <Section number="12" title="12. DISCLAIMERS" id="12" ci={9}>
                <div className="p-5 bg-gradient-to-r from-poppy-50 to-coral-50 border-l-4 border-poppy-500 rounded-xl">
                  <p className="font-bold text-poppy-700 mb-2">&#9888; CRITICAL DISCLAIMER</p>
                  <p className="text-poppy-800 text-sm">Services are provided "AS IS" without warranties. We do NOT guarantee:</p>
                  <ul className="mt-3 space-y-1 pl-2">
                    {['Job placement or employment outcomes', 'Interview opportunities', 'Hiring decisions or salary levels', 'Uninterrupted platform access'].map((item, i) => (
                      <li key={i} className="flex gap-2 text-poppy-700 text-sm"><span className="text-poppy-500 font-bold">&#10005;</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </Section>

              <Section number="23" title="23. ACKNOWLEDGMENT" id="23" ci={11}>
                <div className="bg-gradient-to-r from-teal-50 via-sunny-50 to-coral-50 rounded-2xl p-6 border border-teal-100">
                  <p className="font-bold text-choco-800 mb-4 flex items-center gap-2"><SparklesIcon className="w-5 h-5 text-sunny-500" /> By using Abledots, you acknowledge:</p>
                  {["You've read and understood these Terms", 'No guarantee of employment – we provide infrastructure', "You're at least 18 years old", 'You consent to our data practices'].map((text, i) => (
                    <div key={i} className="flex gap-3 mb-2"><CheckCircleIcon className="w-5 h-5 text-teal-500 flex-shrink-0" /><span className="text-choco-700">{text}</span></div>
                  ))}
                </div>
              </Section>
            </div>

            {/* Contact + CTA */}
            <motion.div variants={itemVariants} className="mt-8 bg-gradient-to-br from-choco-700 via-choco-800 to-choco-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-coral-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-500/15 rounded-full blur-2xl" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-coral-300 via-sunny-300 to-teal-300 bg-clip-text text-transparent mb-6 relative">Questions? We're Here to Help</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                <div><p className="text-choco-300 text-sm">Email</p><a href="mailto:antomichae03@gmail.com" className="text-coral-300 font-semibold hover:underline">antomichae03@gmail.com</a></div>
                <div><p className="text-choco-300 text-sm">Phone</p><a href="tel:+919591562286" className="text-teal-300 font-semibold hover:underline">+91 95915 62286</a></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 p-8 bg-gradient-to-r from-coral-50 via-sunny-50 to-teal-50 border-2 border-coral-200 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute top-2 right-6 text-4xl opacity-20">🎉</div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-coral-600 to-choco-700 bg-clip-text text-transparent mb-3">Ready to get started?</h3>
              <p className="text-choco-500 text-sm mb-6">Join thousands building inclusive futures together.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/" className="px-8 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-bold rounded-full shadow-warm hover:shadow-warm-lg transition-all hover:-translate-y-1">Accept & Continue</Link>
                <Link to="/privacy" className="px-8 py-3 bg-white text-coral-600 font-bold rounded-full border-2 border-coral-200 hover:border-coral-400 shadow-soft hover:shadow-warm transition-all">Read Privacy Policy</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
