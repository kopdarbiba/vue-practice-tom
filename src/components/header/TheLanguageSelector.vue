<script setup>
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const route = useRoute()
const { locale, availableLocales, } = useI18n()


watch(() => route.params.lang, (newLang) => {
    const optionalLanguages = ['ru', 'en']

    if (optionalLanguages.includes(newLang)) {
        locale.value = newLang
    } else {
        locale.value = 'lv'
    }
})

const submitLanguage = () => {
    router.push({
        name: route.name,
        params: { lang: locale.value == 'lv' ? '' : locale.value },
        query: route.query
    })
}

</script>


<template>
    <div id="language-selector">
        <select v-model="locale" @change="submitLanguage" id="language-select">
            <option v-for="locale in availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
        </select>
    </div>
</template>


<style scoped>
#language-selector {
    width: 100%;
    height: auto;
    text-align: left;
}
</style>
