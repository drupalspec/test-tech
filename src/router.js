import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Movie from './views/Movie.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '1/',
      component: Home,
      meta: {
        title: 'Popular movies'
      },
    },
    {
      path: '/:page/',
      name: 'page',
      component: Home
    },
    {
      path: '/:page/:id',
      name: 'movie',
      component: Movie
    }
  ]
})
