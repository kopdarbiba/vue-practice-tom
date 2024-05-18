<script setup>
import { RouterView } from 'vue-router'

import PageHeader from '@/components/header/PageHeader.vue'
</script>

<template>

  <PageHeader />

  <main>
    <RouterView />
  </main>

</template>
