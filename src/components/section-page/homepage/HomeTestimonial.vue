<script setup>
import TestimonialsClients from '@/components/testimonials/TestimonialsClients.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

const props = defineProps({
  clientsData: {
    type: Array,
    required: true,
  },
  textContent: {
    type: Object,
    default: null,
  },
});
</script>
<template>
  <div class="home-testimonials">
    <div class="home-testimonials__header title-media">
      <div
        data-aos="fade-up"
        class="title-media__title home-testimonials__title"
      >
        <BaseGradientTitle :tag="textContent.tag_title">
          {{ textContent.title }}
        </BaseGradientTitle>
      </div>
      <component
        :is="textContent.tag_sub_title || 'div'"
        data-aos="fade-up"
        class="home-testimonials__sub-title title-media__sub-title"
      >
        {{ textContent.sub_title }}
      </component>
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      data-aos-anchor-placement="center-bottom"
      class="home-testimonials__content"
    >
      <TestimonialsClients :clientsData />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.home-testimonials {
  position: relative;
  @include _767 {
    margin-left: -20px;
    margin-right: -20px;
  }

  &__header {
    position: absolute;
    top: 5vw;
    left: 50%;
    transform: translateX(-50%);
    max-width: 628px;
    width: 100%;
    @include _1199 {
      position: initial;
      top: initial;
      left: initial;
      transform: initial;
      margin: 0 auto 30px;
    }
    @include _480 {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
  }

  &__sub-title {
    text-align: center;
  }
}
</style>

