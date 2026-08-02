<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '../components/BaseButton.vue'
import TestimonyCard from '../components/TestimonyCard.vue'
import ImageWithFallback from '../components/ImageWithFallback.vue'
import { testimonies } from '../data/testimonies'
const route = useRoute()
const copied = ref(false)
const index = computed(() =>
  testimonies.findIndex(
    (t) => t.id === Number(route.params.id)
  )
)
const item = computed(() => testimonies[index.value])
const previous = computed(() => index.value > 0 ? testimonies[index.value - 1] : null)
const next = computed(() => index.value >= 0 && index.value < testimonies.length - 1 ? testimonies[index.value + 1] : null)
const recommendations = computed(() => item.value ? testimonies.filter(t => t.id !== item.value.id).sort((a, b) => (b.category === item.value.category) - (a.category === item.value.category)).slice(0, 3) : [])
async function copyLink() { try { await navigator.clipboard.writeText(window.location.href) } catch { const el = document.createElement('textarea'); el.value = window.location.href; document.body.appendChild(el); el.select(); document.execCommand('copy'); el.remove() } copied.value = true; setTimeout(() => copied.value = false, 2200) }
</script>
<template>
  <article v-if="item" class="detail">
    <header class="detail-header">
      <div class="narrow">
        <RouterLink to="/testimonies" class="back">← 返回見證列表</RouterLink><span class="tag">{{ item.category }}</span>
        <h1>{{ item.title }}</h1>
        <div class="byline"><span>{{ item.author }}</span><time>{{ item.date }}</time></div>
      </div>
    </header>
    <div class="container hero-image">
      <ImageWithFallback :src="item.image" :alt="item.title" eager />
    </div>
    <div class="narrow article-body">
      <blockquote>{{ item.excerpt }}</blockquote>
      <p v-for="(paragraph, i) in item.content" :key="i">{{ paragraph }}</p>
      <div class="share"><span>分享這篇故事</span><button type="button" @click="copyLink">⛓ {{ copied ? '連結已複製！' : '複製連結'
          }}</button></div>
    </div>
    <nav class="container story-nav" aria-label="上一篇與下一篇">
      <RouterLink v-if="previous" :to="`/testimonies/${previous.id}`"><small>← 上一篇</small><strong>{{ previous.title
          }}</strong></RouterLink><span v-else></span>
      <RouterLink v-if="next" :to="`/testimonies/${next.id}`"><small>下一篇 →</small><strong>{{ next.title }}</strong>
      </RouterLink>
    </nav>
    <section class="section recommendations">
      <div class="container">
        <h2>也許你也想讀</h2>
        <div>
          <TestimonyCard v-for="story in recommendations" :key="story.id" :testimony="story" />
        </div>
      </div>
    </section>
  </article>
  <section v-else class="not-found">
    <div><span>404</span>
      <h1>找不到這篇生命見證</h1>
      <p>它可能已經移動，或網址不小心多了一個字。</p>
      <BaseButton to="/testimonies">回到見證列表</BaseButton>
    </div>
  </section>
</template>
<style scoped>
.detail-header {
  padding: clamp(9rem, 14vw, 11rem) 1rem 3rem;
  text-align: center;
  background: var(--color-cream);
}

.narrow {
  width: min(100% - 2rem, 780px);
  margin-inline: auto;
}

.back {
  display: inline-block;
  min-height: 44px;
  color: var(--color-teal);
  font-weight: 700;
}

.tag {
  display: block;
  width: max-content;
  margin: 1.2rem auto .8rem;
  padding: .35rem .75rem;
  border-radius: 999px;
  color: var(--color-teal-dark);
  background: var(--color-yellow-light);
  font-size: .8rem;
  font-weight: 800;
}

.detail-header h1 {
  color: var(--color-teal-dark);
  font-size: var(--fs-h1);
  line-height: 1.2;
}

.byline {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  color: var(--color-text-light);
}

.hero-image {
  height: min(60vw, 650px);
  margin-top: 3rem;
  overflow: hidden;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.article-body {
  padding: clamp(3rem, 7vw, 6rem) 0;
}

.article-body blockquote {
  margin-bottom: 2.4rem;
  padding-left: 1.5rem;
  border-left: 5px solid var(--color-yellow);
  color: var(--color-teal-dark);
  font-size: clamp(1.25rem, 2.2vw, 1.65rem);
  font-weight: 700;
  line-height: 1.7;
}

.article-body>p {
  margin: 1.3rem 0;
  color: var(--color-text);
  font-size: 1.08rem;
  line-height: 2;
}

.share {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #dfe4e2;
  color: var(--color-teal-dark);
  font-weight: 700;
}

.share button {
  min-height: 44px;
  padding: .6rem 1rem;
  border: 1px solid var(--color-teal);
  border-radius: 999px;
  color: var(--color-teal);
  background: white;
  cursor: pointer;
}

.story-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-bottom: clamp(3rem, 6vw, 5rem);
}

.story-nav a {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  background: var(--color-purple-light);
}

.story-nav a:last-child {
  text-align: right;
}

.story-nav small {
  color: var(--color-purple);
}

.story-nav strong {
  margin-top: .4rem;
  color: var(--color-teal-dark);
}

.recommendations {
  background: var(--color-cream);
}

.recommendations h2 {
  margin-bottom: 2rem;
  color: var(--color-teal-dark);
  font-size: var(--fs-h2);
}

.recommendations .container>div {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.not-found {
  min-height: 80vh;
  display: grid;
  place-items: center;
  padding: 8rem 1rem;
  text-align: center;
  background: var(--color-cream);
}

.not-found span {
  color: var(--color-purple);
  font-size: 4rem;
  font-weight: 900;
}

.not-found h1 {
  margin: .4rem 0;
  color: var(--color-teal-dark);
}

.not-found p {
  margin-bottom: 1.5rem;
  color: var(--color-text-light);
}

@media(max-width:767px) {
  .recommendations .container>div {
    grid-template-columns: 1fr
  }

  .story-nav {
    grid-template-columns: 1fr
  }

  .story-nav a:last-child {
    text-align: left
  }

  .hero-image {
    height: 60vw;
    border-radius: 20px
  }

  .share {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem
  }
}
</style>
