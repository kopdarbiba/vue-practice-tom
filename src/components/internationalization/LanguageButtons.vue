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
            $route.params.lang: {{ $route.params.lang }}
        </p>
        <hr>
        <p>
            $route.href: {{ $route.href }}
        </p>
    </div>
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
