<script setup>
import { useLanguageStore } from '@/stores/language'

const language = useLanguageStore()

</script>

<template>
    <div class="language-buttons">
        <button @click="language.selectedLang = 'en'">en</button>
        <button @click="language.selectedLang = 'ru'">ru</button>
        <button @click="language.selectedLang = 'lv'">lv</button>
    </div>
</template>

<style scoped>
button {
    background-color: rgb(0, 189, 126);
}
</style>
