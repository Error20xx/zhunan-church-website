<script setup>
import PageBanner from '../components/PageBanner.vue'
import SectionTitle from '../components/SectionTitle.vue'
import ImageWithFallback from '../components/ImageWithFallback.vue'
import CTASection from '../components/CTASection.vue'
import { team } from '../data/team'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
const missions = ['連結每一個生命', '建立真實的信仰', '陪伴不同世代', '服事所在的城市']
const values = [{ title: '接納', text: '讓每個人都能帶著真實的自己前來。', icon: '♡' }, { title: '成長', text: '在聖經、群體與生活中持續扎根。', icon: '↗' }, { title: '同行', text: '跨越世代，在人生不同階段彼此扶持。', icon: '∞' }, { title: '分享', text: '把領受的愛帶進社區與日常。', icon: '✦' }]
const timeline = [{ year: '2015', text: '在一個小型家庭聚會中開始' }, { year: '2017', text: '成立第一個青年小組' }, { year: '2020', text: '搬入現在的聚會空間' }, { year: '2023', text: '開始社區關懷與兒童陪伴計畫' }, { year: '2026', text: '持續成為城市中分享盼望的教會' }]
</script>
<template>
  <PageBanner eyebrow="ABOUT US" title="關於竹南靈糧堂" description="我們是一群仍在學習的人，因著愛相聚，也願意一起把盼望帶進生活與城市。" />
  <section class="section">
    <div class="container intro-grid reveal">
      <div>
        <p class="eyebrow">OUR CHURCH</p>
        <h2>讓信仰，成為真實生活的一部分</h2>
        <p>竹南靈糧堂是一個跨世代的信仰群體。我們重視真誠的關係、清楚的信仰根基，也相信教會不只存在於星期日，更活在每一天的工作、家庭與選擇之中。</p>
        <p>不論你正在尋找信仰、重新認識自己，或只是需要一個可以安心停留的地方，這裡都為你留了一個位置。</p>
      </div>
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80"
        alt="竹南靈糧堂會眾一起敬拜" />
    </div>
  </section>
  <section class="section vision">
    <div class="container reveal">
      <SectionTitle eyebrow="VISION & MISSION" title="我們所看見的未來" />
      <blockquote>「成為一個讓人遇見愛、建立信仰、活出盼望的群體。」</blockquote>
      <div class="mission-grid">
        <div v-for="(item, index) in missions" :key="item"><span>0{{ index + 1 }}</span><strong>{{ item }}</strong>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <SectionTitle eyebrow="OUR VALUES" title="我們重視的事" subtitle="這些價值，形塑我們如何聚集、陪伴與服事。" />
      <div class="value-grid reveal">
        <article v-for="value in values" :key="value.title"><i>{{ value.icon }}</i>
          <h3>{{ value.title }}</h3>
          <p>{{ value.text }}</p>
        </article>
      </div>
    </div>
  </section>
  <section class="section timeline-section">
    <div class="container">
      <SectionTitle eyebrow="OUR STORY" title="一段持續展開的故事" />
      <ol class="timeline reveal">
        <li v-for="item in timeline" :key="item.year"><time>{{ item.year }}</time><span></span>
          <p>{{ item.text }}</p>
        </li>
      </ol>
    </div>
  </section>
  <section class="section team-section">
    <div class="container">
      <SectionTitle eyebrow="OUR TEAM" title="一起陪伴你的團隊" subtitle="我們不是完美的人，但願意真誠聆聽、一起尋找方向。" />
      <div class="team-grid reveal">
        <article v-for="person in team" :key="person.id">
          <div class="team-photo">
            <ImageWithFallback :src="person.image" :alt="`${person.name}，${person.role}`" />
          </div>
          <div><span>{{ person.role }}</span>
            <h3>{{ person.name }}</h3>
            <p>{{ person.bio }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
  <CTASection />
</template>
<style scoped>
.eyebrow {
  color: var(--color-purple);
  font-size: .76rem;
  font-weight: 900;
  letter-spacing: .16em;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: clamp(2.5rem, 7vw, 6rem);
}

.intro-grid>:last-child {
  height: 500px;
  overflow: hidden;
  border-radius: var(--radius-xl);
}

.intro-grid h2 {
  margin: .7rem 0 1.3rem;
  color: var(--color-teal-dark);
  font-size: var(--fs-h2);
}

.intro-grid p:not(.eyebrow) {
  margin-top: 1rem;
  color: var(--color-text-light);
  line-height: 1.9;
}

.vision,
.timeline-section {
  background: var(--color-cream);
}

blockquote {
  max-width: 900px;
  margin: 0 auto 3rem;
  color: var(--color-teal-dark);
  font-size: clamp(1.5rem, 3.2vw, 2.6rem);
  font-weight: 750;
  line-height: 1.55;
  text-align: center;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.mission-grid div {
  padding: 1.5rem;
  border-radius: var(--radius-md);
  background: white;
  box-shadow: var(--shadow-sm);
}

.mission-grid span {
  display: block;
  color: var(--color-purple);
  font-size: .75rem;
  font-weight: 800;
}

.mission-grid strong {
  display: block;
  margin-top: .5rem;
  color: var(--color-teal-dark);
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
}

.value-grid article {
  padding: 2rem 1.5rem;
  border-radius: var(--radius-lg);
  text-align: center;
  background: var(--color-purple-light);
}

.value-grid i {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  margin: auto;
  border-radius: 50%;
  color: var(--color-teal);
  background: white;
  font-size: 1.4rem;
  font-style: normal;
}

.value-grid h3 {
  margin: 1rem 0 .5rem;
  color: var(--color-teal-dark);
}

.value-grid p {
  color: var(--color-text-light);
}

.timeline {
  max-width: 820px;
  margin: auto;
}

.timeline li {
  display: grid;
  grid-template-columns: 80px 24px 1fr;
  gap: 1.2rem;
  min-height: 100px;
}

.timeline time {
  color: var(--color-purple);
  font-weight: 900;
}

.timeline li>span {
  position: relative;
  width: 12px;
  height: 12px;
  margin-top: .35rem;
  border-radius: 50%;
  background: var(--color-yellow);
  box-shadow: 0 0 0 6px white;
}

.timeline li>span::after {
  content: '';
  position: absolute;
  top: 18px;
  left: 5px;
  width: 2px;
  height: 70px;
  background: #d7dedb;
}

.timeline li:last-child>span::after {
  display: none;
}

.timeline p {
  color: var(--color-teal-dark);
  font-weight: 650;
}

.team-section {
  background: white;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.team-grid article {
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--color-cream);
  box-shadow: var(--shadow-sm);
}

.team-photo {
  height: 320px;
}

.team-grid article>div:last-child {
  padding: 1.5rem;
}

.team-grid span {
  color: var(--color-purple);
  font-size: .8rem;
  font-weight: 800;
}

.team-grid h3 {
  margin: .35rem 0 .7rem;
  color: var(--color-teal-dark);
}

.team-grid p {
  color: var(--color-text-light);
}

@media(max-width:850px) {
  .intro-grid {
    grid-template-columns: 1fr
  }

  .mission-grid,
  .value-grid {
    grid-template-columns: repeat(2, 1fr)
  }

  .team-grid {
    grid-template-columns: 1fr 1fr
  }

  .team-grid article:last-child {
    grid-column: 1/-1;
    max-width: calc(50% - .7rem);
    justify-self: center
  }
}

@media(max-width:600px) {

  .mission-grid,
  .value-grid,
  .team-grid {
    grid-template-columns: 1fr
  }

  .team-grid article:last-child {
    grid-column: auto;
    max-width: none
  }

  .intro-grid>:last-child {
    height: 360px
  }
}
</style>
