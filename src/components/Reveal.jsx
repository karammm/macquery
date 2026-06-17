import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
}) {
  const y = direction === 'up' ? 32 : direction === 'down' ? -32 : 0
  const x = direction === 'left' ? 32 : direction === 'right' ? -32 : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'left' || direction === 'right' ? 0 : y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { variants }
