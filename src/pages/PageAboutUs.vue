<script setup>
import { computed, markRaw } from 'vue';

// Данные
import dataServiceCard from '@/assets/data/our_service/cardsService';
import dataWhyChooseUs_2 from '@/assets/data/choose/accordionWhyChooseUs_2';
import dataOurTeam from '@/assets/data/people/team';
import dataFAQAccordion from '@/assets/data/faq/accordionFAQ';

// Компоненты
import AboutAboutUs from '@/components/section-page/about-us/AboutAboutUs.vue';
import AboutChoose from '@/components/section-page/about-us/AboutChoose.vue';
import HomeChoose from '@/components/section-page/homepage/HomeChoose.vue';
import AboutOurTeam from '@/components/section-page/about-us/AboutOurTeam.vue';
import HomePartners from '@/components/section-page/homepage/HomePartners.vue';
import AboutFAQ from '@/components/section-page/about-us/AboutFAQ.vue';

// пропсы для AboutAboutUs, page about-us ======================================================================

const imageAboutUs = markRaw({
  nameFolder: 'bg',
  imgName: 'about-us-hero',
  imageFormats: ['webp', 'png'],
  alt: 'image user',
  objFit: 'cover',
});
const textContentAboutUs = markRaw({
  tag_title: 'h2',
  title: 'ABOUT US',
  tag_sub_title: 'h3',
  sub_title: 'Bringing Your Vision to Life: Learn About VRNas',
  paragraph: [
    'VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.',
    'Our team consists of experienced VR developers, designers, and technicians who are passionate about VR and dedicated to delivering the highest quality work. We use the latest VR hardware and software to create immersive, interactive experiences that are tailored to your specific needs.',
    'From initial consultation to final delivery, we are committed to providing exceptional customer service. Our goal is to ensure that you are completely satisfied with every aspect of your VR experience.',
  ],
});
const playerAboutUs = markRaw({
  img: 'assets/images/bg/grand_theft_auto_vice_city.jpg',
  video: 'gta_vice_city.mp4',
});

// пропсы для AboutChoose, page about-us =======================================================================

const serviceCardData = computed(() => {
  return dataServiceCard.filter((v) => {
    return (
      v.title === 'VR Development' ||
      v.title === 'VR Consulting' ||
      v.title === 'VR Events'
    );
  });
});
const textContentChoose = markRaw({
  tag_title: 'h2',
  title: 'WHY CHOOSE US',
  tag_sub_title: 'h3',
  sub_title: 'Empowering Your Virtual Reality Experience',
});

// пропсы для accordion choose us, page about-us ===============================================================

const whyChooseUsData_2 = markRaw(dataWhyChooseUs_2);
const accordionChooseType = 'single';
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
  title: 'REASONS TO SELECT US',
  tag_sub_title: 'h3',
  sub_title: 'Discover Why We Are Your Best Choice for VR Solutions',
});

// пропсы для AboutOurTeam, page about-us ======================================================================

const ourTeamData = computed(() => {
  return dataOurTeam.filter((_, i) => {
    return i < 4;
  });
});
const textContentOurTeam = markRaw({
  tag_title: 'h2',
  title: 'OUR TEAM',
  tag_sub_title: 'h3',
  sub_title: 'Our Professionals Team',
});
const linkBtnOurTeam = markRaw({
  isLink: true,
  to: '/our-team',
  version: 2,
  text: 'SEE ALL',
});

// пропсы для HomePartners,  page about-us =====================================================================

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

// пропсы для AboutFAQ,  page about-us =========================================================================

const accordionFAQData = markRaw(dataFAQAccordion);
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
  <section class="section section-about">
    <AboutAboutUs
      :imageAboutUs
      :textContent="textContentAboutUs"
      :player="playerAboutUs"
    />
  </section>

  <section class="section">
    <AboutChoose
      :serviceDataCards="serviceCardData"
      :textContent="textContentChoose"
    />
  </section>

  <section class="section section-select">
    <HomeChoose
      class="reverse"
      :accordionType="accordionChooseType"
      :accordionData="whyChooseUsData_2"
      :decorLineTitleAccordion
      :player="playerChoose"
      :imageChoose
      :textContent="textContentChooseAccordion"
    />
  </section>

  <section class="section">
    <AboutOurTeam
      :dataOurTeam="ourTeamData"
      :textContent="textContentOurTeam"
      :linkBtn="linkBtnOurTeam"
    />
  </section>

  <section class="section">
    <HomePartners
      :partnersData
      :textContent="textContentPartners"
    />
  </section>

  <section class="section">
    <AboutFAQ
      :accordionData="accordionFAQData"
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

.section-about {
  padding-top: 150px;
  margin-bottom: 172px;

  @include _1199 {
    padding-top: 72px;
    margin-bottom: 122px;
  }
}

.section-select {
  margin-bottom: 172px;

  @include _1199 {
    margin-bottom: 122px;
  }
}
</style>
