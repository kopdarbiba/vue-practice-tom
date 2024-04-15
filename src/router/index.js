import { createWebHistory, createRouter } from 'vue-router'

const HomeView = () => import(/* webpackChunkName: 'home'*/ '../views/HomeView.vue')
const SearchView = () => import(/* webpackChunkName: 'search'*/ '../views/SearchView.vue')
const AboutView = () => import(/* webpackChunkName: 'about'*/ '../views/AboutView.vue')

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home',
    props: (route) => ({
      lang: route.query.lang || 'router/index<@<lang: route.query.lang>@>'
    })
  },
  {
    path: '/search',
    component: SearchView,
    name: 'search',
    props: (route) => ({
      lang: route.query.lang,
      ordering: route.query.ordering,
      q: route.query.q || 'q prop placegolder'
    })
  },
  { path: '/about', name: 'about', component: AboutView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
