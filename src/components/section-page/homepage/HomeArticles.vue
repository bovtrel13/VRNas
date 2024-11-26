<script setup>
import PopularArticles from '@/components/articles/PopularArticles.vue';
import RecentArticles from '@/components/articles/RecentArticles.vue';
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

const props = defineProps({
  dataArticleRecent: {
    type: Array,
    required: true,
  },

  dataArticlePopular: {
    type: Array,
    required: true,
  },

  nameFolder: {
    type: String,
    required: true,
  },

  imageFormats: {
    type: Array,
    default: false,
  },

  textContent: {
    type: Object,
    default: null,
  },

  linkBtnOurArticles: {
    type: Object,
    default: null,
  },

  enableAutoSlide: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="our-articles">
    <div class="our-articles__header title-media">
      <div
        data-aos="fade-right"
        class="title-media__title"
      >
        <BaseGradientTitle :tag="textContent.tag_title">
          {{ textContent.title }}
        </BaseGradientTitle>
      </div>
      <component
        data-aos="fade-right"
        data-aos-delay="500"
        :is="textContent?.tag_sub_title || 'div'"
        class="title-media__sub-title"
      >
        {{ textContent.sub_title }}
      </component>
    </div>

    <div class="container-articles our-articles__main">
      <div
        data-aos="zoom-out"
        data-aos-anchor-placement="center-bottom"
        class="popular-article container-articles__popular-article"
      >
        <component
          :is="textContent?.tag_title_popular_article || 'div'"
          class="popular-article__title"
        >
          {{ textContent.title_popular_article }}
        </component>
        <div class="wrapper-slider-size">
          <PopularArticles  :enableAutoSlide :dataSlider="dataArticlePopular" />
        </div>
      </div>

      <div
        data-aos="zoom-in"
        class="container-articles__recent-article"
      >
        <RecentArticles
       
          :dataArticleRecent
          :textContent
          :imageFormats
          :nameFolder
          :classesCardBlog="['card-blog--home']"
        />
      </div>
    </div>

    <div
      data-aos="fade-left"
      data-aos-delay="500"
      class="our-articles__link-btn"
    >
      <BaseLinkBtn v-bind="linkBtnOurArticles">see all</BaseLinkBtn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.our-articles {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  &__header {
    grid-column: 1/4;
    order: 1;
    margin-bottom: 104px;
    @include _1024 {
      margin-bottom: 40px;
    }
    @include _639 {
      grid-column: 1/5;
    }
    @include _430 {
      margin-bottom: 20px;
    }
  }

  &__main {
    grid-column: 1/5;
    order: 3;
    @include _639 {
      order: 2;
      margin-bottom: 45px;
    }
  }

  &__link-btn {
    align-self: center;
    justify-self: end;
    grid-column: 4/5;
    order: 2;
    width: 140px;
    height: 50px;
    margin-bottom: 70px;
    background-color: $button_v3;
    @include button1;
    color: $white;
    @include _639 {
      justify-self: center;
      align-self: initial;
      grid-column: 1/5;
      order: 3;
      margin-bottom: 0;
    }
  }
}

.container-articles {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @include _1199 {
    gap: 20px;
  }

  @include _1024 {
    gap: 87px;
    flex-direction: column;
    align-items: center;
  }

  @include _639 {
    gap: 60px;
  }

  @include _380 {
    gap: 40px;
  }

  &__popular-article {
    position: relative;
    z-index: 1;

  }
  &__recent-article {
    margin-right: -44px;
    @include _1400 {
      margin-right: 0;
    }
  }
}

.popular-article {
  &__title {
    margin-bottom: 30px;
    @include heading6;
    color: $white;
    @include _430 {
      @include heading_adaptive;
    }
  }
}

.wrapper-slider-size {
  width: 636px;
  height: 425px;

  @include _1199 {
    width: 490px;
    height: 327px;
  }

  @include _1024 {
    width: 636px;
    height: 425px;
  }

  @include _767 {
    width: 100%;
    height: 67vw;
  }
  @include _380 {
    height: 100vw;
  }
}

@keyframes thumb-animation {
  0% {
    opacity: 1;
    box-shadow: $glow-effect;
  }
  50% {
    opacity: 0.5;
    box-shadow: $glow-effect;
  }
  100% {
    opacity: 1;
    box-shadow: $glow-effect;
  }
}
</style>
