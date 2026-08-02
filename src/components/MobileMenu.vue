<script setup>
import { onBeforeUnmount, watch } from 'vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({ open: Boolean, links: Array })
const emit = defineEmits(['close'])
watch(() => props.open, (open) => { document.body.style.overflow = open ? 'hidden' : '' }, { immediate: true })
onBeforeUnmount(() => { document.body.style.overflow = '' })
</script>

<template>
  <Transition name="menu">
    <div v-if="open" class="mobile-menu">
      <nav aria-label="手機版主選單">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" @click="emit('close')">{{ link.label }}
        </RouterLink>
      </nav>
      <BaseButton to="/#meetings" @click="emit('close')">參加聚會</BaseButton>
    </div>
  </Transition>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  inset: 72px 0 0;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem 1.5rem;
  background: rgba(255, 251, 239, .98);
  backdrop-filter: blur(14px);
}

nav {
  display: flex;
  flex-direction: column;
  width: min(100%, 420px);
  text-align: center;
}

nav a {
  padding: 1rem;
  border-bottom: 1px solid rgba(30, 82, 103, .1);
  color: var(--color-teal-dark);
  font-size: 1.15rem;
  font-weight: 700;
}

nav a.router-link-active {
  color: var(--color-purple);
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity .2s ease, transform .2s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
