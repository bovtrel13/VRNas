<script setup>
import { computed, markRaw } from 'vue';

// Данные
import dataWhyChooseUs from '@/assets/data/choose/accordionWhyChooseUs';
import dataServiceCard from '@/assets/data/our_service/cardsService';
import dataClients from '@/assets/data/people/clients';
import dataServiceList from '@/assets/data/our_service/serviceList';
import dataArticleRecent from '@/assets/data/articles/articleRecent';
import dataArticlePopular from '@/assets/data/articles/articlePopular';

// Компоненты
import HomeHero from '@/components/section-page/homepage/HomeHero.vue';
import HomeAboutUs from '@/components/section-page/homepage/HomeAboutUs.vue';
import HomeChoose from '@/components/section-page/homepage/HomeChoose.vue';
import HomeOurService from '@/components/section-page/homepage/HomeOurService.vue';
import HomeTestimonial from '@/components/section-page/homepage/HomeTestimonial.vue';
import HomePartners from '@/components/section-page/homepage/HomePartners.vue';
import HomeOurPricing from '@/components/section-page/homepage/HomeOurPricing.vue';
import HomeBigPlayer from '@/components/section-page/homepage/HomeBigPlayer.vue';
import HomeArticles from '@/components/section-page/homepage/HomeArticles.vue';

// Пропсы для HomeHero, page home ===================================================================================================

// Пропсы для карточек ServiceCard секции HomeHero
const serviceHeroData = computed(() => {
  return dataServiceCard.filter((v) => {
    return (
      v.title === 'Expertise' ||
      v.title === 'Customization' ||
      v.title === 'Service'
    );
  });
});
// пропсы для блока happyClient
const happyClientHero = markRaw({
  clientArrImg: ['client_0.png', 'client_3.png', 'client_vlad.jpeg'],
  number_clients: '32k+',
  title: 'Happy Client',
});
//Пропсы для BaseLinkBtn
const linkBtnHero = markRaw({
  isExternalLink: true,
  to: 'https://tudovchanin.github.io/rock-paper-scissors-master/',
  version: 1,
  text: 'start playing',
});
// пропсы для мин плеера
const playerHero = markRaw({
  img: 'assets/images/bg/grand_theft_auto_vice_city.jpg',
  video: 'gta_vice_city.mp4',
});
// Пропсы для картинки контента
const imageHero = markRaw({
  nameFolder: 'bg',
  imgName: 'user-hero',
  imageFormats: ['png'],
  defaultFormat: 'png',
  alt: 'user image',
  objFit: 'cover',
});
// Пропсы для текста
const textContentHero = markRaw({
  title: 'Immerse Yourself in Virtual Reality',
  paragraph:
    'Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services',
});

// Пропсы для HomeAboutUs, page home=================================================================================================

const listAboutUs = markRaw([
  {
    id: 1,
    text: 'Cutting-Edge Technology',
    imgName: 'decor-list-about.svg',
    paddingLeft: '28px',
  },
  {
    id: 2,
    text: 'Versatile Applications',
    imgName: 'decor-list-about.svg',
    paddingLeft: '28px',
  },
  {
    id: 3,
    text: 'Affordable and Accessible',
    imgName: 'decor-list-about.svg',
    paddingLeft: '28px',
  },
]);
const linkBtnAboutUs = markRaw({
  isLink: true,
  to: '/about-us',
  version: 1,
  textLinkBtn: 'READ MORE',
});
const playerAboutUs = markRaw({
  img: 'assets/images/bg/The_Getaway_PS2.jpg',
  video: 'getaway.mp4',
});
const imageAboutUs = markRaw({
  nameFolder: 'bg',
  imgName: 'user-about-us',
  imageFormats: ['webp', 'png'],
  alt: 'image user',
  objFit: 'cover',
});
const textContentAboutUs = markRaw({
  tag_title: 'h2',
  title: 'ABOUT US',
  tag_sub_title: 'h3',
  sub_title:
    'Bring your events to life like never before with our VR services.',
  paragraph:
    'VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the  power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.',
});

