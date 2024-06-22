import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './Pages/Dashboard.vue';
import Chat from './Pages/Chat.vue';

const routes = [
  { path: '/', name: 'dashboard', component: Dashboard },
  { path: '/chat', name: 'chat', component: Chat }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
