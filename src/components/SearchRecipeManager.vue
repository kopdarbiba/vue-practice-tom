<script setup>
import { useLanguageStore } from '@/stores/language'
import { useBackendDataStore } from '@/stores/backendData'
import searchRecipeItem from './SearchRecipeItem.vue'

const language = useLanguageStore()
const backendDataStore = useBackendDataStore()
backendDataStore.fetchRecipes();

</script>

<template>
    <p> tmp language value: {{ language.selectedLang }}</p>
    <searchRecipeItem v-for="recipe in backendDataStore.apiRecipesData" :key="recipe.id" :recipe="recipe" />
    <div class="search">
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .search {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
