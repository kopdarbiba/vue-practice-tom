<script setup>
import { useApiFetch } from '@/composables/apiFetch'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'


const { locale } = useI18n()
const route = useRoute()
const newUrl = ref()

const defoultUrl = computed(() => {
  return route.meta.baseUrls[locale.value]
})

watch(defoultUrl, () => {
  newUrl.value = null
})

const theUrl = computed(() => {
  return newUrl.value ? newUrl.value : defoultUrl.value
})

const { fetchedPage, error } = useApiFetch(theUrl)

const pages = ref({})
watch(fetchedPage, (newPage) => {
  if (newPage) {
    if (!pages.value[locale.value]) {
      pages.value[locale.value] = {}
    }
    pages.value[locale.value][theUrl.value] = newPage
  }
})

const dataToPresent = computed(() => {
  return pages.value[locale.value]
})

</script>

<template>
  <div class="next-prev-buttons">
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="fetchedPage">
      <h5>{{ fetchedPage.previous }}</h5>
      <h5>{{ fetchedPage.next }}</h5>
      <button v-if="fetchedPage.previous" @click="newUrl = fetchedPage.previous">Previous Page</button>
      <button v-if="fetchedPage.next" @click="newUrl = fetchedPage.next">Next Page</button>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>

  <div>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="dataToPresent">
      <div v-for="(page, key) in dataToPresent" :key="key">
        <div v-for="(recipe, key) in page.results" :key="key">
          <span>{{ recipe.id }} : {{ recipe.title }}</span>
        </div>
      </div>
    </div>
    <div v-else>Loading...!!!!</div>
  </div>
</template>