import React, { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import FooterNew from '../components/FooterNew'
import LordIcon, { ICONS } from '../components/LordIcon'

/* ─── motion helpers ───────────────────────────── */
const ease = [0.25, 0.46, 0.45, 0.94]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
}

const slideLeft = {
  hidden:  { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
}

const stagger = (delay = 0.06) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay, delayChildren: 0.08 } },
})

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

/* ─── page ─────────────────────────────────────── */

export default function HomeNew() {
  const reduce = useReducedMotion()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef })
  const heroIconY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <div className="bg-light">

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-forest flex flex-col justify-end overflow-hidden pt-40 pb-16 md:pb-24"
      >
        {/* Floating icon — top right */}
        <motion.div
          style={{ y: heroIconY }}
          className="absolute top-32 right-10 lg:right-24 opacity-15 pointer-events-none hidden md:block"
        >
          <LordIcon src={ICONS.building} trigger="loop" size={260} palette="onDark" />
        </motion.div>

        {/* Decorative large number */}
        <div
          className="absolute right-0 bottom-0 select-none pointer-events-none overflow-hidden"
          aria-hidden
        >
          <span className="font-serif font-black text-[18rem] leading-none text-forest/5 pr-4">
            01
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-px bg-brick" />
            <span className="text-xs font-bold tracking-widest uppercase text-sage">
              India's inclusion infrastructure
            </span>
          </motion.div>

          {/* Hero headline — each line revealed */}
          <div className="mb-6">
            <div className="overflow-hidden">
              <motion.h1
                initial={reduce ? {} : { y: '110%' }}
                animate={reduce ? {} : { y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.1 }}
                className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-light leading-none tracking-tight"
              >
                Inclusion
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={reduce ? {} : { y: '110%' }}
                animate={reduce ? {} : { y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.22 }}
                className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-light leading-none tracking-tight"
              >
                isn't charity.
              </motion.h1>
            </div>
            <div className="overflow-hidden mt-2">
              <motion.h1
                initial={reduce ? {} : { y: '110%' }}
                animate={reduce ? {} : { y: 0 }}
                transition={{ duration: 0.55, ease, delay: 0.32 }}
                className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight"
              >
                <span className="text-light">It's </span>
                <span className="text-brick">infrastructure.</span>
              </motion.h1>
            </div>
          </div>

          <motion.div
            className="h-px bg-mist/25 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, ease, delay: 0.55 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.65 }}
            className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mt-8"
          >
            <p className="text-mist text-base md:text-lg font-light leading-relaxed max-w-lg">
              We're building India's social wellbeing ecosystem—connecting underserved talent, NGOs, and corporates in one verified network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button
                onClick={() => document.getElementById('foundation')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                See Our Vision
              </button>
              <button
                onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Our Story
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="mt-16 flex items-center gap-3 text-mist/50"
          >
            <motion.div animate={reduce ? {} : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </motion.div>
            <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 2 — THE PROBLEM
      ══════════════════════════════════════════ */}
      <section id="problem" className="py-28 md:py-40 bg-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-sage">The Challenge</span>
            </motion.div>
            <SectionLine />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-forest leading-tight tracking-tight mt-10 mb-6 max-w-3xl"
            >
              The system is broken.<br />Not the people.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-forest/70 text-lg font-light leading-relaxed max-w-2xl mb-16">
              Millions of talented individuals remain invisible—not because they lack skill, but because they lack access. NGOs work in isolation. Corporates check DEI boxes. No verification. No transparency. No system.
            </motion.p>

            {/* Three cards with icons */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num:    '01',
                  icon:   ICONS.users,
                  title:  'Talent',
                  desc:   'Skilled but disconnected from any verified pipeline or opportunity.',
                  border: 'border-brick',
                },
                {
                  num:    '02',
                  icon:   ICONS.handshake,
                  title:  'NGOs',
                  desc:   'Building futures in isolation with no connection to hiring ecosystems.',
                  border: 'border-sage',
                },
                {
                  num:    '03',
                  icon:   ICONS.building,
                  title:  'Corporates',
                  desc:   'No verified pipeline. Diversity hiring reduced to compliance theater.',
                  border: 'border-mist',
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  whileHover={reduce ? {} : { x: -3, y: -3, boxShadow: '4px 4px 0px #9C352B' }}
                  className={`p-8 bg-light border border-mist border-l-4 ${card.border} cursor-default`}
                  style={{ transition: 'box-shadow 0.12s ease, transform 0.12s ease' }}
                >
                  <LordIcon src={card.icon} trigger="hover" size={56} palette="onLight" className="mb-4" />
                  <span className="text-xs font-bold text-sage tracking-widest">{card.num}</span>
                  <h3 className="font-serif font-black text-2xl text-forest mt-1 mb-3">{card.title}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-16 p-8 bg-forest border-l-4 border-brick flex items-start gap-6"
            >
              <LordIcon src={ICONS.link} trigger="loop" size={48} palette="onDark" className="shrink-0 mt-1" />
              <p className="text-light text-xl md:text-2xl font-serif font-bold leading-snug">
                "So we started building the infrastructure that connects all three."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 3 — FOUNDATION
      ══════════════════════════════════════════ */}
      <section id="foundation" className="py-28 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Our Foundation</span>
            </motion.div>
            <SectionLine dark />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-light leading-tight tracking-tight mt-10 mb-4 max-w-2xl"
            >
              We're building<br />the foundation.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-mist text-lg font-light mb-16 max-w-xl">
              Abledots is India's social wellbeing infrastructure layer. Not a platform. A foundation.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-px bg-mist/10">
              {[
                { num: '01', icon: ICONS.shield,    title: 'Verified Talent Pipelines',           desc: 'Direct-sourced, assessed, graded—not through cold metrics, but genuine human evaluation.' },
                { num: '02', icon: ICONS.handshake, title: 'NGO Credibility Systems',             desc: 'Transparent tracking of impact, outcomes, and fund flow that builds real trust.' },
                { num: '03', icon: ICONS.building,  title: 'Corporate Inclusion Infrastructure', desc: 'Real hiring, not compliance theater. Access curated pipelines, not resumes.' },
                { num: '04', icon: ICONS.chart,     title: 'Transparent Impact Tracking',        desc: 'Measurable change at scale. Every outcome tracked, verified, and visible.' },
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={reduce ? {} : { backgroundColor: 'rgba(198,207,214,0.06)' }}
                  className="p-10 border border-mist/15 group"
                  style={{ transition: 'background-color 0.2s ease' }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <LordIcon src={pillar.icon} trigger="hover" size={44} palette="onDark" />
                    <span className="text-brick font-serif font-black text-4xl leading-none">{pillar.num}</span>
                  </div>
                  <h3 className="font-serif font-black text-xl text-light mb-3 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-mist text-sm leading-relaxed font-light">{pillar.desc}</p>
                  <motion.div
                    className="h-px bg-brick origin-left mt-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease, delay: idx * 0.15 + 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 4 — HOW IT WORKS
      ══════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-sage">The Process</span>
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
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-forest leading-tight tracking-tight mb-16 max-w-2xl"
            >
              From invisible<br />to unstoppable.
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-0 border border-forest/20">
              {[
                { num: '1', icon: ICONS.shield,     title: 'Verified',   desc: 'Talent profiles assessed through genuine human evaluation—not cold filters or algorithms.' },
                { num: '2', icon: ICONS.link,       title: 'Connected',  desc: 'Matched with opportunities that fit skills, values, and aspirations. Real connections.' },
                { num: '3', icon: ICONS.chart,      title: 'Tracked',    desc: 'Impact measured transparently. Organizations see real outcomes. Talent sees real progress.' },
                { num: '4', icon: ICONS.heart,      title: 'Thrives',    desc: 'When infrastructure works, humans flourish. Careers grow. Inclusion becomes systemic.' },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.12 }}
                  whileHover={reduce ? {} : { backgroundColor: '#0C2E2B', y: -4, zIndex: 2 }}
                  className="group p-8 md:p-10 border-r border-forest/20 last:border-r-0 relative"
                  style={{ transition: 'background-color 0.2s ease, transform 0.15s ease' }}
                >
                  <LordIcon
                    src={step.icon}
                    trigger="hover"
                    size={60}
                    palette="onLight"
                    className="mb-6 group-hover:[&_lord-icon]:filter"
                  />
                  <span className="font-serif font-black text-4xl text-brick block mb-3 leading-none">
                    {step.num}
                  </span>
                  <h3 className="font-serif font-black text-xl text-forest group-hover:text-light mb-3 transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-forest/60 group-hover:text-mist text-sm leading-relaxed font-light transition-colors duration-200">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 5 — ABLEHIRES
      ══════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Product</span>
            </motion.div>
            <SectionLine />

            <div className="mt-10 grid lg:grid-cols-2 gap-16 items-start">
              <motion.div variants={slideLeft}>
                <LordIcon src={ICONS.door} trigger="loop" size={80} palette="onLight" className="mb-6" />
                <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-forest leading-tight tracking-tight mb-6">
                  Every movement starts with one door.
                </h2>
                <p className="text-forest/70 text-lg font-light leading-relaxed mb-4">
                  Introducing AbleHires—our first product. A verified entry point where underserved talent builds real profiles, practices with AI, and accesses genuine opportunities.
                </p>
                <p className="text-forest/60 text-base font-light leading-relaxed mb-8">
                  We come to you. We're actively partnering with facilities across Bengaluru to discover, assess, and verify professionals. By the time talent enters AbleHires, they're assessed, graded, and match-ready.
                </p>
                <Link to="/ablehires" className="btn-primary">
                  Learn About AbleHires
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                    <path d="M2 8h12M8 2l6 6-6 6" />
                  </svg>
                </Link>
              </motion.div>

              {/* Assessment levels */}
              <motion.div variants={fadeUp} className="space-y-4">
                <p className="text-xs font-bold text-sage tracking-widest uppercase mb-6">
                  Assessment Framework
                </p>
                {[
                  { icon: ICONS.star,   level: 'Level 1', title: 'Qualified',   desc: 'Degree holder',                             pct: 72 },
                  { icon: ICONS.chart,  level: 'Level 2', title: 'Experienced', desc: 'Degree + Work history',                     pct: 46 },
                  { icon: ICONS.check,  level: 'Level 3', title: 'Ready',       desc: 'Degree + Experience + Career intent',  pct: 22 },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    whileHover={reduce ? {} : { x: -2, boxShadow: '3px 3px 0px #9C352B' }}
                    className="p-6 border border-mist border-l-4 border-l-brick"
                    style={{ transition: 'box-shadow 0.12s ease, transform 0.12s ease' }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <LordIcon src={item.icon} trigger="hover" size={36} palette="onLight" />
                        <div>
                          <span className="text-xs font-bold text-sage tracking-widest uppercase">{item.level}</span>
                          <h4 className="font-serif font-black text-lg text-forest leading-tight">{item.title}</h4>
                          <p className="text-forest/50 text-xs">{item.desc}</p>
                        </div>
                      </div>
                      <span className="font-serif font-black text-3xl text-brick">{item.pct}%</span>
                    </div>
                    <div className="h-1 bg-mist">
                      <motion.div
                        className="h-full bg-brick"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 1.4, delay: idx * 0.2, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
                <p className="text-forest/50 text-xs font-light mt-4 leading-relaxed">
                  By the time talent enters AbleHires, they're verified, assessed, and ready. Corporates don't get resumes. They get curated pipelines.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 6 — WHO IT'S FOR
      ══════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Audiences</span>
            </motion.div>
            <SectionLine dark />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-light leading-tight tracking-tight mb-16 mt-10 max-w-2xl"
            >
              Three audiences.<br />One system.
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num:   '01',
                  icon:  ICONS.users,
                  title: 'For Talent',
                  sub:   'Seeking clarity and opportunity',
                  desc:  'Show the world what you can do. Get matched with roles that value you. No algorithms, no luck—real verification, real connections.',
                  cta:   'Find your fit',
                  href:  '/ablehires',
                },
                {
                  num:   '02',
                  icon:  ICONS.handshake,
                  title: 'For NGOs & Facilities',
                  sub:   'Building futures together',
                  desc:  'Connect the talent you know with opportunities they deserve. Measure impact that matters. Build infrastructure that lasts.',
                  cta:   'Partner with us',
                  href:  '/partner',
                },
                {
                  num:   '03',
                  icon:  ICONS.building,
                  title: 'For Organizations',
                  sub:   'Building real inclusion',
                  desc:  'Access verified talent. Move beyond checking boxes. Create genuine impact. Build teams that reflect the world.',
                  cta:   "Let's talk",
                  href:  '/contact',
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.12 }}
                  whileHover={reduce ? {} : { y: -4, boxShadow: '4px 4px 0px #7A9591' }}
                  className="p-8 border border-mist/20 flex flex-col"
                  style={{ transition: 'box-shadow 0.12s ease, transform 0.12s ease' }}
                >
                  <LordIcon src={card.icon} trigger="hover" size={64} palette="onDark" className="mb-5" />
                  <span className="font-serif font-black text-brick text-3xl leading-none mb-3">
                    {card.num}
                  </span>
                  <h3 className="font-serif font-black text-xl text-light leading-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sage text-xs font-bold tracking-widest uppercase mb-4">
                    {card.sub}
                  </p>
                  <p className="text-mist text-sm font-light leading-relaxed mb-8 flex-grow">
                    {card.desc}
                  </p>
                  <Link
                    to={card.href}
                    className="inline-flex items-center gap-2 text-brick text-xs font-bold tracking-widest uppercase group"
                    style={{ transition: 'opacity 0.2s' }}
                  >
                    <span>{card.cta}</span>
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M1 7h12M7 1l6 6-6 6" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 7 — OPERATIONS (brick block)
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-brick overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
          >
            <div>
              {/* Live indicator */}
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                <div className="relative flex items-center justify-center w-4 h-4">
                  <motion.span
                    className="absolute inset-0 rounded-full bg-light/40"
                    animate={{ scale: [1, 1.8], opacity: [0.8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="w-2.5 h-2.5 rounded-full bg-light" />
                </div>
                <LordIcon src={ICONS.location} trigger="loop" size={28} colors="primary:#EEF1F3,secondary:#0C2E2B" />
                <span className="text-light/80 text-xs font-bold tracking-widest uppercase">Live Now</span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={reduce ? {} : { y: '110%' }}
                  whileInView={reduce ? {} : { y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease, delay: 0.1 }}
                  className="font-serif font-black text-5xl md:text-7xl lg:text-8xl text-light leading-none tracking-tight"
                >
                  Bengaluru.
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.h2
                  initial={reduce ? {} : { y: '110%' }}
                  whileInView={reduce ? {} : { y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease, delay: 0.25 }}
                  className="font-serif font-black text-5xl md:text-7xl lg:text-8xl text-light/60 leading-none tracking-tight"
                >
                  Active. Expanding.
                </motion.h2>
              </div>
            </div>

            <motion.div variants={fadeUp} className="max-w-sm">
              <LordIcon src={ICONS.map} trigger="loop" size={80} colors="primary:#EEF1F3,secondary:#0C2E2B" className="mb-4" />
              <p className="text-light/80 text-lg font-light leading-relaxed mb-6">
                We're on the ground—partnering with facilities to source, assess, and verify talent. Direct-to-source. Verified. Ready.
              </p>
              <p className="text-light text-xs font-bold tracking-widest uppercase border-t border-light/20 pt-4">
                City by city. Foundation by foundation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 8 — FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Get Involved</span>
            </motion.div>
            <SectionLine dark />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-light leading-tight tracking-tight mb-6 mt-10 max-w-2xl"
            >
              Be part of building the infrastructure.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-mist text-lg font-light mb-16 max-w-xl">
              Whether you're seeking opportunity, building community, or creating real change—there's a place for you here.
            </motion.p>

            <motion.div
              variants={stagger(0.1)}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                { icon: ICONS.rocket,    text: "I'm Seeking Opportunity", href: '/ablehires' },
                { icon: ICONS.handshake, text: "I'm an NGO / Facility",   href: '/partner' },
                { icon: ICONS.building,  text: "I'm a Corporate",          href: '/partner' },
              ].map((cta, idx) => (
                <motion.div key={idx} variants={fadeUp}>
                  <Link
                    to={cta.href}
                    className="block p-8 border border-mist/20 group"
                    style={{ transition: 'box-shadow 0.12s ease, transform 0.12s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '4px 4px 0px #9C352B'; e.currentTarget.style.transform = 'translate(-2px,-2px)' }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
                  >
                    <LordIcon src={cta.icon} trigger="hover" size={56} palette="onDark" className="mb-5" />
                    <span className="text-brick font-serif font-black text-4xl leading-none block mb-4">
                      0{idx + 1}
                    </span>
                    <p className="text-light font-bold text-base mb-3 leading-snug">{cta.text}</p>
                    <span className="text-sage text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 group-hover:text-brick transition-colors duration-200">
                      Get started
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                        <path d="M1 6h10M6 1l5 5-5 5" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact info */}
            <motion.div
              variants={fadeUp}
              className="mt-16 pt-8 border-t border-mist/15 flex flex-col sm:flex-row gap-6 sm:items-center"
            >
              <span className="text-mist text-sm font-light">Questions? Reach out directly:</span>
              <a href="mailto:abledots.official@gmail.com" className="text-light font-bold text-sm hover:text-brick transition-colors duration-200 flex items-center gap-2">
                <LordIcon src={ICONS.email} trigger="hover" size={20} palette="onDark" />
                abledots.official@gmail.com
              </a>
              <a href="tel:+919591562286" className="text-light font-bold text-sm hover:text-brick transition-colors duration-200 flex items-center gap-2">
                <LordIcon src={ICONS.phone} trigger="hover" size={20} palette="onDark" />
                +91 95915 62286
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FooterNew />
    </div>
  )
}
