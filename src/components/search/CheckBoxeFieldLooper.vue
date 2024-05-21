<script setup>
import CheckBoxItem from '@/components/search/filters/CheckBoxItem.vue'
import sourceData from '@/data'
</script>


<template>
    <CheckBoxItem v-for="(section, key) in sourceData" :key="key" :section="section" :sectionKey="key" />
</template>
