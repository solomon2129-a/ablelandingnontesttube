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

const features = [
  { num: '01', icon: ICONS.shield,    title: 'Your skills get verified',    desc: 'Actually assessed and vouched for—through genuine human evaluation, not cold filters.' },
  { num: '02', icon: ICONS.ai,        title: 'You practice with AI coaches', desc: 'Mock interviews, instant feedback, free and unlimited. Build confidence before you walk in.' },
  { num: '03', icon: ICONS.building,  title: 'Companies come to you',        desc: "They're accessing our verified talent pipeline—not reviewing 200 generic resumes." },
  { num: '04', icon: ICONS.star,      title: "You're talent, not a checkbox", desc: 'Real roles for real capability. No DEI theater. No box-ticking. Just work.' },
]

const steps = [
  { num: '01', icon: ICONS.clipboard, title: 'Build your verified profile',     desc: 'Your education, experience, and skills—all verified and vouched for.' },
  { num: '02', icon: ICONS.target,    title: 'Practice with AI',               desc: 'Mock interviews, instant feedback, unlimited practice. Free.' },
  { num: '03', icon: ICONS.rocket,    title: 'Get matched with opportunities',  desc: 'Real jobs from serious companies who want verified talent.' },
]

export default function AbleHires() {
  const reduce = useReducedMotion()

  return (
    <div className="bg-light">

      {/* ── HERO ─────────────────────────────────── */}
      <section className="min-h-screen bg-forest flex flex-col justify-end pt-40 pb-20 md:pb-28 overflow-hidden relative">
        {/* Decorative floating icon */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
          <LordIcon src={ICONS.door} trigger="loop" size={300} palette="onDark" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-8 h-px bg-brick" />
            <span className="text-xs font-bold tracking-widest uppercase text-sage">AbleHires</span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={reduce ? {} : { y: '110%' }}
              animate={reduce ? {} : { y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.1 }}
              className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-light leading-none tracking-tight"
            >
              You have the talent.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={reduce ? {} : { y: '110%' }}
              animate={reduce ? {} : { y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.22 }}
              className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight"
            >
              <span className="text-mist">The system doesn't</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={reduce ? {} : { y: '110%' }}
              animate={reduce ? {} : { y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.32 }}
              className="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brick leading-none tracking-tight"
            >
              have the door.
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, ease, delay: 0.55 }}
            className="h-px bg-mist/25 origin-left my-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.65 }}
            className="flex flex-col sm:flex-row sm:items-end gap-8"
          >
            <p className="text-mist text-lg font-light max-w-lg leading-relaxed">
              AbleHires is where underserved talent gets verified, trained, and visible to companies who are actually hiring.
            </p>
            <a
              href="mailto:abledots.official@gmail.com?subject=Join AbleHires"
              className="btn-primary shrink-0"
            >
              Join AbleHires
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M2 8h12M8 2l6 6-6 6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>


      {/* ── THE REALITY ──────────────────────────── */}
      <section className="py-28 md:py-40 bg-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.warning} trigger="loop" size={28} palette="onLight" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">The Reality</span>
            </motion.div>
            <SectionLine />

            <motion.div variants={slideLeft} className="mt-10 max-w-3xl space-y-6">
              <p className="font-serif font-black text-2xl md:text-3xl text-forest leading-snug">
                You've applied to 47 jobs. You've been ghosted by 39. You've been told "we'll keep you in mind" by all of them.
              </p>
              <p className="text-forest/70 text-xl font-light leading-relaxed">
                It's not your resume. It's not your skill.
              </p>
              <p className="text-forest/70 text-xl font-light leading-relaxed">
                It's that no one verified you. No one vouched for you. No one opened the door.
              </p>
              <p className="text-forest font-bold text-xl">Until now.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ── WHAT ABLEHIRES DOES ───────────────────── */}
      <section className="py-28 md:py-40 bg-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.search} trigger="loop" size={28} palette="onLight" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">What We Do</span>
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
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-forest leading-tight tracking-tight mb-16 max-w-2xl"
            >
              A place that actually sees you.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={reduce ? {} : { x: -3, y: -3, boxShadow: '4px 4px 0px #0C2E2B' }}
                  className="p-8 bg-light border border-forest/15"
                  style={{ transition: 'box-shadow 0.12s ease, transform 0.12s ease' }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-brick font-serif font-black text-4xl leading-none">{card.num}</span>
                    <LordIcon src={card.icon} trigger="hover" size={44} palette="onLight" />
                  </div>
                  <h3 className="font-serif font-black text-xl text-forest mb-3">{card.title}</h3>
                  <p className="text-forest/60 text-sm font-light leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── THREE STEPS ──────────────────────────── */}
      <section className="py-28 md:py-40 bg-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-xs font-bold tracking-widest uppercase text-sage">The Process</span>
            </motion.div>
            <SectionLine />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl text-forest leading-tight tracking-tight mt-10 mb-16"
            >
              Three steps. Zero barriers.
            </motion.h2>

            <div className="space-y-0 border border-mist">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={reduce ? {} : { paddingLeft: '2.5rem', backgroundColor: '#0C2E2B' }}
                  className="flex items-start gap-6 px-8 py-8 border-b border-mist last:border-b-0 group"
                  style={{ transition: 'padding-left 0.2s ease, background-color 0.2s ease' }}
                >
                  <span className="font-serif font-black text-4xl text-brick leading-none shrink-0 mt-1">{step.num}</span>
                  <LordIcon src={step.icon} trigger="hover" size={44} palette="onLight" className="shrink-0 mt-0.5 group-hover:[filter:invert(1)]" />
                  <div>
                    <h3 className="font-serif font-black text-xl text-forest group-hover:text-light transition-colors duration-200 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-forest/60 group-hover:text-mist text-sm font-light transition-colors duration-200">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── DIRECT-TO-SOURCE MODEL ───────────────── */}
      <section className="py-28 md:py-40 bg-forest">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.map} trigger="loop" size={28} palette="onDark" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Direct-to-Source Model</span>
            </motion.div>
            <SectionLine dark />

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-light leading-tight tracking-tight mt-10 mb-6 max-w-2xl"
            >
              We come to you.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-mist text-lg font-light mb-16 max-w-2xl leading-relaxed">
              Most platforms wait for you to apply. We don't. We're actively partnering with facilities across India—starting Bengaluru—to discover, assess, and verify professionals.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: ICONS.check, title: 'Level 1: Qualified',   desc: 'Degree holder', pct: 72 },
                { icon: ICONS.star,  title: 'Level 2: Experienced', desc: 'Degree + Work history', pct: 46 },
                { icon: ICONS.rocket,title: 'Level 3: Ready',        desc: 'Degree + Experience + Career intent', pct: 22 },
              ].map((level, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.08 }}
                  className="p-8 border border-mist/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-brick font-serif font-black text-5xl leading-none">
                      {level.pct}%
                    </span>
                    <LordIcon src={level.icon} trigger="hover" size={36} palette="onDark" />
                  </div>
                  <h3 className="font-serif font-black text-lg text-light mb-1">{level.title}</h3>
                  <p className="text-mist text-sm font-light mb-6">{level.desc}</p>
                  <div className="h-1 bg-mist/20">
                    <motion.div
                      className="h-full bg-brick"
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${level.pct}%` }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.9, delay: idx * 0.15, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              className="text-mist text-sm font-light mt-10 max-w-2xl leading-relaxed border-t border-mist/15 pt-6"
            >
              By the time talent enters AbleHires, they're assessed, graded, and match-ready. Corporates don't get resumes. They get curated pipelines.
            </motion.p>
          </motion.div>
        </div>
      </section>


      {/* ── IS THIS FOR YOU ──────────────────────── */}
      <section className="py-28 md:py-40 bg-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <LordIcon src={ICONS.users} trigger="loop" size={28} palette="onLight" />
              <span className="text-xs font-bold tracking-widest uppercase text-sage">Is This for You?</span>
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
              If any of these land, you belong here.
            </motion.h2>

            <div className="space-y-0 border border-forest/20 mb-10">
              {[
                "Overlooked because you don't \"fit the profile\"",
                "Told you're not experienced enough—even though you are",
                'Lost in WhatsApp groups trying to find opportunities',
                'Stuck applying to jobs that ghost you',
                'Ready for someone to actually see your talent',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={reduce ? {} : { backgroundColor: '#0C2E2B', paddingLeft: '2.5rem' }}
                  className="flex items-center gap-5 px-8 py-5 border-b border-forest/15 last:border-b-0 group"
                  style={{ transition: 'background-color 0.2s ease, padding-left 0.2s ease' }}
                >
                  <LordIcon src={ICONS.check} trigger="hover" size={24} palette="onLight" className="shrink-0 group-hover:opacity-0 absolute" />
                  <span className="text-brick font-bold text-sm shrink-0 group-hover:text-light transition-colors duration-200">✓</span>
                  <p className="text-forest group-hover:text-light font-medium transition-colors duration-200">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="font-serif font-black text-2xl text-forest">
              If you have skill, grit, and hunger—you belong here.
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
            <motion.div variants={fadeUp} className="mb-6">
              <LordIcon src={ICONS.door} trigger="loop" size={56} palette="onDark" />
            </motion.div>

            <motion.h2
              variants={slideLeft}
              className="font-serif font-black text-4xl md:text-6xl text-light leading-tight tracking-tight mb-6"
            >
              Your next opportunity is waiting.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-light/80 text-xl font-light mb-10">
              Join the AbleHires network. Get verified. Get visible. Get hired.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:abledots.official@gmail.com?subject=Join AbleHires"
                className="btn-outline"
              >
                Join AbleHires Now
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 pt-6 border-t border-light/20 flex items-center gap-3 text-light/70 text-sm"
            >
              <LordIcon src={ICONS.shield} trigger="hover" size={18} palette="onDark" />
              <span>Your data is yours. We verify you, we don't sell you.</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <FooterNew />
    </div>
  )
}
