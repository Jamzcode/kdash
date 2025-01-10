import { createRouter, createWebHistory } from 'vue-router'
import DashView from '@/views/DashView.vue'
import ToDoListComponent from '@/components/ToDoListComponent.vue'
import ToDoListView from '@/views/ToDoListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashView',
      component: DashView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/to-do-list',
      name: 'ToDoListView',
      component: ToDoListView
    }
  ],
})

export default router
