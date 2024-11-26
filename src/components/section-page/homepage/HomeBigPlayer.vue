<script setup>
import { ref } from 'vue';
import PlayerMin from '@/components/video_player/PlayerMin.vue';
import BasePillTitle from '@/components/ui/BasePillTitle.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';

const props = defineProps({
  player: {
    type: Object,
    default: null,
  },
  textContent: {
    type: Object,
    default: null,
  },
  linkBtn: {
    type: Object,
    default: null,
  },
});

const playing = ref(false);
const handlePlay = (isPlaying) => {
  playing.value = isPlaying;
};
</script>
<template>
  <div class="big-player">
    <div class="big-player__header title-media">
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
        v-if="textContent.sub_title"
        :is="textContent.tag_sub_title || 'div'"
        data-aos="fade-up"
        data-aos-delay="500"
        class="title-media__sub-title"
      >
        {{ textContent.sub_title }}
      </component>
    </div>

    <div
      data-aos="fade-up"
      class="big-player__content video-big"
    >
      <component
        v-if="textContent.tag_title_video"
        :is="textContent.tag_title_video || 'div'"
        data-aos="fade-left"
        class="video-big__title"
        :class="{ 'hidden-text': playing }"
      >
        <BasePillTitle>{{ textContent.text_title_video }}</BasePillTitle>
      </component>

      <component
        v-if="textContent.tag_sub_title_video"
        data-aos="fade-up"
        :is="textContent.tag_sub_title_video || 'div'"
        class="video-big__sub-title"
        :class="{ 'hidden-text': playing }"
      >
        {{ textContent.text_sub_title_video }}
      </component>

      <PlayerMin
        @video-play="handlePlay"
        v-bind="player"
      />
    </div>

    <div data-aos="fade-up" class="big-player__link-btn">
      <BaseLinkBtn v-bind="linkBtn" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.big-player {
  &__header {
    display: grid;
    justify-items: center;
    max-width: 800px;
    text-align: center;
    margin: 0 auto 50px;
    @include _767 {
      margin: 0 auto 32px;
    }
  }
  &__content {
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    margin-bottom: 48px;
    @include _767 {
      margin-bottom: 32px;
      border-radius: 12px;
    }
  }
  &__link-btn {
    width: max-content;
    min-width: min(182px, 100%);
    height: 50px;
    margin: 0 auto;
    @include button1;
    letter-spacing: 0.12em;
    color: $white;
  }
}

.video-big {
  height: 522px;
  position: relative;
  @include _767 {
    height: 300px;
  }
  @include _480 {
    height: 254px;
  }

  &__title {
    position: absolute;
    top: 9.8%;
    left: 2.9%;
    z-index: 1;
    color: $white;

    @include _767 {
      @include caption2;
      top: 22px;
    }
  }

  &__sub-title {
    position: absolute;
    top: 16.4%;
    left: 2.9%;
    z-index: 1;
    @include heading4;
    color: $white;
    letter-spacing: -0.02em;

    @include _767 {
      @include heading8;
      top: 54px;
    }
  }
}

.hidden-text {
  display: none;
}
</style>
