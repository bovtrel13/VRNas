<script setup>
import imagePlanet from '/assets/images/bg/planet.png';
import imageSun from '/assets/images/bg/sun2.png';

import BaseSocialLink from '@/components/ui/BaseSocialLink.vue';

const props = defineProps({
  socialLinkData: {
    type: Array,
    default: () => [],
  },
});
</script>
<template>
  <div class="mich-container">
    <div
      v-for="(link, index) in socialLinkData"
      :key="index"
      class="mich-container__link"
    >
      <BaseSocialLink v-bind="link" />
    </div>
    <div class="mich-container__img-content">
      <img
        class="mich-container__img"
        :src="imagePlanet"
        alt="Michurin"
      />
    </div>
    <div class="mich-container__sun">
      <img
        :src="imageSun"
        alt="sun"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mich-container {
  width: 686px;
  height: 486px;
  position: relative;

  @include _639 {
    width: 600px;
    height: auto;
  }
  @include _430 {
    width: 500px;
  }

  &__link {
    position: absolute;
    z-index: 100;
    width: 46px;
    height: 46px;

    &:nth-child(1) {
      top: 50px;
      left: 350px;
      @include _639 {
        top: 70px;
      }
      @include _430 {
        left: 60%;
      }
    }

    &:nth-child(2) {
      top: 100px;
      left: 200px;
      @include _430 {
        top: 110px;
        left: 145px;
      }
    }

    &:nth-child(3) {
      top: -50px;
      left: 200px;
      @include _639 {
        top: -10px;
        left: 170px;
      }
      @include _430 {
        top: -35px;
        left: 130px;
      }
    }

    &:nth-child(4) {
      top: -50px;
      right: 200px;
      @include _639 {
        top: -7px;
      }
      @include _430 {
        top: -35px;
        right: 150px;
      }
    }
  }

  &__img-content {
    width: 100%;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 460px;
      height: 460px;
      border-radius: 100%;
      background-color: rgba(0, 255, 255, 0.157);
      filter: blur(20px);
      box-shadow: $glow-effect;
      animation: glow 3s infinite alternate;
      @include _430 {
        width: 300px;
        height: 300px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: -40%;
      left: 50%;
      transform: translateX(-54%);
      width: 600px;
      height: 400px;
      background: url('/assets/images/bg/michurin.png') no-repeat left top /
        100% 100%;

      @include _430 {
        top: -45%;
        width: 500px;
        height: 333px;
      }
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    animation: rotate 80s linear infinite reverse;
  }

  &__sun {
    position: absolute;
    top: 0;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    animation: rotate 10s linear infinite;
    @include _430 {
      left: 10%;
      top: -50%;
    }
    &::before {
      content: '';
      position: absolute;
      @include center-absolute;
      width: 140%;
      height: 140%;
      border-radius: 100%;
      background-color: rgba(218, 196, 108, 0.7);
      filter: blur(60px);
      animation: glow 3s infinite alternate;
    }

    & img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      animation: rotate 5s linear infinite reverse;
      filter: blur(4px) brightness(110%);
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes glow {
  0% {
    background-color: rgba(218, 196, 108, 0.7);
    filter: blur(60px);
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 204, 0, 1);

    filter: blur(100px);
  }
}
</style>
