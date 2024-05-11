<script setup>
import LangugaeButtons from '@/components/header/i18n/LanguageButtons.vue'
import TheNavigation from '@/components/header/navbar/TheNavigation.vue'
import TheLogo from '@/components/header/logo/TheLogo.vue'
</script>

<template>
  <div id="header">
    <TheLogo />
    <TheNavigation />
    <LangugaeButtons />
  </div>
</template>

<style scoped>
#header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 10px;
}
</style>
