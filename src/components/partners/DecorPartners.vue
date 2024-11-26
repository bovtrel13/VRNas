<script setup>
import imgLoader from '@/components/media-loader/imgLoader.vue';
const props = defineProps({
  partnersData: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="partners">
    <div class="partners__container-icons">
      <div class="partners__icons">
        <div class="partner-icon">
          <imgLoader v-bind="partnersData[0]" />
        </div>
        <div class="partner-icon partner-icon--pos-top">
          <imgLoader v-bind="partnersData[1]" />
        </div>
        <div class="partner-icon">
          <imgLoader v-bind="partnersData[2]" />
        </div>
      </div>

      <div class="partners__icons">
        <div class="partner-icon">
          <imgLoader v-bind="partnersData[3]" />
        </div>
        <div class="partner-icon">
          <imgLoader v-bind="partnersData[4]" />
        </div>
      </div>

      <div class="partners__icons">
        <div class="partner-icon">
          <imgLoader v-bind="partnersData[5]" />
        </div>
        <div class="partner-icon">
          <imgLoader v-bind="partnersData[6]" />
        </div>
      </div>
    </div>

    <img
      class="partners__bg-img"
      src="/assets/images/bg/bg-partners.png"
      alt="decor image"
    />
  </div>
</template>

<style lang="scss" scoped>
.partners {
  max-width: 1054px;
  max-height: 741px;
  position: relative;
  z-index: 1;

  @include _380 {
    width: 100%;
    height: 450px;
  }


  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(-25deg) translate(-50%, -30%);
    opacity: 0.5;
    width: 70%;
    height: 40%;
    background: $main-gradient no-repeat;
    filter: blur(100px);
  }

  &__bg-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    @include _380 {
      object-fit: cover;
      width: 100vw;
      margin-left: -16px;
      margin-right: -16px;
    }
  }

}

.partners__container-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12%;
  width: 100%;
  height: 60.9%;

  & .partners__icons {
    display: flex;
    justify-content: space-between;

    & .partner-icon {
      animation: pulse 5s infinite linear;
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  & .partners__icons:nth-child(1) {
    width: 54.5%;
    margin-bottom: 6%;
    @include _767 {
      width: 58%;
    }

    & .partner-icon {
      background-image: url(/assets/images/bg/partner.svg);
    }
    & .partner-icon:nth-child(1) {
      animation-delay: 3s;
    }
    & .partner-icon:nth-child(2) {
      animation-delay: 4s;
    }
    & .partner-icon:nth-child(3) {
      animation-delay: 6s;
    }
  }

  & .partners__icons:nth-child(2) {
    width: 87%;
    margin-bottom: 8%;

    & .partner-icon:nth-child(1) {
      background-image: url('/assets/images/bg/partner.svg');
      animation-delay: 2s;
    }

    & .partner-icon:nth-child(2) {
      background-image: url('/assets/images/bg/partner.svg');
      animation-delay: 5s;
    }
  }

  & .partners__icons:nth-child(3) {
    width: 98%;
    & .partner-icon:nth-child(1) {
      background-image: url('/assets/images/bg/partner.svg');
      animation-delay: 0s;
    }

    & .partner-icon:nth-child(2) {
      background-image: url('/assets/images/bg/partner.svg');
      animation-delay: 1s;
    }
  }
}

.partner-icon {
  width: min(102px, 9vw);
  height: min(102px, 9vw);
  border-radius: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @include _639 {
    width: 12vw;
    height: 12vw;
  }
  @include _380 {
    width: 14vw;
    height: 14vw;
  }
}

.partner-icon--pos-top {
  position: absolute;
  top: -15.5%;
  left: calc(50% - min(102px, 7.3125vw) / 2);
  @include _639 {
  left:calc(50% - (12vw / 2));;
  }
  @include _380 {
    top: -10%;
    left: calc(50% - (14vw / 2));
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
}
</style>
