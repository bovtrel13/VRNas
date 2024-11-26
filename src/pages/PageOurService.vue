<script setup>
import { computed, markRaw } from 'vue';

// Данные
import dataServiceCard from '@/assets/data/our_service/cardsService';
import dataServiceList from '@/assets/data/our_service/serviceList';
import dataClients from '@/assets/data/people/clients';

// Компоненты
import HomeOurService from '@/components/section-page/homepage/HomeOurService.vue';
import HomeTestimonial from '@/components/section-page/homepage/HomeTestimonial.vue';
import HomeOurPricing from '@/components/section-page/homepage/HomeOurPricing.vue';
import OurServiceInfo from '@/components/section-page/our-service/OurServiceInfo.vue';

// Пропсы для HomeOurService, page our-service ======================================================================================

const serviceCardStyle = markRaw({
  gapDesk: '60px',
  gapMobile: '60px',
  imgSize: '48px',
});
// пропс для карточек, если true то включается аккордеон на touch устройствах
// const visibilitySwitchCards = true;

const cardsDataOurService = computed(() => {
  return dataServiceCard.filter((v) => v.id > 3);
});

const linkBtnOurService = markRaw({
  isLink: true,
  version: 2,
  text: 'LEARN MORE',
});

const textContentOurService = markRaw({
  tag_title: 'h2',
  title: 'OUR SERVICE',
  tag_sub_title: 'h3',
  sub_title: 'Our Service',
  paragraph:
    'We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.',
});

// пропсы для HomeOurPricing, page our-service ======================================================================================

const imageOurPricing = markRaw({
  nameFolder: 'bg',
  imgName: 'bg-pricing',
  imageFormats: ['png'],
  alt: 'image user',
  objFit: 'cover',
});

const listImgPathOurPricing = 'assets/images/decor/decor-list-service.svg';
const textContentOurPricing = markRaw({
  tag_title: 'h2',
  title: 'our pricing',
  tag_sub_title: 'h3',
  sub_title: 'Affordable VR Services for Everyone',
  paragraph:
    "At VRNas, we believe that everyone should have access to the benefits ofVR. That's why we offer a range of pricing options to meet the needs of   any budget.",
});

// пропсы для HomeTestimonial, page our-service =====================================================================================

const textContentTestimonial = markRaw({
  tag_title: 'h2',
  title: 'TESTIMONIALS',
  tag_sub_title: 'h3',
  sub_title: 'What Our Clients Are Saying',
});

// пропсы для OurServiceInfo, page our-service

const textContentOurServiceInfo = markRaw([
  {
    tag_title: 'h2',
    title: 'HAPPY CLIENTS',
    tag_sub_title: 'div',
    sub_title: '123k+',
  },
  {
    tag_title: 'h2',
    title: 'PROJECT COMPLETE',
    tag_sub_title: 'div',
    sub_title: '300k+',
  },
  {
    tag_title: 'h2',
    title: 'YEARS EXPERIENCE',
    tag_sub_title: 'div',
    sub_title: '10+',
  },
]);
</script>
<template>
  <section class="section section-service">
    <HomeOurService
      :serviceCardStyle
      :cardsData="cardsDataOurService"
      :textContent="textContentOurService"
      :linkBtn="linkBtnOurService"
    />
  </section>

  <section class="section section-info">
    <OurServiceInfo :textContentArray="textContentOurServiceInfo" />
  </section>

  <section class="section section-pricing">
    <HomeOurPricing
      :imageOurPricing
      :listOurPricing="dataServiceList"
      :listImgPath="listImgPathOurPricing"
      :textContent="textContentOurPricing"
    />
  </section>

  <section class="section">
    <HomeTestimonial
      :clientsData="dataClients"
      :textContent="textContentTestimonial"
    />
  </section>
</template>

<style lang="scss" scoped>
.section {
  margin-bottom: 150px;

  @include _1199 {
    margin-bottom: 100px;
  }
}

.section-service {
  padding-top: 150px;

  @include _1199 {
    padding-top: 100px;
  }
}

.section-info {
  display: flex;
  justify-content: center;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(52, 52, 69, 0.3),
    rgba(32, 32, 41, 0) 100%
  );
}

.section-pricing {
  position: relative;
  margin-bottom: 196px;

  @include _1199 {
    margin-bottom: 146px;
  }

  @include _991 {
    margin-bottom: 100px;
  }

  @include _767 {
    margin-bottom: 188px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    @include background-effect;
  }
}
</style>
