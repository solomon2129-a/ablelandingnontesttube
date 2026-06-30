import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import FooterNew from '../components/FooterNew'
import LordIcon, { ICONS } from '../components/LordIcon'

const ease = [0.25, 0.46, 0.45, 0.94]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
}

const slideLeft = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
}

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
}

function SectionLine({ dark = false }) {
  return (
    <motion.div
      className={`h-px origin-left ${dark ? 'bg-mist/20' : 'bg-brick'}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease }}
    />
  )
}

const contactCards = [
  { num: '01', icon: ICONS.email,     title: 'General Inquiries',        email: 'abledots.official@gmail.com' },
  { num: '02', icon: ICONS.handshake, title: 'Partnership Opportunities', email: 'abledots.official@gmail.com' },
  { num: '03', icon: ICONS.badge,     title: 'Press & Media',             email: 'abledots.official@gmail.com' },
  { num: '04', icon: ICONS.users,     title: 'Talent Support',            email: 'abledots.official@gmail.com' },
]

export default function Contact() {
  const reduce = useReducedMotion()

  return (
    <div className="bg-light">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="min-h-screen bg-forest flex flex-col justify-end pt-40 pb-20 md:pb-28 overflow-hidden relative">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
          <LordIcon src={ICONS.email} trigger="loop" size={320} palette="onDark" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-px bg-brick" />
            <span className="text-xs font-bold tracking-widest uppercase text-sage">Contact</span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={reduce ? {} : { y: '110%' }}
              animate={reduce ? {} : { y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.1 }}
              className="font-serif font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-light leading-none tracking-tight"
            >
              Get in
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={reduce ? {} : { y: '110%' }}
              animate={reduce ? {} : { y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.22 }}
              className="font-serif font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-brick leading-none tracking-tight"
            >
              touch.
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, ease, delay: 0.5 }}
            className="h-px bg-mist/25 origin-left my-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.6 }}
            className="text-mist text-xl font-light max-w-xl leading-relaxed"
          >
            We're building infrastructure for India's social wellbeing ecosystem. If you want to be part of it, let's talk.
          </motion.p>
        </div>
      </section>


      {/* ── CONTACT CARDS ────────────────────────── */}
      <section className="py-28 md:py-40 bg-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.phone} trigger="loop" size={28} palette="onLight" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Reach Us</span>
            </motion.div>
            <SectionLine />

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {contactCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.07 }}
                  whileHover={reduce ? {} : { x: -3, y: -3, boxShadow: '4px 4px 0px #9C352B' }}
                  className="p-8 border border-mist border-l-4 border-l-brick"
                  style={{ transition: 'box-shadow 0.12s ease, transform 0.12s ease' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-brick font-serif font-black text-4xl leading-none">{card.num}</span>
                    <LordIcon src={card.icon} trigger="hover" size={40} palette="onLight" />
                  </div>
                  <h3 className="font-serif font-black text-xl text-forest mb-4">{card.title}</h3>
                  <a
                    href={`mailto:${card.email}`}
                    className="text-forest/70 text-sm font-light hover:text-brick transition-colors duration-200 break-all"
                  >
                    {card.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── DIRECT CONTACT ────────────────────────── */}
      <section className="py-28 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.link} trigger="loop" size={28} palette="onDark" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Direct Lines</span>
            </motion.div>
            <SectionLine dark />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl text-light leading-tight tracking-tight mt-10 mb-16"
            >
              Prefer a direct conversation?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.a
                href="mailto:abledots.official@gmail.com"
                variants={fadeUp}
                whileHover={reduce ? {} : { y: -4, boxShadow: '4px 4px 0px #7A9591' }}
                className="p-8 border border-mist/20 block group"
                style={{ transition: 'box-shadow 0.12s ease, transform 0.12s ease' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <LordIcon src={ICONS.email} trigger="hover" size={36} palette="onDark" />
                  <span className="text-xs font-bold tracking-widest uppercase text-sage">Email</span>
                </div>
                <p className="font-serif font-black text-xl text-light group-hover:text-brick transition-colors duration-200">
                  abledots.official@gmail.com
                </p>
              </motion.a>

              <motion.a
                href="tel:+919591562286"
                variants={fadeUp}
                whileHover={reduce ? {} : { y: -4, boxShadow: '4px 4px 0px #7A9591' }}
                className="p-8 border border-mist/20 block group"
                style={{ transition: 'box-shadow 0.12s ease, transform 0.12s ease' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <LordIcon src={ICONS.phone} trigger="hover" size={36} palette="onDark" />
                  <span className="text-xs font-bold tracking-widest uppercase text-sage">Phone</span>
                </div>
                <p className="font-serif font-black text-xl text-light group-hover:text-brick transition-colors duration-200">
                  +91 95915 62286
                </p>
              </motion.a>
            </div>

            {/* Location */}
            <motion.div
              variants={fadeUp}
              className="mt-6 p-8 border border-mist/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <LordIcon src={ICONS.location} trigger="loop" size={32} palette="onDark" />
                <span className="text-xs font-bold tracking-widest uppercase text-sage">Location</span>
              </div>
              <p className="font-serif font-black text-xl text-light mb-1">Bengaluru, India</p>
              <p className="text-mist text-sm font-light">Expanding nationally. Reach out to connect with our team in your city.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── SOCIAL ───────────────────────────────── */}
      <section className="py-28 md:py-40 bg-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.linkedin} trigger="loop" size={28} palette="onLight" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Follow Our Journey</span>
            </motion.div>
            <motion.div
              className="h-px bg-forest/20 origin-left mb-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease }}
            />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl text-forest leading-tight tracking-tight mb-12"
            >
              Watch the infrastructure grow.
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.linkedin.com/company/abledots/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-dark inline-flex items-center gap-3"
              >
                <LordIcon src={ICONS.linkedin} trigger="hover" size={20} palette="onLight" />
                LinkedIn
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M2 2h10v10M2 12L12 2" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── FINAL CTA ───────────────────────────── */}
      <section className="py-24 bg-brick">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <LordIcon src={ICONS.connection} trigger="loop" size={56} palette="onDark" />
            </motion.div>

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-6xl text-light leading-tight tracking-tight mb-6"
            >
              Ready to build this with us?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-light/80 text-xl font-light mb-10 max-w-xl">
              Whatever your role, there's a place for you in this infrastructure.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a href="mailto:abledots.official@gmail.com" className="btn-outline inline-flex items-center gap-3">
                <LordIcon src={ICONS.email} trigger="hover" size={18} palette="onDark" />
                Start the Conversation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                  <path d="M2 8h12M8 2l6 6-6 6" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FooterNew />
    </div>
  )
}
