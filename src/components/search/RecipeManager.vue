<script setup>
import { ref, watch } from 'vue'
import { useSessionStorage } from '@vueuse/core'

import { useNewUrlConstructor } from '@/api/urlConstructor'
import { useApiFetch } from '@/api/apiFetch'

const searchApiDataStorage = useSessionStorage('search-api-data-storage', [])
const nextUrl = ref()
const updateNextUrl = () => {
    nextUrl.value = searchApiDataStorage.value[searchApiDataStorage.value.length - 1].next
}

const { newUrl } = useNewUrlConstructor()
// reset on language or filter query changes
watch(
    () => newUrl.value,
    () => {
        nextUrl.value = undefined
        searchApiDataStorage.value = []
    }
)

const urls = ref({
    new: newUrl,
    next: nextUrl
})

const { error } = useApiFetch(urls, searchApiDataStorage)

</script>


<template>
    <button @click="updateNextUrl()">Next Page</button>

    <div id="search-page">

        <div>
            <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
            <div v-else-if="searchApiDataStorage">
                <!-- TODO: id value needed in array entry, example:
                <div v-for="page in searchApiDataStorage[locale]" :key="page.id"> -->
                <div v-for="(page, id) in searchApiDataStorage" :key="id">
                    <hr>
                    <h2> page: {{ id + 1 }}</h2>
                    <div v-for="recipe in page.results" :key="recipe.id">
                        <h1> id: {{ recipe.id }}</h1>
                        <h1> {{ recipe.title }}</h1>
                        {{ recipe.url }}
                        <div v-if="recipe.images && recipe.images.length > 0">
                            <div v-for="(image, index) in recipe.images" :key="index">
                                <img :src="image.generate_presigned_url_for_image" alt="Recipe Image" />
                            </div>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
