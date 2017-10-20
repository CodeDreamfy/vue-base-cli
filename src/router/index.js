import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld,
  },
];

/**
 * store
 *
 */
function configRouter() {
  const router = new Router({
    routes,
  });

  router.beforeEach((to, from, next) => {
    // to and from are Route Object,next() must be called to resolve the hook}
    next();
  });
  return router;
}

export default configRouter;
