<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

import HeroNamePage from '@/components/text-content/HeroNamePage.vue';

const route = useRoute();
const pageTitle = ref('');
const pageName = ref('');

watch(
  route,
  (newRoute) => {
 
    switch (newRoute.name) {
      case 'AboutUs':
        pageTitle.value = 'About Us';
        pageName.value = 'About Us';
        break;
      case 'OurService':
        pageTitle.value = 'Our Service';
        pageName.value = 'Our Service';
        break;
      case 'DetailService':
        pageTitle.value = 'Detail Service';
        pageName.value = 'Detail Service';
        break;
      case 'PricingPlan':
        pageTitle.value = 'Pricing Plan';
        pageName.value = 'Pricing Plan';
        break;
      case 'Blog':
        pageTitle.value = 'Blog';
        pageName.value = 'Blog';
        break;
      case 'OurTeam':
        pageTitle.value = 'Our Team';
        pageName.value = 'Our Team';
        break;
      case 'DetailOurTeam':
        pageTitle.value = 'Our Team';
        pageName.value = 'Our Team';
        break;
      case 'ContactUs':
        pageTitle.value = 'Contact Us';
        pageName.value = 'Contact Us';
        break;
      case 'FAQ':
        pageTitle.value = 'FAQ';
        pageName.value = 'FAQ';
        break;
      case 'TermsAndConditions':
        pageTitle.value = 'Terms & Conditions';
        pageName.value = 'Terms & Conditions';
        break;
      case 'PrivacyPolicy':
        pageTitle.value = 'Privacy Policy';
        pageName.value = 'Privacy Policy';
        break;
      default:
        pageTitle.value = 'Loading';
        pageName.value = '';
    }
  },
  { immediate: true }
);
</script>
<template>
  <div class="main-layout">
    <HeroNamePage
      :title="pageTitle"
      :namePage="pageName"
      titleTag="h1"
    />

    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.main-layout {
  min-height: 100vh;
}
</style>
