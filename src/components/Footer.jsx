import { FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'
import Logo from './Logo'

const NAV = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Produits', href: '#produits' },
  { label: 'Procédé', href: '#procede' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Contact', href: '#contact' },
]

const PRODUCTS = ['PuriClean Arbre', 'ProtectShield Bio', 'NutriLeaf', 'TerraVita']

const SOCIALS = [
  { icon: FacebookLogo, label: 'Facebook' },
  { icon: InstagramLogo, label: 'Instagram' },
  { icon: LinkedinLogo, label: 'LinkedIn' },
  { icon: WhatsappLogo, label: 'WhatsApp' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-forest-900 text-cream">
      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-leaf-500/10 blur-3xl" />

      <div className="container-edge relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm leading-relaxed text-cream/60">
              Cultivez la pureté, récoltez la santé. Des traitements d’origine naturelle pour des
              arbres propres et des cultures durablement protégées.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream transition-all duration-500 ease-spring hover:-translate-y-1 hover:bg-leaf-500 hover:text-forest-900"
                >
                  <s.icon size={20} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-300">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((i) => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    className="text-cream/60 transition-colors hover:text-cream"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-300">
              Produits
            </h4>
            <ul className="mt-5 space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p}>
                  <a
                    href="#produits"
                    className="text-cream/60 transition-colors hover:text-cream"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-leaf-300">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-cream/60">
              <li>
                <a href="tel:+212500000000" className="transition-colors hover:text-cream">
                  +212 5 00 00 00 00
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@verdicrop.com"
                  className="transition-colors hover:text-cream"
                >
                  contact@verdicrop.com
                </a>
              </li>
              <li>Zone Agropole, Agadir — Maroc</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-7 text-sm text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} VerdiCrop Solutions. Tous droits réservés.</p>
          <p className="flex gap-5">
            <a href="#" className="transition-colors hover:text-cream">
              Mentions légales
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Confidentialité
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
