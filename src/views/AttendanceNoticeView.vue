<!--
AttendanceNoticeView - Hero Animated Edition
只強化 Hero 動畫；下方 Accordion 流程與資訊區塊維持原本架構。
-->
<script setup>
import { ref } from 'vue'
import {
    CheckCircle2,
    Megaphone,
    Users,
    MapPinned,
    ClipboardList,
    ChevronDown,
} from 'lucide-vue-next'

const event = {
    eyebrow: 'MIAOLI YOUTH GATHERING 2026',
    title: '苗栗百人青年特會',
    subtitle: 'THE ASSIGNMENT'
}

// 0 = 預設展開第一天；改成 -1 就會預設全部收起。
const openDay = ref(0)

const toggleDay = (index) => {
    openDay.value = openDay.value === index ? -1 : index
}

// 特會流程｜目前依「2026 苗栗青年粗流」整理。
const schedules = [
    {
        day: '第一天',
        summary: '13:00 報到 · 21:30 散場',
        items: [
            { time: '13:00–14:00', title: '學員報到', description: '以教會為單位' },
            { time: '14:00–15:10', title: '相見歡' },
            { time: '15:10–15:20', title: '休息' },
            { time: '15:20–15:40', title: '敬拜' },
            { time: '15:20–17:00', title: '信息' },
            { time: '17:00–17:30', title: '小隊分享' },
            { time: '17:30–19:00', title: '晚餐時間' },
            { time: '19:00–19:30', title: '敬拜' },
            { time: '19:30–21:15', title: '信息' },
            { time: '21:15–21:30', title: '散場' }
        ]
    },
    {
        day: '第二天',
        summary: '08:00 早餐 · 21:30 散場',
        items: [
            { time: '08:00–09:00', title: '早餐' },
            { time: '09:00–09:10', title: '會前禱告' },
            { time: '09:10–09:30', title: '敬拜' },
            { time: '09:30–11:00', title: '信息' },
            { time: '11:00–11:15', title: '休息' },
            { time: '11:15–11:45', title: '尋人啟事卡教學' },
            { time: '11:45–12:15', title: '小隊福音出擊預備' },
            { time: '12:15–13:00', title: '中餐' },
            { time: '13:00–13:20', title: '敬拜' },
            { time: '13:20–14:30', title: 'WORKSHOP1' },
            { time: '14:30–14:40', title: '休息' },
            { time: '14:40–15:50', title: 'WORKSHOP2' },
            { time: '15:50–16:00', title: '休息' },
            { time: '16:00–18:00', title: '點亮任務＋晚餐' },
            { time: '18:00–18:20', title: '回程' },
            { time: '18:20–18:50', title: '字創一格' },
            { time: '19:00–19:30', title: '敬拜' },
            { time: '19:30–21:00', title: '晚會' },
            { time: '21:00–21:30', title: '散場' }
        ]
    },
    {
        day: '第三天',
        summary: '08:00 早餐 · 21:30 佈道晚會',
        items: [
            { time: '08:00–09:00', title: '早餐' },
            { time: '09:00–09:10', title: '會前禱告' },
            { time: '09:10–09:30', title: '敬拜' },
            { time: '09:30–11:30', title: '信息＋小隊福音出擊預備' },
            { time: '11:30–11:40', title: '報告' },
            { time: '11:40–13:00', title: '中餐' },
            { time: '13:00–13:20', title: '敬拜' },
            { time: '13:20–14:30', title: 'WORKSHOP3' },
            { time: '14:30–14:40', title: '休息' },
            { time: '14:40–15:50', title: 'WORKSHOP4' },
            { time: '15:50–16:00', title: '休息' },
            { time: '16:00–17:00', title: '點亮任務二' },
            { time: '17:00–17:15', title: '回程' },
            { time: '17:15–18:30', title: '點亮任務見證＋晚餐' },
            { time: '18:30–18:50', title: '前往海口' },
            { time: '18:50–19:20', title: '字創一格' },
            { time: '19:30–21:30', title: '佈道晚會' }
        ]
    },
    {
        day: '第四天',
        summary: '08:00 早餐 · 12:00 明年見',
        items: [
            { time: '08:00–09:00', title: '早餐' },
            { time: '09:00–09:05', title: '會前禱告' },
            { time: '09:05–09:45', title: '敬拜' },
            { time: '09:45–11:20', title: '信息' },
            { time: '11:20–12:00', title: '中餐' },
            { time: '12:00', title: '明年見！' }
        ]
    }
]

// 次要行程會用比較淡的樣式呈現。
const isSecondaryItem = (title) => {
    return [
        '早餐',
        '中餐',
        '晚餐',
        '晚餐時間',
        '休息',
        '回程',
        '散場',
        '前往海口',
        '會前禱告'
    ].some((keyword) => title.includes(keyword))
}

