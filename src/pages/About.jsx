import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
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

const visionItems = [
  { icon: ICONS.users,     label: 'Verified talent pipelines at scale' },
  { icon: ICONS.shield,    label: 'NGO credibility scoring and fund flow' },
  { icon: ICONS.chart,     label: 'Corporate inclusion dashboards' },
  { icon: ICONS.analytics, label: 'Transparent impact tracking' },
]

const beliefs = [
  { text: 'Inclusion is infrastructure, not an initiative',    icon: ICONS.building },
  { text: "Talent exists everywhere. Access doesn't",          icon: ICONS.users },
  { text: 'Verification builds trust. Trust unlocks opportunity', icon: ICONS.shield },
  { text: 'Systems that exclude are designed that way',        icon: ICONS.warning },
  { text: "We're redesigning the system",                      icon: ICONS.rocket },
  { text: 'This is generational work',                         icon: ICONS.heart },
]

export default function About() {
  const reduce = useReducedMotion()

  return (
    <div className="bg-light">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="min-h-screen bg-forest flex flex-col justify-end pt-40 pb-20 md:pb-28 overflow-hidden relative">
        {/* Decorative floating icon */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
          <LordIcon src={ICONS.building} trigger="loop" size={320} palette="onDark" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-px bg-brick" />
            <span className="text-xs font-bold tracking-widest uppercase text-sage">About Abledots</span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={reduce ? {} : { y: '110%' }}
              animate={reduce ? {} : { y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.1 }}
              className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-light leading-none tracking-tight"
            >
              We're not fixing inclusion.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={reduce ? {} : { y: '110%' }}
              animate={reduce ? {} : { y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.22 }}
              className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight"
            >
              <span className="text-brick">We're rebuilding it</span>
              <span className="text-mist"> from scratch.</span>
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
            Because the current system isn't broken—it was never designed to work for everyone.
          </motion.p>
        </div>
      </section>


      {/* ── THE ORIGIN ───────────────────────────── */}
      <section className="py-28 md:py-40 bg-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.heart} trigger="loop" size={32} palette="onLight" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Why This Exists</span>
            </motion.div>
            <SectionLine />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-forest leading-tight tracking-tight mt-10 mb-6 max-w-3xl"
            >
              The insight that started everything.
            </motion.h2>

            <motion.div variants={fadeUp} className="max-w-2xl space-y-5 text-forest/70 text-lg font-light leading-relaxed">
              <p>
                For years, we watched talented individuals get lost in a system that was never built for them. Not because they lacked skill—because they lacked verified access.
              </p>
              <p>
                NGOs worked in isolation. Corporates checked boxes. Millions remained invisible.
              </p>
              <p className="text-forest font-semibold">
                You need infrastructure. So we started building it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── THE LONG VISION ─────────────────────── */}
      <section className="py-28 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.rocket} trigger="loop" size={32} palette="onDark" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Where We're Going</span>
            </motion.div>
            <SectionLine dark />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-light leading-tight tracking-tight mt-10 mb-16 max-w-2xl"
            >
              Building the inclusion layer for India.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-px bg-mist/10">
              {visionItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 border border-mist/15 flex items-start gap-5 group"
                  whileHover={reduce ? {} : { backgroundColor: 'rgba(198,207,214,0.06)' }}
                  style={{ transition: 'background-color 0.2s ease' }}
                >
                  <span className="text-brick font-serif font-black text-2xl mt-0.5 shrink-0">
                    0{idx + 1}
                  </span>
                  <div className="flex items-center gap-4 flex-1">
                    <LordIcon src={item.icon} trigger="hover" size={36} palette="onDark" className="shrink-0" />
                    <p className="text-light text-lg font-light leading-snug">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-10 p-8 border border-brick"
            >
              <p className="text-brick font-bold text-sm tracking-wide">
                Future: Accessible services marketplace · AI leveling systems
              </p>
              <p className="text-light text-xl font-serif font-black mt-2">
                This is 10-year work. We're just getting started.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── WHAT WE STAND FOR ───────────────────── */}
      <section className="py-28 md:py-40 bg-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.shield} trigger="loop" size={32} palette="onLight" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Our Principles</span>
            </motion.div>
            <motion.div
              className="h-px bg-forest/20 origin-left mb-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease }}
            />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl text-forest leading-tight tracking-tight mb-16"
            >
              What we stand for.
            </motion.h2>

            <div className="space-y-0 border border-forest/20">
              {beliefs.map((belief, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={reduce ? {} : { backgroundColor: '#0C2E2B', paddingLeft: '2.5rem' }}
                  className="px-8 py-6 border-b border-forest/15 last:border-b-0 group flex items-center gap-5"
                  style={{ transition: 'background-color 0.2s ease, padding-left 0.2s ease' }}
                >
                  <div className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                    <LordIcon src={belief.icon} trigger="hover" size={28} palette="onLight" />
                  </div>
                  <p className="font-bold text-lg text-forest group-hover:text-light transition-colors duration-200 leading-snug">
                    {belief.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── CURRENT STATE ───────────────────────── */}
      <section className="py-28 md:py-40 bg-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.location} trigger="loop" size={32} palette="onLight" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Current State</span>
            </motion.div>
            <SectionLine />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-forest leading-tight tracking-tight mt-10 mb-6"
            >
              Bengaluru. Active. Expanding.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-forest/70 text-lg font-light leading-relaxed max-w-2xl">
              We're on the ground in Bengaluru, partnering with facilities to source, assess, and verify talent. Every week, we're identifying professionals, assessing them, verifying capabilities, and matching to opportunities.
            </motion.p>
            <motion.p variants={fadeUp} className="text-forest font-bold text-lg mt-4">
              City by city. Foundation by foundation.
            </motion.p>
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
              <LordIcon src={ICONS.handshake} trigger="loop" size={56} palette="onDark" />
            </motion.div>

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-6xl text-light leading-tight tracking-tight mb-12"
            >
              Want to build this with us?
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/ablehires" className="btn-outline">Join as Talent</Link>
              <Link to="/partner"   className="btn-outline">Partner as NGO / Facility</Link>
              <Link to="/partner"   className="btn-outline">Hire as Corporate</Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 pt-8 border-t border-light/20"
            >
              <a href="mailto:abledots.official@gmail.com" className="text-light font-bold hover:text-mist transition-colors flex items-center gap-3">
                <LordIcon src={ICONS.email} trigger="hover" size={20} palette="onDark" />
                abledots.official@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FooterNew />
    </div>
  )
}
