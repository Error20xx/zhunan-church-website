<script setup>
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const route = useRoute()
</script>

<template>
  <div class="site-shell">
    <AppHeader v-if="!route.meta.hideLayout" />

    <main id="main-content">
      <RouterView />
    </main>

    <AppFooter v-if="!route.meta.hideLayout" />

    <ScrollToTop v-if="!route.meta.hideLayout" />
  </div>
</template>