// 赴會通知｜依「2026 苗栗百人青年赴會通知」整理。
const attendanceNotice = {
    theme: 'THE ASSIGNMENT',
    intro: [
        '四年前，我們開始了一個很單純的夢想—讓苗栗的青年，不再只是各自在自己的教會裡，而是有一天能夠一起站在神的面前。',
        '於是，「苗栗百人青年」開始了，一路走到第四屆，我們越來越明白，神把我們聚集起來，不只是為了辦一場特會，也不只是為了經歷幾天很感動、很熱血的聚會。',
        '每一次的聚集，都在預備我們回到自己的位置。',
        '回到校園、回到家庭、回到職場、回到教會，在神所放置我們的地方，活出屬於這個世代的使命。',
        '今年，我們把主題定為——THE ASSIGNMENT',
        '也許現在的你，還不知道自己的 Assignment 是什麼；也許你對信仰還有很多疑問；也許你只是單純被朋友揪來，甚至還不知道這四天會發生什麼，這些都沒關係。',
        '我們期待你帶著最真實的自己來到這裡，在敬拜裡、在信息裡、在彼此的生命裡，重新聽見神的聲音，也重新認識祂放在你生命中的呼召。',
        '因為我們相信，真正的傳承，從來不是複製一個人的樣子，而是當一個生命被神點燃，又去點燃下一個生命。',
        '第四屆苗栗百人青年，不是要你成為誰，而是期待你在這裡，更深地知道——神呼召你成為誰，又差派你往哪裡去。',
        '歡迎你來到 THE ASSIGNMENT 接下來，請帶著期待，也預備好自己。',
        '我們，苗青見。'
    ],
    eventInfo: [
        { label: '營會日期', value: '2026 年 8 月 25 日（二）至 8 月 28 日（四）' },
        { label: '營會地點', value: '竹南靈糧堂（苗栗縣竹南鎮忠義街 26 號 B1）' }
    ],
    checkin: {
        info: [
            { label: '報到日期', value: '2026 年 8 月 25 日（二）' },
            { label: '報到時間', value: '13:00–13:50' },
            { label: '報到地點', value: '竹南靈糧堂（苗栗縣竹南鎮忠義街 26 號 B1）' },
            { label: '報到方式', value: '報到處' }
        ],
        methods: [
            '教會／團體：請派代表到會場報到台報到。',
            '個人報名：請自行到報到台報到。'
        ],
        flows: [
            { title: '同工、隊輔、學員報到流程', value: '報到（派一位代表） → 領取名牌（問題處理或繳費） → 行李寄放（分教會單位）' },
            { title: '牧者報到流程', value: '牧者報到專區 → 領取名牌（問題處理或繳費） → 牧者接待區' }
        ]
    },
    accommodation: [
        {
            label: '男生',
            value: '新光明旅社（苗栗縣竹南鎮博愛街 48 號）',
            mapUrl: 'https://maps.app.goo.gl/Yez52VASV7Vd3LPG6'
        },
        {
            label: '女生',
            value: '竹豐旅社（苗栗縣竹南鎮和平街 95 號）',
            mapUrl: 'https://maps.app.goo.gl/mCCinnCysqjbWT5t5'
        },
        { label: '分房表', value: '於營會第一天公布' }
    ],
    meals: [
        '供餐時間：8/25（中餐、晚餐）、8/26（早餐、午餐）、8/27（早餐、中餐、晚餐）、8/28（早餐、中餐）。',
        '※注意事項：8/26晚餐自理',
        '早餐會送到活動會場，請各隊輔按照膳食同工約定的時間與地點領取。',
        '用餐後，垃圾請依照分類丟棄。',
        '若食量小，還未用餐前，可以分給需要的學員，減少廚餘。'
    ],
    rules: [
        {
            title: '一、報到與個人物品',
            items: [
                '特會期間請全程配戴名牌，並妥善保管；若遺失需補發，將酌收 50 元補發費。',
                '請攜帶紙本聖經、筆記本及文具。',
                '請攜帶健保卡及個人常備藥品。',
                '會場冷氣較強，建議攜帶薄外套。',
                '貴重物品請隨身攜帶並自行妥善保管，如有遺失，大會恕不負保管及賠償責任。',
                '若有物品遺失，請至大會服務處詢問；營會結束後仍未領取之失物，將保留一週，逾期統一處理。'
            ]
        },
        {
            title: '二、課程與會場規範',
            items: [
                '課程期間請將手機調整為靜音或震動模式，並配合大會手機管理規定，於指定時間交由隊輔或工作人員保管，休息時間統一歸還；若以手機做筆記，請勿進行與課程無關之使用。',
                '除大會指定用餐時間及區域外，會場內禁止飲食及飲用有色飲料，僅限白開水。',
                '請共同愛護會場環境、設備及所有公用物品，請勿任意移動、拆卸、塗寫或損壞；使用完畢後請協助恢復原狀。',
                '垃圾、廚餘及回收物，請依照大會指示分類並丟棄至指定地點，共同維護環境整潔。'
            ]
        },
        {
            title: '三、用餐規範',
            items: [
                '用餐及取餐時，請依照大會指示，前往指定地點依序領取餐點，並配合現場工作人員引導。',
                '用餐完畢後，請將垃圾、廚餘及餐具依照現場指示進行分類與整理。'
            ]
        },
        {
            title: '四、安全與行動規範',
            items: [
                '營會期間請以小隊為單位行動，勿擅自脫隊或離開營會、住宿場地。',
                '如需中途離營，請先告知所屬教會隊輔、家長或牧者，並攜帶身分證件至大會服務台填寫離營切結書；若人在住宿地點，請通知隊輔或家長，並攜帶證件向住宿同工辦理離營手續。',
                '未依規定辦理離營手續而擅自離開者，大會不承擔離營後之安全責任。',
                '活動期間請穿著合宜、舒適、方便活動的服裝，避免過度暴露或過短的衣著，也請避免影響跑動、外出及團體活動的穿著。'
            ]
        },
        {
            title: '五、健康與醫療',
            items: [
                '營會期間若有任何身體不適，請立即告知隊輔或工作人員，並前往醫療組尋求協助。',
                '為保障用藥安全，大會醫療組不提供任何口服藥物；如有個人用藥需求，請自行攜帶個人常備藥品。'
            ]
        }
    ],
    closing: '請大家一起配合大會規範、尊重彼此、愛護場地，讓我們在安全、整潔且專心的環境中，一起享受這四天的聚集！',
    contact: [
        { label: '連絡電話', value: '037-484393' },
        { label: '聯絡地址', value: '竹南靈糧堂（苗栗縣竹南鎮忠義街 26 號 B1）' },
        { label: '主辦單位', value: '社團法人苗栗縣好厝邊關懷協會' }
    ]
}

// 分組名單
const groupList = [
    { number: 1, members: ['根祈惠', '楊詩恩', '張公輔', '絲柏勛', '絲正君'] },
    { number: 2, members: ['吳亮東', '陳明輝', '王呈郝', '葉立丞', '杜怡萱', '黃楦容', '賴秉佑'] },
    { number: 3, members: ['陳亞瑟', '林和翌', '范珈瑄', '李翌興', '葉苡潔'] },
    { number: 4, members: ['黃詩晴', '李佑興', '彭映慈', '王麗淳', '吳思嫻', '徐國杰'] },
    { number: 5, members: ['羅路得', '李品涵', '鄭芯怡', '李品柔', '蔣可芯', '李語婕'] },
    { number: 6, members: ['徐丞佑', '陳儀安', '李品于', '楊戬', '風詩涵'] },
    { number: 7, members: ['陳孟婷', '賴芊蕙', '賴芊柔', '宋致恆', '陳珈珈'] },
    { number: 8, members: ['林恩亦', '張新民', '劉皓翔', '楊明峻', '王品崴', '張宇傑'] },
    { number: 9, members: ['江冠怡', '劉雨璇', '羅予彤', '羅予岑', '區曉駿', '陳志賢'] },
    { number: 10, members: ['黃怡萍', '胡佳玲', '徐清心', '莊苡貞', '謝承翰', '陳以恩'] },
    { number: 11, members: ['王富禾', '阮宥霆', '趙育廷', '趙家彤', '阮宥翔', '阮宥澄', '石皓謙'] },
    { number: 12, members: ['黃麒恩', '李旻祐', '葉璽艾', '吳一鷺', '黃裕順', '沈宗璇', '陳思穎'] },
    { number: 13, members: ['李宥璇', '葉璽悅', '曾喆煜', '林語昕', '陳恩曦', '廖采瞳'] },
    { number: 14, members: ['余皓薇', '黃芝羽', '趙慕靈', '林品宣', '陳員緣', '賴崇禮'] },
    { number: 15, members: ['巫宇童', '葉璽拉', '林紫芯', '林亞敬', '趙慕榮', '粱傑麟'] },
    { number: 16, members: ['游溢恩', '陳秉田', '陳倚誼', '陳恩樂', '李宥霖', '黃紀宜'] }
]

