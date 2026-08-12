<script setup>
import HeroSection from '../components/HeroSection.vue'
import SectionTitle from '../components/SectionTitle.vue'
import BaseButton from '../components/BaseButton.vue'
import TestimonyCard from '../components/TestimonyCard.vue'
import GalleryCard from '../components/GalleryCard.vue'
import MeetingCard from '../components/MeetingCard.vue'
import CTASection from '../components/CTASection.vue'
import ImageWithFallback from '../components/ImageWithFallback.vue'
import { testimonies } from '../data/testimonies'
import { galleryItems } from '../data/gallery'
import { meetings } from '../data/meetings'
import { churchInfo } from '../data/churchInfo'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()
const values = [{ icon: '✦', title: '真實信仰', text: '誠實面對生命，也在每天的選擇中活出信仰。' }, { icon: '♡', title: '彼此陪伴', text: '不獨自前行，在喜樂與不容易中互相扶持。' }, { icon: '☀', title: '活出盼望', text: '讓領受的愛成為行動，為城市帶來溫暖。' }]
</script>

<template>
  <HeroSection />
  <!--<section id="about-home" class="section about-home">
    <div class="container split reveal">
      <div class="about-image"><ImageWithFallback src="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=1200&q=80" alt="教會朋友彼此分享與陪伴" /><span>WELCOME<br />AS YOU ARE</span></div>
      <div>
        <p class="section-eyebrow">ABOUT HOPE CHURCH</p><h2>一個歡迎每個人的地方</h2>
        <p class="intro">我們相信，每個生命都值得被愛，也相信信仰不是一段孤單的旅程。在這裡，我們一起敬拜、成長、分享生活，並在每一個人生階段彼此同行。</p>
        <div class="values"><article v-for="value in values" :key="value.title"><i aria-hidden="true">{{ value.icon }}</i><div><h3>{{ value.title }}</h3><p>{{ value.text }}</p></div></article></div>
        <BaseButton to="/about">更多關於我們</BaseButton>
      </div>
    </div>
  </section>-->

  <section id="section stories" class="section stories">
    <div class="container">
      <SectionTitle eyebrow="Still Matter" title="故事" subtitle="那些改變生命的故事。" />
      <div class="card-grid reveal">
        <TestimonyCard v-for="item in testimonies.filter(t => t.featured)" :key="item.id" :testimony="item" />
      </div>
      <div class="section-action">
        <BaseButton to="/testimonies" variant="outline">查看所有見證</BaseButton>
      </div>
    </div>
  </section>

  <!--<section class="section gallery-home">
    <div class="container">
      <SectionTitle eyebrow="LIFE TOGETHER" title="我們一起走過的時光" subtitle="在敬拜、聚會與生活中，留下每一個珍貴的片刻。" />
      <div class="gallery-grid reveal"><GalleryCard v-for="(item,index) in galleryItems.slice(0,6)" :key="item.id" :item="item" :large="index === 0 || index === 3" @open="$router.push('/gallery')" /></div>
      <div class="section-action"><BaseButton to="/gallery" variant="outline">查看更多照片</BaseButton></div>
    </div>
  </section>-->

  <section id="meetings" class="section meetings-section">
    <div class="container">
      <SectionTitle eyebrow="JOIN US" title="期待與你相遇" subtitle="不需要事先準備好自己，帶著真實的你來就好。" />
      <div class="meeting-grid reveal">
        <MeetingCard v-for="meeting in meetings" :key="meeting.id" :meeting="meeting" />
      </div>
      <div class="contact-panel reveal">
        <div class="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453.1412016041304!2d120.87345982901755!3d24.68807079088046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469b33d7b0532b5%3A0x128ca343fad6daf1!2z56u55Y2X6Z2I57On5aCC!5e0!3m2!1szh-TW!2stw!4v1785217405902!5m2!1szh-TW!2stw"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
        <div class="contact-info">
          <p class="section-eyebrow">FIND US</p>
          <h2>這個週末，來和我們打個招呼</h2>
          <address><span>地址</span>{{ churchInfo.address }}</address>
          <p><span>電話</span><a :href="`tel:${churchInfo.phone}`">{{ churchInfo.phone }}</a></p>
          <p><span>Email</span><a :href="`mailto:${churchInfo.email}`">{{ churchInfo.email }}</a></p>
          <!-- <p><span>Facebook</span><a class="contact-link" :href="churchInfo.facebook" target="_blank"
              rel="noopener noreferrer">竹南靈糧堂</a></p> -->
          <div class="contact-actions">
            <BaseButton href="https://maps.google.com/?q=竹南靈糧堂" target="_blank">開啟地圖</BaseButton>
            <BaseButton :href="`mailto:${churchInfo.email}`" variant="outline">聯絡我們</BaseButton>
          </div>
        </div>
      </div>

      <!-- Facebook 粉絲專頁 -->
      <div class="facebook-panel reveal">
        <div class="facebook-intro">
          <p class="section-eyebrow">FOLLOW US</p>
          <h2>追蹤我們的最新消息</h2>
          <p>
            查看近期聚會、活動消息與教會生活，歡迎追蹤竹南靈糧堂 Facebook 粉絲專頁
          </p>

          <a class="facebook-link" :href="churchInfo.facebook" target="_blank" rel="noopener noreferrer">
            前往 Facebook 粉絲專頁 ⬈
          </a>
        </div>

        <div class="facebook-embed">
          <!-- 桌面版 -->
          <iframe class="facebook-frame facebook-frame-desktop" title="竹南靈糧堂 Facebook 粉絲專頁"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBOLZhunan%2F&tabs=timeline&width=500&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false"
            width="500" height="650" scrolling="no" frameborder="0" allowfullscreen loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

          <!-- 手機版 -->
          <iframe class="facebook-frame facebook-frame-mobile" title="竹南靈糧堂 Facebook 粉絲專頁手機版"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBOLZhunan%2F&tabs=timeline&width=340&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
            width="340" height="600" scrolling="no" frameborder="0" allowfullscreen loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>

    </div>
  </section>
  <CTASection />
