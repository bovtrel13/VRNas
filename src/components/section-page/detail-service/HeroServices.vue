<script setup>
import { computed } from 'vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';
import BaseListItem from '@/components/ui/BaseListItem.vue';
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';

const props = defineProps({
  dataHero: {
    type: Object,
    required: true,
  },

  listImgName: {
    type: String,
    default: null,
  },

  paddingLeftList: {
    type: String,
    default: null,
  },

  tagHero: {
    type: Object,
    default: null,
  },

  linkBtn: {
    type: Object,
    default: null,
  },
  bgImage: {
    type: String,
    default: null,
  },
});

const setBgImg = computed(() => {
  return {
    '--bg-img': `url(${props.bgImage})`,
  };
});
</script>
<template>
  <div
    :style="setBgImg"
    class="detail-services-hero"
  >
    <div class="detail-services-hero__content">
      <div class="detail-services-hero__header title-media">
        <div
          data-aos="fade-left"
          class="title-media__title"
        >
          <BaseGradientTitle :tag="tagHero.tag_title">
            {{ dataHero.title }}
          </BaseGradientTitle>
        </div>
        <component
          :is="tagHero.tag_sub_title || 'div'"
          data-aos="fade-left"
          data-aos-delay="500"
          class="title-media__sub-title"
        >
          {{ dataHero.sub_title }}
        </component>
      </div>
      <div
        v-if="dataHero.text"
        data-aos="fade-right"
        data-aos-delay="500"
        class="detail-services-hero__container-paragraph"
      >
        <p
          v-if="dataHero.text[0]"
          data-aos="fade-right"
          data-aos-delay="500"
          class="detail-services-hero__paragraph"
        >
          {{ dataHero.text[0] }}
        </p>
        <p
          v-if="dataHero.text[1]"
          data-aos="fade-right"
          data-aos-delay="500"
          class="detail-services-hero__paragraph"
        >
          {{ dataHero.text[1] }}
        </p>
      </div>
      <div class="detail-services-hero__container-list">
        <component
          :is="tagHero.tag_list_title || 'div'"
          data-aos="fade-up"
          data-aos-delay="500"
          class="detail-services-hero__title-list"
        >
          {{ dataHero.list_title }}
        </component>

        <ul class="detail-services-hero__list">
          <li
            class="detail-services-hero__list-item"
            data-aos="fade-down"
            :data-aos-delay="100 * index"
            v-for="(item, index) in dataHero.list_item"
            :key="index"
          >
            <BaseListItem
              :text="item"
              :paddingLeft="paddingLeftList"
              :imgName="listImgName"
            />
          </li>
        </ul>
      </div>
      <div
        v-if="dataHero.text"
        data-aos="fade-down"
        data-aos-delay="500"
        class="detail-services-hero__container-paragraph mb-container-paragraph"
      >
        <p
          v-if="dataHero.text[2]"
          data-aos="fade-down"
          data-aos-delay="500"
          class="detail-services-hero__paragraph"
        >
          {{ dataHero.text[2] }}
        </p>
        <p
          v-if="dataHero.text[3]"
          data-aos="fade-down"
          data-aos-delay="500"
          class="detail-services-hero__paragraph"
        >
          {{ dataHero.text[3] }}
        </p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-delay="500"
        class="detail-services-hero__link-btn"
      >
        <BaseLinkBtn v-bind="linkBtn">{{ linkBtn.text }}</BaseLinkBtn>
      </div>
    </div>

    <div class="detail-services-hero__tabs animation-3">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.detail-services-hero {
  position: relative;
  padding-top: 165px;

  &__content {
    display: grid;
    justify-items: center;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 35%;
      z-index: -1;
      @include background-effect;
    }
  }

  &__header {
    display: grid;
    justify-items: center;
    position: relative;
    margin-bottom: 16px;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      top: -10px;
      left: 10px;
      border-radius: 45px;
      background-color: rgb(0, 0, 0);
      filter: blur(7px);
    }
  }

  &__container-paragraph {
    display: grid;
    align-content: start;
    gap: 30px;
    max-width: 627px;
    height: 226px;
    padding-right: 10px;
    margin-bottom: 20px;
    overflow-y: auto;
    z-index: 1;
    scrollbar-width: thin;
    scrollbar-color: $purple_10 $black_50;

    @include _1199 {
      gap: 10px;
      margin-bottom: 30px;
      height: 150px;
    }

    @include _991 {
      text-align: center;
    }

    @include _767 {
      text-align: initial;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $purple_10;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: $black_50;
      border-radius: 10px;
    }
  }

  &__paragraph {
    @include body1;
    color: $grey_2;
  }

  &__container-list {
    width: max-content;
    min-width: 431px;
    background-color: $black_50;
    padding: 34px 30px 40px;
    border: solid transparent 1px;
    border-image: $border1;
    margin-bottom: 102px;

    @include _1199 {
      margin-bottom: 15vw;
    }

    @include _991 {
      margin-bottom: 30px;
    }

    @include _480 {
      width: 100%;
      min-width: initial;
    }

    @include _380 {
      padding: 34px 20px 40px;
    }
  }

  &__title-list,
  &__list {
    @include body3;
    line-height: 1;
    color: $white;
  }

  &__title-list {
    margin-bottom: 36px;
  }

  &__list {
    display: grid;
    gap: 26px;
  }

  &__link-btn {
    width: max-content;
    min-width: min(174px, 100%);
    height: 50px;
    @include button1;
    color: $white;
  }

  &__tabs {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    &::before,
    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      top: -150px;
      width: 800px;
      height: 500px;
      background: var(--bg-img) no-repeat center/100%;
      @include _767 {
        width: 400px;
        height: 250px;
        top: 60px;
      }
    }

    &::before {
      left: 0;
      @include _767 {
        left: 10%;
      }
    }

    &::after {
      left: 30%;
      @include _767 {
      }
    }
  }
}

.mb-container-paragraph {
  margin-bottom: 32px;
}
</style>
