<script setup>
import { useApiFetch } from '@/composables/apiFetch'
import { useGetUrl } from '@/composables/getUrl'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { useLocalStorage } from '@vueuse/core'
const { locale } = useI18n()

const homeApiDataStorage = useLocalStorage(
  'home-api-data-storage',
  {}
)

const { url, newUrlCallback } = useGetUrl(homeApiDataStorage)
const { fetchedPage, error } = useApiFetch(url)

watch(fetchedPage, (newPage) => {
  if (newPage) {
    createsEmptyObjArray()
    homeApiDataStorage.value[locale.value].push(newPage)
  }
})

function createsEmptyObjArray() {
  if (!homeApiDataStorage.value[locale.value]) {
    homeApiDataStorage.value[locale.value] = []
  }
}

</script>

<template>
  <button @click="newUrlCallback">Next Page</button>

  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="homeApiDataStorage">
    <div v-for="(page, id ) in homeApiDataStorage[locale]" :key="id">
      <hr>
      <h2> page: {{ id + 1 }}</h2>
      <div v-for="recipe in page.results" :key="recipe.id">
        {{ recipe.title }}

        <div v-if="recipe.images && recipe.images.length > 0">
          <div v-for="(image, index) in recipe.images" :key="index">
            <img :src="image.generate_presigned_url_for_image" alt="Recipe Image" />
          </div>
        </div>



      </div>
    </div>
  </div>
</template>