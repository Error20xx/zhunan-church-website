import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/attendance-notice', name: 'attendance-notice', component: () => import('../views/AttendanceNoticeView.vue'), meta: { hideLayout: true } },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/testimonies', name: 'testimonies', component: () => import('../views/TestimoniesView.vue') },
    { path: '/testimonies/:id', name: 'testimony-detail', component: () => import('../views/TestimonyDetailView.vue') },
    { path: '/gallery', name: 'gallery', component: () => import('../views/GalleryView.vue') },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 86, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const titles = {
    home: '基督教竹南靈糧堂',
    about: '關於我們｜基督教竹南靈糧堂',
    testimonies: '生命見證｜基督教竹南靈糧堂',
    'testimony-detail': '生命見證｜基督教竹南靈糧堂',
    gallery: '活動照片｜基督教竹南靈糧堂',
    'not-found': '找不到頁面｜基督教竹南靈糧堂',
    'attendance-notice': '赴會通知｜基督教竹南靈糧堂',
  }
  document.title = titles[to.name] || titles.home
})

export default router
