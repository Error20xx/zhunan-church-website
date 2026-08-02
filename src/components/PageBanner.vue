<script setup>
defineProps({ eyebrow: String, title: String, description: String })
</script>
<template>
  <section class="page-banner">
    <span class="shape one"></span><span class="shape two"></span>
    <div class="container">
      <p>{{ eyebrow }}</p><h1>{{ title }}</h1><div class="accent"></div><p class="description">{{ description }}</p>
    </div>
  </section>
</template>
<style scoped>
.page-banner { position:relative; overflow:hidden; padding:clamp(9rem,15vw,12rem) 0 clamp(4rem,8vw,6.5rem); text-align:center; background:linear-gradient(135deg,var(--color-purple-light),var(--color-cream) 55%,var(--color-yellow-light)); }
.container { position:relative; z-index:1; max-width:820px; }.container>p:first-child { color:var(--color-purple); font-size:.78rem; font-weight:900; letter-spacing:.18em; }
h1 { margin:.8rem 0; color:var(--color-teal-dark); font-size:var(--fs-h1); }.accent { width:52px; height:5px; margin:1.2rem auto; border-radius:4px; background:var(--color-yellow); }.description { color:var(--color-text-light); font-size:clamp(1rem,1.7vw,1.15rem); line-height:1.9; }
.shape { position:absolute; border-radius:50%; opacity:.4; }.one { width:220px; height:220px; top:-80px; left:-50px; background:var(--color-purple); }.two { width:260px; height:260px; right:-70px; bottom:-140px; background:var(--color-yellow); }
</style>
