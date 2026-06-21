import { site } from './siteContent'

export function SiteFooter() {
  const { contact, footer } = site

  return (
    <footer className="border-t border-line bg-surface-warm px-4 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] pt-14 sm:px-6 sm:pb-[max(3rem,env(safe-area-inset-bottom,0px))] sm:pt-16 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 sm:gap-12 md:flex-row md:justify-between md:gap-16">
        <div>
          <p className="font-display text-[1.65rem] font-medium tracking-[-0.02em] text-ink sm:text-[1.95rem]">
            {site.shortName}
          </p>
          <p className="mt-4 max-w-sm text-base font-normal leading-[1.75] text-ink-muted sm:mt-5 sm:text-lg">
            {site.tagline}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 md:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-ink-muted sm:text-[0.8rem]">
              Contact
            </p>
            <address className="mt-5 text-base not-italic leading-[1.8] text-ink sm:text-lg">
              {contact.address.line1}
              <br />
              {contact.address.line2}
              <br />
              Pin {contact.address.pin}
            </address>
            {contact.phones.map((phone) => (
              <p key={phone} className="mt-3 text-base text-ink sm:text-lg">
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-forest"
                >
                  {phone}
                </a>
              </p>
            ))}
            <p className="mt-2 text-base text-ink sm:text-lg">
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-forest"
              >
                {contact.email}
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-ink-muted sm:text-[0.8rem]">
              Follow
            </p>
            <ul className="mt-5 space-y-2.5">
              {footer.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base text-ink transition-colors hover:text-forest sm:text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-line pt-8 text-sm leading-relaxed text-ink-muted sm:mt-14 sm:gap-4 sm:pt-9 md:flex-row md:justify-between md:text-base">
        <p>{footer.legal}</p>
        <p>
          <a href="#home" className="transition-colors hover:text-ink">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  )
}
