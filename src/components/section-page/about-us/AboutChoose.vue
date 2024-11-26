<script setup>
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';
import CardListService from '@/components/section-page/card-list/CardListService.vue';

const props = defineProps({
  serviceDataCards: {
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
  <div class="about-choose">
    <div class="about-choose__header title-media">
      <div
        data-aos="fade-left"
        class="title-media__title"
      >
        <BaseGradientTitle :tag="textContent.tag_title">
          {{ textContent.title }}
        </BaseGradientTitle>
      </div>
      <component
        data-aos="fade-left"
        data-aos-delay="500"
        :is="textContent.tag_sub_title || 'div'"
        class="title-media__sub-title"
      >
        {{ textContent.sub_title }}
      </component>
    </div>
    <div
      data-aos="fade-right"
      data-aos-delay="500"
      class="about-choose__content"
    >
      <CardListService :cardListData="serviceDataCards" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-choose {
  &__header {
    display: grid;
    justify-items: center;
    max-width: 708px;
    margin-bottom: 54px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }
}
</style>
