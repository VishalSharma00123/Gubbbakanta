import { FadeIn } from './FadeIn'
import { SectionHeading } from './SectionHeading'
import { site } from './siteContent'

const spanClasses = {
  large: 'sm:col-span-2 sm:row-span-2',
  medium: 'sm:col-span-1 sm:row-span-1',
  small: 'sm:col-span-1 sm:row-span-1',
} as const

export function SiteGallery() {
  const { gallery } = site

  return (
    <section
      id="gallery"
      className="border-t border-line bg-surface-warm/50 px-4 pt-section-top pb-section sm:px-6 md:px-10"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="gallery-heading"
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          intro={gallery.intro}
        />

        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {gallery.images.map((image, index) => (
            <FadeIn
              key={image.src}
              delay={index * 0.07}
              className={`group overflow-hidden rounded-xl ${spanClasses[image.span]}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-line sm:aspect-auto sm:h-full sm:min-h-[220px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm font-medium text-canvas">{image.alt}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
