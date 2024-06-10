import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import(/* webpackChunkName: 'home'*/ '@/views/HomeView.vue')
const SearchView = () => import(/* webpackChunkName: 'search'*/ '@/views/SearchView.vue')
const AboutView = () => import(/* webpackChunkName: 'about'*/ '@/views/AboutView.vue')

const routes = [
  {
    path: '/:lang?',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/:lang?/search',
    component: SearchView,
    name: 'search'
  },
  {
    path: '/:lang?/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Utility functions
import { useStorage } from '@vueuse/core'

const storedQueryParams = useStorage('query-params', {}, sessionStorage)
function storeQueryParams(query) {
  formatParams(query)
  storedQueryParams.value = query
}

function formatParams(queryParams) {
  const nonCheckboxParams = ['q', 'order', 'minPrice', 'maxPrice']
  for (let paramKey in queryParams) {
    // Convert specific query parameters from string to array if necessary
    if (!nonCheckboxParams.includes(paramKey) && typeof queryParams[paramKey] === 'string') {
      queryParams[paramKey] = [queryParams[paramKey]]
    }
  }
}

// Route guard
router.beforeEach((to, from, next) => {
  if (to.name === 'search') {
    storeQueryParams(to.query)
  }
  next()
})

export default router