</template>

<style scoped>
.about-home,
.gallery-home,
.meetings-section {
  background: var(--color-cream);
}

.meetings-section {
  padding-bottom: 2.5rem;
}

.split {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  align-items: center;
  gap: clamp(2.5rem, 7vw, 6rem);
}

.about-image {
  position: relative;
  height: clamp(420px, 55vw, 620px);
  overflow: hidden;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.about-image>span {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  padding: .8rem 1rem;
  border-radius: 16px;
  color: var(--color-teal-dark);
  background: rgba(255, 255, 255, .82);
  font-size: .7rem;
  font-weight: 900;
  letter-spacing: .14em;
  backdrop-filter: blur(10px);
}

.section-eyebrow {
  color: var(--color-purple);
  font-size: .76rem;
  font-weight: 900;
  letter-spacing: .15em;
}

.split h2,
.contact-info h2 {
  margin: .7rem 0 1.2rem;
  color: var(--color-teal-dark);
  font-size: var(--fs-h2);
  line-height: 1.2;
}

.intro {
  color: var(--color-text-light);
  font-size: 1.08rem;
  line-height: 1.9;
}

.values {
  display: grid;
  gap: 1rem;
  margin: 1.8rem 0;
}

.values article {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.values i {
  display: grid;
  place-items: center;
  flex: 0 0 42px;
  height: 42px;
  border-radius: 14px;
  background: var(--color-purple-light);
  color: var(--color-purple);
  font-style: normal;
}

.values h3 {
  color: var(--color-teal-dark);
}

.values p {
  color: var(--color-text-light);
  font-size: .92rem;
}

.stories {
  background: white;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.meeting-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.4rem;
  margin-bottom: clamp(3rem, 7vw, 6rem);
}

.section-action {
  margin-top: 2.5rem;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 260px;
  gap: 1rem;
}

.contact-panel {
  display: grid;
  grid-template-columns: 1.08fr .92fr;
  overflow: hidden;
  border-radius: var(--radius-xl);
  background: white;
  box-shadow: var(--shadow-md);
}

.google-map {
  width: 100%;
  min-height: 430px;
  overflow: hidden;
  background: #e5ece8;
}

.google-map iframe {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 430px;
  border: 0;
}

.contact-info {
  padding: clamp(2rem, 5vw, 4rem);
}

.contact-info address,
.contact-info>p:not(.section-eyebrow) {
  margin: .7rem 0;
  font-style: normal;
  color: var(--color-text-light);
}

.contact-info span {
  display: inline-block;
  min-width: 88px;
  color: var(--color-teal-dark);
  font-weight: 700;
}

.contact-link {
  display: inline-block;
  color: var(--color-text-light);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.contact-link::after {
  content: '↗';
  display: inline-block;
  margin-left: 0.35rem;
  opacity: 0;
  transform: translate(-3px, 3px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.contact-link:hover {
  color: var(--color-purple);
  border-bottom-color: currentColor;
  transform: translateX(2px);
}

.contact-link:hover::after {
  opacity: 1;
  transform: translate(0, 0);
}

.contact-link:focus-visible {
  color: var(--color-purple);
  outline: 2px solid var(--color-purple);
  outline-offset: 4px;
  border-radius: 3px;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: .7rem;
  margin-top: 1.8rem;
}

/* Facebook 粉絲專頁樣式 */
.facebook-panel {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);
  margin-top: clamp(3rem, 7vw, 6rem);
  padding: clamp(2rem, 5vw, 4rem);
  overflow: hidden;
  border-radius: var(--radius-xl);
  background: white;
  box-shadow: var(--shadow-md);
}

.facebook-intro h2 {
  margin: 0.7rem 0 1.2rem;
  color: var(--color-teal-dark);
  font-size: var(--fs-h2);
  line-height: 1.2;
}

.facebook-intro>p:not(.section-eyebrow) {
  color: var(--color-text-light);
  line-height: 1.8;
}

.facebook-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: 1.5rem;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  color: white;
  background: var(--color-teal);
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.facebook-link:hover {
  background: var(--color-teal-dark);
  transform: translateY(-2px);
}

.facebook-link:focus-visible {
  outline: 3px solid var(--color-purple);
  outline-offset: 3px;
}

.facebook-embed {
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 0;
  overflow: hidden;
}

.facebook-frame {
  display: block;
  max-width: 100%;
  border: 0;
}

.facebook-frame-desktop {
  width: 500px;
  height: 650px;
}

.facebook-frame-mobile {
  display: none;
  width: 340px;
  height: 600px;
}

@media (max-width:900px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .card-grid>*:last-child {
    grid-column: 1/-1;
    max-width: calc(50% - .7rem);
    justify-self: center;
  }

  .contact-panel {
    grid-template-columns: 1fr;
  }

  .google-map,
  .google-map iframe {
    min-height: 330px;
  }

  .facebook-panel {
    grid-template-columns: 1fr;
  }

  .facebook-intro {
    text-align: center;
  }

  .facebook-embed {
    margin-top: 1rem;
  }
}

@media (max-width: 1100px) {
  .meeting-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .meeting-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width:767px) {
  .split {
    grid-template-columns: 1fr;
  }

  .about-image {
    height: 420px;
  }

  .card-grid {
    grid-template-columns: 1fr;
  }

  .card-grid>*:last-child {
    grid-column: auto;
    max-width: none;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 220px;
  }
}

@media (max-width: 600px) {
  .facebook-panel {
    padding: 1.5rem 0.75rem;
  }

  .facebook-panel {
    padding: 1.5rem 0.75rem;
  }

  .facebook-frame-desktop {
    display: none;
  }

  .facebook-frame-mobile {
    display: block;
  }
}

@media (max-width:480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .about-image {
    height: 340px;
  }
}
</style>
