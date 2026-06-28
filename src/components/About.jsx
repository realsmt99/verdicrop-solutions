import { Drop, HeartHalf, Recycle } from '@phosphor-icons/react'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

const IMG_MAIN =
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80'
const IMG_SUB =
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=700&q=80'

const VALUES = [
  {
    icon: Drop,
    title: 'Pureté',
    text: 'Des formules naturelles qui nettoient sans agresser ni polluer.',
  },
  {
    icon: HeartHalf,
    title: 'Santé',
    text: 'Des cultures saines, des récoltes sans résidus nocifs.',
  },
  {
    icon: Recycle,
    title: 'Durabilité',
    text: 'Une protection respectueuse des sols et de la biodiversité.',
  },
]

export default function About() {
  return (
    <section id="apropos" className="relative py-24 lg:py-32">
      <div className="container-edge grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="bezel shadow-card">
            <div className="bezel-core overflow-hidden">
              <img
                src={IMG_MAIN}
                alt="Rangées de cultures verdoyantes et soignées"
                className="h-[24rem] w-full object-cover sm:h-[34rem]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="absolute -bottom-8 -right-4 hidden w-52 sm:block lg:w-60">
            <div className="bezel shadow-card">
              <div className="bezel-core overflow-hidden">
                <img
                  src={IMG_SUB}
                  alt="Jeune plant protégé tenu dans des mains"
                  className="h-40 w-full object-cover lg:h-48"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="absolute left-5 top-5 rounded-3xl bg-white/85 px-5 py-4 shadow-soft ring-1 ring-forest-900/5 backdrop-blur-xl">
            <div className="font-display text-3xl font-semibold text-forest-700">12 ans</div>
            <div className="text-xs text-ink/60">au service des vergers</div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <SectionTag>Qui sommes-nous</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl">
              <span className="font-light text-ink">Des racines </span>
              <span className="font-semibold italic text-gradient">naturelles</span>
              <span className="font-light text-ink">, une mission claire.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-lg leading-relaxed text-ink/70">
              VerdiCrop Solutions est née d’une conviction simple : il est possible de protéger
              les arbres et les cultures sans recourir à des produits agressifs. Nous développons
              des traitements d’origine naturelle qui nettoient le feuillage, éliminent les nuisibles
              et préviennent les attaques de ravageurs.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-ink/70">
              De l’oliveraie au verger, nous accompagnons les agriculteurs vers une production plus
              propre, plus saine et durablement rentable.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.2 + i * 0.08}>
                <div className="h-full rounded-[1.5rem] bg-white p-5 shadow-soft ring-1 ring-forest-900/5 transition-transform duration-500 ease-spring hover:-translate-y-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-50 text-forest-600">
                    <v.icon size={22} weight="duotone" />
                  </div>
                  <div className="mt-4 font-display text-lg font-semibold text-ink">
                    {v.title}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
