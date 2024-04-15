import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/Master.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // Add new routes for portfolio projects
  {
    path: '/project1',
    name: 'project1',
    component: () => import('../views/Projects/Project1.vue')
  },
  {
    path: '/project2',
    name: 'project2',
    component: () => import('../views/Projects/Project2.vue')
  },
  {
    path: '/project3',
    name: 'project3',
    component: () => import('../views/Projects/Project3.vue')
  },
  {
    path: '/project4',
    name: 'project4',
    component: () => import('../views/Projects/Project4.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
