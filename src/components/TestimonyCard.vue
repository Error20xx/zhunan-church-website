<script setup>
import ImageWithFallback from './ImageWithFallback.vue'
defineProps({ testimony: { type: Object, required: true } })
</script>

<template>
  <article class="testimony-card">
    <RouterLink :to="`/testimonies/${testimony.id}`" class="image-link" :aria-label="`閱讀${testimony.title}`">
      <ImageWithFallback :src="testimony.image" :alt="`${testimony.author}的生命見證`" />
    </RouterLink>
    <div class="card-body">
      <span class="tag">{{ testimony.category }}</span>
      <h3>
        <RouterLink :to="`/testimonies/${testimony.id}`">{{ testimony.title }}</RouterLink>
      </h3>
      <p>{{ testimony.excerpt }}</p>
      <div class="meta"><span>{{ testimony.author }}</span><time>{{ testimony.date }}</time></div>
      <RouterLink class="read-more" :to="`/testimonies/${testimony.id}`">閱讀更多 <span aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </article>
</template>

<style scoped>
.testimony-card {
  overflow: hidden;
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  height: 100%;
  transition: transform .25s ease, box-shadow .25s ease;
}

.testimony-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.image-link {
  display: block;
  height: 230px;
  overflow: hidden;
}

.image-link :deep(img) {
  transition: transform .5s ease;
}

.testimony-card:hover .image-link :deep(img) {
  transform: scale(1.04);
}

.card-body {
  padding: 1.5rem;
}

.tag {
  display: inline-block;
  padding: .34rem .7rem;
  border-radius: 999px;
  background: var(--color-yellow-light);
  color: var(--color-teal-dark);
  font-size: .78rem;
  font-weight: 700;
}

h3 {
  margin: .85rem 0 .65rem;
  font-size: 1.28rem;
  color: var(--color-teal-dark);
}

h3 a:hover {
  color: var(--color-purple);
}

p {
  color: var(--color-text-light);
}

.meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 1.1rem 0 .4rem;
  color: var(--color-text-light);
  font-size: .85rem;
}

.read-more {
  display: inline-flex;
  gap: .4rem;
  align-items: center;
  min-height: 44px;
  color: var(--color-teal);
  font-weight: 700;
}
</style>
