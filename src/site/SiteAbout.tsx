import { FadeIn } from './FadeIn'
import { site } from './siteContent'

const hoverCardClass =
  'rounded-xl border border-line bg-surface p-5 shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.65)] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:border-forest/30 motion-safe:hover:bg-surface-warm/40 motion-safe:hover:shadow-[0_16px_48px_-24px_rgb(26_36_24_/_0.2)] motion-reduce:transition-none motion-reduce:hover:translate-none'

export function SiteAbout() {
  const { about } = site

  return (
    <section
      id="about"
      className="border-t border-line bg-canvas px-4 pt-section-top pb-section sm:px-6 md:px-10"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-16">
          <FadeIn delay={0.1} className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-forest sm:text-[0.8rem] sm:tracking-[0.28em]">
              {about.eyebrow}
            </p>
            <h2
              id="about-heading"
              className="font-display mt-2 max-w-xl font-medium text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-ink sm:mt-3 sm:leading-[1.06]"
            >
              {about.title}
            </h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-muted sm:mt-5 sm:text-lg sm:leading-[1.75]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-4 sm:mt-auto sm:grid-cols-3 sm:gap-4 sm:pt-8 lg:pt-10">
              {about.highlights.map((item, index) => (
                <li key={item.title} className={`group ${hoverCardClass}`}>
                  <span className="font-display text-2xl font-medium text-forest/80 tabular-nums transition-colors duration-300 group-hover:text-forest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display mt-3 text-lg font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="relative lg:min-h-0">
            <div className="h-full min-h-[280px] overflow-hidden rounded-2xl shadow-[0_24px_64px_-24px_rgb(26_36_24_/_0.35)] ring-1 ring-line sm:min-h-[360px] lg:min-h-full">
              <img
                src={about.image}
                alt="Gubbikantha Farm Homestay building surrounded by lush green forest"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div
              className="pointer-events-none absolute -bottom-4 -left-4 -z-10 hidden h-full w-full rounded-2xl bg-sage/20 lg:block"
              aria-hidden
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
