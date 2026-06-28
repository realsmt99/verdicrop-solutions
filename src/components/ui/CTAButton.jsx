import { ArrowUpRight } from '@phosphor-icons/react'

const VARIANTS = {
  primary: 'bg-forest-600 text-cream hover:bg-forest-700 shadow-soft',
  ghost: 'bg-white/70 text-forest-700 ring-1 ring-forest-900/10 hover:bg-white backdrop-blur-sm',
  light: 'bg-cream text-forest-700 hover:bg-white shadow-soft',
}

const ICON_WRAP = {
  primary: 'bg-cream/20 text-cream',
  ghost: 'bg-forest-600/10 text-forest-700',
  light: 'bg-forest-600/10 text-forest-700',
}

export default function CTAButton({
  children,
  href = '#',
  variant = 'primary',
  icon: Icon = ArrowUpRight,
  className = '',
  ...props
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold transition-all duration-500 ease-spring active:scale-[0.98] ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${ICON_WRAP[variant]}`}
      >
        <Icon size={17} weight="bold" />
      </span>
    </a>
  )
}
