<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from './BaseButton.vue'
import MobileMenu from './MobileMenu.vue'
import logoUrl from '../assets/images/church-logo.png'

const route = useRoute()
const scrolled = ref(false)
const menuOpen = ref(false)
const logoFailed = ref(false)
//原Heaer
/*const links = [
  { label: '首頁', to: '/' }, { label: '關於我們', to: '/about' }, { label: '生命見證', to: '/testimonies' },
  { label: '活動照片', to: '/gallery' }, { label: '聚會資訊', to: '/#meetings' },
]*/
const links = [
  { label: '首頁', to: '/' }, { label: '見證故事', to: '/testimonies' },
]
const onScroll = () => { scrolled.value = window.scrollY > 30 }
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }) })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<template>
  <header class="app-header" :class="{ scrolled, open: menuOpen }">
    <div class="container header-inner">
      <RouterLink to="/" class="brand" aria-label="基督教竹南靈糧堂首頁">
        <img v-if="!logoFailed" :src="logoUrl" alt="" @error="logoFailed = true" />
        <span v-else class="logo-fallback" aria-hidden="true">希</span>
        <span class="brand-copy"><strong class="brand-name-zh">基督教竹南靈糧堂</strong>
          <span class="brand-name-en">Bread of Life Christian Church in Zhunan</span>
        </span>
      </RouterLink>
      <nav class="desktop-nav" aria-label="主選單">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</RouterLink>
      </nav>
      <BaseButton class="desktop-cta" to="/#meetings">參加聚會</BaseButton>
      <button type="button" class="menu-toggle" :aria-expanded="menuOpen" aria-controls="mobile-menu"
        :aria-label="menuOpen ? '關閉選單' : '開啟選單'" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
  <MobileMenu id="mobile-menu" :open="menuOpen" :links="links" @close="menuOpen = false" />
</template>

<style scoped>
.app-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  height: 76px;
  transition: background .25s ease, box-shadow .25s ease;
}

.app-header.scrolled,
.app-header.open {
  background: rgba(255, 251, 239, .9);
  box-shadow: 0 6px 24px rgba(20, 59, 75, .08);
  backdrop-filter: blur(14px);
}

.header-inner {
  display: flex;
  align-items: center;
  height: 100%;
  gap: clamp(1rem, 2vw, 2rem);
}

.brand {
  display: flex;
  align-items: center;
  gap: .65rem;
  min-width: 0;
  flex-shrink: 1;
  color: var(--color-teal-dark);
}

.brand img,
.logo-fallback {
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  object-fit: contain;
}

.brand-copy {
  display: flex;
  flex-direction: column;
  min-width: 0;
  line-height: 1.25;
}

.brand-name-zh {
  color: var(--color-teal-dark);
  font-size: 1.08rem;
  font-weight: 800;
  white-space: nowrap;
}

.brand-name-en {
  margin-top: .15rem;
  color: var(--color-teal-dark);
  font-size: .78rem;
  font-weight: 700;
  white-space: nowrap;
}

.logo-fallback {
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--color-yellow);
  font-weight: 900;
}

.desktop-nav {
  display: flex;
  justify-content: center;
  gap: clamp(.8rem, 1.5vw, 1.5rem);
  flex: 1;
}

.desktop-nav a {
  position: relative;
  min-height: 44px;
  display: grid;
  place-items: center;
  color: var(--color-teal-dark);
  font-size: .93rem;
  font-weight: 650;
  white-space: nowrap;
}

.desktop-nav a::after {
  content: '';
  position: absolute;
  bottom: 5px;
  width: 0;
  height: 2px;
  background: var(--color-purple);
  transition: width .2s;
}

.desktop-nav a:hover::after,
.desktop-nav a.router-link-active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  width: 46px;
  height: 46px;
  margin-left: auto;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, .55);
}

.menu-toggle span {
  display: block;
  width: 21px;
  height: 2px;
  margin: 4px auto;
  background: var(--color-teal-dark);
  transition: .2s;
}

.open .menu-toggle span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.open .menu-toggle span:nth-child(2) {
  opacity: 0;
}

.open .menu-toggle span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width:960px) {

  .app-header {
    height: 68px;
  }

  .header-inner {
    min-width: 0;
    gap: .75rem;
  }

  .desktop-nav,
  .desktop-cta {
    display: none;
  }

  .brand {
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .brand img,
  .logo-fallback {
    width: 38px;
    height: 38px;
    flex-basis: 38px;
  }

  .brand-name-zh {
    overflow: hidden;
    font-size: .95rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* 手機版隱藏較長的英文名稱 */
  .brand-name-en {
    display: none;
  }

  .menu-toggle {
    display: block;
    flex: 0 0 46px;
  }
}

@media (max-width: 480px) {
  .brand-name-zh {
    font-size: .88rem;
  }

  .header-inner {
    gap: .5rem;
  }
}
</style>
