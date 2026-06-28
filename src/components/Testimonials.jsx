import { Star, Quotes } from '@phosphor-icons/react'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

const STATS = [
  { value: '+1 200', label: 'Exploitations accompagnées' },
  { value: '98%', label: 'Cultures préservées' },
  { value: '−40%', label: 'Pertes de récolte évitées' },
  { value: '100%', label: 'Origine naturelle' },
]

const REVIEWS = [
  {
    name: 'Karim Benali',
    role: 'Arboriculteur · Région du Souss',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote:
      'Depuis que j’utilise VerdiCrop, mes oliviers sont visiblement plus sains et les ravageurs ont disparu. Mes récoltes n’ont jamais été aussi propres.',
  },
  {
    name: 'Sophie Martin',
    role: 'Productrice d’agrumes',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote:
      'Un accompagnement sérieux et des produits réellement naturels. La différence sur le feuillage s’est vue dès la première saison.',
  },
  {
    name: 'Ahmed Rachidi',
    role: 'Exploitant maraîcher',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote:
      'Enfin une solution efficace contre les nuisibles sans produits agressifs. Mes cultures sont protégées et la terre reste vivante.',
  },
]

export default function Testimonials() {
  return (
    <section id="temoignages" className="relative py-24 lg:py-32">
      <div className="container-edge">
        <Reveal className="relative z-10">
          <div className="bezel shadow-card">
            <div className="bezel-core grid grid-cols-2 gap-y-8 px-6 py-9 sm:px-10 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-2 text-center lg:px-6 ${
                    i < STATS.length - 1 ? 'lg:border-r lg:border-forest-900/10' : ''
                  }`}
                >
                  <div className="font-display text-4xl font-semibold text-forest-700 sm:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-ink/55">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-20 max-w-2xl">
          <Reveal>
            <SectionTag>Ils nous font confiance</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl">
              <span className="font-light text-ink">La parole à ceux qui </span>
              <span className="font-semibold italic text-gradient">cultivent</span>
              <span className="font-light text-ink"> chaque jour.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-forest-900/5 transition-transform duration-500 ease-spring hover:-translate-y-1.5">
                <Quotes size={34} weight="fill" className="text-leaf-300" />
                <blockquote className="mt-4 flex-1 text-[1.05rem] leading-relaxed text-ink/75">
                  « {r.quote} »
                </blockquote>
                <div className="mt-5 flex gap-0.5 text-gold-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} weight="fill" />
                  ))}
                </div>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-forest-900/5 pt-5">
                  <img
                    src={r.img}
                    alt={r.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-leaf-100"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-ink">{r.name}</div>
                    <div className="text-sm text-ink/55">{r.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
