<script setup>
import { ref, watch } from 'vue'
import { useSessionStorage } from '@vueuse/core'

import { useNewUrlConstructor } from '@/api/urlConstructor'
import { useApiFetch } from '@/api/apiFetch'

const homeApiDataStorage = useSessionStorage('home-api-data-storage', [])
const nextUrl = ref()
const updateNextUrl = () => {
  nextUrl.value = homeApiDataStorage.value[homeApiDataStorage.value.length - 1].next
}

const { newUrl } = useNewUrlConstructor()
// reset on language changes
watch(
  () => newUrl.value,
  () => {
    nextUrl.value = undefined
    homeApiDataStorage.value = []
  }
)

const urls = ref({
  new: newUrl,
  next: nextUrl
})

const { error } = useApiFetch(urls, homeApiDataStorage)

</script>


<template>

  <div id="content">

    <div>
      <h1>###</h1>
    </div>

    <div>
      <button @click="updateNextUrl()">Next Page</button>
      <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
      <div v-else-if="homeApiDataStorage">
        <!-- TODO: id value needed in array entry, example:
        <div v-for="page in homeApiDataStorage[locale]" :key="page.id"> -->
        <div v-for="(page, id ) in homeApiDataStorage" :key="id">
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


<style scoped>
#content {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>