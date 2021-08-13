import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import ('@/views/Home'),
  },
  {
    path: '/today',
    name: 'Today',
    component: ()=>import ('@/views/Today'),
  },
  {
    path: '/todo',
    name: 'Todo',
    component: ()=>import ('@/views/Todo'),
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: ()=>import ('@/views/Schedule'),
  },
  {
    path: '/about',
    name: 'About',
    component: ()=>import ('@/views/About'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
