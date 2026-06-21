import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'
import { whatsappNumber, site } from './siteContent'

export function SiteContact() {
  const { contact } = site

  return (
    <section
      id="contact"
      className="border-t border-line bg-canvas px-4 pt-section-top pb-section sm:px-6 md:px-10"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="contact-heading"
          eyebrow={contact.eyebrow}
          title={contact.title}
        />

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <FadeIn delay={0.1} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="font-display text-xl font-medium text-ink sm:text-2xl">
                {site.name}
              </h3>
              <address className="mt-5 text-base not-italic leading-relaxed text-ink-muted sm:text-lg">
                {contact.address.line1}
                <br />
                {contact.address.line2}
                <br />
                Pin {contact.address.pin}
              </address>

              <div className="mt-6 space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted">
                  Phone
                </p>
                {contact.phones.map((phone) => (
                  <p key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-base text-ink transition-colors hover:text-forest sm:text-lg"
                    >
                      {phone}
                    </a>
                  </p>
                ))}
              </div>

              <p className="mt-5">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-base text-ink transition-colors hover:text-forest sm:text-lg"
                >
                  {contact.email}
                </a>
              </p>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-forest px-6 py-3 text-base font-medium text-canvas transition-[transform,background-color] duration-300 hover:bg-forest-deep active:scale-[0.98]"
                >
                  WhatsApp us
                </a>
                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-base font-medium text-ink transition-[border-color,background-color] duration-300 hover:border-sage hover:bg-surface-warm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </FadeIn>

          <div className="grid h-full gap-6">
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-line bg-surface-warm/60 p-6 sm:p-8">
                <h3 className="font-display text-xl font-medium text-ink">
                  {contact.howToReach.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {contact.howToReach.body}
                </p>
                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-base font-medium text-forest transition-colors hover:text-forest-deep"
                >
                  View location on map →
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
                <h3 className="font-display text-xl font-medium text-ink">
                  Terms &amp; conditions
                </h3>
                <ul className="mt-5 space-y-3">
                  {contact.terms.map((term) => (
                    <li
                      key={term}
                      className="flex items-start gap-3 text-base text-ink-muted"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-earth"
                        aria-hidden
                      />
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
