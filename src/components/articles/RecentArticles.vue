<script setup>
import { ref, onMounted } from 'vue';
import CardBlog from '@/components/card/CardBlog.vue';

import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

const props = defineProps({
  dataArticleRecent: {
    type: Array,
    required: true,
  },

  nameFolder: {
    type: String,
    required: true,
  },

  imageFormats: {
    type: Array,
    required: false,
  },

  textContent: {
    type: Object,
    default: null,
  },
  
  classesRecentArticle: {
    type: Array,
    default: null,
  },

  classesCardBlog: {
    type: Array,
    default: null,
  },
});

const containerCards = ref(null);
const thumb = ref(null);

onMounted(() => {
  containerCards.value.addEventListener('scroll', (e) => {
    thumb.value.style.top =
      (e.target.scrollTop /
        (containerCards.value.scrollHeight -
          (containerCards.value.offsetHeight - thumb.value.offsetHeight))) *
        90 +
      '%';
    console.log(
      (thumb.value.style.top =
        (e.target.scrollTop /
          (containerCards.value.scrollHeight -
            (containerCards.value.offsetHeight - thumb.value.offsetHeight))) *
          90 +
        '%')
    );
  });
});
</script>
<template>
  <div
    class="recent-article"
    :class="classesRecentArticle"
  >
    <component
      :is="textContent?.tag_title_recent_article || 'div'"
      class="recent-article__title"
    >
      {{ textContent.title_recent_article }}
    </component>
    <div
      ref="containerCards"
      class="recent-article__container-cards"
    >
      <div
        class="recent-article__card"
        v-for="card in dataArticleRecent"
        :key="card.id"
      >
        <CardBlog
          :classesCardBlog
          v-bind="card"
          :nameFolder="nameFolder + card.id"
          :imgName="card.imgName"
          :imageFormats
          :alt="card.title"
          :link="/blog/ + card.id"
        />
        <div class="recent-article__link">
          <BaseLinkBtn
            :isLink="true"
            :to="/blog/ + card.id"
            :version="2"
          >
            <img
              src="/assets/images/decor/next.svg"
              alt="go to article"
            />
          </BaseLinkBtn>
        </div>
      </div>
    </div>

    <div class="recent-article__scroll">
      <div
        ref="thumb"
        class="recent-article__scroll-thumb"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recent-article {
  position: relative;
  @include _575 {
    padding-left: 16px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -32px;
    bottom: 0;
    left: -97px;
    z-index: -1;
    width: 100vw;
    background-color: $black_50;
    border: solid 1px transparent;
    border-image: $border1;

    @include _1024 {
      width: initial;
      top: -20px;
      bottom: -13px;
      left: -16px;
      right: -16px;
    }
    @include _575 {
      bottom: -13px;
      left: 0;
      right: 0;
    }
  }

  &__title {
    @include heading6;
    color: $white;
    @include _430 {
      @include heading_adaptive;
    }
  }

  &__container-cards {
    height: 504px;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    overflow-y: scroll;
  }

  &__container-cards::-webkit-scrollbar {
    width: 8px;
  }

  &__container-cards::-webkit-scrollbar-track {
    background: transparent;
  }

  &__container-cards::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &__card {
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-right: 92px;
    border-bottom: solid rgba(255, 255, 255, 0.15) 1px;
    @include _575 {
      margin-right: 16px;
    }
  }

  &__card:last-child {
    border: none;
  }

  &__link {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    right: -58px;
    transform: translateY(-50%);
    @include _575 {
      display: none;
    }
  }

  &__scroll {
    position: absolute;
    top: 37px;
    height: 447px;
    right: 0;
    z-index: -1;
    width: 6px;
    @include _575 {
      right: 12px;
    }
    @include _430 {
      right: 6px;
    }
  }

  &__scroll-thumb {
    position: absolute;
    width: 100%;
    height: 85px;
    border-radius: 20px;
    background-image: $main-gradient;
    animation: thumb-animation 1s infinite linear;
  }
}

.aside-blog {
  width: 100%;
  @include _575 {
    padding-left: 0;
  }
  &::before {
    display: none;
  }

  .recent-article__title {
    @include heading8;
  }

  .recent-article__container-cards {
    height: 405px;
  }
  
  .recent-article__card {
    padding-top: 24px;
    padding-bottom: 24px;
    margin-right: 10px;

    @include _575 {
      margin-right: 30px;
     
    }
  }

  .recent-article__link {
    display: none;
  }
  .recent-article__scroll {
    height: 350px;
  }
}
</style>
