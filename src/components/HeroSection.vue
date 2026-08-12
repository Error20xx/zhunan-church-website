<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import logoUrl from '../assets/images/church-logo.png'
const logoFailed = ref(false)
</script>

<template>
  <section class="hero">
    <span class="orb orb-one"></span><span class="orb orb-two"></span><span class="orb orb-three"></span>
    <div class="container hero-grid">
      <div class="hero-copy">
        <p class="label">WELCOME HOME</p>
        <h1>來到這裡<br /><span>遇見愛與盼望</span></h1>
        <p class="lead">陪你認識耶穌、找到歸屬<br />一起活出豐盛而有力量的生命</p>
        <div class="actions"><!--<BaseButton to="/about">認識我們</BaseButton>-->
          <BaseButton to="/#meetings" variant="light">查看聚會時間</BaseButton>
        </div>
      </div>
    </div>
    <a href="#section stories" class="scroll-cue"><span>向下探索</span><i aria-hidden="true">↓</i></a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  isolation: isolate;
  min-height: 90vh;
  padding: calc(76px + 4rem) 0 5rem;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: var(--gradient-primary);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
}

.hero-copy {
  width: 100%;
  max-width: 900px;
  text-align: center;
  animation: fade-up .8s ease both;
}

.label {
  display: inline-flex;
  padding: .45rem .8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, .55);
  color: var(--color-teal-dark);
  font-size: .78rem;
  font-weight: 900;
  letter-spacing: .18em;
}

h1 {
  max-width: 900px;
  margin: 1.2rem auto 1.3rem;
  color: var(--color-teal-dark);
  font-size: var(--fs-hero);
  line-height: 1.12;
  letter-spacing: -.035em;
  text-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
}

h1 span {
  color: white;
  text-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
}

.lead {
  max-width: 610px;
  margin-inline: auto;
  color: #29444d;
  font-size: clamp(1rem, 1.6vw, 1.17rem);
  line-height: 1.9;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .8rem;
  margin-top: 2rem;
}

.visual {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 420px;
}

.glow {
  position: absolute;
  width: 85%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgba(255, 255, 255, .4);
  filter: blur(32px);
}

.logo-card {
  position: relative;
  display: grid;
  place-items: center;
  width: min(80%, 380px);
  aspect-ratio: 1;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, .65);
  border-radius: 38%;
  background: rgba(255, 255, 255, .5);
  box-shadow: 0 30px 80px rgba(76, 51, 87, .18);
  backdrop-filter: blur(18px);
}

.logo-card img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.logo-text {
  text-align: center;
  color: var(--color-teal-dark);
}

.logo-text strong {
  display: block;
  font-size: 2rem;
}

.logo-text span {
  letter-spacing: .15em;
}

.orb {
  position: absolute;
  z-index: -1;
  border-radius: 50%;
  filter: blur(3px);
  animation: drift 10s ease-in-out infinite alternate;
}

.orb-one {
  width: 180px;
  height: 180px;
  top: 12%;
  right: 4%;
  background: rgba(255, 255, 255, .25);
}

.orb-two {
  width: 260px;
  height: 260px;
  bottom: -6%;
  left: 20%;
  background: rgba(190, 133, 214, .22);
  animation-delay: -4s;
}

.orb-three {
  width: 90px;
  height: 90px;
  top: 22%;
  left: 4%;
  background: rgba(244, 217, 31, .32);
  animation-delay: -2s;
}

.scroll-cue {
  position: absolute;
  bottom: 1.2rem;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-teal-dark);
  font-size: .75rem;
  transform: translateX(-50%);
}

.scroll-cue i {
  font-style: normal;
  font-size: 1.2rem;
  animation: bounce 1.8s infinite;
}

@media (max-width:767px) {
  .hero {
    min-height: auto;
    padding-top: 120px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .lead {
    margin: auto;
  }

  .actions {
    justify-content: center;
  }

  .visual {
    min-height: 300px;
  }

  .logo-card {
    width: min(72vw, 290px);
    padding: 2rem;
  }

  .scroll-cue {
    display: none;
  }
}
</style>