// 傳福音推薦地
const evangelismPlaces = [
    {
        name: '竹南火車站',
        mapUrl: 'https://maps.app.goo.gl/Zs5iTFpYWXucKSwp9'
    },
    {
        name: '尚順購物中心',
        mapUrl: 'https://maps.app.goo.gl/68mSDbkvBWDqxRvy7'
    },
    {
        name: '頭份市綜合運動公園',
        mapUrl: 'https://maps.app.goo.gl/m3xDVSzX5ASL8SpM9'
    },
    {
        name: '博愛公園',
        mapUrl: 'https://maps.app.goo.gl/kvQFHfuR7SCFBwBF7'
    }
]

const reminders = [
    '建議提早抵達集合或聚會地點，並留意現場同工通知。',
    '可攜帶聖經、筆記本與個人飲用水。',
    '聚會進行中請將手機調整為靜音模式。',
    '如現場有座位、分組或動線安排，請配合同工指引。'
]

// 各種公告｜臨時異動、集合提醒等都可以直接加在這裡。
const announcements = [
    '目前尚無公告。'
]
</script>

<template>
    <main class="event-page">
        <section class="event-hero">
            <div class="hero-aurora"></div>
            <div class="hero-grid"></div>
            <div class="hero-glow hero-glow--one"></div>
            <div class="hero-glow hero-glow--two"></div>
            <div class="hero-glow hero-glow--three"></div>

            <div class="hero-content">
                <p class="eyebrow hero-eyebrow">{{ event.eyebrow }}</p>

                <div class="hero-title-wrap">
                    <h1 class="hero-title">{{ event.title }}</h1>
                    <span class="hero-title-shine" aria-hidden="true"></span>
                </div>

                <p class="hero-subtitle">{{ event.subtitle }}</p>

                <div class="hero-scroll-cue" aria-hidden="true">
                    <span></span>
                </div>
            </div>
        </section>

        <!-- 01 特會流程 -->
        <section class="section schedule-section">
            <div class="container schedule-container">
                <div class="section-heading schedule-heading">
                    <p class="section-label">SCHEDULE</p>
                    <h2>特會流程</h2>
                </div>

                <!-- 四天 Accordion -->
                <div class="schedule-accordion">
                    <article v-for="(schedule, dayIndex) in schedules" :key="schedule.day" class="day-card"
                        :class="{ 'day-card--open': openDay === dayIndex }">
                        <button class="day-toggle" type="button" :aria-expanded="openDay === dayIndex"
                            @click="toggleDay(dayIndex)">
                            <div class="day-toggle__left">
                                <span class="day-number">DAY {{ dayIndex + 1 }}</span>

                                <div>
                                    <h3>{{ schedule.day }}</h3>
                                    <p>{{ schedule.summary }}</p>
                                </div>
                            </div>

                            <ChevronDown class="day-chevron" :class="{ 'day-chevron--open': openDay === dayIndex }"
                                :size="22" />
                        </button>

                        <div v-show="openDay === dayIndex" class="day-content">
                            <div v-for="(item, index) in schedule.items" :key="`${schedule.day}-${index}`"
                                class="schedule-row"
                                :class="{ 'schedule-row--secondary': isSecondaryItem(item.title) }">
                                <div class="schedule-time">{{ item.time }}</div>

                                <div class="schedule-info">
                                    <h4>{{ item.title }}</h4>
                                    <p v-if="item.description">{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- 02 赴會通知 -->
        <section class="section light-section attendance-section">
            <div class="container attendance-container">
                <div class="section-heading attendance-heading">
                    <p class="section-label">ATTENDANCE NOTICE</p>
                    <h2>赴會通知</h2>
                    <p>2026 苗栗百人青年｜THE ASSIGNMENT</p>
                </div>

                <article class="attendance-intro">
                    <div class="attendance-intro__icon">
                        <ClipboardList :size="28" />
                    </div>
                    <div>
                        <p class="attendance-kicker">前言</p>
                        <h3>{{ attendanceNotice.theme }}</h3>
                        <p v-for="(paragraph, index) in attendanceNotice.intro" :key="`intro-${index}`">
                            {{ paragraph }}
                        </p>
                    </div>
                </article>

                <div class="attendance-grid">
                    <article class="attendance-card attendance-card--highlight">
                        <p class="attendance-card__eyebrow">EVENT INFO</p>
                        <h3>營會資訊</h3>
                        <dl class="notice-detail-list">
                            <div v-for="item in attendanceNotice.eventInfo" :key="item.label">
                                <dt>{{ item.label }}</dt>
                                <dd>{{ item.value }}</dd>
                            </div>
                        </dl>
                    </article>

                    <article class="attendance-card">
                        <p class="attendance-card__eyebrow">CHECK-IN</p>
                        <h3>報到方式</h3>
                        <dl class="notice-detail-list">
                            <div v-for="item in attendanceNotice.checkin.info" :key="item.label">
                                <dt>{{ item.label }}</dt>
                                <dd>{{ item.value }}</dd>
                            </div>
                        </dl>
                        <ol class="notice-list">
                            <li v-for="item in attendanceNotice.checkin.methods" :key="item">{{ item }}</li>
                        </ol>
                    </article>
                </div>

                <article class="attendance-card attendance-card--wide">
                    <p class="attendance-card__eyebrow">CHECK-IN FLOW</p>
                    <h3>報到流程</h3>
                    <div class="notice-flow-grid">
                        <div v-for="flow in attendanceNotice.checkin.flows" :key="flow.title" class="notice-flow">
                            <h4>{{ flow.title }}</h4>
                            <p>{{ flow.value }}</p>
                        </div>
                    </div>
                </article>

                <div class="attendance-grid">
                    <article class="attendance-card">
                        <p class="attendance-card__eyebrow">ACCOMMODATION</p>
                        <h3>住宿安排</h3>
                        <dl class="notice-detail-list">
                            <div v-for="item in attendanceNotice.accommodation" :key="item.label">
                                <dt>{{ item.label }}</dt>
                                <dd class="accommodation-detail">
                                    <span>{{ item.value }}</span>
                                    <a v-if="item.mapUrl" class="accommodation-map-link" :href="item.mapUrl"
                                        target="_blank" rel="noopener noreferrer"
                                        :aria-label="`在 Google Maps 開啟 ${item.value}`">
                                        <MapPinned :size="14" />
                                        <span>Google Maps</span>
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                </dd>
                            </div>
                        </dl>

                        <p class="accommodation-warning">
                            <strong>住宿提醒｜</strong>住宿地點不提供個人盥洗用品，請住宿學員務必自行攜帶牙刷、牙膏、毛巾、洗髮精、沐浴乳等個人盥洗用品。
                        </p>
                    </article>

                    <article class="attendance-card">
                        <p class="attendance-card__eyebrow">MEALS</p>
                        <h3>膳食安排</h3>
                        <ol class="notice-list">
                            <li v-for="item in attendanceNotice.meals" :key="item"
                                :class="{ 'meal-self': item.includes('8/26晚餐自理') }">
                                {{ item }}
                            </li>
                        </ol>
                    </article>
                </div>

                <article class="attendance-card attendance-card--wide transport-card">
                    <p class="attendance-card__eyebrow">TRANSPORTATION</p>
                    <h3>交通注意事項</h3>

                    <div class="transport-date">8/27（四）晚會佈道日</div>

                    <div class="transport-grid">
                        <div class="transport-item">
                            <h4>去程｜前往海口國小活動中心</h4>
                            <p>大會將安排接駁車，統一載送隊輔及學員前往晚會場地。</p>
                        </div>

                        <div class="transport-item">
                            <h4>回程｜晚會結束後</h4>
                            <p>接駁車僅載送有住宿的學員前往火車站。</p>
                        </div>
                    </div>

                    <div class="transport-warning">
                        <strong>未住宿學員請特別注意：</strong>
                        <p>
                            請務必提前通知家長，於 <strong>21:30</strong> 至海口國小活動中心接送，
                            當日晚間不另安排回程接駁。
                        </p>
                    </div>

                    <div class="transport-info">
                        <div>
                            <span>晚會地點</span>
                            <strong>海口國小活動中心</strong>
                        </div>
                        <div>
                            <span>家長接送時間</span>
                            <strong>21:30</strong>
                        </div>
                    </div>
                </article>

                <article class="attendance-rules">
                    <div class="attendance-rules__heading">
                        <p class="attendance-card__eyebrow">IMPORTANT NOTES</p>
                        <h3>大會注意事項</h3>
                        <p>為維護聚會品質、場地秩序及所有學員的安全，請大家於特會期間共同遵守以下事項：</p>
                    </div>

                    <div class="attendance-rule-groups">
                        <section v-for="group in attendanceNotice.rules" :key="group.title"
                            class="attendance-rule-group">
                            <h4>{{ group.title }}</h4>
                            <ol class="notice-list notice-list--rules">
                                <li v-for="item in group.items" :key="item">{{ item }}</li>
                            </ol>
                        </section>
                    </div>

                    <p class="attendance-closing">{{ attendanceNotice.closing }}</p>
                </article>

                <article class="attendance-card attendance-card--contact">
                    <p class="attendance-card__eyebrow">CONTACT</p>
                    <h3>聯絡方式</h3>
                    <dl class="notice-detail-list notice-detail-list--contact">
                        <div v-for="item in attendanceNotice.contact" :key="item.label">
                            <dt>{{ item.label }}</dt>
                            <dd>{{ item.value }}</dd>
                        </div>
                    </dl>
                </article>
            </div>
        </section>

        <!-- 03 分組名單 -->
        <section class="section alt-section group-section">
            <div class="container group-container">
                <div class="section-heading">
                    <p class="section-label">GROUP LIST</p>
                    <h2>分組名單</h2>
                    <p>共 16 組｜請依組別確認自己的名字</p>
                </div>

                <div class="group-grid">
                    <article v-for="group in groupList" :key="group.number" class="group-card">
                        <div class="group-card__header">
                            <div class="group-card__title">
                                <span class="group-card__icon">
                                    <Users :size="18" />
                                </span>
                                <h3>第 {{ group.number }} 組</h3>
                            </div>
                            <span class="group-card__count">{{ group.members.length }} 人</span>
                        </div>

                        <div class="group-members">
                            <span v-for="member in group.members" :key="member" class="member-chip">
                                {{ member }}
                            </span>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- 04 傳福音推薦地 -->
        <section class="section light-section">
            <div class="container">
                <div class="section-heading">
                    <p class="section-label">EVANGELISM PLACES</p>
                    <h2>傳福音推薦地</h2>
                    <p>點選地點即可開啟 Google Maps 導航。</p>
                </div>

                <div class="evangelism-grid">
                    <a v-for="(place, index) in evangelismPlaces" :key="place.name" class="evangelism-card"
                        :href="place.mapUrl" target="_blank" rel="noopener noreferrer"
                        :aria-label="`在 Google Maps 開啟 ${place.name}`">
                        <div class="evangelism-card__icon">
                            <MapPinned :size="25" />
                        </div>

                        <div class="evangelism-card__content">
                            <span class="evangelism-card__number">PLACE {{ String(index + 1).padStart(2, '0') }}</span>
                            <h3>{{ place.name }}</h3>
                            <span class="evangelism-card__link">開啟 Google Maps <span aria-hidden="true">↗</span></span>
                        </div>
                    </a>
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

/* =========================
   Hero｜Opening 動畫版
   ========================= */
.event-hero {
    position: relative;
    min-height: 52vh;
    display: grid;
    place-items: center;
    overflow: hidden;
    isolation: isolate;
    text-align: center;

    background:
        linear-gradient(120deg,
            #123976 0%,
            #173f82 24%,
            #765b72 48%,
            #f39b2f 74%,
            #ffd36a 100%);
    background-size: 220% 220%;
    animation: heroGradientMove 13s ease-in-out infinite;
}

/* 額外暖色流光層 */
.hero-aurora {
    position: absolute;
    z-index: -3;
    inset: -35%;
    opacity: .55;
    filter: blur(55px);
    background:
        conic-gradient(from 180deg at 50% 50%,
            rgba(255, 211, 106, .10),
            rgba(34, 93, 181, .18),
            rgba(255, 164, 57, .28),
            rgba(121, 70, 155, .14),
            rgba(255, 211, 106, .10));
    animation: auroraRotate 22s linear infinite;
}

/* 很淡的科技格線，增加層次但不搶畫面 */
.hero-grid {
    position: absolute;
    z-index: -2;
    inset: 0;
    opacity: .12;
    background-image:
        linear-gradient(rgba(255, 255, 255, .12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, .12) 1px, transparent 1px);
    background-size: 46px 46px;
    mask-image: linear-gradient(to bottom, transparent 0%, #000 28%, #000 74%, transparent 100%);
    animation: gridDrift 18s linear infinite;
}

.hero-glow {
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(10px);
    will-change: transform;
}

.hero-glow--one {
    width: 250px;
    height: 250px;
    top: 4%;
    right: 7%;
    background: radial-gradient(circle, rgba(255, 220, 128, .55), rgba(255, 184, 65, .10) 66%, transparent 72%);
    animation: floatOne 8s ease-in-out infinite alternate;
}

.hero-glow--two {
    width: 330px;
    height: 330px;
    left: 5%;
    bottom: -38%;
    background: radial-gradient(circle, rgba(255, 182, 93, .35), rgba(255, 211, 106, .06) 68%, transparent 74%);
    animation: floatTwo 10s ease-in-out infinite alternate;
}

.hero-glow--three {
    width: 180px;
    height: 180px;
    left: 48%;
    top: 5%;
    opacity: .45;
    background: radial-gradient(circle, rgba(179, 106, 203, .28), transparent 70%);
    animation: floatThree 7s ease-in-out infinite alternate;
}

.hero-content {
    position: relative;
    z-index: 2;
    width: min(920px, 90%);
    padding: 2rem 0;
}

.hero-eyebrow {
    margin: 0 0 1rem;
    opacity: 0;
    transform: translateY(12px);
    color: #ffe07f;
    font-size: .78rem;
    font-weight: 950;
    letter-spacing: .30em;
    text-shadow: 0 2px 10px rgba(0, 0, 0, .30);
    animation: eyebrowIn .7s ease-out .10s forwards;
}

.hero-title-wrap {
    position: relative;
    display: inline-block;
    overflow: hidden;
    padding: .08em .15em .16em;
}

.hero-title {
    position: relative;
    z-index: 2;
    margin: 0;
    opacity: 0;
    filter: blur(16px);
    transform: translateY(38px) scale(.94);
    color: #fff;
    font-size: clamp(3.3rem, 7.6vw, 6.2rem);
    font-weight: 950;
    line-height: 1.02;
    letter-spacing: .08em;
    text-shadow:
        0 7px 22px rgba(0, 0, 0, .28),
        0 0 34px rgba(255, 210, 100, .12);

    animation:
        heroTitleIn 1.05s cubic-bezier(.16, 1, .3, 1) .28s forwards,
        titleBreathe 5.5s ease-in-out 1.8s infinite;
}

/* 標題掃光 */
.hero-title-shine {
    position: absolute;
    z-index: 3;
    inset: -25% -15%;
    pointer-events: none;
    transform: translateX(-150%) skewX(-16deg);
    background:
        linear-gradient(105deg,
            transparent 36%,
            rgba(255, 238, 180, .08) 43%,
            rgba(255, 255, 255, .72) 50%,
            rgba(255, 215, 110, .14) 57%,
            transparent 64%);
    mix-blend-mode: screen;
    animation: titleShine 1.2s cubic-bezier(.22, .61, .36, 1) 1.05s forwards;
}

.hero-subtitle {
    max-width: 620px;
    margin: 1.15rem auto 0;
    opacity: 0;
    transform: translateY(18px);
    color: rgba(255, 255, 255, .94);
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.8;
    text-shadow: 0 2px 10px rgba(0, 0, 0, .22);
    animation: subtitleIn .8s ease-out 1.05s forwards;
}

/* 底部小提示，讓 Hero 有 Opening 收尾感 */
.hero-scroll-cue {
    width: 24px;
    height: 38px;
    display: grid;
    place-items: start center;
    margin: 1.8rem auto 0;
    opacity: 0;
    border: 1px solid rgba(255, 255, 255, .35);
    border-radius: 999px;
    animation: cueIn .6s ease-out 1.55s forwards;
}

.hero-scroll-cue span {
    width: 4px;
    height: 8px;
    margin-top: 7px;
    border-radius: 999px;
    background: #ffd36a;
    animation: cueDot 1.5s ease-in-out 1.7s infinite;
}

@keyframes heroGradientMove {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

@keyframes auroraRotate {
    to {
        transform: rotate(360deg) scale(1.06);
    }
}

@keyframes gridDrift {
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        transform: translate3d(46px, 46px, 0);
    }
}

@keyframes floatOne {
    from {
        transform: translate3d(0, 0, 0) scale(1);
    }

    to {
        transform: translate3d(-48px, 34px, 0) scale(1.16);
    }
}

@keyframes floatTwo {
    from {
        transform: translate3d(0, 0, 0) scale(1);
    }

    to {
        transform: translate3d(62px, -34px, 0) scale(.92);
    }
}

@keyframes floatThree {
    from {
        transform: translate3d(0, 0, 0) scale(.95);
    }

    to {
        transform: translate3d(-35px, 25px, 0) scale(1.18);
    }
}

@keyframes eyebrowIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes heroTitleIn {
    0% {
        opacity: 0;
        filter: blur(16px);
        transform: translateY(38px) scale(.94);
        letter-spacing: .08em;
    }

    70% {
        opacity: 1;
        filter: blur(1px);
    }

    100% {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0) scale(1);
        letter-spacing: -.035em;
    }
}

@keyframes titleShine {
    to {
        transform: translateX(150%) skewX(-16deg);
    }
}

@keyframes subtitleIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes titleBreathe {

    0%,
    100% {
        text-shadow:
            0 7px 22px rgba(0, 0, 0, .28),
            0 0 26px rgba(255, 210, 100, .08);
    }

    50% {
        text-shadow:
            0 7px 22px rgba(0, 0, 0, .28),
            0 0 42px rgba(255, 210, 100, .22);
    }
}

@keyframes cueIn {
    to {
        opacity: .72;
    }
}

@keyframes cueDot {
    0% {
        opacity: 0;
        transform: translateY(0);
    }

    35% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translateY(15px);
    }
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
    margin: 0;
    color: #b36acb;
    font-size: .72rem;
    font-weight: 900;
    letter-spacing: .2em;
}

.section-heading h2,
.reminder-heading h2 {
    margin: .7rem 0;
    font-size: clamp(2rem, 4vw, 3.4rem);
    letter-spacing: -.04em;
}

.section-heading>p:last-child {
    color: #66777d;
}

/* =========================
   特會流程 Accordion
   ========================= */
.schedule-section {
    background: #0f254f;
    color: white;
}

.schedule-container {
    max-width: 960px;
}

.schedule-heading .section-label {
    color: #e2b3ef;
}

.schedule-heading>p:last-child {
    color: rgba(255, 255, 255, .65);
}

.schedule-accordion {
    display: grid;
    gap: .9rem;
}

.day-card {
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, .12);
    border-radius: 20px;
    background: rgba(255, 255, 255, .055);
    transition:
        border-color .2s ease,
        background .2s ease;
}

