<script setup>
import BaseButton from './BaseButton.vue'
</script>
<template>
  <section class="cta section">
    <div class="container cta-inner reveal">
      <p class="eyebrow">YOU ARE WELCOME</p>
      <h2>第一次來，也不用擔心。</h2>
      <p>每一件事的改變，都從跨出一小步開始。</p>
      <p>我們知道，第一次走進教會需要一些勇氣。<br>
        放心，我們每一個人都曾經是第一次來的新朋友。<br>
        今天，你願意來看看，就已經跨出了重要的一步。
      </p>
      <div>
        <BaseButton to="/#meetings">我要參加聚會</BaseButton>
        <BaseButton href="mailto:zhunan.joypter@msa.hinet.net" variant="light">與我們聯絡</BaseButton>
      </div>
    </div>
  </section>
</template>
<style scoped>
.cta {
  padding-top: 2rem;
  background: var(--color-cream);
}

.cta-inner {
  position: relative;
  overflow: hidden;
  padding: clamp(2.8rem, 7vw, 5.5rem);
  border-radius: var(--radius-xl);
  text-align: center;
  background: var(--gradient-primary);
  box-shadow: var(--shadow-lg);
}

.eyebrow {
  margin-bottom: .8rem;
  color: var(--color-teal-dark);
  font-size: .76rem;
  font-weight: 900;
  letter-spacing: .18em;
}

h2 {
  color: var(--color-teal-dark);
  font-size: var(--fs-h2);
}

.cta-inner>p:not(.eyebrow) {
  max-width: 680px;
  margin: 1.2rem auto 1.8rem;
  color: #29444d;
  font-size: 1.07rem;
}

.cta-inner>div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: .8rem;
}
</style>
