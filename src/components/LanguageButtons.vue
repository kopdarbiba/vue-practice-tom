<script setup>
import { useLanguageStore } from '@/stores/language'

const language = useLanguageStore()

</script>

<template>
    <div class="language-buttons">
        <button> {{ language.en }}</button>
        <button> {{ language.lv }}</button>
        <button> {{ language.ru }}</button>
    </div>
</template>

<style scoped>
button {
    background-color: rgb(0, 189, 126);
}
</style>