.day-card--open {
    border-color: rgba(255, 211, 106, .4);
    background: rgba(255, 255, 255, .075);
}

.day-toggle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem 1.4rem;
    border: 0;
    background: transparent;
    color: inherit;
    text-align: left;
    cursor: pointer;
}

.day-toggle__left {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 1.2rem;
}

.day-number {
    flex: 0 0 auto;
    min-width: 62px;
    color: #ffd36a;
    font-size: .72rem;
    font-weight: 900;
    letter-spacing: .13em;
}

.day-toggle h3 {
    margin: 0 0 .22rem;
    font-size: 1.35rem;
}

.day-toggle p {
    margin: 0;
    color: rgba(255, 255, 255, .58);
    font-size: .88rem;
}

.day-chevron {
    flex: 0 0 auto;
    color: #ffd36a;
    transition: transform .22s ease;
}

.day-chevron--open {
    transform: rotate(180deg);
}

.day-content {
    padding: 0 1.4rem .75rem;
    border-top: 1px solid rgba(255, 255, 255, .09);
}

.schedule-row {
    display: grid;
    grid-template-columns: 128px minmax(0, 1fr);
    gap: 1.2rem;
    align-items: start;
    padding: .9rem .1rem;
    border-bottom: 1px solid rgba(255, 255, 255, .08);
}

