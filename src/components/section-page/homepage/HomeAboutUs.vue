<script setup>
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';
import BaseListItem from '@/components/ui/BaseListItem.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';
import ImgLoader from '@/components/media-loader/imgLoader.vue';
import PlayerMin from '@/components/video_player/PlayerMin.vue';

const props = defineProps({
  listAboutUs: {
    type: Array,
    default: null,
  },
  linkBtn: {
    type: Object,
    default: null,
  },
  player: {
    type: Object,
    default: null,
  },
  imageAboutUs: {
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
  <div class="home-about">
    <div class="home-about__left media-container">
      <div
        data-aos="fade-right"
        class="media-container__img home-about__img"
      >
        <ImgLoader v-bind="imageAboutUs" />
      </div>
      <div
        v-if="player"
        data-aos="fade-right"
        data-aos-delay="500"
        class="media-container__video"
      >
        <PlayerMin
          class="size-min"
          v-bind="player"
        />
      </div>
    </div>
    <div class="home-about__right">
      <div class="home-about__info">
        <div class="home-about__info-header title-media">
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

        <p
          data-aos="fade-up"
          data-aos-delay="700"
          class="home-about__paragraph"
        >
          {{ textContent.paragraph }}
        </p>

        <ul
          data-aos="fade-up"
          data-aos-delay="800"
          class="home-about__list"
        >
          <li
            v-for="item in listAboutUs"
            :key="item.id"
            class="home-about__list-item"
          >
            <BaseListItem v-bind="item" />
          </li>
        </ul>

        <div
          data-aos="fade-up"
          data-aos-delay="900"
          class="home-about__link"
        >
          <BaseLinkBtn v-bind="linkBtn">{{ linkBtn.textLinkBtn }}</BaseLinkBtn>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-about {
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @include _991 {
    flex-direction: column;
  }

  &__left {
    margin-bottom: 23px;
    @include _1199 {
      align-self: flex-end;
    }
    @include _991 {
      align-self: flex-start;
    }
  }

  &__right {
    display: flex;
    align-items: flex-end;
    max-width: 562px;
    margin-bottom: 15px;
    @include _991 {
      align-self: flex-end;
    }
  }

  &__info-header {
    margin-bottom: 14px;
  }

  &__paragraph {
    max-width: 528px;
    margin-bottom: 29px;
    @include body1;
    color: $grey_2;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 35px;
    @include body3;
    line-height: 1.1;
    color: $white;
  }

  &__link {
    width: max-content;
    min-width: min(168px, 100%);
    height: 50px;
    @include button1;
    color: $white;
    letter-spacing: 0.12em;
  }
}
</style>
