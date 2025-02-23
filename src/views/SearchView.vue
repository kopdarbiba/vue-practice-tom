<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useSessionStorageManager } from '@/api/storageManager'
import { useNewUrlConstructor, useNextUrlConstructor, useUrlWatch } from '@/api/urlConstructor'
import { useApiFetch } from '@/api/apiFetch'
import FormManager from '@/components/search/FormManager.vue'
import { useInfiniteScroll } from '@/composables/useInfiniteScroll'


// Initialize storage manager
const storage = useSessionStorageManager('searched-recipes')
// only for use in template (iterating over storage.data won't work)
const data = ref(storage.data)

// Backend endpoint URL constructors for fetching
const { newUrl } = useNewUrlConstructor(useRoute())
const { nextUrl, updateNextUrl } = useNextUrlConstructor(storage)

// Set up watchers
useUrlWatch(newUrl, nextUrl, storage)

// Fetch API data
const { error } = useApiFetch(newUrl, nextUrl, storage)

// Infinite scroll implementation
useInfiniteScroll(updateNextUrl)
</script>

<template>
  <div id="search-page">
    <FormManager />
    <div id="search-page-list-recipes">
      <div>
        <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
        <div v-else-if="data">
          <div v-for="(page, id) in data" :key="id">
            <hr>
            <h2> page: {{ id + 1 }}</h2>
            <div v-for="recipe in page.results" :key="recipe.id">
              <h1> id: {{ recipe.id }}</h1>
              <h1> {{ recipe.title }}</h1>
              {{ recipe.url }}
              <div v-if="recipe.images && recipe.images.length > 0">
                <div v-for="(image, index) in recipe.images" :key="index">
                  <img :src="image.thumbnail_url" alt="Recipe Image" />
                </div>
              </div>
              <br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#search-page {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>
