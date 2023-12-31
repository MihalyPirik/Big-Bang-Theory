import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeasonView from '../views/SeasonsView.vue'
import EpsiodesView from '../views/EpisodesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/evadok',
      component: SeasonView
    },
    {
      path: '/epizodok/:id',
      component: EpsiodesView
    },
  ]
})

export default router
