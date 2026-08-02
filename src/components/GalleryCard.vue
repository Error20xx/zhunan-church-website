<script setup>
import ImageWithFallback from './ImageWithFallback.vue'
defineProps({ item: { type: Object, required: true }, large: Boolean })
defineEmits(['open'])
</script>

<template>
  <button type="button" class="gallery-card" :class="{ 'gallery-card--large': large }"
    :aria-label="`放大查看：${item.title}`" @click="$emit('open', item)">
    <ImageWithFallback :src="item.image" :alt="item.title" />
    <span class="overlay">
      <span class="category">{{ item.category }}</span>
      <strong>{{ item.title }}</strong>
      <time>{{ item.date }}</time>
    </span>
  </button>
</template>

<style scoped>
.gallery-card {
  position: relative;
  display: block;
  width: 100%;
  min-height: 260px;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: var(--radius-lg);
  cursor: pointer;
  background: var(--color-purple-light);
  text-align: left;
}

.gallery-card--large {
  grid-row: span 2;
  min-height: 544px;
}

.gallery-card :deep(img) {
  transition: transform .6s ease;
}

.gallery-card:hover :deep(img),
.gallery-card:focus-visible :deep(img) {
  transform: scale(1.06);
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1.5rem;
  color: white;
  background: linear-gradient(0deg, rgba(20, 59, 75, .9), rgba(20, 59, 75, .05) 75%);
  opacity: 0;
  transition: opacity .3s ease;
}

.gallery-card:hover .overlay,
.gallery-card:focus-visible .overlay {
  opacity: 1;
}

.category {
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .05em;
}

strong {
  font-size: 1.2rem;
  margin: .3rem 0;
}

time {
  font-size: .82rem;
  opacity: .88;
}

@media (hover:none) {
  .overlay {
    opacity: 1;
  }
}

@media (max-width:767px) {

  .gallery-card,
  .gallery-card--large {
    min-height: 260px;
    grid-row: auto;
  }
}
</style>
