import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export default function Reveal({
  children,
  delay = 0,
  y = 26,
  blur = true,
  duration = 0.8,
  className = '',
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
