<script setup>
import { useSessionStorageManager } from '@/api/storageManager'
import { useNewUrlConstructor, useNextUrlConstructor, useUrlWatch } from '@/api/urlConstructor'
import { useApiFetch } from '@/api/apiFetch'
import { ref } from 'vue';

// Initialize storage manager
const storage = useSessionStorageManager('home-page-recipes')
const data = ref(storage.data)
// Get URL constructors
const { newUrl } = useNewUrlConstructor()
const { nextUrl, updateNextUrl } = useNextUrlConstructor(storage)

// Set up watchers
useUrlWatch(newUrl, nextUrl, storage)

// Fetch API data
const { error } = useApiFetch(newUrl, nextUrl, storage)
</script>


<template>

  <div id="content">

    <div>
      <h1>###</h1>
    </div>

    <div>
      <button @click="updateNextUrl()">Next Page</button>
      <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
      <div v-else-if="data">
        <!-- TODO: id value needed in array entry, example:
        <div v-for="page in homeApiDataStorage[locale]" :key="page.id"> -->
        <div v-for="(page, pageIndex ) in data" :key="pageIndex">
          <hr>
          <h2> page: {{ pageIndex + 1 }}</h2>
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


<style scoped>
#content {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>