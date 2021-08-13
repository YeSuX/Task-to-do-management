import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '首页',
    component: ()=>import ('@/views/Home'),
  },
  {
    path: '/today',
    name: '今天',
    component: ()=>import ('@/views/Today'),
  },
  {
    path: '/todo',
    name: '待办',
    component: ()=>import ('@/views/Todo'),
  },
  {
    path: '/schedule',
    name: '日程',
    component: ()=>import ('@/views/Schedule'),
  },
  {
    path: '/about',
    name: '关于',
    component: ()=>import ('@/views/About'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
