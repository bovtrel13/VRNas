<script setup>
import BasePillTitle from '@/components/ui/BasePillTitle.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';
import imgLoader from '@/components/media-loader/imgLoader.vue';

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  sub_title: {
    type: String,
    required: true,
  },

  linkText: {
    type: String,
    default: null,
  },

  link: {
    type: String,
    default: null,
  },

  nameFolder: {
    type: String,
    default: null,
  },

  imgName: {
    type: String,
    required: true,
  },

  imageFormats: {
    type: Array,
    default: null,
  },

  alt: {
    type: String,
    default: null,
  },

  classesCardBlog: {
    type: Array,
    default: () => [], 
  },
});
</script>
<template>
  <div
    :class="classesCardBlog"
    class="card-blog"
  >
    <component
      :is="link ? 'router-link' : 'div'"
      v-bind="link ? { to: link } : {}"
      class="card-blog__img"
    >
      <imgLoader
        :nameFolder
        :imgName
        :imageFormats
        :alt
      />
    </component>

    <div class="card-blog__info">
      <div class="card-blog__title">
        <BasePillTitle>{{ title }}</BasePillTitle>
      </div>
      <div class="card-blog__sub-title">{{ sub_title }}</div>
      <router-link
        v-if="link"
        :to="link"
        class="card-blog__link"
      >
        <BaseGradientTitle>{{ linkText }}</BaseGradientTitle>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-blog {
  width: 100%;
  border: solid 1px transparent;
  border-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    )
    1;
  &__img {
    display: block;
    height: 252px;
    @include hover-and-pointer {
      transition: transform 0.5s linear;
      &:hover {
        transform: scale(1.05);
        box-shadow: $glow-effect;
      }
    }
  }

  &__info {
    padding: 18px 24px 32px;
  }

  &__title {
    width: max-content;
    @include caption2;
    color: $white;
    margin-bottom: 14px;
  }

  &__sub-title {
    @include heading9;
    color: $white;
    margin-bottom: 20px;
  }

  &__link {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 1.5px;
    border-bottom: 1px solid transparent;
    border-image: linear-gradient(
        to right,
        rgb(12, 186, 241),
        rgb(233, 92, 233)
      )
      1;
    @include hover-and-pointer {
      transition: transform 0.5s linear;
      &:hover {
        transform: translateX(10px);
        text-shadow: $glow-effect;
      }
    }
  }
}

.card-blog--home {
  display: flex;
  gap: 21px;
  max-width: initial;
  border-image: none;

  @include _430 {
    flex-direction: column;
  }

  & .card-blog__img {
    display: block;
    max-width: 142px;
    width: 100%;
    height: 91px;

    @include hover-and-pointer {
      transition: none;
      &:hover {
        transform: none;
        box-shadow: none;
      }
    }

    @include _430 {
      max-width: 100%;
      height: 200px;
    }
  }

  & .card-blog__info {
    padding: 0;
  }

  & .card-blog__title {
    @include caption2;
    margin-bottom: 8px;
  }

  & .card-blog__sub-title {
    margin-bottom: 0;

    @include heading9;
    color: $white;
    @include _575 {
      @include heading11;
    }
  }

  & .card-blog__link {
    display: none;
  }
}

.card-blog--detail-blog {
  padding-left: 0;
  & .card-blog__title {
    @include caption3;

    @include _991 {
      @include caption2;
    }
  }

  & .card-blog__sub-title {
    @include body4;

    @include _991 {
      @include heading9;
    }

    @include _575 {
      @include body4;
    }
  }

  & .card-blog__img {
    max-width: 102px;
    height: 65px;

    @include _991 {
      max-width: 204px;
      height: 130px;
    }

    @include _575 {
      max-width: 102px;
      height: 65px;
    }

    @include _430 {
      max-width: 100%;
      height: 200px;
    }

    @include hover-and-pointer {
      transition: transform 0.5s linear;
      &:hover {
        transform: translateX(6px);
        box-shadow: $glow-effect;
      }
    }
  }
}
</style>