.schedule-row:last-child {
    border-bottom: 0;
}

.schedule-time {
    padding-top: .06rem;
    color: #ffd36a;
    font-size: .88rem;
    font-weight: 850;
    white-space: nowrap;
}

.schedule-info h4 {
    margin: 0;
    color: #fff;
    font-size: 1.02rem;
    font-weight: 750;
    line-height: 1.45;
}

.schedule-info p {
    margin: .22rem 0 0;
    color: rgba(255, 255, 255, .58);
    font-size: .88rem;
    line-height: 1.55;
}

/* 早餐、用餐、休息、回程等次要項目淡一點 */
.schedule-row--secondary .schedule-time {
    color: rgba(255, 255, 255, .46);
}

.schedule-row--secondary .schedule-info h4 {
    color: rgba(255, 255, 255, .62);
    font-weight: 600;
}

/* 一般資訊區塊 */
.light-section {
    background: #f8f3e8;
}

.alt-section {
    background: #f1eadf;
}

.announcement-section {
    background: #fffaf1;
}

.simple-card {
    width: min(800px, 100%);
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin: 0 auto;
    padding: 1.5rem 1.6rem;
    border-radius: 22px;
    background: white;
    box-shadow: 0 12px 35px rgba(20, 60, 75, .07);
}

.simple-card>svg {
    flex: 0 0 auto;
    color: #b36acb;
}

