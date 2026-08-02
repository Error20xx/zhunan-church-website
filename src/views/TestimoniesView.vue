<script setup>
import { computed, ref, watch } from 'vue'
import PageBanner from '../components/PageBanner.vue'
import TestimonyCard from '../components/TestimonyCard.vue'
import { testimonies, testimonyCategories } from '../data/testimonies'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()

const category = ref('全部')
const query = ref('')

// 目前頁數
const currentPage = ref(1)

// 每頁顯示幾篇
const itemsPerPage = 6

// 用來切換頁面後捲回列表頂部
const listTop = ref(null)

// 篩選後的全部見證
const filtered = computed(() =>
  testimonies.filter((item) => {
    const matchesCategory =
      category.value === '全部' ||
      item.category === category.value

    const keyword = query.value.trim().toLowerCase()

    const matchesQuery =
      `${item.title}${item.excerpt}${item.author}`
        .toLowerCase()
        .includes(keyword)

    return matchesCategory && matchesQuery
  })
)

// 總頁數
const totalPages = computed(() =>
  Math.ceil(filtered.value.length / itemsPerPage)
)

// 當前頁面要顯示的 6 篇見證
const paginatedTestimonies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage

  return filtered.value.slice(start, end)
})

// 目前顯示的起始與結束筆數
const startItem = computed(() => {
  if (!filtered.value.length) return 0

  return (currentPage.value - 1) * itemsPerPage + 1
})

const endItem = computed(() =>
  Math.min(
    currentPage.value * itemsPerPage,
    filtered.value.length
  )
)

// 切換頁面
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return

  currentPage.value = page

  listTop.value?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

// 更換分類或搜尋內容後，自動回到第 1 頁
watch([category, query], () => {
  currentPage.value = 1
})
</script>
<template>
  <PageBanner eyebrow="Still Matter" title="見證故事" description="那些改變生命的故事。" />
  <section class="section">
    <div class="container">
      <div class="filters" aria-label="見證篩選工具">
        <div class="categories" role="group" aria-label="依分類篩選">
          <button v-for="item in testimonyCategories" :key="item" type="button" :class="{ active: category === item }"
            :aria-pressed="category === item" @click="category = item">{{
              item }}
          </button>
        </div>
        <!--<label class="search"><span class="sr-only">搜尋生命見證</span><span
            aria-hidden="true">⌕</span><input v-model="query" type="search" placeholder="搜尋標題、內容或姓名" /></label>-->
      </div>

      <p ref="listTop" class="result-count">
        顯示第 {{ startItem }}－{{ endItem }} 篇，
        共 {{ filtered.length }} 篇故事
      </p>

      <template v-if="filtered.length">
        <div class="testimony-grid reveal">
          <TestimonyCard v-for="item in paginatedTestimonies" :key="item.id" :testimony="item" />
        </div>

        <!-- 分頁按鈕 -->
        <nav v-if="totalPages > 1" class="pagination" aria-label="見證故事分頁">
          <button type="button" class="pagination-arrow" :disabled="currentPage === 1" aria-label="上一頁"
            @click="changePage(currentPage - 1)">
            ←
            <span>上一頁</span>
          </button>

          <div class="pagination-pages">
            <button v-for="page in totalPages" :key="page" type="button" class="pagination-number"
              :class="{ active: currentPage === page }" :aria-current="currentPage === page ? 'page' : undefined"
              :aria-label="`前往第 ${page} 頁`" @click="changePage(page)">
              {{ page }}
            </button>
          </div>

          <button type="button" class="pagination-arrow" :disabled="currentPage === totalPages" aria-label="下一頁"
            @click="changePage(currentPage + 1)">
            <span>下一頁</span>
            →
          </button>
        </nav>
      </template>
      <div v-else class="empty"><span>☀</span>
        <h2>暫時找不到符合的故事</h2>
        <p>換個關鍵字，或選擇其他分類看看。</p><button type="button" @click="category = '全部'; query = ''">清除篩選</button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
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

.search {
  display: flex;
  align-items: center;
  min-width: min(100%, 280px);
  padding: 0 1rem;
  border: 1px solid rgba(30, 82, 103, .18);
  border-radius: 999px;
  background: white;
}

.search input {
  min-width: 0;
  width: 100%;
  min-height: 46px;
  padding: .6rem;
  border: 0;
  outline: 0;
  background: transparent;
}

.result-count {
  margin: 1.6rem 0;
  color: var(--color-text-light);
  font-size: .9rem;
}

.testimony-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
}

.pagination-pages {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination button {
  min-width: 44px;
  min-height: 44px;
  border: 1px solid rgba(30, 82, 103, 0.18);
  color: var(--color-teal-dark);
  background: white;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.pagination-number {
  border-radius: 50%;
}

.pagination-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.6rem 1rem;
  border-radius: 999px;
}

.pagination button:hover:not(:disabled) {
  border-color: var(--color-purple);
  color: white;
  background: var(--color-purple);
  transform: translateY(-2px);
}

.pagination-number.active {
  border-color: var(--color-teal);
  color: white;
  background: var(--color-teal);
  box-shadow: 0 0 0 3px rgba(30, 82, 103, 0.12);
}

.pagination button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination button:focus-visible {
  outline: 3px solid var(--color-purple);
  outline-offset: 3px;
}

.empty {
  padding: 5rem 1rem;
  border-radius: var(--radius-lg);
  text-align: center;
  background: var(--color-cream);
}

.empty>span {
  font-size: 2.5rem;
  color: var(--color-yellow);
}

.empty h2 {
  margin: 1rem 0 .5rem;
  color: var(--color-teal-dark);
}

.empty p {
  color: var(--color-text-light);
}

.empty button {
  min-height: 44px;
  margin-top: 1rem;
  padding: .6rem 1.2rem;
  border: 0;
  border-radius: 999px;
  color: white;
  background: var(--color-teal);
  cursor: pointer;
}

@media(max-width:900px) {
  .filters {
    align-items: stretch;
    flex-direction: column
  }

  .testimony-grid {
    grid-template-columns: repeat(2, 1fr)
  }
}

@media(max-width:600px) {
  .testimony-grid {
    grid-template-columns: 1fr
  }

  .search {
    width: 100%
  }

  .pagination {
    gap: 0.5rem;
  }

  .pagination-arrow {
    padding: 0.55rem 0.75rem;
  }

  .pagination-arrow span {
    display: none;
  }
}
</style>
