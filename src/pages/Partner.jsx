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

const facilityCards = [
  {
    num:   '01',
    icon:  ICONS.verified,
    title: 'What partnership means',
    items: [
      'We assess your trainees through our grading framework',
      'We verify their capabilities and career readiness',
      'We match them to corporate opportunities',
      'You get transparent outcome tracking',
    ],
  },
  {
    num:   '02',
    icon:  ICONS.clipboard,
    title: 'What we need from you',
    items: [
      'Access to your trained individuals',
      'Basic info: education, experience, career goals',
      'Support in the assessment process',
      'Commitment to tracking outcomes together',
    ],
  },
  {
    num:   '03',
    icon:  ICONS.growth,
    title: 'What you get',
    items: [
      'Free partnership—no fees',
      "Dashboard access to track talent's journey",
      'Connection to hiring corporates',
      'Provable impact data for funding',
    ],
  },
]

const corporateCards = [
  {
    num:   '01',
    icon:  ICONS.handshake,
    title: 'What partnership looks like',
    items: [
      'You share open roles and requirements',
      'We match you with verified, assessed talent',
      'You interview pre-vetted candidates—no resume screening',
      'You track inclusion outcomes through our dashboard',
    ],
  },
  {
    num:   '02',
    icon:  ICONS.chart,
    title: 'What you get',
    items: [
      'Access to curated talent pipeline',
      'Pre-assessed candidates—save screening time',
      'Real diversity hiring (not compliance theater)',
      'Impact tracking dashboard—show stakeholders real ROI',
    ],
  },
]

