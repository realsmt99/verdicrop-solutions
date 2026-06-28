import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import CTAButton from './ui/CTAButton'

const NAV = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Produits', href: '#produits' },
  { label: 'Procédé', href: '#procede' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Contact', href: '#contact' },
]

const EASE = [0.16, 1, 0.3, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-edge">
        <motion.nav
          initial={{ y: -28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
          className={`mt-4 flex items-center justify-between rounded-full py-2.5 pl-5 pr-3 transition-all duration-500 ease-spring ${
            scrolled
              ? 'bg-white/80 shadow-soft ring-1 ring-forest-900/5 backdrop-blur-xl'
              : 'bg-white/45 ring-1 ring-white/50 backdrop-blur-md'
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="link-underline text-sm font-medium text-forest-800/75 transition-colors hover:text-forest-800"
              >
                {i.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CTAButton href="#contact">Devis gratuit</CTAButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-forest-600 text-cream transition-colors hover:bg-forest-700 lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-cream transition-all duration-500 ease-spring ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded-full bg-cream transition-all duration-500 ease-spring ${
                  open ? 'bottom-1.5 -rotate-45' : 'bottom-0'
                }`}
              />
            </span>
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-edge flex min-h-[100dvh] flex-col justify-center gap-1.5 pb-16 pt-24">
              {NAV.map((i, idx) => (
                <motion.a
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + idx * 0.06, duration: 0.6, ease: EASE }}
                  className="border-b border-forest-900/5 py-3 font-display text-4xl font-light text-ink transition-colors hover:text-forest-600 sm:text-5xl"
                >
                  {i.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 + NAV.length * 0.06, duration: 0.6, ease: EASE }}
                className="mt-8"
              >
                <CTAButton href="#contact" onClick={() => setOpen(false)}>
                  Demander un devis gratuit
                </CTAButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
