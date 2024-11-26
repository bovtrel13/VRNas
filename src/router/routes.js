

import MainLayout from '@/components/layout/MainLayout.vue';
import SecondaryLayout from '@/components/layout/SecondaryLayout.vue';
import PageHome from '@/pages/PageHome.vue';
import PageAboutUs from '@/pages/PageAboutUs.vue';
import PageOurService from '@/pages/PageOurService.vue';
import PageDetailService from '@/pages/PageDetailService.vue'; 
import PagePricingPlan from '@/pages/PagePricingPlan.vue';
import PageBlog from '@/pages/PageBlog.vue';
import PageDetailBlog from '@/pages/PageDetailBlog.vue';
import PageOurTeam from '@/pages/PageOurTeam.vue';
import PageContactUs from '@/pages/PageContactUs.vue';
import PageFAQ from '@/pages/PageFAQ.vue';
import PageTermsAndConditions from '@/pages/PageTermsAndConditions.vue';
import PagePrivacyPolicy from '@/pages/PagePrivacyPolicy.vue';
import ErrorPage from '@/pages/ErrorPage.vue';





const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome,
    meta: { layout: SecondaryLayout }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: PageAboutUs,
    meta: { layout: MainLayout },
  },
  {
    path: '/our-services',
    name: 'OurService',
    component: PageOurService,
    meta: { layout: MainLayout }
  },
  {
    path: '/our-services/:serviceId', 
    name: 'DetailService',
    component: PageDetailService,
    meta: { layout: MainLayout }
  },
  {
    path: '/pricing-plan',
    name: 'PricingPlan',
    component: PagePricingPlan,
    meta: { layout: MainLayout }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: PageBlog,
    meta: { layout: MainLayout }
  },
  {
    path: '/blog/:postId', 
    name: 'DetailBlog',
    component: PageDetailBlog,
    meta: { layout: SecondaryLayout }
  },
  {
    path: '/our-team',
    name: 'OurTeam',
    component: PageOurTeam,
    meta: { layout: MainLayout }
  },
  {
    path: '/our-team/:teamId',
    name: 'DetailOurTeam',
    component: PageOurTeam,
    meta: { layout: MainLayout }
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: PageContactUs,
    meta: { layout: MainLayout }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: PageFAQ,
    meta: { layout: MainLayout }
  },
  {
    path: '/terms-and-conditions', 
    name: 'TermsAndConditions',
    component: PageTermsAndConditions,
    meta: { layout: MainLayout }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PagePrivacyPolicy,
  },
  {
    path: '/error', // Страница ошибки
    name: 'ErrorPage',
    component: ErrorPage,
    meta: { layout: SecondaryLayout }
  },
  {
    path: '/:pathMatch(.*)*', 
    redirect: { name: 'ErrorPage' },
    meta: { layout: SecondaryLayout }
  }
];

export default routes;




// import MainLayout from '@/components/layout/MainLayout.vue';
// import SecondaryLayout from '@/components/layout/SecondaryLayout.vue';
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('@/pages/PageHome.vue'), 
//     meta: { layout: SecondaryLayout }
//   },
//   {
//     path: '/about-us',
//     name: 'AboutUs',
//     component: () => import('@/pages/PageAboutUs.vue'), 
//     meta: { layout: MainLayout }
//   },
//   {
//     path: '/our-services',
//     name: 'OurService',
//     component: () => import('@/pages/PageOurService.vue'), 
//     meta: { layout: MainLayout }
//   },
//   {
//     path: '/our-services/:serviceId',
//     name: 'DetailService',
//     component: () => import('@/pages/PageDetailService.vue'), 
//     meta: { layout: MainLayout }
//   },
//   {
//     path: '/pricing-plan',
//     name: 'PricingPlan',
//     component: () => import('@/pages/PagePricingPlan.vue'), 
//     meta: { layout: MainLayout }
//   },
//   {
//     path: '/blog',
//     name: 'Blog',
//     component: () => import('@/pages/PageBlog.vue'),
//     meta: { layout: MainLayout }
//   },
//   {
//     path: '/blog/:postId', 
//     name: 'DetailBlog',
//     component: () => import('@/pages/PageDetailBlog.vue'), 
//     meta: { layout: SecondaryLayout }
//   },
//   {
//     path: '/our-team',
//     name: 'OurTeam',
//     component: () => import('@/pages/PageOurTeam.vue'),
//     meta: { layout: MainLayout }
//   },
//   {
//     path: '/our-team/:teamId',
//     name: 'DetailOurTeam',
//     component: () => import('@/pages/PageOurTeam.vue'), 
//     meta: { layout: MainLayout }
//   },
//   {
//     path: '/contact-us',
//     name: 'ContactUs',
//     component: () => import('@/pages/PageContactUs.vue'),
//     meta: { layout: MainLayout }
//   },
//   {
//     path: '/faq',
//     name: 'FAQ',
//     component: () => import('@/pages/PageFAQ.vue'), 
//     meta: { layout: MainLayout }
//   },
//   {
//     path: '/terms-and-conditions', 
//     name: 'TermsAndConditions',
//     component: () => import('@/pages/PageTermsAndConditions.vue'),
//     meta: { layout: MainLayout }
//   },
//   {
//     path: '/privacy-policy',
//     name: 'PrivacyPolicy',
//     component: () => import('@/pages/PagePrivacyPolicy.vue'),
//   },
//   {
//     path: '/error',
//     name: 'ErrorPage',
//     component: () => import('@/pages/ErrorPage.vue'), 
//     meta: { layout: SecondaryLayout }
//   },
//   {
//     path: '/:pathMatch(.*)*', 
//     redirect: { name: 'ErrorPage' },
//   }
// ];


// export default routes;