<script setup>
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';
import ImgLoader from '@/components/media-loader/imgLoader.vue';
import PlayerMin from '@/components/video_player/PlayerMin.vue';

const props = defineProps({
  player: {
    type: Object,
    default: null,
  },
  imageAboutUs: {
    type: Object,
    default: null,
  },
  player: {
    type: Object,
    default: null,
  },
  textContent: {
    type: Object,
    default: null,
  },
});
</script>
<template>
  <div class="about-us">
    <div class="about-us__info">
      <div class="about-us__header title-media">
        <div
          data-aos="fade-up"
          class="title-media__title"
        >
          <BaseGradientTitle :tag="textContent.tag_title">
            {{ textContent.title }}
          </BaseGradientTitle>
        </div>
        <component
          data-aos="fade-up"
          data-aos-delay="500"
          :is="textContent.tag_sub_title || 'div'"
          class="title-media__sub-title"
        >
          {{ textContent.sub_title }}
        </component>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="700"
        class="about-us__text-container"
      >
        <p
          class="about-us__text"
          v-for="(text, i) in textContent.paragraph"
          :key="i"
        >
          {{ text }}
        </p>
      </div>
    </div>

    <div class="about-us__container-img">
      <div class="media-container media-container--before-right">
        <div
          data-aos="fade-left"
          class="media-container__img"
        >
          <ImgLoader v-bind="imageAboutUs" />
        </div>
        <div
          v-if="player"
          data-aos="zoom-in-up"
          data-aos-delay="1000"
          class="media-container__video media-container__video--left"
        >
          <PlayerMin
            class="size-min"
            v-bind="player"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-us {
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @include _991 {
    flex-direction: column;
  }

  &__container-img {
    margin-right: 50px;

    @include _1199 {
      align-self: flex-end;
      margin-right: 0;
    }
  }

  &__info {
    padding-top: 40px;
    max-width: 52.1%;
    @include _1199 {
      max-width: 54%;
    }
    @include _991 {
      max-width: 562px;
    }
  }
  
  &__header {
    margin-bottom: 18px;
  }

  &__text {
    @include body1;
    color: $grey_2;
  }
}
</style>
