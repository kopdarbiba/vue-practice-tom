<script setup>
import CheckBoxItem from './CheckBoxItem.vue'
import sourceData from '../../../data.json';

</script>

<template>
    <CheckBoxItem v-for="(block, key) in sourceData" :block="block" :key="key" :itemKey="key" />
</template>
