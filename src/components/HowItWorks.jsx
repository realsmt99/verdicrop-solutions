import { MagnifyingGlass, Flask, Drop, ShieldCheck } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import SectionTag from './ui/SectionTag'

const EASE = [0.16, 1, 0.3, 1]

const STEPS = [
  {
    icon: MagnifyingGlass,
    num: '01',
    title: 'Diagnostic',
    text: 'Nous analysons l’état de vos arbres, vos cultures et la pression des ravageurs.',
  },
  {
    icon: Flask,
    num: '02',
    title: 'Préparation',
    text: 'Nous dosons la solution naturelle adaptée à vos besoins et à votre saison.',
  },
  {
    icon: Drop,
    num: '03',
    title: 'Application',
    text: 'Pulvérisation ciblée et homogène qui nettoie le feuillage et protège la plante.',
  },
  {
    icon: ShieldCheck,
    num: '04',
    title: 'Protection durable',
    text: 'Un suivi régulier garantit des résultats sur la durée, récolte après récolte.',
  },
]

export default function HowItWorks() {
  return (
    <section id="procede" className="relative overflow-hidden bg-forest-900 py-24 text-cream lg:py-32">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-leaf-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-marine-500/20 blur-3xl" />

      <div className="container-edge relative">
        <div className="max-w-2xl">
          <SectionTag dark>Comment ça marche</SectionTag>
          <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl">
            <span className="font-light text-cream">Un procédé simple, </span>
            <span className="font-semibold italic text-leaf-300">en quatre étapes</span>
            <span className="font-light text-cream">.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/65">
            De l’analyse à la protection durable, nous vous accompagnons à chaque étape pour des
            cultures saines et préservées.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent lg:block" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className="relative"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf-500 text-forest-900 shadow-glow">
                <s.icon size={26} weight="bold" />
              </div>
              <div className="mt-6 font-display text-5xl font-light text-cream/15">{s.num}</div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-cream">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-cream/60">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
