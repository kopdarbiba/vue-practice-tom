<script setup>
import { RouterView } from 'vue-router'
import TheLangugageSelector from '@/components/header/TheLanguageSelector.vue'
import TheLogo from '@/components/header/TheLogo.vue'
import TheNavigation from './components/header/TheNavigation.vue'

</script>

<template>

  <div id="header">
    <TheLangugageSelector />
    <TheLogo />
    <TheNavigation />
  </div>

  <main>
    <RouterView />
  </main>

</template>

<style scoped>
#header {
  display: grid;
  grid-template-columns: 1fr 0fr 1fr;
  gap: 30px;
}
</style>