.simple-card p {
    margin: 0;
    color: #63747b;
    line-height: 1.8;
}

.simple-card p+p {
    margin-top: .6rem;
}

.announcement-card>svg {
    color: #f39b2f;
}

/* =========================
   傳福音推薦地
   ========================= */
.evangelism-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    width: min(960px, 100%);
    margin: 0 auto;
}

.evangelism-card {
    display: flex;
    align-items: center;
    gap: 1.1rem;
    min-height: 138px;
    padding: 1.35rem 1.45rem;
    border: 1px solid rgba(179, 106, 203, .12);
    border-radius: 22px;
    background: #fff;
    color: inherit;
    text-decoration: none;
    box-shadow: 0 12px 35px rgba(20, 60, 75, .07);
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.evangelism-card:hover {
    transform: translateY(-4px);
    border-color: rgba(179, 106, 203, .28);
    box-shadow: 0 18px 42px rgba(20, 60, 75, .12);
}

.evangelism-card:focus-visible {
    outline: 3px solid rgba(179, 106, 203, .35);
    outline-offset: 4px;
}

.evangelism-card__icon {
    flex: 0 0 auto;
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: #f5eaf8;
    color: #a75fc0;
}

.evangelism-card__content {
    min-width: 0;
}

.evangelism-card__number {
    display: block;
    margin-bottom: .32rem;
    color: #b36acb;
    font-size: .68rem;
    font-weight: 900;
    letter-spacing: .13em;
}

.evangelism-card h3 {
    margin: 0;
    color: #153f4e;
    font-size: 1.18rem;
    line-height: 1.35;
}

.evangelism-card__link {
    display: inline-block;
    margin-top: .62rem;
    color: #687980;
    font-size: .82rem;
    font-weight: 700;
}

.evangelism-card:hover .evangelism-card__link {
    color: #9b55b5;
}

/* =========================
   分組名單
   ========================= */
.group-container {
    max-width: 1120px;
}

.group-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
}

.group-card {
    min-width: 0;
    padding: 1.2rem;
    border: 1px solid rgba(21, 63, 78, .08);
    border-radius: 20px;
    background: white;
    box-shadow: 0 10px 30px rgba(20, 60, 75, .055);
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.group-card:hover {
    transform: translateY(-3px);
    border-color: rgba(179, 106, 203, .22);
    box-shadow: 0 16px 34px rgba(20, 60, 75, .09);
}

.group-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .75rem;
    margin-bottom: 1rem;
    padding-bottom: .85rem;
    border-bottom: 1px solid rgba(21, 63, 78, .08);
}

