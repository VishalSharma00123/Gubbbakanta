import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

type FadeInProps = HTMLMotionProps<'div'> & {
  delay?: number
}

export function FadeIn({ children, delay = 0, ...props }: FadeInProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: reduceMotion ? 0 : 0.85,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
