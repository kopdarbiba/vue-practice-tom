<script setup>
import { useApiFetch } from '@/composables/apiFetch'
import { useGetUrl } from '@/composables/getUrl'
import { useFetchedDataManager } from '@/composables/fetchedDataManager'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { useInfiniteScroll, useSessionStorage } from '@vueuse/core'

const { locale } = useI18n()
const el = ref(null)


const homeApiDataStorage = useSessionStorage(
  'home-api-data-storage',
  {}
)

const { url, newUrlCallback } = useGetUrl(homeApiDataStorage)
const { fetchedPage, error } = useApiFetch(url)
useFetchedDataManager(fetchedPage, homeApiDataStorage)


useInfiniteScroll(
  el,
  () => {
    newUrlCallback()
  },
  { distance: 10 }
)
</script>

<template>

  <!-- <button @click="newUrlCallback">Next Page</button> -->
  <div id="content">

    <div>
      <h1>###</h1>
    </div>

    <div>
      <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
      <div v-else-if="homeApiDataStorage">
        <div v-for="(page, id ) in homeApiDataStorage[locale]" :key="id">
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

<style scoped>
#content {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>