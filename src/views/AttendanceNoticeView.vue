<script setup>
import {
    CheckCircle2,
} from 'lucide-vue-next'

const event = {
    eyebrow: 'SPECIAL GATHERING 2026',
    title: '苗栗百人青年特會',
    subtitle: '預備你的心，一起期待神要做的新事。',
    date: '2026 / 08 / 30',
    time: '09:00 — 17:00',
    location: '基督教竹南靈糧堂',
    address: '苗栗縣竹南鎮忠義街26號B1'
}

const schedule = [
    { time: '08:30', title: '開放入場', description: '歡迎提早抵達，預備心進入聚會。' },
    { time: '09:00', title: '第一堂聚會', description: '敬拜與信息。' },
    { time: '12:00', title: '午間休息', description: '午餐與休息時間。' },
    { time: '13:30', title: '下午聚會', description: '敬拜、信息與回應。' },
    { time: '16:30', title: '聚會結束', description: '願我們帶著領受與盼望回到生活中。' }
]

const reminders = [
    '建議提早 20–30 分鐘抵達會場。',
    '可攜帶聖經、筆記本與個人飲用水。',
    '聚會進行中請將手機調整為靜音模式。',
    '如現場有座位或動線安排，請配合同工指引。'
]
</script>

<template>
    <main class="event-page">
        <section class="event-hero">
            <div class="hero-glow hero-glow--one"></div>
            <div class="hero-glow hero-glow--two"></div>

            <div class="hero-content">
                <p class="eyebrow">{{ event.eyebrow }}</p>
                <h1>{{ event.title }}</h1>
                <p class="hero-subtitle">{{ event.subtitle }}</p>
            </div>
        </section>

        <section class="section schedule-section">
            <div class="container schedule-container">
                <div class="section-heading schedule-heading">
                    <p class="section-label">SCHEDULE</p>
                    <h2>特會流程</h2>
                    <p>當日流程時間可能依現場實際情況微調。</p>
                </div>

                <div class="timeline">
                    <article v-for="(item, index) in schedule" :key="index" class="timeline-item">
                        <div class="timeline-time">{{ item.time }}</div>
                        <div class="timeline-line"><span></span></div>
                        <div class="timeline-content">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.description }}</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <section class="section reminder-section">
            <div class="container">
                <div class="reminder-card">
                    <div class="reminder-heading">
                        <p class="section-label">IMPORTANT NOTES</p>
                        <h2>注意事項</h2>
                    </div>

                    <div class="reminder-list">
                        <div v-for="(item, index) in reminders" :key="index" class="reminder-item">
                            <CheckCircle2 :size="21" />
                            <p>{{ item }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.event-page {
    min-height: 100vh;
    background: #f8f3e8;
    color: #153f4e;
}

.event-hero {
    position: relative;
    min-height: 72vh;
    display: grid;
    place-items: center;
    overflow: hidden;
    text-align: center;

    background:
        linear-gradient(160deg,
            #0d2352 0%,
            #183a7a 35%,
            #f39b2f 78%,
            #ffd36a 100%);
}

.hero-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(8px);
}

.hero-glow--one {
    width: 240px;
    height: 240px;
    top: 60px;
    right: 10%;
    background: rgba(255, 211, 106, 0.32);
}

.hero-glow--two {
    width: 320px;
    height: 320px;
    bottom: -140px;
    left: 8%;
    background: rgba(243, 155, 47, 0.22);
}

.hero-content {
    position: relative;
    z-index: 1;
    width: min(900px, 90%);
}

.eyebrow {
    margin: 0 0 1rem;
    font-size: .82rem;
    font-weight: 900;
    letter-spacing: .28em;

    color: #ffd36b;

    text-shadow:
        0 2px 8px rgba(0, 0, 0, 0.35);

    opacity: 1;
}

.section-label {
    margin: 0;
    font-size: .72rem;
    font-weight: 900;
    letter-spacing: .2em;
}

.event-hero h1 {
    margin: 0;
    font-size: clamp(2.8rem, 7vw, 5rem);
    line-height: 1.08;
    letter-spacing: -.03em;

    color: #fff;

    text-shadow:
        0 4px 14px rgba(0, 0, 0, 0.28),
        0 0 20px rgba(255, 182, 65, 0.18);
}

.hero-subtitle {
    max-width: 620px;
    margin: 1.4rem auto;
    font-size: clamp(1.05rem, 2vw, 1.35rem);
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.92);
}

