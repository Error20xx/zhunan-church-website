<script setup>
import { ref } from 'vue'
import { churchInfo } from '../data/churchInfo'
import logoUrl from '../assets/images/church-logo.png'
const logoFailed = ref(false)
</script>

<template>
  <footer class="footer">
    <div class="container footer-grid">
      <section>
        <div class="footer-brand">
          <img v-if="!logoFailed" :src="logoUrl" alt="" @error="logoFailed = true" />
          <span v-else>基督教竹南靈糧堂</span>
          <strong>{{ churchInfo.churchName }}</strong>
        </div>
        <p>{{ churchInfo.slogan }}。<br />我們期待在這裡與你相遇。</p>
        <div class="socials">
          <a :href="churchInfo.facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
          <!--<a :href="churchInfo.instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎</a>-->
          <a :href="`mailto:${churchInfo.email}`" aria-label="Email">✉</a>
        </div>
      </section>
      <section>
        <h2>聯絡我們</h2>
        <address>{{ churchInfo.address }}</address>
        <a :href="`tel:${churchInfo.phone}`">{{ churchInfo.phone }}</a>
        <a :href="`mailto:${churchInfo.email}`">{{ churchInfo.email }}</a>
      </section>
      <section>
        <h2>聚會時間</h2>
        <p v-for="time in churchInfo.meetingTimes" :key="time">{{ time }}</p>
      </section>

    </div>
    <div class="container copyright"><span>© 2026 基督教竹南靈糧堂 Bread of Life Christian Church in
        Zhunan</span></div>
  </footer>
</template>

<style scoped>
.footer {
  padding: clamp(3rem, 6vw, 5rem) 0 1.5rem;
  color: rgba(255, 255, 255, .8);
  background: var(--color-teal-dark);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr .7fr;
  gap: clamp(2rem, 4vw, 4rem);
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: .7rem;
  margin-bottom: 1rem;
  color: white;
  font-size: 1.2rem;
}

.footer-brand img {
  width: 50px;
  height: 50px;
  display: block;
  object-fit: contain;
  border-radius: 6px;
  flex-shrink: 0;
}

h2 {
  margin-bottom: 1rem;
  color: white;
  font-size: 1rem;
}

section>a,
section>span,
nav a,
address,
section>p {
  display: block;
  margin: .5rem 0;
  font-style: normal;
}

a:hover {
  color: var(--color-yellow);
}

.socials {
  display: flex;
  gap: .65rem;
  margin-top: 1.3rem;
}

.socials a {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 50%;
  color: white;
}

.copyright {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, .12);
  font-size: .82rem;
}

@media (max-width:900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width:560px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .copyright {
    flex-direction: column;
    gap: .5rem;
  }
}
</style>
