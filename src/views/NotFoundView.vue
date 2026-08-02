<script setup>
import BaseButton from '../components/BaseButton.vue'
</script>
<template>
    <section class="not-found">
        <div><span>404</span>
            <h1>這一頁好像走遠了</h1>
            <p>別擔心，我們一起回到熟悉的地方。</p>
            <BaseButton to="/">回到首頁</BaseButton>
        </div>
    </section>
</template>
<style scoped>
.not-found {
    min-height: 80vh;
    display: grid;
    place-items: center;
    padding: 9rem 1rem 5rem;
    text-align: center;
    background: var(--color-cream)
}

span {
    color: var(--color-purple);
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 900
}

h1 {
    color: var(--color-teal-dark);
    font-size: var(--fs-h1)
}

p {
    margin: .6rem 0 1.5rem;
    color: var(--color-text-light)
}
</style>
