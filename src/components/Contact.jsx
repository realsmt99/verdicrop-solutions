import { useState } from 'react'
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  PaperPlaneTilt,
  CheckCircle,
} from '@phosphor-icons/react'
import Reveal from './ui/Reveal'
import SectionTag from './ui/SectionTag'

const DETAILS = [
  { icon: Phone, label: 'Téléphone', value: '+212 5 00 00 00 00', href: 'tel:+212500000000' },
  {
    icon: EnvelopeSimple,
    label: 'E-mail',
    value: 'contact@verdicrop.com',
    href: 'mailto:contact@verdicrop.com',
  },
  { icon: MapPin, label: 'Adresse', value: 'Zone Agropole, Agadir — Maroc' },
  { icon: Clock, label: 'Horaires', value: 'Lun – Ven · 8h30 – 18h00' },
]

const EMPTY = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (!form.name.trim()) er.name = 'Veuillez indiquer votre nom.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Adresse e-mail invalide.'
    if (!form.message.trim()) er.message = 'Votre message est vide.'
    if (Object.keys(er).length) {
      setErrors(er)
      return
    }
    setSent(true)
  }

  const inputClass = (field) =>
    `mt-2 w-full rounded-2xl border bg-cream/50 px-4 py-3 text-ink outline-none transition-all duration-300 placeholder:text-ink/35 focus:border-forest-500 focus:bg-white focus:ring-4 focus:ring-leaf-100 ${
      errors[field] ? 'border-red-300' : 'border-forest-900/10'
    }`

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container-edge grid gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <Reveal>
            <SectionTag>Contact</SectionTag>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl leading-[1.05] sm:text-5xl">
              <span className="font-light text-ink">Parlons de vos </span>
              <span className="font-semibold italic text-gradient">cultures</span>
              <span className="font-light text-ink">.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/65">
              Une question, un projet, un devis&nbsp;? Notre équipe vous répond sous 24h et vous
              propose un accompagnement adapté à votre exploitation.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {DETAILS.map((d, i) => (
              <Reveal key={d.label} delay={0.15 + i * 0.07}>
                <a
                  href={d.href || undefined}
                  className={`flex items-start gap-4 rounded-3xl bg-white p-5 shadow-soft ring-1 ring-forest-900/5 transition-transform duration-500 ease-spring ${
                    d.href ? 'hover:-translate-y-1' : ''
                  }`}
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-forest-50 text-forest-600">
                    <d.icon size={20} weight="duotone" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">
                      {d.label}
                    </div>
                    <div className="mt-1 text-sm font-medium text-ink/80">{d.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="bezel shadow-card">
            <div className="bezel-core p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <CheckCircle size={60} weight="duotone" className="text-leaf-500" />
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                    Message envoyé&nbsp;!
                  </h3>
                  <p className="mt-2 max-w-xs text-ink/60">
                    Merci {form.name.split(' ')[0]}, votre demande a bien été reçue. Notre équipe
                    vous recontacte très vite.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false)
                      setForm(EMPTY)
                    }}
                    className="mt-6 text-sm font-semibold text-forest-600 underline-offset-4 hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-ink/70">Nom complet</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={update}
                        placeholder="Votre nom"
                        className={inputClass('name')}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ink/70">Téléphone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={update}
                        placeholder="Optionnel"
                        className={inputClass('phone')}
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm font-medium text-ink/70">E-mail</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      placeholder="vous@exemple.com"
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="mt-5">
                    <label className="block text-sm font-medium text-ink/70">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={update}
                      placeholder="Parlez-nous de vos arbres, vos cultures, vos besoins…"
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="group mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-forest-600 py-4 text-sm font-semibold text-cream transition-all duration-500 ease-spring hover:bg-forest-700 active:scale-[0.98]"
                  >
                    Envoyer ma demande
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/20 transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <PaperPlaneTilt size={16} weight="bold" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
