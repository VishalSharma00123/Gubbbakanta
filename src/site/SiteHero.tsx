import { motion } from 'framer-motion'
import { site } from './siteContent'

const heroImage = '/images/hero-jog-falls.png'

export function SiteHero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-black"
      aria-label="Home"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jog Falls — majestic waterfall near Gubbikantha Farm Homestay, Shimoga"
          className="h-full w-full object-cover object-[center_45%] sm:object-[center_40%]"
          fetchPriority="high"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-black/90 via-black/55 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-5xl bg-gradient-to-r from-black/60 via-black/25 to-transparent sm:w-[78%]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-[max(3rem,env(safe-area-inset-bottom,0px)+2rem)] pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:px-6 sm:pb-20 md:px-10 md:pb-24 md:pt-40 lg:pt-44">
        <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 inline-block max-w-full rounded-full border border-white/25 bg-black/70 px-4 py-2 text-xs font-semibold uppercase leading-relaxed tracking-[0.22em] text-white shadow-[0_2px_12px_rgb(0_0_0_/_0.45)] backdrop-blur-md sm:mb-5 sm:px-5 sm:text-[0.8rem] sm:tracking-[0.28em]"
        >
          {site.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="font-display max-w-5xl text-balance font-medium text-[clamp(2.5rem,9vw,5.75rem)] leading-[1.02] tracking-[-0.02em] text-white [text-shadow:0_2px_4px_rgb(0_0_0_/_0.85),0_4px_32px_rgb(0_0_0_/_0.65)] sm:text-[clamp(2.85rem,7.25vw,5.75rem)] sm:leading-[1.01]"
        >
          {site.hero.title.split('\n').map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-base font-normal leading-[1.75] tracking-[0.01em] text-white/95 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.9),0_2px_16px_rgb(0_0_0_/_0.7)] sm:mt-9 sm:text-lg sm:leading-[1.72] md:mt-10 md:text-xl md:leading-[1.68]"
        >
          {site.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <a
            href="#contact"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-canvas px-9 py-4 text-sm font-medium tracking-wide text-forest-deep transition-[transform,background-color,box-shadow] duration-300 hover:bg-surface-warm hover:shadow-[0_8px_32px_-12px_rgb(0_0_0_/_0.35)] active:scale-[0.98] sm:w-auto sm:min-h-0 sm:px-10 sm:text-base"
          >
            {site.hero.primaryCta}
          </a>
          <a
            href="#rooms"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/70 bg-black/55 px-9 py-4 text-sm font-medium tracking-wide text-white shadow-[0_4px_20px_rgb(0_0_0_/_0.35)] backdrop-blur-md transition-[border-color,background-color] duration-300 hover:border-white hover:bg-black/70 active:scale-[0.98] sm:w-auto sm:min-h-0 sm:px-10 sm:text-base"
          >
            {site.hero.secondaryCta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 hidden text-sm font-medium uppercase tracking-[0.22em] text-white/80 [text-shadow:0_1px_4px_rgb(0_0_0_/_0.8)] lg:mt-16 lg:block"
          aria-hidden
        >
          Scroll
        </motion.div>
        </div>
      </div>
    </section>
  )
}
