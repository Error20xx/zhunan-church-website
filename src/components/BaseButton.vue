<script setup>
defineProps({
  to: { type: [String, Object], default: '' },
  href: { type: String, default: '' },
  variant: { type: String, default: 'primary' },
})
</script>

<template>
  <RouterLink v-if="to" :to="to" class="base-button" :class="`base-button--${variant}`"><slot /></RouterLink>
  <a v-else-if="href" :href="href" class="base-button" :class="`base-button--${variant}`"><slot /></a>
  <button v-else type="button" class="base-button" :class="`base-button--${variant}`"><slot /></button>
</template>

<style scoped>
.base-button { display:inline-flex; align-items:center; justify-content:center; gap:.5rem; min-height:48px; padding:.75rem 1.4rem; border:1px solid transparent; border-radius:999px; font-weight:700; line-height:1; cursor:pointer; transition:transform .2s ease,box-shadow .2s ease,background .2s ease; }
.base-button:hover { transform:translateY(-2px); box-shadow:var(--shadow-md); }
.base-button:active { transform:translateY(0); }
.base-button--primary { background:var(--color-teal); color:white; }
.base-button--primary:hover { background:var(--color-teal-dark); }
.base-button--light { background:rgba(255,255,255,.82); color:var(--color-teal-dark); border-color:rgba(255,255,255,.9); }
.base-button--outline { color:var(--color-teal-dark); border-color:var(--color-teal); background:transparent; }
.base-button--outline:hover { background:rgba(30,82,103,.08); }
.base-button--text { padding-inline:.25rem; color:var(--color-teal); background:transparent; min-height:44px; }
</style>