.group-card__title {
    display: flex;
    align-items: center;
    gap: .65rem;
    min-width: 0;
}

.group-card__icon {
    width: 34px;
    height: 34px;
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    border-radius: 11px;
    background: #f3e5f7;
    color: #a65bc1;
}

.group-card h3 {
    margin: 0;
    color: #153f4e;
    font-size: 1.05rem;
}

.group-card__count {
    flex: 0 0 auto;
    padding: .28rem .55rem;
    border-radius: 999px;
    background: #fff3dc;
    color: #9a651f;
    font-size: .72rem;
    font-weight: 850;
}

.group-members {
    display: flex;
    flex-wrap: wrap;
    gap: .48rem;
}

.member-chip {
    display: inline-flex;
    align-items: center;
    padding: .38rem .58rem;
    border-radius: 10px;
    background: #f7f3f8;
    color: #52656d;
    font-size: .86rem;
    font-weight: 650;
    line-height: 1.35;
}

@media (max-width: 1000px) {
    .group-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 760px) {
    .group-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 520px) {
    .group-grid {
        grid-template-columns: 1fr;
    }

    .group-card {
        padding: 1rem;
    }
}

/* =========================
   赴會通知
   ========================= */
.attendance-container {
    max-width: 980px;
}

.attendance-heading {
    margin-bottom: 2rem;
}

.attendance-intro {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 1.25rem;
    margin-bottom: 1.25rem;
    padding: clamp(1.5rem, 3vw, 2.4rem);
    border: 1px solid rgba(21, 63, 78, .08);
    border-radius: 26px;
    background: white;
    box-shadow: 0 14px 40px rgba(20, 60, 75, .07);
}

.attendance-intro__icon {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: #f3e5f7;
    color: #a65bc1;
}

.attendance-kicker,
.attendance-card__eyebrow {
    margin: 0 0 .5rem;
    color: #b36acb;
    font-size: .7rem;
    font-weight: 900;
    letter-spacing: .16em;
}

.attendance-intro h3,
.attendance-card h3,
.attendance-rules h3 {
    margin: 0 0 1rem;
    color: #153f4e;
    font-size: clamp(1.35rem, 2vw, 1.7rem);
}

.attendance-intro p:not(.attendance-kicker) {
    margin: 0;
    color: #5f7177;
    line-height: 1.9;
}

.attendance-intro p+p {
    margin-top: .8rem;
}

.attendance-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    margin-top: 1.25rem;
}

.attendance-card {
    padding: 1.55rem 1.65rem;
    border: 1px solid rgba(21, 63, 78, .08);
    border-radius: 22px;
    background: white;
    box-shadow: 0 12px 35px rgba(20, 60, 75, .055);
}

.attendance-card--highlight {
    background: linear-gradient(145deg, #17356f 0%, #24498d 58%, #7f6492 100%);
}

.attendance-card--highlight .attendance-card__eyebrow {
    color: #ffe082;
}

.attendance-card--highlight h3 {
    color: #ffffff;
}

.attendance-card--highlight dt {
    color: #ffd36a;
}

.attendance-card--highlight dd {
    color: #ffffff;
    font-weight: 600;
}

.attendance-card--highlight .notice-detail-list>div {
    border-color: rgba(255, 255, 255, .14);
}

.attendance-card--wide,
.attendance-card--contact {
    margin-top: 1.25rem;
}

.notice-detail-list {
    margin: 0;
}

.notice-detail-list>div {
    display: grid;
    grid-template-columns: 92px minmax(0, 1fr);
    gap: 1rem;
    padding: .8rem 0;
    border-bottom: 1px solid rgba(21, 63, 78, .08);
}

.notice-detail-list>div:last-child {
    border-bottom: 0;
}

.notice-detail-list dt {
    color: #92704d;
    font-size: .86rem;
    font-weight: 850;
}

.notice-detail-list dd {
    margin: 0;
    color: #5f7177;
    line-height: 1.65;
}


/* 住宿安排｜Google Maps */
.accommodation-detail {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .45rem .75rem;
}

.accommodation-map-link {
    display: inline-flex;
    align-items: center;
    gap: .25rem;
    flex: 0 0 auto;
    padding: .3rem .55rem;
    border-radius: 999px;
    background: #eef4ff;
    color: #24559b;
    font-size: .76rem;
    font-weight: 800;
    line-height: 1;
    text-decoration: none;
    transition: transform .18s ease, background .18s ease, color .18s ease;
}

.accommodation-map-link:hover {
    transform: translateY(-1px);
    background: #24559b;
    color: #ffffff;
}

.notice-list {
    margin: 1rem 0 0;
    padding-left: 1.25rem;
    color: #5f7177;
}

.notice-list li {
    padding-left: .2rem;
    line-height: 1.75;
}

.notice-list li+li {
    margin-top: .55rem;
}

.notice-flow-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}

.notice-flow {
    padding: 1rem 1.1rem;
    border-radius: 16px;
    background: #f7f1e8;
}

.notice-flow h4 {
    margin: 0 0 .45rem;
    color: #153f4e;
    font-size: .98rem;
}

.notice-flow p {
    margin: 0;
    color: #66777d;
    line-height: 1.7;
}

.attendance-rules {
    margin-top: 1.25rem;
    padding: clamp(1.5rem, 3vw, 2.2rem);
    border-radius: 26px;
    background: #fffaf1;
    border: 1px solid rgba(243, 155, 47, .18);
}

.attendance-rules__heading>p:last-child {
    margin: -.35rem 0 0;
    color: #6a777b;
    line-height: 1.75;
}

.attendance-rule-groups {
    display: grid;
    gap: 1rem;
    margin-top: 1.4rem;
}

.attendance-rule-group {
    padding: 1.15rem 1.2rem;
    border-radius: 17px;
    background: white;
}

.attendance-rule-group h4 {
    margin: 0;
    color: #173f4e;
    font-size: 1.02rem;
}

.notice-list--rules {
    margin-top: .75rem;
}

.attendance-closing {
    margin: 1.35rem 0 0;
    padding: 1rem 1.15rem;
    border-radius: 16px;
    background: #17356f;
    color: white;
    font-weight: 700;
    line-height: 1.75;
}

.attendance-card--contact {
    border-left: 4px solid #f39b2f;
}

