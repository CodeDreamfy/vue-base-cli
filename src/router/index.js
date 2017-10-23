import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/components/layout'),
    children: [
      { path: '', name: 'a-index', component: () => import('@/pages/index') },
      { path: 'index', name: 'a-index', component: () => import('@/pages/index') },
    ],
  },
  {
    path: '*',
    name: '',
    redirect: { name: 'login' },
  },
];

/**
 * store
 *
 */
function configRouter() {
  const router = new Router({
    mode: 'history',
    routes,
  });

  router.beforeEach((to, from, next) => {
    // to and from are Route Object,next() must be called to resolve the hook}
    next();
  });
  return router;
}

export default configRouter;
