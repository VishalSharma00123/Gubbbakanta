import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'
import { buildRoomWhatsAppUrl, formatInr, site } from './siteContent'

const roomCardClass =
  'group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:border-forest/30 motion-safe:hover:bg-surface-warm/40 motion-safe:hover:shadow-[0_16px_48px_-24px_rgb(26_36_24_/_0.2)] motion-reduce:transition-none motion-reduce:hover:translate-none sm:p-8'

function BookArrowIcon() {
  return (
    <svg
      aria-hidden
      className="size-4 transition-transform duration-300 group-hover/book:translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

type RoomCardProps = {
  numbers: string
  features: string
  originalPrice: number
  offerPrice: number
  originalExtraBed: number
  offerExtraBed: number
  offerBadge: string
}

function RoomCard({
  numbers,
  features,
  originalPrice,
  offerPrice,
  originalExtraBed,
  offerExtraBed,
  offerBadge,
}: RoomCardProps) {
  const whatsappUrl = buildRoomWhatsAppUrl(numbers, features)

  return (
    <article className={roomCardClass}>
      <span className="w-fit self-start rounded-full bg-forest px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase leading-tight tracking-wide text-canvas sm:px-3 sm:py-1 sm:text-xs">
        {offerBadge}
      </span>

      <h3 className="font-display mt-4 text-xl font-medium text-ink sm:text-2xl">{numbers}</h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-ink-muted">{features}</p>

      <div className="mt-6 border-t border-line pt-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
          Tariff (without food)
        </p>
        <div className="mt-2 flex flex-wrap items-end gap-3">
          <p className="font-display text-xl font-medium text-ink-muted/55 line-through decoration-ink-muted/45 sm:text-2xl">
            {formatInr(originalPrice)}
          </p>
          <p className="font-display text-3xl font-medium text-forest sm:text-4xl">
            {formatInr(offerPrice)}
          </p>
        </div>
        <p className="mt-3 text-sm text-ink-muted">
          Extra bed{' '}
          <span className="line-through decoration-ink-muted/45">{formatInr(originalExtraBed)}</span>{' '}
          <span className="font-medium text-forest">{formatInr(offerExtraBed)}</span> /-
        </p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="group/book mt-6 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-base font-medium text-canvas transition-[transform,background-color,box-shadow] duration-300 hover:bg-forest-deep hover:shadow-[0_8px_24px_-8px_rgb(42_74_31_/_0.45)] active:scale-[0.98] motion-reduce:active:scale-100"
      >
        Book
        <BookArrowIcon />
      </a>
    </article>
  )
}

export function SiteRoomsTariff() {
  const { rooms } = site

  return (
    <section
      id="rooms"
      className="border-t border-line bg-canvas px-4 pt-section-top pb-section sm:px-6 md:px-10"
      aria-labelledby="rooms-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="rooms-heading"
          eyebrow={rooms.eyebrow}
          title={rooms.title}
          intro={rooms.intro}
        />

        <FadeIn delay={0.1} className="mt-10 sm:mt-14">
          <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
            {rooms.tariffLabel}
          </h3>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {rooms.items.map((room) => (
              <RoomCard key={room.numbers} {...room} offerBadge={rooms.offerBadge} />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-10 rounded-xl border border-line bg-surface-warm/60 p-6 sm:mt-12 sm:p-8">
          <h3 className="font-display text-lg font-medium text-ink sm:text-xl">
            {rooms.food.label}
          </h3>
          <p className="mt-3 text-base text-ink-muted">
            {formatInr(rooms.food.price)} per person, per meal. {rooms.food.note}
          </p>
        </FadeIn>

        <FadeIn
          delay={0.25}
          className="relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-forest-deep via-[#243d1a] to-forest px-6 py-10 text-canvas shadow-[0_24px_64px_-28px_rgb(26_36_24_/_0.55)] ring-1 ring-canvas/10 sm:mt-12 sm:px-10 sm:py-12"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-canvas/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-sage/15 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <h3 className="font-display text-2xl font-medium text-canvas sm:text-3xl">
              {rooms.package.title}
            </h3>
            <p className="mt-5 font-display text-5xl font-semibold tracking-tight text-canvas [text-shadow:0_2px_16px_rgb(0_0_0_/_0.35)] sm:mt-6 sm:text-6xl">
              {formatInr(rooms.package.price)}
              <span className="ml-2 text-lg font-sans font-medium text-canvas/90 sm:text-xl">
                {rooms.package.per}
              </span>
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {rooms.package.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-canvas/95">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-canvas/85" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-base leading-relaxed text-canvas/90 sm:text-lg">
              {rooms.package.note}
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-canvas px-8 py-3.5 text-base font-semibold text-forest-deep shadow-[0_8px_24px_-8px_rgb(0_0_0_/_0.35)] transition-[transform,background-color,box-shadow] duration-300 hover:bg-surface-warm hover:shadow-[0_12px_32px_-8px_rgb(0_0_0_/_0.4)] active:scale-[0.98]"
            >
              Enquire about the package
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="mt-10 sm:mt-12">
          <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
            {rooms.booking.title}
          </h3>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {rooms.booking.steps.map((step, index) => (
              <li
                key={step.slice(0, 30)}
                className="flex gap-4 rounded-xl border border-line bg-surface p-5"
              >
                <span className="font-display text-2xl font-medium text-forest/70 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-base leading-relaxed text-ink-muted">{step}</p>
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>
    </section>
  )
}
