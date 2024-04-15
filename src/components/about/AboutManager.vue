<script setup>

import { useRouter } from 'vue-router'

const asd = useRouter()

</script>
<template>
    <h1>$route.query: {{ asd.listening }}</h1>
    <!-- <h1>$router: {{ $router }}</h1> -->

    <div>
    </div>
</template>