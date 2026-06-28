import { ShieldCheck, Leaf, Plant, ArrowUpRight } from '@phosphor-icons/react'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'
import CTAButton from './ui/CTAButton'

const FEATURE = {
  tag: 'Nettoyant foliaire',
  name: 'PuriClean Arbre',
  desc: 'Élimine poussières, suies et dépôts qui étouffent le feuillage. Vos arbres respirent à nouveau et retrouvent toute leur vigueur.',
  img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=80',
}

const PRODUCTS = [
  {
    icon: ShieldCheck,
    tag: 'Anti-ravageurs',
    name: 'ProtectShield Bio',
    desc: 'Une barrière naturelle qui empêche insectes et nuisibles de dévorer vos cultures.',
    span: 'lg:col-span-2',
  },
  {
    icon: Leaf,
    tag: 'Soin foliaire',
    name: 'NutriLeaf',
    desc: 'Fortifie les feuilles et renforce les défenses naturelles de la plante.',
    span: 'lg:col-span-2',
  },
  {
    icon: Plant,
    tag: 'Fertilisant naturel',
    name: 'TerraVita',
    desc: 'Nourrit le sol et stimule une croissance vigoureuse, sans chimie agressive ni résidus.',
    span: 'lg:col-span-3',
  },
]

export default function Products() {
  return (
    <section id="produits" className="relative py-24 lg:py-32">
      <div className="container-edge">
        <div className="max-w-2xl">
          <Reveal>
            <SectionTag>Produits &amp; traitements</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl">
              <span className="font-light text-ink">Une gamme complète pour des </span>
              <span className="font-semibold italic text-gradient">arbres propres</span>
              <span className="font-light text-ink"> et protégés.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink/65">
              Chaque traitement est formulé à partir d’ingrédients naturels, pensés pour agir en
              synergie : nettoyer, protéger, nourrir.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          <Reveal className="lg:col-span-4 lg:row-span-2">
            <div className="group relative h-full min-h-[22rem] overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={FEATURE.img}
                alt="Champ verdoyant et sain au lever du jour"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/65 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7 text-cream sm:p-9">
                <span className="w-max rounded-full border border-cream/25 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/90 backdrop-blur-sm">
                  {FEATURE.tag}
                </span>
                <h3 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                  {FEATURE.name}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-cream/75">{FEATURE.desc}</p>
                <a
                  href="#contact"
                  className="group/link mt-5 inline-flex w-max items-center gap-2 text-sm font-semibold text-leaf-300 transition-colors hover:text-leaf-100"
                >
                  En savoir plus
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-500 ease-spring group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </Reveal>

          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className={p.span}>
              <div className="group h-full rounded-[1.75rem] bg-white p-7 shadow-soft ring-1 ring-forest-900/5 transition-all duration-500 ease-spring hover:-translate-y-1.5 hover:shadow-card">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-forest-600 transition-colors duration-500 group-hover:bg-forest-600 group-hover:text-cream">
                  <p.icon size={24} weight="duotone" />
                </div>
                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
                  {p.tag}
                </span>
                <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.desc}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.12} className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-forest-600 p-7 text-cream sm:p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-leaf-400/30 blur-2xl" />
              <div className="relative flex h-full flex-col">
                <h3 className="font-display text-2xl font-semibold leading-snug">
                  Un programme sur-mesure pour votre exploitation&nbsp;?
                </h3>
                <p className="mt-3 max-w-sm text-cream/75">
                  Nos agronomes établissent un plan de traitement adapté à vos arbres, votre sol et
                  votre saison.
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
