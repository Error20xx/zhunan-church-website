<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <div class="site-shell">
    <AppHeader />
    <main id="main-content">
      <RouterView />
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>
