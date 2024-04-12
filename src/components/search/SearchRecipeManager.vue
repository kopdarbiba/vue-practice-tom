<script setup>
import { useBackendDataStore } from '@/stores/backendData'
import searchRecipeItem from './SearchRecipeItem.vue'
import LoadingIndicator from '../helpers/LoadingIndicator.vue'
import NotFound from '../helpers/NotFound.vue'


const backendDataStore = useBackendDataStore()
</script>

<template>
    <div class="search">
        <div v-if="backendDataStore.loading || backendDataStore.error">
            <div v-if="backendDataStore.loading">
                <LoadingIndicator />
            </div>
            <div v-else>
                <NotFound />
            </div>

        </div>
        <div v-else>
            <searchRecipeItem v-for="recipe in backendDataStore.apiRecipesData" :key="recipe.id" :recipe="recipe" />
        </div>
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
