import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {


    if (from.name === 'OurService'
      || from.name === 'AboutUs'
      || from.name === 'Home') {
      return { top: 0 };
    }

    if (to.name === 'DetailOurTeam'
      || to.name === 'DetailService') {
      return null;
    }

    return { top: 0 };
  },
});

export default router;