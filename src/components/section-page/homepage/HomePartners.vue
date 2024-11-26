<script setup>

import DecorPartners from '@/components/partners/DecorPartners.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

const props = defineProps({
  partnersData: {
    type: Array,
    default: null,
  },
  textContent: {
    type: Object,
    default: null,
  },
});
</script>
<template>
  <div data-aos="zoom-in" data-aos-delay="500" class="home-partners">
    <div class="home-partners__header title-media">
      <div class="title-media__title">
        <BaseGradientTitle :tag="textContent.tag_title">{{ textContent.title }}</BaseGradientTitle>
      </div>
      <component :is="textContent.tag_title || 'div'" class="title-media__sub-title">{{ textContent.sub_title }}</component>
    </div>
    <div class="home-partners__content">
      <DecorPartners :partnersData="partnersData" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.home-partners__header {
  display: grid;
  justify-items: center;
  margin-bottom: 58px;
  text-align: center;
  @include _767 {
    margin-bottom: 24px;
  }
}

.home-partners__content {
  display: flex;
  justify-content: center;
}
</style>
