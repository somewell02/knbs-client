import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store"

import AuthView from '@/views/AuthView.vue'
import AccountView from "@/views/AccountView.vue";
import BookmarksView from '@/views/BookmarksView.vue'
import NotesView from '@/views/NotesView.vue'
import FaqView from '@/views/FaqView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: to => ({ name: 'auth' })
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: BookmarksView
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (!store.state.user.isAuth && to.name !== "auth") {
    next({ name: 'auth' });
  } else if (store.state.user.isAuth && to.name === "auth") {
    next({ name: 'notes' });
  } else {
    next();
  }
})

export default router
