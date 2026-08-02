<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  align: { type: String, default: 'center' },
})
</script>

<template>
  <header class="section-title" :class="`section-title--${align}`">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
  </header>
</template>

<style scoped>
.section-title { max-width:720px; margin:0 auto clamp(2rem,4vw,3.5rem); }
.section-title--left { margin-inline:0; text-align:left; }
.section-title--center { text-align:center; }
.eyebrow { color:var(--color-teal); font-size:.78rem; font-weight:800; letter-spacing:.18em; margin-bottom:.65rem; }
h2 { font-size:var(--fs-h2); color:var(--color-teal-dark); line-height:1.2; }
.subtitle { margin-top:1rem; color:var(--color-text-light); font-size:clamp(1rem,1.5vw,1.125rem); }
</style>
