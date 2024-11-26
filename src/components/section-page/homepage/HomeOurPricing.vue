<script setup>
import imgLoader from '@/components/media-loader/imgLoader.vue';
import ServiceDetailsList from '@/components/list/ServiceDetailsList.vue';
import CardStartFrom from '@/components/card/CardStartFrom.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

const props = defineProps({
  imageOurPricing: {
    type: Object,
    default: null,
  },
  listOurPricing: {
    type: Object,
    default: null,
  },
  listImgPath: {
    type: String,
    default: null,
  },
  textContent: {
    type: Object,
    default: null,
  },
  className: {
    type: Array,
    default: null,
  },
});
</script>

<template>
  <div data-aos="zoom-in" class="our-pricing">
    <div
      :class="className"
      class="our-pricing__header"
    >
      <div class="our-pricing__title-media title-media">
        <div
          data-aos="fade-right"
          class="title-media__title"
        >
          <BaseGradientTitle :tag="textContent.tag_title">
            {{ textContent.title }}
          </BaseGradientTitle>
        </div>
        <component
          :is="textContent.tag_sub_title || 'div'"
          data-aos="fade-right"
          data-aos-delay="500"
          class="title-media__sub-title"
        >
          {{ textContent.sub_title }}
        </component>
      </div>
      <p
        data-aos="fade-right"
        data-aos-delay="700"
        class="our-pricing__paragraph"
      >
        At VRNas, we believe that everyone should have access to the benefits of
        VR. That's why we offer a range of pricing options to meet the needs of
        any budget.
      </p>
    </div>

    <div class="our-pricing__content">
      <div class="our-pricing__container-list">
        <ul class="our-pricing__list">
          <ServiceDetailsList
            data-aos-delay="500"
            data-aos="fade-right"
            :imgPath="listImgPath"
            :dataList="item"
            v-for="item in listOurPricing"
            :key="item.id"
          />
        </ul>
      </div>
      <div
        data-aos-delay="500"
        data-aos="fade-left"
        class="our-pricing__img"
      >
        <imgLoader v-bind="imageOurPricing" />
      </div>
    </div>
    <div
      data-aos="zoom-out"
      data-aos-delay="500"
      class="our-pricing__card"
    >
      <CardStartFrom />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.our-pricing {
  position: relative;

  &__header {
    margin-bottom: 40px;
  }

  &__title-media {
    margin-bottom: 18px;
  }

  &__paragraph {
    max-width: 625px;
    width: 100%;
    @include body1;
    color: $grey_2;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    padding-top: 52px;
    padding-left: 40px;
    background-color: rgba(37, 37, 50, 0.81);
    border: solid 1px transparent;
    border-image: $border1;
    position: relative;
    @include _991 {
      flex-direction: column;
    }

    @include _767 {
      padding-top: 32px;
      padding-left: 22px;
    }
    @include _380 {
      padding-left: 12px;
    }

    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: -30%;
      @include background-effect(400px, 900px, -99deg, 100px);
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      right: 125px;
      top: 312px;
      width: 547px;
      height: 1px;
      background-color: $white;
      opacity: 0.1;
      transform: rotate(90deg);
      @include _991 {
        display: none;
      }
    }
  }

  &__container-list {
    margin-bottom: 52px;
  }

  &__list {
    display: grid;
    gap: 32px;
    position: relative;
    @include _991 {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -47px;
        width: 100%;
        height: 1px;
        background-color: $white;
        opacity: 0.1;
      }
    }

    @include _767 {
      padding-right: 22px;
    }
  }

  &__img {
    margin-top: 12px;
    max-width: 360px;
    width: 100%;
    height: 520px;
    align-self: flex-end;
    position: relative;
    @include _480 {
      max-width: 256px;
      height: 370px;
    }
  }

  &__card {
    position: absolute;
    right: 14.4%;
    bottom: -46px;
    max-width: 321px;
    width: 100%;
    min-height: 222px;
    background-color: $black_50;
    border: solid 1px transparent;
    border-image: $main-gradient 1;
    @include _991 {
      right: initial;
      bottom: 8%;
      left: 8%;
    }
    @include _767 {
      right: 14.4%;
      bottom: -88px;
    }
    @include _480 {
      right: initial;
      left: 0;
    }
  }
}

.text-center {
  display: grid;
  justify-items: center;
  text-align: center;
  .title-media__title {
    display: grid;
    justify-items: center;
  }
}

</style>
