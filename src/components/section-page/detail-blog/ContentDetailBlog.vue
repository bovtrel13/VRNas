<script setup>
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';
import BasePillTitle from '@/components/ui/BasePillTitle.vue';
import imgLoader from '@/components/media-loader/imgLoader.vue';

const props = defineProps({
  dataArticle: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="detail-blog">
    <div class="detail-blog__pill-title">
      <h1>
        <BasePillTitle>
          {{ dataArticle.title }}
        </BasePillTitle>
      </h1>
    </div>
    <div class="detail-blog__title-media title-media">
      <h2 class="title-media__sub-title">
        {{ dataArticle.sub_title }}
      </h2>
      <div class="title-media__title dp-flex">
        <BaseGradientTitle>
          {{ dataArticle.full_name_author }}
        </BaseGradientTitle>
        <BaseGradientTitle>|</BaseGradientTitle>
        <BaseGradientTitle
          :tag="'time'"
          :datetime="dataArticle.attr_date_time"
        >
          {{ dataArticle.date_time }}
        </BaseGradientTitle>
      </div>
    </div>
    <div class="detail-blog__main-picture">
      <imgLoader
        :nameFolder="'blog/card_' + dataArticle.id"
        :imgName="dataArticle.imgName[0]"
        :imageFormats="['webp']"
        :alt="dataArticle.title"
      />
    </div>
    <div class="detail-blog__text">
      <p
        class="detail-blog__paragraph"
        v-for="(paragraph, index) in dataArticle.text.slice(
          0,
          dataArticle.text.length / 2
        )"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>
    <div class="detail-blog__container-picture">
      <div class="detail-blog__picture">
        <imgLoader
          :nameFolder="'blog/card_' + dataArticle.id"
          :imgName="dataArticle.imgName[1]"
          :imageFormats="['webp']"
          :alt="dataArticle.title"
        />
      </div>
      <div class="detail-blog__picture">
        <imgLoader
          :nameFolder="'blog/card_' + dataArticle.id"
          :imgName="dataArticle.imgName[2]"
          :imageFormats="['webp']"
          :alt="dataArticle.title"
        />
      </div>
    </div>
    <div class="detail-blog__text detail-blog__text-footer">
      <p
        class="detail-blog__paragraph"
        v-for="(paragraph, index) in dataArticle.text.slice(
          dataArticle.text.length / 2
        )"
        :key="index"
      >
        {{ paragraph }}
      </p>
    </div>
    <div class="detail-blog__footer-link">
      <div class="detail-blog__footer-title">Post Tags:</div>
      <ul class="detail-blog__list-footer">
        <BaseGradientTitle
          :tag="'li'"
          class="custom-style"
          v-for="tag in dataArticle.postPost_tags"
          :key="tag"
        >
          #{{ tag }}
        </BaseGradientTitle>
      </ul>
    </div>
    <div class="detail-blog__footer-share">
      <div class="detail-blog__footer-title">Share:</div>

      <div class="detail-blog__container-link">
        <div class="detail-blog__link">
          <a href="#">
            <img
              src="/assets/images/social/logo-twitter.svg"
              alt="twitter"
            />
          </a>
        </div>
        <div class="detail-blog__link">
          <a href="#">
            <img
              src="/assets/images/social/logo-facebook.svg"
              alt="facebook"
            />
          </a>
        </div>
        <div class="detail-blog__link">
          <a href="#">
            <img
              src="/assets/images/social/logo-instagram.svg"
              alt="twitter"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dp-flex {
  display: flex;
  gap: 10px;
}

.detail-blog {
  &__pill-title {
    width: max-content;
    margin-bottom: 14px;
    @include caption2;
    color: $white;
  }

  &__title-media {
    margin-bottom: 24px;
  }

  &__main-picture {
    height: min(528px, 47vw);
    margin-bottom: 30px;
    @include _991 {
      margin-bottom: 24px;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 80px;
    @include _991 {
      margin-bottom: 32px;
    }
  }

  &__text-footer {
    margin-bottom: 24px;
  }

  &__paragraph {
    @include body1;
    color: $grey_2;
  }

  &__container-picture {
    display: flex;
    gap: 34px;
    height: 252px;

    margin-bottom: 80px;
    @include _991 {
      margin-bottom: 32px;
      gap: 17px;
    }

    @include _639 {
      height: min(40vw, 127px);
    }

    @include _380 {
      height: auto;
      flex-direction: column;
    }
  }

  &__picture {
    flex-basis: 50%;
    height: 100%;
  }

  &__footer-link {
    margin-bottom: 17px;
  }

  &__footer-title {
    margin-bottom: 12px;
    @include heading10;
    color: $white;
  }

  &__container-link {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  &__list-footer {
    background: linear-gradient(to right, #0cbaf1, #e95ce9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  &__link {
    @include hover-and-pointer {
      transition: transform 0.1s linear;
      &:hover {
        transform: scale(0.9);
      }
    }
  }
}
</style>
