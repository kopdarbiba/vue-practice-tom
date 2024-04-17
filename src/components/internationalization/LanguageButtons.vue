<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

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
            $route.href: {{ $route.href }}
        </p>
        <hr>
        <p>
            $route.params.lang: {{ $route.params.lang }}
        </p>
    </div>
    <div class="language-buttons">
        <button @click=" router.push({ name: $route.name, params: { lang: '' } })">lv</button>
        <button @click=" router.push({ name: $route.name, params: { lang: 'en' } })">en</button>
        <button @click=" router.push({ name: $route.name, params: { lang: 'ru' } })">ru</button>

    </div>

</template>

<style scoped>
button {
    background-color: rgb(0, 189, 126);
}
</style>
