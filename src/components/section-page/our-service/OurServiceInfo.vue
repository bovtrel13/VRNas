<script setup>
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

const props = defineProps({
  textContentArray: {
    type: Array,
    default: null,
  },
});
</script>
<template>
  <div class="our-service-info">
    <div
      v-for="textContent in textContentArray"
      class="our-service-info__content title-media"
    >
      <div
        v-if="textContent.title"
        data-aos="fade-up"
        class="title-media__title"
      >
        <BaseGradientTitle :tag="textContent.tag_title">
          {{ textContent.title }}
        </BaseGradientTitle>
      </div>
      <component
        :is="textContent.tag_sub_title || 'div'"
        data-aos="fade-up"
        data-aos-delay="500"
        v-if="textContent.sub_title"
        class="title-media__sub-title"
      >
        {{ textContent.sub_title }}
      </component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our-service-info {
  display: flex;
  gap: clamp(30px, 8vw, 200px);

  @include _767 {
    gap: 30px;
  }

  @include _639 {
    flex-direction: column;
  }
  
  &__content {
    display: grid;
    justify-items: center;
  }
}
</style>
