<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter()
const route = useRoute()
const { block, itemKey } = defineProps(['block', 'itemKey'])

const itemArray = ref([])

if (route.query[itemKey]) {
    itemArray.value = !Array.isArray(route.query[itemKey]) ? [route.query[itemKey]] : route.query[itemKey]
}

const newQuery = computed(() => {
    return { [itemKey]: itemArray.value }
}
)

const submitSelected = () => {
    router.push({
        name: route.name,
        params: { lang: route.params.lang },
        query: {
            ...route.query,
            ...newQuery.value
        },
    });
}

const selectedLang = computed(() => {
    return route.params.lang ? route.params.lang : 'lv'
})

const showLess = ref(true)
const doToggle = () => {
    showLess.value = !showLess.value
}

const filteredMeals = computed(() => {
    return showLess.value
        ? block.data.filter((t) => t.favorite)
        : block.data
})

const buttonText = computed(() => showLess.value ? t('searchPage.checkBox.seeMore') : t('searchPage.checkBox.seeLess'))

</script>


<template>

    <h1>{{ block.title[selectedLang] }}</h1>
    <li v-for="(value, key) in filteredMeals" :key="key">
        <input @change="submitSelected" type="checkbox" :value=value.slug v-model="itemArray" :id=value.slug>
        {{ value[selectedLang] }}
    </li>
    <span @click="doToggle" class="clickable">{{ buttonText }}</span>

</template>

<style scoped>
.clickable {
    cursor: pointer;
}

.clickable:hover {
    color: blue;
}
</style>