<script setup>
import { useLanguageStore } from '@/stores/language'
import { useRoute } from 'vue-router'
const language = useLanguageStore()


const route = useRoute()
function getLanguageButtonValue(langValue) {
    console.log(route.name)
    language.storedLanguage = langValue
}
</script>

<template>
    <p>
        $route:{{ $route }}
    </p>
    <div>
        <p>
            $route.fullPath: {{ $route.fullPath }}
        </p>
        <hr>
        <p>
            $route.name :{{ $route.name }}
        </p>
        <hr>
        <p>
            $route.query: {{ $route.query }}
        </p>
        <hr>
        <p>
            $route.params: {{ $route.params }}
        </p>
        <hr>
        <p>
            $route.params: {{ $route.href }}
        </p>
        <hr>
    </div>
    <div class="language-buttons">
        <button @click="getLanguageButtonValue('en')">en</button>
        <button @click="getLanguageButtonValue('ru')">ru</button>
        <button @click="getLanguageButtonValue('lv')">lv</button>
    </div>

</template>

<style scoped>
button {
    background-color: rgb(0, 189, 126);
}
</style>
