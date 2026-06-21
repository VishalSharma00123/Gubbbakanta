import { FadeIn } from './FadeIn'

type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: string
  intro?: string
  align?: 'center' | 'left'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'

  return (
    <FadeIn className={alignClass}>
      <p className="text-xs font-medium uppercase tracking-[0.26em] text-forest sm:text-[0.8rem] sm:tracking-[0.28em]">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display mt-4 font-medium text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-ink sm:mt-5 sm:leading-[1.06]"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:mt-6 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </FadeIn>
  )
}
