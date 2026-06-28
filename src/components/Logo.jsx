export function LeafMark({ size = 34, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 36V21" stroke="#19542F" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M18.5 23C18.5 14.5 12.5 9 5 9C5 17.5 10.5 23 18.5 23Z"
        fill="#1F6B3B"
      />
      <path
        d="M21 20.5C21 11.5 27.5 6 35 6C35 15 29.5 20.5 21 20.5Z"
        fill="#7DBE3C"
      />
    </svg>
  )
}

export default function Logo({ className = '', light = false }) {
  return (
    <a
      href="#accueil"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="VerdiCrop Solutions — Accueil"
    >
      <span className="transition-transform duration-500 ease-spring group-hover:-rotate-6">
        <LeafMark />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[1.4rem] font-semibold tracking-tight">
          <span className={light ? 'text-cream' : 'text-forest-700'}>Verdi</span>
          <span className="text-leaf-500">Crop</span>
        </span>
        <span
          className={`mt-[3px] block text-[0.6rem] font-bold uppercase tracking-[0.42em] ${
            light ? 'text-cream/60' : 'text-gold-500'
          }`}
        >
          Solutions
        </span>
      </span>
    </a>
  )
}
