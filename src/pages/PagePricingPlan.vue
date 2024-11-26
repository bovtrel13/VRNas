<script setup>
import { markRaw } from 'vue';

// Данные
import dataPriceCards from '@/assets/data/pricing/cardsPricing';
import dataWhyChooseUs from '@/assets/data/choose/accordionWhyChooseUs';
import dataFAQAccordion_2 from '@/assets/data/faq/accordionFAQ_2';

// Компоненты
import PricingPlans from '@/components/section-page/pricing-plan/PricingPlans.vue';
import HomeChoose from '@/components/section-page/homepage/HomeChoose.vue';
import AboutFAQ from '@/components/section-page/about-us/AboutFAQ.vue';

// пропсы для PricingPlans, page pricing plan ================================================

//пропса для стиля списка карточки цены
const priceCardsData = markRaw(dataPriceCards);
const styleList = {
  imgName: 'circle-checkbox.svg',
  positionIconTop: '2px',
};
const href = [
  'https://tudovchanin.github.io/tip-calculator-app-main/',
  'https://tudovchanin.github.io/tip-calculator-app-main/',
  'https://tudovchanin.github.io/tip-calculator-app-main/',
];
const textLinkBtn = 'GET 14 DAYS FREE TRIAL';
const textContentPricing = markRaw({
  tag_title: 'h2',
  title: 'Pricing',
  tag_sub_title: 'h3',
  sub_title: 'Pricing Plans',
  paragraph:
    'Choose the pricing plan that fits your needs and budget. All plans come with a free trial period so you can test out our service and see which plan works best for you.',
});

// пропсы для accordion choose us, page pricing plan

const whyChooseUsData = markRaw(dataWhyChooseUs);
const accordionType = 'single';
const decorLineTitleAccordion = true;
const playerChoose = markRaw({
  img: '/assets/images/bg/The_Getaway_PS2.jpg',
  video: 'getaway.mp4',
});
const imageChoose = markRaw({
  nameFolder: 'bg',
  imgName: 'user-run',
  imageFormats: ['png'],
  alt: 'image user',
  objFit: 'cover',
});
const textContentChooseAccordion = markRaw({
  tag_title: 'h2',
  title: 'WHY CHOOSE US',
  tag_sub_title: 'h3',
  sub_title: 'Why Choose Us for Your VR Needs',
});

// пропсы для AboutFAQ,  page about-us =========================================================================

const accordionFAQData_2 = markRaw(dataFAQAccordion_2);
const accordionFAQType = 'multiple';
const decorLineFAQTitleAccordion = true;
const textContentFAQ = markRaw({
  tag_title: 'h2',
  title: 'FAQ',
  tag_sub_title: 'h3',
  sub_title: 'Frequently Asked Questions',
  paragraph:
    'At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:',
});
</script>
<template>
  <section class="section section-pricing">
    <PricingPlans
      :cardsData="priceCardsData"
      :styleList
      :textLinkBtn
      :isExternalLink="true"
      :href
      :textContent="textContentPricing"
    />
  </section>

  <section class="section section-choose">
    <HomeChoose
      class="reverse"
      :accordionData="whyChooseUsData"
      :decorLineTitleAccordion
      :player="playerChoose"
      :imageChoose
      :accordionType
      :textContent="textContentChooseAccordion"
      :classes="['media-container--size3']"
    />
  </section>

  <section class="section section-faq">
    <AboutFAQ
      :accordionData="accordionFAQData_2"
      :decorLineTitleAccordion="decorLineFAQTitleAccordion"
      :accordionType="accordionFAQType"
      :textContent="textContentFAQ"
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

.section-pricing {
  padding-top: 150px;

  @include _1199 {
    padding-top: 100px;
  }
}

.section-choose {
  margin-bottom: 172px;

  @include _1199 {
    margin-bottom: 100px;
  }
}

.section-faq {
  margin-bottom: 150px;

  @include _1199 {
    margin-bottom: 100px;
  }
}
</style>
