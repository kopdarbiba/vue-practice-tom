<script setup>
import { useSessionStorageManager } from '@/api/storageManager'
import { useNewUrlConstructor, useNextUrlConstructor, useUrlWatch } from '@/api/urlConstructor'
import { useApiFetch } from '@/api/apiFetch'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// Initialize storage manager
const storage = useSessionStorageManager('search-page-recipes')
// only for use in template( iterating over storage.data wont work )
const data = ref(storage.data)

// Backend endpint URL constructors for fetching
const { newUrl } = useNewUrlConstructor(useRoute())
const { nextUrl, updateNextUrl } = useNextUrlConstructor(storage)

// Set up watchers
useUrlWatch(newUrl, nextUrl, storage)

// Fetch API data
const { error } = useApiFetch(newUrl, nextUrl, storage)
</script>

<template>
    <button @click="updateNextUrl()">Next Page</button>

    <div id="search-page">

        <div>
            <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
            <div v-else-if="data">
                <!-- TODO: id value needed in array entry, example:
                <div v-for="page in searchApiDataStorage[locale]" :key="page.id"> -->
                <div v-for="(page, id) in data" :key="id">
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
