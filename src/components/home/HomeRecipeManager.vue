<script setup>
import { useApiFetch } from '@/composables/apiFetch'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'


const { locale } = useI18n()
const route = useRoute()
const pages = ref({})
const newUrl = ref()

const currentPages = computed(() => pages.value[locale.value])

const loadedPagesCount = computed(() => currentPages.value ?
  currentPages.value.length : 0
)

const defoultUrl = computed(() => loadedPagesCount.value == 0 ?
  route.meta.baseUrls[locale.value] : null
)

watch(defoultUrl, () => {
  newUrl.value = loadedPagesCount.value > 0 ?
    newUrl.value = pages.value[locale.value][loadedPagesCount.value - 1]['next'] : null
})

const theUrl = computed(() => newUrl.value ?
  newUrl.value : defoultUrl.value
)

const { fetchedPage, error } = useApiFetch(theUrl)

watch(fetchedPage, (newPage) => {
  if (newPage) {
    if (!pages.value[locale.value]) {
      pages.value[locale.value] = []
    }
    pages.value[locale.value].push(newPage)
  }
})

</script>

<template>
  <div class="next-prev-buttons">
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="fetchedPage">
      <button v-if="fetchedPage.next" @click="newUrl = fetchedPage.next">Next Page</button>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>

  <div>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="currentPages">
      <div v-for="(page, key) in currentPages" :key="key">
        <div v-for="(recipe, key) in page.results" :key="key">
          <span>{{ recipe.id }}*** {{ recipe.title }} --- {{ recipe.url }}</span>
        </div>
      </div>
    </div>
    <div v-else>Loading...!!!!</div>
  </div>
</template>