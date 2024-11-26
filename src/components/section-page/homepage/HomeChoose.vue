<script setup>
import { reactive } from 'vue';

// Компоненты
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';
import ImgLoader from '@/components/media-loader/imgLoader.vue';
import PlayerMin from '@/components/video_player/PlayerMin.vue';
import BaseItemAccordion from '@/components/ui/BaseItemAccordion.vue';

const props = defineProps({
  player: {
    type: Object,
    default: null,
  },

  imageChoose: {
    type: Object,
    default: null,
  },

  accordionData: {
    type: Array,
    default: null,
  },

  decorLineTitleAccordion: {
    type: Boolean,
    default: false,
  },

  accordionType: {
    type: String,
    default: 'multiple', // или 'single'
  },

  textContent: {
    type: Object,
    default: null,
  },

  classes: {
    type: Array,
    default: () => [],
  },
});

const arrTextHidden = reactive(
  new Array(props.accordionData.length).fill(true)
);
const handleAccordionClick = (index, emitValue) => {
  // Что бы аккордеон открывался весь, а не только одно поле убираем  arrTextHidden.forEach
  if (props.accordionType === 'single') {
    arrTextHidden.forEach((_, i) => {
      if (i !== index) {
        arrTextHidden[i] = true;
      }
    });
  }

  arrTextHidden[index] = !arrTextHidden[index];
};
</script>

<template>
  <div class="home-choose">
    <div class="home-choose__left">
      <div class="home-choose__info">
        <div class="home-choose__info-header title-media">
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
        <div class="home-choose__accordion">
          <div
            class="accordion-container"
            v-for="(data, index) in accordionData"
            :class="{ 'open-accordion': !arrTextHidden[index] }"
          >
            <BaseItemAccordion
              data-aos="fade-up"
              :data-aos-delay="100 * index"
              :textHidden="arrTextHidden[index]"
              :dataAccordion="data"
              :decorLineTitle="decorLineTitleAccordion"
              @clickBtnAccordion="
                (emitValue) => handleAccordionClick(index, emitValue)
              "
              :key="data.id"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      :class="classes"
      class="home-choose__right media-container media-container--size2"
    >
      <div
        data-aos="fade-left"
        class="media-container__img"
      >
        <ImgLoader v-bind="imageChoose" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="500"
        class="media-container__video"
      >
        <PlayerMin
          class="size-min"
          v-bind="player"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-choose {
  display: flex;
  justify-content: space-between;

  @include _991 {
    flex-direction: column-reverse;
    gap: 68px;
  }

  &__left {
    display: flex;
    max-width: 548px;
    position: relative;
    z-index: 1;
    padding-top: 94px;

    @include _1199 {
      padding-top: 0;
      max-width: 500px;
    }

    @include _991 {
      align-self: flex-end;
    }

    @include _639 {
      align-self: center;
    }
  }

  &__info-header {
    margin-bottom: 32px;
  }

  &__accordion {
    display: flex;
    flex-direction: column;
    gap: 50px;
    z-index: 100;

    @include _991 {
      gap: 36px;
    }

    .open-accordion {
      background-image: linear-gradient(
        to left,
        rgba(35, 32, 32, 0.421),
        rgba(19, 15, 15, 0.849)
      );
    }
  }

  &__right {
    @include _991 {
      align-self: flex-start;
    }
  }
}

.reverse {
  flex-direction: row-reverse;
  @include _991 {
    flex-direction: column-reverse;
  }
}
</style>
