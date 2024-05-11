<script setup>
import { useApiFetch } from '@/composables/apiFetch'
import { useGetUrl } from '@/composables/getUrl'
import { useFetchedDataManager } from '@/composables/fetchedDataManager'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useInfiniteScroll, useSessionStorage } from '@vueuse/core'

const { locale } = useI18n()
const el = ref(null)


const searchApiDataStorage = useSessionStorage(
    'search-api-data-storage',
    {}
)

const { url, newUrlCallback } = useGetUrl(searchApiDataStorage)
const { fetchedPage, error } = useApiFetch(url)
useFetchedDataManager(fetchedPage, searchApiDataStorage)


useInfiniteScroll(
    el,
    () => {
        newUrlCallback()
    },
    { distance: 10 }
)

</script>

<template>
    <div id="search-page">

        <div>
            <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
            <div v-else-if="searchApiDataStorage">
                <div v-for="(page, id ) in searchApiDataStorage[locale]" :key="id">
                    <hr>
                    <h2> page: {{ id + 1 }}</h2>
                    <div v-for="recipe in page.results" :key="recipe.id">
                        {{ recipe.title }} <br>
                        {{ recipe.url }}
                        <div v-if="recipe.images && recipe.images.length > 0">
                            <div v-for="(image, index) in recipe.images" :key="index">
                                <img :src="image.generate_presigned_url_for_image" alt="Recipe Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref="el"></div>
        </div>
    </div>
</template>
