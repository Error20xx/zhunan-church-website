<script setup>
import { ref } from 'vue'
defineProps({ src: String, alt: String, eager: Boolean })
const failed = ref(false)
</script>

<template>
  <div class="image-frame" :class="{ 'image-frame--failed': failed }">
    <img v-if="!failed" :src="src" :alt="alt" :loading="eager ? 'eager' : 'lazy'" @error="failed = true" />
    <div v-else class="fallback" role="img" :aria-label="alt"><span>基督教竹南靈糧堂</span><small>{{ alt }}</small></div>
  </div>
</template>

<style scoped>
.image-frame,
.image-frame img {
  width: 100%;
  height: 100%;
}

.image-frame img {
  object-fit: cover;
}

.fallback {
  width: 100%;
  height: 100%;
  min-height: 180px;
  display: grid;
  place-content: center;
  gap: .4rem;
  text-align: center;
  color: var(--color-teal-dark);
  background: linear-gradient(135deg, var(--color-purple-light), var(--color-yellow-light));
  padding: 1rem;
}

.fallback span {
  font-size: 1.25rem;
  font-weight: 800;
}

.fallback small {
  color: var(--color-text-light);
}
</style>
