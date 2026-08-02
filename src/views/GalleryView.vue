<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import PageBanner from '../components/PageBanner.vue'
import GalleryCard from '../components/GalleryCard.vue'
import ImageWithFallback from '../components/ImageWithFallback.vue'
import { galleryCategories, galleryItems } from '../data/gallery'
const category = ref('全部')
const selected = ref(null)
const closeButton = ref(null)
const filtered = computed(() => category.value === '全部' ? galleryItems : galleryItems.filter(i => i.category === category.value))
const currentIndex = computed(() => selected.value ? filtered.value.findIndex(i => i.id === selected.value.id) : -1)
function open(item) { selected.value = item; nextTick(() => closeButton.value?.focus()) }
function close() { selected.value = null }
function move(direction) { if (!selected.value) return; const length = filtered.value.length; selected.value = filtered.value[(currentIndex.value + direction + length) % length] }
function keyHandler(event) { if (event.key === 'Escape') close(); if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1) }
watch(selected, (value) => { document.body.style.overflow = value ? 'hidden' : ''; if (value) window.addEventListener('keydown', keyHandler); else window.removeEventListener('keydown', keyHandler) })
watch(category, () => close())
onBeforeUnmount(() => { document.body.style.overflow = ''; window.removeEventListener('keydown', keyHandler) })
</script>
<template>
  <PageBanner eyebrow="OUR MOMENTS" title="活動照片" description="在敬拜、笑聲、服務與日常相聚中，我們一起留下屬於這個家的記憶。" />
  <section class="section">
    <div class="container">
      <div class="categories" role="group" aria-label="依活動分類篩選"><button v-for="item in galleryCategories" :key="item"
          type="button" :class="{ active: category === item }" :aria-pressed="category === item"
          @click="category = item">{{ item
          }}</button></div>
      <div class="masonry">
        <GalleryCard v-for="(item, index) in filtered" :key="item.id" :item="item" :large="index % 7 === 0"
          @open="open" />
      </div>
    </div>
  </section>
  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="selected" class="lightbox" role="dialog" aria-modal="true" :aria-label="selected.title"
        @click.self="close">
        <button ref="closeButton" type="button" class="close" aria-label="關閉照片" @click="close">×</button>
        <button type="button" class="nav prev" aria-label="上一張照片" @click="move(-1)">‹</button>
        <figure>
          <div class="lightbox-image">
            <ImageWithFallback :src="selected.image" :alt="selected.title" eager />
          </div>
          <figcaption><span>{{ selected.category }} · {{ selected.date }}</span>
            <h2>{{ selected.title }}</h2>
            <p>{{ selected.description }}</p><small>{{ currentIndex + 1 }} / {{ filtered.length }}</small>
          </figcaption>
        </figure>
        <button type="button" class="nav next" aria-label="下一張照片" @click="move(1)">›</button>
      </div>
    </Transition>
  </Teleport>
</template>
<style scoped>
.categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: .55rem;
  margin-bottom: 2.5rem;
}

.categories button {
  min-height: 44px;
  padding: .55rem 1rem;
  border: 1px solid rgba(30, 82, 103, .16);
  border-radius: 999px;
  color: var(--color-teal-dark);
  background: white;
  cursor: pointer;
}

.categories button.active {
  color: white;
  background: var(--color-teal);
  box-shadow: 0 0 0 3px rgba(30, 82, 103, .12);
}

.masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 260px;
  grid-auto-flow: dense;
  gap: 1rem;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: 70px minmax(0, 1100px) 70px;
  place-content: center;
  align-items: center;
  padding: 2rem;
  color: white;
  background: rgba(8, 27, 34, .94);
  backdrop-filter: blur(12px);
}

.lightbox figure {
  min-width: 0;
  margin: 0;
}

.lightbox-image {
  width: 100%;
  height: min(68vh, 700px);
  overflow: hidden;
  border-radius: 18px;
  background: #223d47;
}

.lightbox-image :deep(img) {
  object-fit: contain;
}

.lightbox figcaption {
  position: relative;
  padding: 1rem .2rem;
}

.lightbox figcaption span,
.lightbox figcaption small {
  color: rgba(255, 255, 255, .68);
  font-size: .8rem;
}

.lightbox figcaption h2 {
  margin: .3rem 0;
  font-size: 1.35rem;
}

.lightbox figcaption small {
  position: absolute;
  right: .2rem;
  top: 1rem;
}

.close,
.nav {
  border: 0;
  color: white;
  background: transparent;
  cursor: pointer;
}

.close {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  width: 50px;
  height: 50px;
  font-size: 2.2rem;
}

.nav {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  font-size: 3rem;
}

.nav:hover {
  background: rgba(255, 255, 255, .1);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity .2s
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0
}

@media(max-width:800px) {
  .masonry {
    grid-template-columns: repeat(2, 1fr)
  }

  .lightbox {
    grid-template-columns: 42px minmax(0, 1fr) 42px;
    padding: 1rem .3rem
  }

  .nav {
    width: 42px;
    font-size: 2.3rem
  }

  .lightbox-image {
    height: 65vh
  }
}

@media(max-width:480px) {
  .masonry {
    grid-template-columns: 1fr
  }

  .lightbox {
    grid-template-columns: 36px minmax(0, 1fr) 36px
  }

  .lightbox-image {
    height: 58vh
  }
}
</style>
