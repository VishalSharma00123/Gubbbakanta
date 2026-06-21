import { SiteHeader } from './SiteHeader'
import { SiteHero } from './SiteHero'
import { SiteAbout } from './SiteAbout'
import { SitePlacesNearby } from './SitePlacesNearby'
import { SiteRoomsTariff } from './SiteRoomsTariff'
import { SiteGallery } from './SiteGallery'
import { SiteContact } from './SiteContact'
import { SiteFooter } from './SiteFooter'
import { useAnchorScroll } from './scrollToSection'

export function SitePage() {
  useAnchorScroll()

  return (
    <div className="min-h-svh bg-canvas text-ink antialiased [text-rendering:optimizeLegibility]">
      <SiteHeader />
      <main>
        <SiteHero />
        <SiteAbout />
        <SitePlacesNearby />
        <SiteRoomsTariff />
        <SiteGallery />
        <SiteContact />
      </main>
      <SiteFooter />
    </div>
  )
}
