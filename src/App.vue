<script setup>
import PageHeader from '@/components/header/PageHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>

  <PageHeader />

  <main>
    <RouterView />
  </main>

</template>