// Пропсы для HomeChoose, page home =================================================================================================

const accordionWhyChooseData = markRaw(dataWhyChooseUs);
const accordionType = 'single';
const decorLineTitleAccordion = true;
const playerChoose = markRaw({
  img: 'assets/images/bg/The_Getaway_PS2.jpg',
  video: 'getaway.mp4',
});
const imageChoose = markRaw({
  nameFolder: 'bg',
  imgName: 'choose-user-min',
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

// Пропсы для HomeOurService, page home ============================================================================================

const serviceCardStyle = markRaw({
  gapDesk: '60px',
  gapMobile: '20px',
  imgSize: '48px',
});
// пропс для карточек, если true то включается аккордеон на touch устройствах
const visibilitySwitchCards = true;
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

// пропсы HomeBigPlayer, page home ================================================================================================

const playerBigHome = markRaw({
  img: 'assets/images/bg/big-player-bg.jpeg',
  video: 'klip.mp4',
});
const textContentBigPlayerHome = markRaw({
  tag_title: 'h2',
  title: 'HOW TO GET STARTED',
  tag_sub_title: 'h3',
  sub_title: 'Bringing Your Virtual Reality Dreams to Life',
  tag_title_video: 'div',
  text_title_video: 'VR Service',
  tag_sub_title_video: 'div',
  text_sub_title_video: 'How to get started',
});
const linkBtnBigPlayer = markRaw({
  isLink: true,
  to: '/our-services',
  version: 1,
  text: 'GET STARTED',
});

// пропсы для HomeTestimonial, page home ============================================================================================

const clientsData = markRaw(dataClients);
const textContentTestimonial = markRaw({
  tag_title: 'h2',
  title: 'TESTIMONIALS',
  tag_sub_title: 'h3',
  sub_title: 'What Our Clients Are Saying',
});

// пропсы для HomeOurPricing, page home =============================================================================================

const serviceListData = markRaw(dataServiceList);
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

// пропсы для HomePartners, page home ===============================================================================================

const partnersData = markRaw([
  {
    id: 1,
    nameFolder: 'social',
    imageFormats: ['png'],
    imgName: 'Michdev',
    alt: 'Mich Developments',
    defaultFormat: 'png',
    objFit: 'contain',
  },
  {
    id: 2,
    nameFolder: 'social',
    imageFormats: ['png'],
    imgName: 'Michdev',
    alt: 'Mich Developments',
    defaultFormat: 'png',
    objFit: 'contain',
  },
  {
    id: 3,
    nameFolder: 'social',
    imageFormats: ['png'],
    imgName: 'Michdev',
    alt: 'Mich Developments',
    defaultFormat: 'png',
    objFit: 'contain',
  },
  {
    id: 4,
    nameFolder: 'social',
    imageFormats: ['png'],
    imgName: 'yandex',
    alt: 'yandex',
    defaultFormat: 'png',
    objFit: 'contain',
  },
  {
    id: 5,
    nameFolder: 'social',
    imageFormats: ['png'],
    imgName: 'youtube',
    alt: 'youtube',
    defaultFormat: 'png',
    objFit: 'contain',
  },
  {
    id: 6,
    nameFolder: 'social',
    imageFormats: ['png'],
    imgName: 'вконтате',
    alt: 'вконтате',
    defaultFormat: 'png',
    objFit: 'contain',
  },
  {
    id: 7,
    nameFolder: 'social',
    imageFormats: ['png'],
    imgName: 'вконтате',
    alt: 'вконтате',
    defaultFormat: 'png',
    objFit: 'contain',
  },
]);
const textContentPartners = markRaw({
  tag_title: 'h2',
  title: 'Our Trusted Partners',
  tag_sub_title: 'h3',
  sub_title: ' Discover the Companies We Work With',
});

// пропсы our articles, page home ===================================================================================================

const articleRecentData = markRaw(dataArticleRecent);
const articlePopularData = markRaw(dataArticlePopular);

const imageOurArticles = markRaw({
  nameFolder: 'blog/card_',
  imageFormats: ['webp'],
});
const textContentArticles = markRaw({
  tag_title: 'h2',
  title: 'OUR ARTICLES',
  tag_sub_title: 'h3',
  sub_title: 'Stay Up-to-Date with Our VR Insights',
  tag_title_popular_article: 'h4',
  title_popular_article: 'Popular Article',
  tag_title_recent_article: 'h4',
  title_recent_article: 'Recent Article',
});
const linkBtnOurArticles = markRaw({
  isLink: true,
  to: '/blog',
  version: 2,
});
</script>
<template>
  <section class="section section-hero">
    <HomeHero
      :imageHero
      :happyClient="happyClientHero"
      :linkBtn="linkBtnHero"
      :serviceDataCards="serviceHeroData"
      :player="playerHero"
      :textContent="textContentHero"
    />
  </section>

  <section class="section">
    <HomeAboutUs
      :listAboutUs
      :linkBtn="linkBtnAboutUs"
      :player="playerAboutUs"
      :imageAboutUs
      :textContent="textContentAboutUs"
    />
  </section>

  <section class="section">
    <HomeOurService
      :serviceCardStyle
      :visibilitySwitchCards
      :cardsData="cardsDataOurService"
      :linkBtn="linkBtnOurService"
      :textContent="textContentOurService"
    />
  </section>

  <section class="section section-choose">
    <HomeChoose
      :accordionData="accordionWhyChooseData"
      :decorLineTitleAccordion
      :player="playerChoose"
      :imageChoose
      :accordionType
      :textContent="textContentChooseAccordion"
    />
  </section>

  <section class="section section-player">
    <HomeBigPlayer
      :player="playerBigHome"
      :textContent="textContentBigPlayerHome"
      :linkBtn="linkBtnBigPlayer"
    />
  </section>

  <section class="section">
    <HomeTestimonial
      :clientsData
      :textContent="textContentTestimonial"
    />
  </section>

  <section class="section section-pricing">
    <HomeOurPricing
      :imageOurPricing
      :listOurPricing="serviceListData"
      :listImgPath="listImgPathOurPricing"
      :textContent="textContentOurPricing"
    />
  </section>

  <section class="section">
    <HomePartners
      :partnersData
      :textContent="textContentPartners"
    />
  </section>

  <section class="section section-articles">
    <HomeArticles
      v-bind="imageOurArticles"
      :dataArticleRecent="articleRecentData"
      :dataArticlePopular="articlePopularData"
      :textContent="textContentArticles"
      :linkBtnOurArticles
      :enableAutoSlide="true"
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

.section-hero {
  padding-top: 13px;
  position: relative;

  @include _991 {
    padding-top: 40px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 721px;
    top: 0;
    left: -1140px;
    z-index: -1;
    background-image: url('/assets/images/bg/hero.svg');
    background-position: 115% center;
    background-repeat: no-repeat;
    pointer-events: none;

    @include _991 {
      top: 300px;
      left: -870px;
    }

    @include _767 {
      top: 70px;
    }
  }
}

.section-choose {
  margin-bottom: 172px;

  @include _1199 {
    margin-bottom: 100px;
  }
}

.section-pricing {
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
}

.section-articles {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: -2;
    left: 0;
    top: 100px;
    @include background-effect;
  }

  &::after {
    content: '';
    position: absolute;
    width: 2000px;
    height: 721px;
    top: 320px;
    left: -1200px;
    z-index: -1;
    background-image: url('/assets/images/bg/hero.svg');
    background-position: 115% center;
    background-repeat: no-repeat;
    pointer-events: none;

    @include _1199 {
      left: -800px;
      top: 245px;
    }

    @include _1024 {
      top: 720px;
    }
  }
}

</style>
