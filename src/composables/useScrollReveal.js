import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(selector = '.reveal') {
  let observer

  onMounted(() => {
    const elements = document.querySelectorAll(selector)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' })
    elements.forEach((element) => observer.observe(element))
  })

  onUnmounted(() => observer?.disconnect())
}
