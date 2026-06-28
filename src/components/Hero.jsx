import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, CaretDown } from '@phosphor-icons/react'
import SectionTag from './ui/SectionTag'
import CTAButton from './ui/CTAButton'
import { LeafMark } from './Logo'

const HERO_IMG =
  'https://images.unsplash.com/photo-1444392061186-9fc38f84f726?auto=format&fit=crop&w=1200&q=80'

const EASE = [0.16, 1, 0.3, 1]

const STATS = [
  { value: '100%', label: 'Biodégradable' },
  { value: '+1 200', label: 'Exploitations' },
  { value: '12 ans', label: 'D’expertise' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
}

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden mesh-cream">
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-leaf-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-marine-400/20 blur-3xl" />

      <div className="container-edge relative grid min-h-[100dvh] items-center gap-14 pb-24 pt-32 lg:grid-cols-12 lg:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-6"
        >
          <motion.div variants={item}>
            <SectionTag>Solutions agro-écologiques</SectionTag>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.6rem]"
          >
            <span className="font-light text-ink">Cultivez la </span>
            <span className="font-semibold text-forest-700">pureté</span>
            <span className="font-light text-ink">,</span>
            <br />
            <span className="font-light text-ink">récoltez la </span>
            <span className="italic text-gradient">santé</span>
            <span className="font-light text-ink">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink/70"
          >
            Nous concevons des traitements naturels qui nettoient vos arbres et protègent
            durablement vos cultures contre les ravageurs — pour des récoltes saines, sans
            résidus nocifs.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <CTAButton href="#produits" icon={ArrowRight}>
              Découvrir nos produits
            </CTAButton>
            <CTAButton href="#contact" variant="ghost">
              Nous contacter
            </CTAButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-7">
                <div>
                  <div className="font-display text-2xl font-semibold text-forest-700">
                    {s.value}
                  </div>
                  <div className="text-sm text-ink/55">{s.label}</div>
                </div>
                {i < STATS.length - 1 && <span className="h-9 w-px bg-forest-900/10" />}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
          className="relative lg:col-span-6 lg:pl-6"
        >
          <div className="bezel shadow-card">
            <div className="bezel-core overflow-hidden">
              <img
                src={HERO_IMG}
                alt="Verger entretenu baigné par la lumière du matin"
                className="h-[26rem] w-full object-cover sm:h-[32rem]"
                loading="eager"
              />
            </div>
          </div>

          <motion.div
            className="absolute -bottom-6 -left-3 w-56 rounded-[1.75rem] bg-white/85 p-5 shadow-card ring-1 ring-forest-900/5 backdrop-blur-xl sm:-left-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-100 text-forest-700">
                <ShieldCheck size={22} weight="duotone" />
              </div>
              <div>
                <div className="font-display text-2xl font-semibold text-forest-700">98%</div>
                <div className="text-xs text-ink/60">de cultures préservées</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-3 -top-6 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-cream text-center shadow-card ring-1 ring-forest-900/10 sm:-right-6"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          >
            <LeafMark size={24} />
            <span className="mt-1 text-[0.55rem] font-bold uppercase leading-tight tracking-[0.18em] text-forest-700">
              100%
              <br />
              Naturel
            </span>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#apropos"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/40 transition-colors hover:text-forest-600 lg:flex"
        aria-label="Faire défiler vers le bas"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Défiler</span>
        <CaretDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