export default function Partner() {
  const reduce = useReducedMotion()

  return (
    <div className="bg-light">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="min-h-screen bg-forest flex flex-col justify-end pt-40 pb-20 md:pb-28 overflow-hidden relative">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
          <LordIcon src={ICONS.handshake} trigger="loop" size={320} palette="onDark" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-px bg-brick" />
            <span className="text-xs font-bold tracking-widest uppercase text-sage">Partner With Us</span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={reduce ? {} : { y: '110%' }}
              animate={reduce ? {} : { y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.1 }}
              className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-light leading-none tracking-tight"
            >
              Help us build
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={reduce ? {} : { y: '110%' }}
              animate={reduce ? {} : { y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.22 }}
              className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brick leading-none tracking-tight"
            >
              the infrastructure.
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
            We're partnering with facilities, NGOs, and corporates who believe inclusion needs a new foundation.
          </motion.p>
        </div>
      </section>


      {/* ── FOR FACILITIES / NGOS ───────────────── */}
      <section className="py-28 md:py-40 bg-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.building} trigger="loop" size={28} palette="onLight" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">For Training Partners</span>
            </motion.div>
            <SectionLine />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-forest leading-tight tracking-tight mt-10 mb-6 max-w-2xl"
            >
              You've been building talent.<br />We're building systems to scale it.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-forest/70 text-lg font-light mb-16 max-w-2xl leading-relaxed">
              We're actively sourcing talent across India—starting with Bengaluru. If you work with capable individuals who have degrees, experience, or career ambition but lack visibility, we want to partner with you.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
              {facilityCards.map((card, idx) => (
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
                  <h3 className="font-serif font-black text-lg text-forest mb-5">{card.title}</h3>
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-forest/60 text-sm font-light leading-relaxed">
                        <span className="text-brick font-bold shrink-0 mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-10 p-8 bg-forest border-l-4 border-brick"
            >
              <p className="text-light font-serif font-bold text-lg mb-1">
                This isn't a referral program.
              </p>
              <p className="text-mist text-sm font-light mb-4">
                This is systematic talent discovery and placement infrastructure. Current focus: Bengaluru. Expanding city by city.
              </p>
              <a
                href="mailto:abledots.official@gmail.com?subject=Sourcing Partner"
                className="btn-primary"
              >
                Become a Sourcing Partner
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── FOR CORPORATES ───────────────────────── */}
      <section className="py-28 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.office} trigger="loop" size={28} palette="onDark" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">For Hiring Teams</span>
            </motion.div>
            <SectionLine dark />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-light leading-tight tracking-tight mt-10 mb-6 max-w-2xl"
            >
              Real inclusion starts with real infrastructure.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-mist text-lg font-light mb-16 max-w-2xl leading-relaxed">
              Stop checking DEI boxes. Start building verified pipelines. AbleHires gives you access to talent that's been assessed, verified, and matched—before you even meet them.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-6">
              {corporateCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.07 }}
                  whileHover={reduce ? {} : { y: -4, boxShadow: '4px 4px 0px #7A9591' }}
                  className="p-8 border border-mist/20"
                  style={{ transition: 'box-shadow 0.12s ease, transform 0.12s ease' }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-brick font-serif font-black text-4xl leading-none">{card.num}</span>
                    <LordIcon src={card.icon} trigger="hover" size={40} palette="onDark" />
                  </div>
                  <h3 className="font-serif font-black text-lg text-light mb-5">{card.title}</h3>
                  <ul className="space-y-3">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-mist text-sm font-light leading-relaxed">
                        <span className="text-sage font-bold shrink-0 mt-0.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-10 p-8 border border-brick"
            >
              <div className="flex items-center gap-3 mb-2">
                <LordIcon src={ICONS.location} trigger="loop" size={20} colors="primary:#9C352B,secondary:#7A9591" />
                <p className="text-brick font-bold text-sm tracking-wide">Status: Bengaluru talent pool live</p>
              </div>
              <p className="text-light font-serif font-black text-xl mb-4">Expanding nationally. City by city.</p>
              <a
                href="mailto:abledots.official@gmail.com?subject=Corporate Partnership"
                className="btn-primary"
              >
                Partner With Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── CO-CREATION ──────────────────────────── */}
      <section className="py-28 md:py-40 bg-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.connection} trigger="loop" size={28} palette="onLight" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Building Together</span>
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
              className="font-serif font-black text-4xl md:text-5xl text-forest leading-tight tracking-tight mb-16"
            >
              Early partners aren't just users—<br />they're co-creators.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon:   ICONS.building,
                  title:  'For Facilities / NGOs',
                  points: [
                    'Free to partner—always',
                    'Co-building the assessment framework',
                    'Your feedback shapes how we verify and match',
                    'Transparent tracking of every outcome',
                  ],
                },
                {
                  icon:   ICONS.office,
                  title:  'For Corporates',
                  points: [
                    'Pilot partnerships available now',
                    'We refine matching based on your hiring outcomes',
                    'You help us define "verified and ready"',
                    'Long-term commitment to building real inclusion',
                  ],
                },
              ].map((group, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.07 }}
                  whileHover={reduce ? {} : { x: -3, y: -3, boxShadow: '4px 4px 0px #0C2E2B' }}
                  className="p-8 bg-light border border-forest/15"
                  style={{ transition: 'box-shadow 0.12s ease, transform 0.12s ease' }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <LordIcon src={group.icon} trigger="hover" size={40} palette="onLight" />
                    <h3 className="font-serif font-black text-xl text-forest">{group.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {group.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-forest/60 text-sm font-light leading-relaxed">
                        <span className="text-brick font-bold shrink-0">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
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
              className="font-serif font-black text-4xl md:text-6xl text-light leading-tight tracking-tight mb-10"
            >
              Ready to build this with us?
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:abledots.official@gmail.com?subject=NGO/Facility Partner"
                className="btn-outline"
              >
                I'm a Facility / NGO Partner
              </a>
              <a
                href="mailto:abledots.official@gmail.com?subject=Corporate Partner"
                className="btn-outline"
              >
                I'm a Corporate Partner
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 pt-6 border-t border-light/20"
            >
              <a href="mailto:abledots.official@gmail.com" className="text-light font-bold hover:text-mist transition-colors flex items-center gap-3">
                <LordIcon src={ICONS.email} trigger="hover" size={18} palette="onDark" />
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