.scroll-down {
    display: inline-flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: 4rem;
    color: inherit;
    font-size: .82rem;
    font-weight: 700;
    text-decoration: none;
}

.section {
    padding: clamp(3rem, 5vw, 4.8rem) 0;
}

.container {
    width: min(1180px, calc(100% - 3rem));
    margin: 0 auto;
}

.section-heading {
    margin-bottom: 2.2rem;
    text-align: center;
}

.section-label {
    color: #b36acb;
}

.section-heading h2,
.reminder-heading h2,
.location-section h2 {
    margin: .7rem 0;
    font-size: clamp(2rem, 4vw, 3.4rem);
    letter-spacing: -.04em;
}

.section-heading>p:last-child {
    color: #66777d;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.info-card {
    min-height: 230px;
    padding: 2rem;
    border-radius: 28px;
    background: white;
    box-shadow: 0 14px 45px rgba(20, 60, 75, .08);
}

.info-icon {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
    border-radius: 50%;
    background: #f4ebfa;
}

.info-card>span {
    color: #b36acb;
    font-size: .68rem;
    font-weight: 900;
    letter-spacing: .17em;
}

.info-card h3 {
    margin: .5rem 0;
    font-size: 1.5rem;
}

.info-card p {
    color: #63747b;
}

.schedule-section {
    background: #0f254f;
    color: white;
}

.schedule-heading .section-label {
    color: #e2b3ef;
}

.schedule-heading>p:last-child {
    color: rgba(255, 255, 255, .65);
}

.timeline {
    max-width: 800px;
    margin: 0 auto;
}

.timeline-item {
    display: grid;
    grid-template-columns: 100px 34px 1fr;
    min-height: 130px;
}

.timeline-time {
    padding-top: .1rem;
    font-size: 1.2rem;
    font-weight: 900;
}

.timeline-line {
    position: relative;
    display: flex;
    justify-content: center;
}

.timeline-line::after {
    content: '';
    position: absolute;
    top: 20px;
    bottom: 0;
    width: 1px;
    background: rgba(255, 255, 255, .25);
}

.timeline-item:last-child .timeline-line::after {
    display: none;
}

.timeline-line span {
    position: relative;
    z-index: 1;
    width: 12px;
    height: 12px;
    border: 3px solid #153f4e;
    border-radius: 50%;
    background: #ffe234;
    box-shadow: 0 0 0 2px #ffe234;
}

.timeline-content {
    padding-bottom: 2.5rem;
}

.timeline-content h3 {
    margin: 0 0 .4rem;
    font-size: 1.35rem;
}

.timeline-content p {
    margin: 0;
    color: rgba(255, 255, 255, .68);
    line-height: 1.7;
}

.reminder-card {
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 2.2rem;
    padding: clamp(2rem, 4vw, 3rem);
    border-radius: 28px;

    background:
        linear-gradient(135deg,
            #17356f 0%,
            #2a4f96 35%,
            #f3a33a 78%,
            #ffd469 100%);

    color: white;
}

.reminder-list {
    display: grid;
    gap: 1rem;
}

.reminder-item {
    display: flex;
    align-items: flex-start;
    gap: .9rem;
    padding: .9rem 1rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, .14);
    backdrop-filter: blur(3px);
}

.reminder-item svg {
    flex: 0 0 auto;
    margin-top: .15rem;
}

.reminder-item p {
    margin: 0;
    line-height: 1.7;
    color: white
}

@media (max-width: 767px) {
    .event-hero {
        min-height: 78vh;
    }

    .eyebrow {
        font-size: .72rem;
        letter-spacing: .22em;
        margin-bottom: .9rem;
    }

    .event-hero h1 {
        font-size: clamp(2rem, 9vw, 2.6rem);
        line-height: 1.1;
        letter-spacing: -0.04em;
        white-space: nowrap;
    }

    .hero-meta {
        flex-direction: column;
        gap: .5rem;
    }

    .hero-meta i {
        display: none;
    }

    .info-grid {
        grid-template-columns: 1fr;
    }

    .info-card {
        min-height: auto;
    }

    .timeline-item {
        grid-template-columns: 65px 28px 1fr;
    }

    .timeline-time {
        font-size: .95rem;
    }

    .reminder-card {
        grid-template-columns: 1fr;
        gap: 2rem;
        border-radius: 28px;
    }

    .location-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .container {
        width: min(100% - 2rem, 1180px);
    }
}
</style>