.notice-detail-list--contact>div {
    grid-template-columns: 100px minmax(0, 1fr);
}

/* 營會資訊卡：提高文字對比 */
.attendance-card--highlight .notice-detail-list dt {
    color: #ffd36a;
}

.attendance-card--highlight .notice-detail-list dd {
    color: #ffffff;
    font-weight: 600;
}

/* 住宿安排：盥洗用品提醒 */
.accommodation-warning {
    margin: 1rem 0 0;
    color: #e53935;
    font-weight: 700;
    line-height: 1.75;
}

.accommodation-warning strong {
    font-weight: 850;
}

/* 膳食安排：8/26 晚餐自理警示 */
.meal-self {
    color: #e53935;
    font-weight: 800;
}

/* 交通注意事項 */
.transport-card {
    border: 1px solid rgba(243, 155, 47, .22);
}

.transport-date {
    display: inline-block;
    margin-bottom: 1.2rem;
    padding: .5rem .85rem;
    border-radius: 999px;
    background: #fff1d9;
    color: #9a5d19;
    font-weight: 800;
}

.transport-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}

.transport-item {
    padding: 1rem 1.1rem;
    border-radius: 16px;
    background: #f7f1e8;
}

.transport-item h4 {
    margin: 0 0 .5rem;
    color: #153f4e;
    font-size: 1rem;
}

.transport-item p {
    margin: 0;
    color: #5f7177;
    line-height: 1.75;
}

.transport-warning {
    margin-top: 1rem;
    padding: 1rem 1.1rem;
    border: 1px solid rgba(201, 75, 75, .15);
    border-radius: 16px;
    background: #fff0ed;
    color: #c74638;
    line-height: 1.75;
}

.transport-warning p {
    margin: .35rem 0 0;
}

.transport-info {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin-top: 1rem;
}

.transport-info>div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: .9rem 1rem;
    border-radius: 14px;
    background: #f8f5ef;
}

.transport-info span {
    color: #92704d;
    font-weight: 800;
}

.transport-info strong {
    color: #153f4e;
}

/* 注意事項 */
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

.reminder-heading .section-label {
    color: #ffe29a;
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
    color: white;
}

@media (max-width: 767px) {
    .event-hero {
        min-height: 46vh;
    }

    .hero-eyebrow {
        margin-bottom: .8rem;
        font-size: .64rem;
        letter-spacing: .18em;
    }

    .hero-title {
        font-size: clamp(2.25rem, 10.5vw, 3.35rem);
        line-height: 1.08;
        white-space: nowrap;
    }

    .hero-subtitle {
        margin-top: .85rem;
        font-size: .92rem;
    }

    .hero-scroll-cue {
        margin-top: 1.25rem;
        transform: scale(.86);
    }

    .hero-grid {
        background-size: 34px 34px;
        opacity: .08;
    }

    .hero-glow--one {
        width: 180px;
        height: 180px;
        right: -3%;
    }

    .hero-glow--two {
        width: 250px;
        height: 250px;
        left: -12%;
    }

    .container {
        width: min(100% - 2rem, 1180px);
    }

    .section {
        padding: 3rem 0;
    }

    .schedule-accordion {
        gap: .75rem;
    }

    .day-card {
        border-radius: 16px;
    }

    .day-toggle {
        padding: 1.05rem 1rem;
    }

    .day-toggle__left {
        gap: .8rem;
    }

    .day-number {
        min-width: 52px;
        font-size: .64rem;
    }

    .day-toggle h3 {
        font-size: 1.08rem;
    }

    .day-toggle p {
        font-size: .75rem;
    }

    .day-content {
        padding: 0 1rem .5rem;
    }

    .schedule-row {
        grid-template-columns: 98px minmax(0, 1fr);
        gap: .8rem;
        padding: .72rem 0;
    }

    .schedule-time {
        font-size: .73rem;
    }

    .schedule-info h4 {
        font-size: .94rem;
    }

    .schedule-info p {
        font-size: .8rem;
    }

    .evangelism-grid {
        grid-template-columns: 1fr;
        gap: .8rem;
    }

    .evangelism-card {
        min-height: 0;
        padding: 1.15rem;
        border-radius: 18px;
    }

    .evangelism-card__icon {
        width: 46px;
        height: 46px;
        border-radius: 14px;
    }

    .simple-card {
        padding: 1.25rem;
        border-radius: 18px;
    }

    .reminder-card {
        grid-template-columns: 1fr;
        gap: 2rem;
        border-radius: 24px;
    }

    .attendance-intro {
        grid-template-columns: 1fr;
        padding: 1.25rem;
        border-radius: 20px;
    }

    .attendance-grid,
    .notice-flow-grid {
        grid-template-columns: 1fr;
    }

    .attendance-card,
    .attendance-rules {
        padding: 1.25rem;
        border-radius: 18px;
    }

    .notice-detail-list>div,
    .notice-detail-list--contact>div {
        grid-template-columns: 1fr;
        gap: .25rem;
    }
}

@media (max-width: 390px) {
    .hero-title {
        font-size: 2.05rem;
    }

    .day-toggle {
        padding: 1rem .9rem;
    }

    .day-toggle__left {
        gap: .65rem;
    }

    .day-number {
        min-width: 46px;
        font-size: .6rem;
    }

    .schedule-row {
        grid-template-columns: 88px minmax(0, 1fr);
        gap: .65rem;
    }

    .schedule-time {
        font-size: .68rem;
    }
}

@media (prefers-reduced-motion: reduce) {

    .event-hero,
    .hero-aurora,
    .hero-grid,
    .hero-glow,
    .hero-eyebrow,
    .hero-title,
    .hero-title-shine,
    .hero-subtitle,
    .hero-scroll-cue,
    .hero-scroll-cue span {
        animation: none !important;
    }

    .hero-eyebrow,
    .hero-title,
    .hero-subtitle,
    .hero-scroll-cue {
        opacity: 1;
        filter: none;
        transform: none;
    }

    .hero-title {
        letter-spacing: -.035em;
    }
}

@media (max-width: 700px) {

    .transport-grid,
    .transport-info {
        grid-template-columns: 1fr;
    }

    .transport-info>div {
        flex-direction: column;
        gap: .25rem;
    }
}



@media (max-width: 560px) {
    .accommodation-detail {
        align-items: flex-start;
    }

    .accommodation-map-link {
        margin-top: .1rem;
    }
}
</style>
