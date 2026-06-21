import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { site } from './siteContent'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  const overHero = !scrolled && !open

  const docRef = typeof document !== 'undefined' ? document : null

  const mobileNavLayer =
    docRef &&
    createPortal(
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav-sheet"
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-canvas lg:hidden"
            style={{
              paddingTop: `calc(4.25rem + env(safe-area-inset-top, 0px))`,
              backgroundColor: '#f4f1ea',
            }}
          >
            <nav
              className="mx-auto flex max-h-[calc(100svh-5.5rem-env(safe-area-inset-top,0px)-env(safe-area-inset-bottom,0px))] max-w-7xl flex-col gap-1 overflow-y-auto overscroll-contain px-6 pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:px-8"
              aria-label="Mobile primary"
            >
              {site.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="min-h-[52px] border-b border-line bg-canvas py-3 font-display text-[clamp(1.75rem,5.5vw,2.5rem)] font-medium leading-snug text-ink sm:py-4"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-5 inline-flex min-h-[48px] w-full max-w-md items-center justify-center rounded-full bg-forest px-7 py-3.5 text-base font-medium tracking-wide text-canvas sm:w-auto"
                onClick={() => setOpen(false)}
              >
                Book now
              </motion.a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      docRef.body,
    )

  return (
    <header
      className={`fixed inset-x-0 top-0 pt-[env(safe-area-inset-top,0px)] transition-[background-color,box-shadow,border-color,z-index] duration-500 ${
        open ? 'z-[110]' : 'z-50'
      } ${
        scrolled || open
          ? 'border-b border-line/90 bg-canvas/92 shadow-[0_1px_0_0_rgb(216_223_208_/_0.6)] backdrop-blur-xl supports-[backdrop-filter]:bg-canvas/78'
          : 'border-b border-canvas/10 bg-gradient-to-b from-black/70 via-black/40 to-transparent shadow-[0_4px_24px_-4px_rgb(0_0_0_/_0.35)] backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:gap-6 sm:px-6 sm:py-4 md:px-10">
        <a
          href="#home"
          className={`font-display text-lg font-medium tracking-[-0.02em] transition-colors sm:text-xl md:text-[1.65rem] ${
            overHero
              ? 'text-canvas drop-shadow-[0_1px_4px_rgb(0_0_0_/_0.55)]'
              : 'text-ink'
          }`}
        >
          {site.shortName}
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex lg:gap-8 xl:gap-10"
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[0.875rem] tracking-wide transition-colors xl:text-[0.95rem] ${
                overHero
                  ? 'font-medium text-canvas drop-shadow-[0_1px_3px_rgb(0_0_0_/_0.6)] hover:text-canvas'
                  : 'font-normal text-ink-muted hover:text-ink'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full px-7 py-2.5 text-[0.95rem] font-medium tracking-wide transition-[transform,background-color,color,border-color] duration-300 active:scale-[0.98] ${
              overHero
                ? 'border border-canvas/70 bg-canvas/15 text-canvas shadow-[0_2px_12px_rgb(0_0_0_/_0.25)] backdrop-blur-sm hover:border-canvas hover:bg-canvas/25'
                : 'border border-transparent bg-forest text-canvas hover:bg-forest-deep'
            }`}
          >
            Book now
          </a>
        </div>

        <button
          type="button"
          className={`relative z-[60] flex size-11 shrink-0 items-center justify-center rounded-full border backdrop-blur-md lg:hidden ${
            overHero
              ? 'border-canvas/35 bg-forest-deep/25 text-canvas'
              : 'border-line bg-surface/85 text-ink'
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`block h-0.5 w-5 ${overHero && !open ? 'bg-canvas' : 'bg-ink'}`}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className={`block h-0.5 w-5 ${overHero && !open ? 'bg-canvas' : 'bg-ink'}`}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`block h-0.5 w-5 ${overHero && !open ? 'bg-canvas' : 'bg-ink'}`}
            />
          </span>
        </button>
      </div>

      {mobileNavLayer}
    </header>
  )
}
