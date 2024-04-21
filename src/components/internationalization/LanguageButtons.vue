<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const submitLanguage = (language) => {
    const newQuery = { ...route.query };

    router.push({
        name: route.name,
        params: { lang: language },
        query: newQuery
    })
}

</script>

<template>
    <div class="language-buttons">
        <button @click="submitLanguage('')">lv</button>
        <button @click="submitLanguage('ru')">ru</button>
        <button @click="submitLanguage('en')">en</button>
    </div>

</template>

<style scoped>
button {
    background-color: rgb(0, 189, 126);
}
</style>
