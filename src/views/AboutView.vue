<script setup>
import AboutManager from '../components/about/AboutManager.vue'
</script>

<template>
  <main class="about">
    <AboutManager />
  </main>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
