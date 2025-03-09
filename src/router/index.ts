import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import MusicView from '../views/music.vue'
import VideosView from '../views/videos.vue'
import ShopView from '../views/shop.vue'
import ArtistsView from "../views/artists.vue"


const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/music', name: 'Music', component: MusicView },
  { path: '/videos', name: 'Videos', component: VideosView },
  { path: '/shop', name: 'Shop', component: ShopView },
  { path: '/artists', name: 'Artists', component: ArtistsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
  }
})

export default router
