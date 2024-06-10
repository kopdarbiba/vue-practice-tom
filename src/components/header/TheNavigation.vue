<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { useStorage } from '@vueuse/core'
const storedQueryParams = useStorage('query-params', {}, sessionStorage)

</script>


<template>
    <div id="nav">
        <RouterLink :to="{ name: 'search', params: { lang: $route.params.lang }, query: storedQueryParams }">
            {{ t('navBar.search') }}</RouterLink>
        <RouterLink :to="{ name: 'about', params: { lang: $route.params.lang } }">{{ t('navBar.about') }}</RouterLink>
    </div>
</template>


<style scoped>
#nav a.router-link-exact-active {
    color: var(--color-text);
}

#nav a.router-link-exact-active:hover {
    background-color: transparent;
}

#nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

#nav a:first-of-type {
    border: 0;
}

#nav {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2;
    width: 100%;
}
</style>
