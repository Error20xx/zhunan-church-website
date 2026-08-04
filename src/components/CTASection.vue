<script setup>
import BaseButton from './BaseButton.vue'
</script>
<template>
  <section class="cta section">
    <div class="container cta-inner reveal">
      <p class="eyebrow">YOU ARE WELCOME</p>
      <h2>第一次來，也不用擔心</h2>
      <p class="cta-lead">
        每一件事的改變，都從跨出一小步開始
      </p>

      <p class="cta-description">
        我們知道，第一次走進教會需要一些勇氣<br>
        放心，我們每一個人都曾經是第一次來的新朋友
      </p>

      <div class="cta-actions">
        <BaseButton to="/#meetings">
          我要參加聚會
        </BaseButton>

        <BaseButton href="mailto:zhunan.joypter@msa.hinet.net" variant="light">
          與我們聯絡
        </BaseButton>
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

.cta-lead,
.cta-description {
  max-width: 680px;
  margin-inline: auto;
  color: #29444d;
  font-size: 1.07rem;
  line-height: 1.85;
}

.cta-lead {
  margin-top: 1.1rem;
  margin-bottom: 1.4rem;
}

.cta-description {
  margin-top: 0;
  margin-bottom: 1.8rem;
}

.cta-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: .8rem;
}

@media (max-width: 600px) {
  .cta {
    padding-top: 1rem;
  }

  .cta-inner {
    padding: 2.8rem 1.35rem;
    border-radius: 26px;
  }

  .eyebrow {
    margin-bottom: 1rem;
    font-size: .68rem;
    letter-spacing: .16em;
  }

  h2 {
    max-width: 280px;
    margin: 0 auto;
    font-size: clamp(1.6rem, 7vw, 1.9rem);
    line-height: 1.4;
    letter-spacing: -.02em;
  }

  .cta-lead {
    max-width: 250px;
    margin-top: 1.2rem;
    margin-bottom: 1.4rem;
    font-size: .82rem;
    line-height: 1.75;
    text-align: center;
  }

  .cta-description {
    max-width: 260px;
    margin-bottom: 1.7rem;
    font-size: .82rem;
    line-height: 1.85;
    text-align: center;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
    gap: .7rem;
  }

  .cta-actions :deep(a),
  .cta-actions :deep(button) {
    min-width: 150px;
    justify-content: center;
  }
}
</style>
