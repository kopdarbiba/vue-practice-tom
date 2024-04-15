<template>
  <div>
    <div v-if="loading || error">
      <div v-if="loading">
        <LoadingIndicator />
      </div>
      <div v-else>
        <NotFound />
      </div>
    </div>
    <div v-else>
      <HomeRecipeItem v-for="recipe in apiRecipesData" :key="recipe.id" :recipe="recipe" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HomeRecipeItem from './HomeRecipeItem.vue';
import LoadingIndicator from '../helpers/LoadingIndicator.vue';
import NotFound from '../helpers/NotFound.vue';

const loading = ref(true);
const error = ref(false);
const apiRecipesData = ref([]);
const endpoints = 'http://localhost:8000/api/recipes/'

const fetchRecipes = async () => {
  try {
    loading.value = true;
    const response = await fetch(endpoints)
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    const data = await response.json();
    apiRecipesData.value = data.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchRecipes();
});
</script>
