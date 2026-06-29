import { CheckCircle, Leaf, Drop, Recycle, Flask, ArrowUpRight } from '@phosphor-icons/react'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'
import CTAButton from './ui/CTAButton'

// Photos produit : déposez vos images dans public/products/
// (voir public/products/README.md). En leur absence, un dégradé vert s'affiche en repli.
const IMG_5L = '/products/5l.jpeg'
const IMG_1L = '/products/1l.jpeg'

const BENEFITS = [
  {
    title: 'Élimine le miellat',
    text: 'Débarrasse le feuillage des sécrétions collantes laissées par les ravageurs.',
  },
  {
    title: 'Nettoie les dépôts',
    text: 'Dissout poussières, suies et résidus qui bloquent la lumière.',
  },
  {
    title: 'Effet mouillant',
    text: 'Améliore l’adhérence et l’efficacité de vos autres traitements.',
  },
]

const FORMULA = [
  { icon: Leaf, label: 'Base végétale' },
  { icon: Drop, label: 'Sans colorant' },
  { icon: Recycle, label: 'Biodégradable' },
  { icon: Flask, label: 'Concentrée' },
]

export default function Products() {
  return (
    <section id="produits" className="relative py-24 lg:py-32">
      <div className="container-edge">
        <div className="max-w-2xl">
          <Reveal>
            <SectionTag>Gamme SAVO-AGRI</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl">
              <span className="font-light text-ink">Le </span>
              <span className="font-semibold italic text-gradient">savon noir agricole</span>
              <span className="font-light text-ink"> à l’huile d’olive.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink/65">
              SAVO-AGRI nettoie le feuillage en profondeur : il élimine le miellat, dissout les
              dépôts et favorise une photosynthèse optimale, pour des traitements plus efficaces.
              Une formule concentrée, végétale et biodégradable.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {/* Produit phare — SAVO-AGRI 5 L */}
          <Reveal className="lg:col-span-4 lg:row-span-2">
            <div className="group relative h-full min-h-[24rem] overflow-hidden rounded-[2rem] bg-forest-900 shadow-card">
              <img
                src={IMG_5L}
                alt="SAVO-AGRI 5 litres — savon noir agricole à l’huile d’olive"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/70 to-forest-900/10" />
              <div className="relative flex h-full flex-col justify-end p-7 text-cream sm:p-9">
                <span className="w-max rounded-full border border-cream/25 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/90 backdrop-blur-sm">
                  Savon noir agricole
                </span>
                <h3 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">SAVO-AGRI</h3>
                <p className="mt-2 text-cream/80">À l’huile d’olive — formule concentrée</p>
                <p className="mt-4 max-w-md leading-relaxed text-cream/70">
                  Des feuilles propres, une photosynthèse optimale et des traitements plus
                  efficaces.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {BENEFITS.map((b) => (
                    <span
                      key={b.title}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-cream/90 ring-1 ring-cream/15 backdrop-blur-sm"
                    >
                      <CheckCircle size={14} weight="fill" className="text-leaf-300" />
                      {b.title}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="group/link mt-6 inline-flex w-max items-center gap-2 text-sm font-semibold text-leaf-300 transition-colors hover:text-leaf-100"
                >
                  Demander ce produit
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-500 ease-spring group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Format 1 L */}
          <Reveal delay={0.05} className="lg:col-span-2">
            <div className="group relative h-full min-h-[12rem] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-forest-700 to-forest-800 shadow-soft">
              <img
                src={IMG_1L}
                alt="SAVO-AGRI 1 litre"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/10 to-transparent" />
              <div className="relative flex h-full items-end justify-between gap-2 p-5 text-cream">
                <span className="font-display text-lg font-semibold">Format 1 L</span>
                <span className="rounded-full bg-cream/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  Petites surfaces
                </span>
              </div>
            </div>
          </Reveal>

          {/* La formule */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-[1.75rem] bg-white p-6 shadow-soft ring-1 ring-forest-900/5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                La formule
              </span>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {FORMULA.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-leaf-100 text-forest-600">
                      <f.icon size={18} weight="duotone" />
                    </div>
                    <span className="text-sm font-medium text-ink/80">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Bénéfices */}
          <Reveal delay={0.12} className="lg:col-span-3">
            <div className="h-full rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-forest-900/5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-ink">Pourquoi ça marche</h3>
                <span className="flex-none rounded-full bg-forest-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest-600">
                  Made in Algeria
                </span>
              </div>
              <ul className="mt-5 space-y-4">
                {BENEFITS.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <CheckCircle size={22} weight="duotone" className="mt-0.5 flex-none text-leaf-500" />
                    <div>
                      <div className="font-semibold text-ink">{b.title}</div>
                      <p className="text-sm leading-relaxed text-ink/60">{b.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.14} className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-forest-600 p-7 text-cream sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-leaf-400/30 blur-2xl" />
              <div className="relative flex h-full flex-col">
                <h3 className="font-display text-2xl font-semibold leading-snug">
                  Besoin de SAVO-AGRI en volume&nbsp;?
                </h3>
                <p className="mt-3 max-w-sm text-cream/75">
                  Disponible en 1 L et 5 L. Nos conseillers vous orientent vers le dosage adapté à
                  vos arbres et vos cultures.
                </p>
                <div className="mt-6">
                  <CTAButton href="#contact" variant="light" icon={ArrowUpRight}>
                    Demander un devis
                  </CTAButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
