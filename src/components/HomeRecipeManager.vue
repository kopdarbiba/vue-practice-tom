<template>
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
  Use mocked data = {{ isMockedData }}
</template>

<script>
import HomeRecipeItem from './HomeRecipeItem.vue'
import LoadingIndicator from '../helpers/LoadingIndicator.vue'
import NotFound from '../helpers/NotFound.vue'

export default {
  components: {
    HomeRecipeItem,
    LoadingIndicator,
    NotFound,
  },
  data() {
    return {
      loading: true,
      error: false,
      isMockedData: false,
      mockRecipesData: [
        {
          "url": "http://localhost:8000/api/recipes/4/?lang=lv",
          "id": 4,
          "title": "Cūkgaļas kotletes dārzeņu mērcē",
          "images": []
        },
        {
          "url": "http://localhost:8000/api/recipes/5/?lang=lv",
          "id": 5,
          "title": "Sautēti kabači",
          "images": []
        },
      ],
      apiRecipesData: [],
      endpoints: {
        localhost: 'http://localhost:8000/api/recipes/',
        aws: 'http://13.49.33.156/api/recipes/',
      }
    }
  },
  methods: {
    async fetchRecipes() {
      try {
        this.loading = true;
        const response = await fetch(this.endpoints.localhost); // localhost || aws
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        this.apiRecipesData = data.results;
      } catch (error) {
        console.error('Error fetching data:', error);
        this.error = true;
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchRecipes();
  },
}
</script>
