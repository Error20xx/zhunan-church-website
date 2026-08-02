<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const visible = ref(false)
const update = () => { visible.value = window.scrollY > 500 }
const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
onMounted(() => window.addEventListener('scroll', update, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', update))
</script>

<template>
  <Transition name="fade"><button v-if="visible" type="button" class="scroll-top" aria-label="回到頁面頂端" @click="goTop">↑</button></Transition>
</template>

<style scoped>
.scroll-top { position:fixed; right:clamp(1rem,3vw,2rem); bottom:clamp(1rem,3vw,2rem); z-index:80; width:48px; height:48px; border:0; border-radius:50%; color:white; background:var(--color-teal); box-shadow:var(--shadow-md); cursor:pointer; }
.fade-enter-active,.fade-leave-active { transition:.2s; }.fade-enter-from,.fade-leave-to { opacity:0; transform:translateY(8px); }
</style>
