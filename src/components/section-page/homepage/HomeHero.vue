<script setup>
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';
import HappyClient from '@/components/testimonials/HappyClient.vue';
import PlayerMin from '@/components/video_player/PlayerMin.vue';
import CardListService from '@/components/section-page/card-list/CardListService.vue';
import imgLoader from '@/components/media-loader/imgLoader.vue';

const props = defineProps({
  serviceDataCards: {
    type: Array,
    default: null,
  },
  happyClient: {
    type: Object,
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
  imageHero: {
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
  <div class="hero">
    <div class="hero__header">
      <div class="hero__col-left">
        <div class="hero__text">
          <h1
            data-aos="fade-right"
            class="hero__title"
          >
            {{ textContent.title }}
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            class="hero__paragraph"
          >
            {{ textContent.paragraph }}
          </p>
          <div class="hero__link">
            <BaseLinkBtn
              data-aos="fade-right"
              data-aos-delay="1000"
              v-bind="linkBtn"
            >
              {{ linkBtn.text }}
            </BaseLinkBtn>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="1500"
          class="hero__client"
        >
          <HappyClient v-bind="happyClient" />
        </div>
        <div
          v-if="player"
          data-aos="zoom-in-up"
          data-aos-delay="1000"
          class="hero__video"
        >
          <PlayerMin
            class="size-min"
            v-bind="player"
          />
        </div>
      </div>

      <div
      data-aos="fade-left"
        data-aos-delay="500"
        class="hero__col-right"
      >
        <div class="hero__img">
          <imgLoader v-bind="imageHero" />
        </div>
      </div>
    </div>

    <div
      data-aos="fade-up"
      data-aos-offset="200"
      class="hero__footer"
    >
      <CardListService :cardListData="serviceDataCards" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  position: relative;

  &__header {
    display: flex;
    justify-content: space-between;
    gap: 60px;

    @include _991 {
      flex-direction: column;
      gap: 0;
    }
  }

  &__col-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  &__col-right {
    @include _1199 {
      align-self: flex-end;
    }
  }

  &__video {
    position: absolute;
    bottom: 66px;
    right: -20px;
    width: 196px;
    height: 127px;
    @include _991 {
      right: initial;
      width: 392px;
      height: 254px;
      right: initial;
      left: 0;
      bottom: -554px;
      z-index: 1;
    }
    @include _767 {
      bottom: -400px;
      width: 51vw;
      height: 33vw;
    }
    @include _380 {
      bottom: -300px;
    }
  }

  &__text {
    max-width: 540px;
    margin-bottom: 81px;
    @include _1199 {
      margin-bottom: 32px;
    }
  }

  &__title {
    color: $white;
    margin-bottom: 13px;
    letter-spacing: -0.3px;
    @include heading1;
    @include _767 {
      @include heading2;
    }
    @include _430 {
      @include heading3;
    }
    @include _330 {
      text-align: center;
      font-size: 13vw;
    }
  }

  &__paragraph {
    max-width: 446px;
    margin-bottom: 31px;
    color: $grey_2;
    letter-spacing: 0;
    @include body1;
    @include _330 {
      text-align: center;
    }
  }

  &__link {
    width: max-content;
    min-width: min(206px, 100%);
    height: 50px;
    color: $white;
    letter-spacing: 0.11em;
    @include button1;
  }

  &__client {
    @include _330 {
      margin-bottom: 40px;
    }
  }

  &__img {
    position: relative;
    max-width: 526px;
    height: 626px;

    @include _1199 {
      max-width: 50vw;
      height: 43vw;
    }
    @include _991 {
      max-width: 526px;
      height: 626px;
    }

    @include _767 {
      max-width: 354px;
      height: 422px;
      right: -130px;
    }
    @include _380 {
      max-width: 274px;
      height: 310px;
    }

    &::before {
      content: '';
      position: absolute;
      @include center-absolute;
      z-index: -1;
      width: 80%;
      height: 30%;
      background-image: $main-gradient;
      filter: blur(85px);
    }
  }
}

</style>
