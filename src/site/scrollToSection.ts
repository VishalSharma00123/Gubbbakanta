import { useEffect, useLayoutEffect } from 'react'

const FALLBACK_HEADER_HEIGHT = 72
const SETTLE_DELAYS_MS = [80, 250, 550, 1000]

function getHeaderOffset(): number {
  const header = document.querySelector('header')
  return header?.getBoundingClientRect().height ?? FALLBACK_HEADER_HEIGHT
}

function getTargetTop(target: HTMLElement): number {
  const rect = target.getBoundingClientRect()
  const sectionTop = rect.top + window.scrollY
  const headerOffset = getHeaderOffset()
  const top = sectionTop - headerOffset

  const maxTop = document.documentElement.scrollHeight - window.innerHeight
  return Math.min(Math.max(0, top), Math.max(0, maxTop))
}

function scrollToTarget(target: HTMLElement, behavior: ScrollBehavior): void {
  window.scrollTo({ top: getTargetTop(target), behavior })
}

export function scrollToSection(
  sectionId: string,
  behavior: ScrollBehavior = 'smooth',
): void {
  const id = sectionId.replace(/^#/, '')

  if (id === 'home') {
    window.scrollTo({ top: 0, behavior })
    return
  }

  const target = document.getElementById(id)
  if (!target) return

  scrollToTarget(target, behavior)

  for (const delay of SETTLE_DELAYS_MS) {
    window.setTimeout(() => {
      const settledTarget = document.getElementById(id)
      if (!settledTarget) return
      scrollToTarget(settledTarget, 'auto')
    }, delay)
  }
}

function scrollToCurrentHash(behavior: ScrollBehavior = 'auto'): void {
  const hash = window.location.hash.slice(1)
  if (!hash) return

  scrollToSection(hash, behavior)
}

function runScrollForLink(link: HTMLAnchorElement, id: string): void {
  const scroll = () => scrollToSection(id)

  // Mobile menu links close the sheet first — defer until layout settles.
  if (link.closest('#mobile-nav')) {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scroll)
    })
    return
  }

  scroll()
}

export function useAnchorScroll(): void {
  useLayoutEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) {
        return
      }

      const node = event.target
      const startEl =
        node instanceof Element
          ? node
          : node instanceof Node
            ? node.parentElement
            : null
      if (!startEl) return

      const link = startEl.closest('a[href^="#"]')
      if (!(link instanceof HTMLAnchorElement)) return

      const href = link.getAttribute('href')
      if (!href || href === '#') return

      const id = href.slice(1)
      if (!document.getElementById(id) && id !== 'home') return

      event.preventDefault()

      if (window.location.hash !== href) {
        window.history.pushState(null, '', href)
      }

      runScrollForLink(link, id)
    }

    const onHashChange = () => scrollToCurrentHash('smooth')

    document.addEventListener('click', onClick)
    window.addEventListener('hashchange', onHashChange)

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  useEffect(() => {
    const settle = () => scrollToCurrentHash('auto')

    settle()
    requestAnimationFrame(settle)

    window.addEventListener('load', settle)

    document.fonts?.ready?.then(settle)

    const onResize = () => {
      if (window.location.hash) settle()
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('load', settle)
      window.removeEventListener('resize', onResize)
    }
  }, [])
}
