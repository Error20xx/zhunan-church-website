<script setup>
defineProps({ meeting: { type: Object, required: true } })
</script>

<template>
  <article class="meeting-card" :class="`meeting-card--${meeting.tone}`">
    <span class="icon" aria-hidden="true">{{ meeting.icon }}</span>
    <h3>{{ meeting.name }}</h3>
    <p class="time">{{ meeting.time }}</p>
    <p class="location">⌖ {{ meeting.location }}</p>
    <p class="description">{{ meeting.description }}</p>
  </article>
</template>

<style scoped>
.meeting-card {
  padding: clamp(1.5rem, 3vw, 2.25rem);
  border: 1px solid rgba(30, 82, 103, .08);
  border-radius: var(--radius-lg);
}

.meeting-card--yellow {
  background: var(--color-yellow-light);
}

.meeting-card--purple {
  background: var(--color-purple-light);
}

.meeting-card--cream {
  background: var(--color-cream);
  box-shadow: var(--shadow-sm);
}

.icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .7);
  color: var(--color-teal);
  font-size: 1.4rem;
}

h3 {
  margin: 1rem 0 .7rem;
  font-size: 1.4rem;
  color: var(--color-teal-dark);
}

.time {
  font-weight: 800;
  color: var(--color-teal);
}

.location {
  margin: .3rem 0 1rem;
  color: var(--color-text-light);
}

.description {
  color: var(--color-text);
}
</style>
