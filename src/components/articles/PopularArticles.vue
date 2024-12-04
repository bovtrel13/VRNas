<template>
  <div class="article">
    <div class="block-slider">
      <div
        @mouseenter="enableAutoSlide && stopSlider()"
        @mouseleave="enableAutoSlide && startSlider()"
        @touchstart="enableAutoSlide && stopSlider()"
        @touchend="enableAutoSlide && startSlider()"
        class="container-slider"
        ref="containerSlider"
      >
        <div
          class="slider"
          ref="slider"
        >
          <div
            ref="item"
            class="item"
            v-for="(card, index) in dataSlider"
            :key="card.id"
          >
            <div class="content">
              <img
                :src="getImage(index)"
                alt="image"
              />
              <div class="content__text-slide">
                <div class="content__title">
                  <PillTitle>{{ card.title }}</PillTitle>
                </div>
                <div class="content__sub-title">{{ card.text }}</div>
              </div>
              <router-link
              @touchend="redirectToBlog(card.id)"
                class="content__link-article"
                :to="'/blog/' + card.id"
              >
                <img
                  :src="`${basePath}assets/images/decor/next.svg`"
                  alt="link"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="step-icons">
      <button
        ref="allIconsCount"
        v-for="(item, index) in dataSlider"
        :key="index"
        class="step-icons__icon"
        :class="{ 'icon-active': 0 === index }"
      ></button>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import Slider from '@/utils/slider28.js';
import PillTitle from '@/components/ui/BasePillTitle.vue';


const router = useRouter();

const props = defineProps({
  dataSlider: {
    type: Array,
    required: true,
  },

  enableAutoSlide: {
    type: Boolean,
    default: false,
  },
});
const basePath = `${import.meta.env.BASE_URL}`;

const media = {
  1: window.matchMedia('(min-width: 1px)'),
};

// const media = {
// 	1: window.matchMedia('(max-width: 500px)'),
// 	2: window.matchMedia('(max-width: 767px)'),
// 	3: window.matchMedia('(max-width: 1024px)'),
// 	4: window.matchMedia('(min-width: 1025px)'),
// };

const containerSlider = ref(null);
const slider = ref(null);
const item = ref(null);
const allIconsCount = ref(null);

let sliderObj = null;
let intervalId = null;


const redirectToBlog = (cardId) => {
  router.push(`/blog/${cardId}`);
}


const getImage = (index) => {
  return `${basePath}assets/images/article/popular_article/${props.dataSlider[index].imgName}`;
};

// Функция для запуска слайдера
const startSlider = () => {
  if (!intervalId) {
  
    intervalId = setInterval(() => {
      if (props.dataSlider.length === sliderObj.stepNumber) {
        sliderObj.resetSlider();
        sliderObj.showSlideStep();
      
      } else {
        sliderObj.handleClickNext();
        sliderObj.showSlideStep();
      
      }
    }, 2000);
  }
};

// Функция для остановки слайдера
const stopSlider = () => {
  if (intervalId) {
  
    clearInterval(intervalId);
    intervalId = null;
  }
};

onMounted(() => {
 
  const $sliderAllElem = {
    containerSlider: containerSlider.value,
    slider: slider.value,
    itemLength: props.dataSlider.length,
    item: item.value[0],
  };

  sliderObj = new Slider(media);
  sliderObj.initSlider($sliderAllElem); //инициализация слайдера
  sliderObj.initDragDrop('desktop'); //инициализация drag'n drop не обязательна, если для desktop ненужно, то вызываем метод без аргумента
  sliderObj.initCount();
  sliderObj.initIconCount(allIconsCount.value, 'icon-active');
 
  if (props.enableAutoSlide) {
    startSlider();
  }
});

onBeforeUnmount(() => {
  stopSlider();
  sliderObj.removeAllListener();
});
</script>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  gap: 44px;
  align-items: center;
  height: 100%;
 
  @include _1199 {
    gap: 32px;
  }
}

.block-slider {
  width: 100%;
  height: 100%;
}

/*-------------------------------------------*/
/* обязательные селекторы слайдера */

/*обязательные св-ва */
.container-slider {
  overflow: hidden;
  height: 100%;
}
/* обязательные св-ва. Анимацию можем поменять */
.slider {
  display: flex;
  height: 100%;
  transform: translateX(0px);
  touch-action: none;
  transition: transform 0.4s linear;
}
/* обязательные св-ва */
.item {
  flex-shrink: 0;
  flex-grow: 0;
  width: 100%;
  height: 100%;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
}

.content {
  width: 100%;
  height: 100%;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__text-slide {
    left: 24px;
    bottom: 24px;
    position: absolute;
    color: $white;
   
    @include _380 {
      left: 12px;
    }
  }

  &__title {
    display: inline-block;
    margin-bottom: 12px;
  
  }

  &__sub-title {
    max-width: 509px;
    @include heading5;
    letter-spacing: -0.5%;
   
    @include _1199 {
      max-width: 409px;
      @include heading6;
    }
    @include _575 {
      max-width: 264px;
      @include heading8;
    }
    @include _380 {
      @include heading_adaptive(20px);
    }
  }

  &__link-article {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    position: absolute;
    right: 24px;
    bottom: 47px;
    z-index: 1000;
    background-color: #77696969;
    border: 2px solid transparent;
    animation: border-animation 2s linear infinite,
      move-animation 1s linear infinite;



    @include _430 {
      width: 35px;
      height: 35px;
      bottom: 40%;
    }
    @include hover-and-pointer {
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
        animation: none;
        background-image: linear-gradient(45deg, #0cbaf1, #e95ce9);
        border: none;
        opacity: 0.7;
        animation: bg-animation 1s linear infinite;
      }
    }
    &:active {
      transform: scale(1.1);
      animation: none;
      background-image: linear-gradient(45deg, #0cbaf1, #e95ce9);
      border: none;
      opacity: 0.7;
      animation: bg-animation 1s linear infinite;
    }

    & img {
      width: 18px;
      height: 18px;
    }
  }
}

@keyframes border-animation {
  0% {
    border-image: linear-gradient(45deg, #0cbaf1, #e95ce9) 1;
  }
  50% {
    border-image: linear-gradient(45deg, #e95ce9, #0cbaf1) 1;
  }
  100% {
    border-image: linear-gradient(45deg, #0cbaf1, #e95ce9) 1;
  }
}

@keyframes move-animation {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes bg-animation {
  0% {
    background-image: linear-gradient(45deg, #0cbaf1, #e95ce9);
    background-size: 200%;
    background-position: 0 center;
  }
  50% {
    background-image: linear-gradient(45deg, #0cbaf1, #e95ce9);
    background-size: 200%;
    background-position: 100% center;
  }
  100% {
    background-image: linear-gradient(45deg, #0cbaf1, #e95ce9);
    background-size: 200%;
    background-position: 0 center;
  }
}

.step-icons {
  display: flex;
  justify-content: space-between;
  width: 80px;
  &__icon {
    width: 9px;
    height: 3px;
    background-color: rgba(255, 255, 255, 0.31);
    border-radius: 32px;
  }

  .icon-active {
    width: 17px;
    background-color: $white;
  }
}

.test-link-btn {
  position: relative;
  right: initial;
  bottom: initial;
}
</style>
