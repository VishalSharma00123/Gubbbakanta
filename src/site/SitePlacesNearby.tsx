import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'
import { site } from './siteContent'

const placeCardClass =
  'group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:border-forest/30 motion-safe:hover:bg-surface-warm/50 motion-safe:hover:shadow-[0_16px_48px_-24px_rgb(26_36_24_/_0.22)] motion-reduce:transition-none motion-reduce:hover:translate-none'

export function SitePlacesNearby() {
  const { places } = site

  return (
    <section
      id="places"
      className="border-t border-line bg-surface-warm/50 px-4 pt-section-top pb-section sm:px-6 md:px-10"
      aria-labelledby="places-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="places-heading"
          eyebrow={places.eyebrow}
          title={places.title}
          intro={places.intro}
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {places.items.map((place, index) => (
            <FadeIn key={place.name} delay={index * 0.06} className="h-full">
              <article className={placeCardClass}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-medium leading-snug text-ink transition-colors duration-300 group-hover:text-forest-deep">
                    {place.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold tracking-wide text-forest transition-[background-color,color] duration-300 group-hover:bg-forest group-hover:text-canvas">
                    {place.distance}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted transition-colors duration-300 group-hover:text-ink-muted/90 sm:text-base">
                  {place.note}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
