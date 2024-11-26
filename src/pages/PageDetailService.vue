<script setup>
import { markRaw, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

// Данные
import dataDetailService from '@/assets/data/our_service/detailService';
import dataServiceList from '@/assets/data/our_service/serviceList';
import imgBgTabService from '/assets/images/bg/line-circle-bg.svg';
import imgNavigationTab from '/assets/images/decor/icons8-стрелка-40.png';
import imgDecorHeroService from '/assets/images/bg/stars_min.png';

// Компоненты
import TabServices from '@/components/section-page/detail-service/TabServices.vue';
import HeroServices from '@/components/section-page/detail-service/HeroServices.vue';
import HomeBigPlayer from '@/components/section-page/homepage/HomeBigPlayer.vue';
import HomeOurPricing from '@/components/section-page/homepage/HomeOurPricing.vue';

const route = useRoute();

// данные для сервисов должны быть не массивом объектов, а объектом содержащим другие объекты сервисов, ключами объекта данных выступает id тип строка
const detailServiceData = markRaw(dataDetailService);

// пропсы для TabServices и HeroServices,  page detail service

const basePath = '/our-services';

// параметр пути
const serviceId = computed(() => route.params.serviceId);

// длина массива ключей объекта detailServiceData
const lengthDataDetailService = computed(() => {
  return Object.keys(detailServiceData).length;
});

// все ключи главного объекта данных detailServiceData
const getArrAllKeyForDataDetailService = computed(() => {
  return Object.keys(detailServiceData);
});

// id выбранного сервиса, тип строка
const selectService = ref(serviceId.value);

// данные для секции HeroServices, тип объект полученный по ключу selectService.value
const dataHero = computed(() => {
  return detailServiceData[selectService.value];
});

// Событие переключения сервисов
const handleSwitchTabs = (idItem, indexActiveBtn) => {
  selectService.value = getArrAllKeyForDataDetailService.value[indexActiveBtn];
};

// массив текстовых значений для кнопок tab, секции TabServices
const arrTextTabs = computed(() => {
  return Object.values(detailServiceData).map((obj) => obj.sub_title);
});

// Теги для секции HeroServices
const tagHero = markRaw({
  tag_title: 'h2',
  tag_sub_title: 'h3',
  tag_list_title: 'h4',
});

// маркер для списка, секции HeroServices
const listImgName = 'decor-list-about.svg';
// отступ от левого края у списка, секции HeroServices
const paddingLeftList = '28px';

// пропсы для кнопки/ссылки секции HeroServices
const linkBtn = markRaw({
  isLink: true,
  to: '/contact-us',
  version: 1,
  text: 'CONTACT US',
});

// пропсы HomeBigPlayer, page detail service =================================================================

const playerBigHome = computed(() => {
  const pathImg = `/assets/images/bg/${
    detailServiceData[selectService.value].imgName
  }`;

  return {
    img: pathImg,
    video: detailServiceData[selectService.value].video,
  };
});

const textContentBigPlayerHome = computed(() => {
  return {
    tag_title: 'h2',
    title: detailServiceData[selectService.value].title_video,
    tag_sub_title: 'h3',
    sub_title: detailServiceData[selectService.value].sub_title_video,
    tag_title_video: 'div',
    text_title_video: detailServiceData[selectService.value].sub_title,
    tag_sub_title_video: 'div',
    text_sub_title_video: detailServiceData[selectService.value].text_video,
  };
});

// пропсы для HomeOurPricing, page detail service =================================================

const serviceListData = markRaw(dataServiceList);
const imageOurPricing = markRaw({
  nameFolder: 'bg',
  imgName: 'bg-pricing',
  imageFormats: ['png'],
  alt: 'image user',
  objFit: 'cover',
});
const listImgPathOurPricing = '/assets/images/decor/decor-list-service.svg';
const textContentOurPricing = markRaw({
  tag_title: 'h2',
  title: 'our pricing',
  tag_sub_title: 'h3',
  sub_title: 'Affordable VR Services for Everyone',
  paragraph:
    "At VRNas, we believe that everyone should have access to the benefits ofVR. That's why we offer a range of pricing options to meet the needs of   any budget.",
});

const linkBtnBigPlayer = markRaw({
  isLink: true,
  to: '/pricing-plan',
  version: 1,
  text: 'GET STARTED',
});
</script>
<template>
  <section class="section-hero">
    <HeroServices
      :paddingLeftList
      :tagHero
      :dataHero
      :listImgName
      :linkBtn
      :bgImage="imgDecorHeroService"
    >
      <TabServices
        @switching="handleSwitchTabs"
        :basePath
        :bgImage="imgBgTabService"
        :arrTextTabs
        :imgNavigationTab
        :arrAllKeyForDataDetailService="getArrAllKeyForDataDetailService"
        :lengthDataDetailService
        :itemId="serviceId"
      />
    </HeroServices>
  </section>
  <section class="section-player">
    <HomeBigPlayer
      :player="playerBigHome"
      :textContent="textContentBigPlayerHome"
      :linkBtn="linkBtnBigPlayer"
    />
  </section>
  <section class="section-pricing">
    <HomeOurPricing
      :imageOurPricing
      :listOurPricing="serviceListData"
      :listImgPath="listImgPathOurPricing"
      :textContent="textContentOurPricing"
      :className="['text-center']"
    />
  </section>
</template>

<style scoped lang="scss">
.section-hero {
  padding-top: 131px;
  margin-bottom: 150px;

  @include _1199 {
    margin-bottom: 100px;
  }
}

.section-player {
  margin-bottom: 150px;

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
</style>
