import * as VueRouter from 'vue-router';

import Home from '../components/home/HomeView.vue';

const routes = [
  { path:'/', component: Home },
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;