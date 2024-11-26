<script setup>

import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  sub_title: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
    required: true,
  },
  tagTitle: {
    type: String,
    default: null
  },

  href : {
    type: String,
    default: null
  }

});

const getImagePath = (nameFolder, nameImg, format = '') => {
  return `/assets/images/${nameFolder}/${nameImg}${format}`;
};
</script>
<template>
  <div class="card-contact" :class="{'href-contact': href}">
    <div class="card-contact__img">
      <img
        :src="getImagePath('social', imgName)"
        alt=""
      />
    </div>
    <div class="card-contact__info">
      <div class="card-contact__title">
        <BaseGradientTitle :tag="tagTitle">{{ title }}</BaseGradientTitle>
      </div>
      <a v-if="href" class="card-contact__sub-title" :href="href">{{ sub_title }}</a>
      <div v-else class="card-contact__sub-title">{{ sub_title }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-contact {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 50px 20px 84px;

  border: solid 1px transparent;
  border-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0)
    )
    1;
  background-color: rgba(37, 37, 50, 0.6);
}

.card-contact__img {
  width: 65px;
  height: 65px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @include _300 {
    width: 25vw;
    height: 25vw;
  }
}

.card-contact__title {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  font-weight: 500;
  letter-spacing: 2.24px;
 
  @include _300 {
    font-size: 6vw;
  }
}

.card-contact__sub-title {
  color: $white;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  text-align: center;
  @include _300 {
    font-size: 7vw;
  }
}

.href-contact {
  cursor: pointer;
  @include hover-and-pointer {
    opacity: 1;
    transition: box-shadow 1s, transform 1s, opacity 1s;
    &:hover {
      box-shadow: $glow-effect;
      transform: scale(.9);
    }
    .card-contact__sub-title {
      transition: text-shadow .5s;
    }
    .card-contact__sub-title:hover {
      text-shadow: $glow-effect;
    }
  } 
}
</style>
