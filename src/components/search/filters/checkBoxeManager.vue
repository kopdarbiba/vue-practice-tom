<script setup>
import CheckBoxItem from './CheckBoxItem.vue'
import sourceData from '../../../data.json';

</script>

<template>
    <CheckBoxItem v-for="(data, key) in sourceData" :data="data" :key="key" :itemKey="key" />
</template>
