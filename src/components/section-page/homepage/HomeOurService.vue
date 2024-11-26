<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

import CardService from '@/components/card/CardService.vue';
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

const props = defineProps({
  serviceCardStyle: {
    type: Object,
    required: false,
  },
  visibilitySwitchCards: {
    type: Boolean,
    default: false,
  },
  cardsData: {
    type: Array,
    required: true,
  },
  linkBtn: {
    type: Object,
    required: false,
  },
  textContent: {
    type: Object,
    required: false,
  },
});

//Логика карточек на разрешении max 767px
const arrCardTextHidden = reactive(
  new Array(props.cardsData.length).fill(true)
);

const handleClickedCard = (hiddenTextCard, index) => {
  // hiddenTextCard emit от CardService
  arrCardTextHidden[index] = !arrCardTextHidden[index];
};


const isTouchDevice = ref(false);

// Сброс состояния
const resetArrCardTextHidden = () => {
  arrCardTextHidden.forEach((_, i) => {
    arrCardTextHidden[i] = true;
  });
};

// Функция для проверки устройства
const checkTouchDevice = () => {
  isTouchDevice.value = window.matchMedia('(hover: none)').matches;
  resetArrCardTextHidden();
};

onMounted(() => {
  checkTouchDevice(); 

  window.addEventListener('resize', checkTouchDevice); 
});


onBeforeUnmount(() => {
  window.removeEventListener('resize', checkTouchDevice);
});
</script>

<template>
  <div class="home-service">
    <div
      v-if="textContent"
      class="home-service__header"
    >
      <div class="home-service__title title-media">
        <div
          v-if="textContent.title"
          data-aos="fade-right"
          class="title-media__title"
        >
          <BaseGradientTitle :tag="textContent.tag_title">
            {{ textContent.title }}
          </BaseGradientTitle>
        </div>
        <component
          :is="textContent.tag_sub_title || 'div'"
          data-aos="fade-right"
          data-aos-delay="500"
          v-if="textContent.sub_title"
          class="title-media__sub-title"
        >
          {{ textContent.sub_title }}
        </component>
      </div>
      <p
        v-if="textContent.paragraph"
        data-aos="fade-left"
        class="home-service__paragraph"
      >
        {{ textContent.paragraph }}
      </p>
    </div>

    <div
      class="home-service__cards"
      v-if="!isTouchDevice"
    >
      <div
        data-aos-anchor-placement="center-bottom"
        data-aos="flip-left"
        class="container-two-cards"
      >
        <div
          class="card-wrapper"
          v-for="(card, index) in cardsData.slice(0, 2)"
        >
          <CardService
            :visibilitySwitch="visibilitySwitchCards"
            :style="serviceCardStyle"
            :dataCard="card"
            @clicked-card="
              (hiddenTextCard) => handleClickedCard(hiddenTextCard, index)
            "
          />
          <div
            v-if="linkBtn"
            class="wrapper-btn"
            :class="{ 'btn-open-text': !arrCardTextHidden[index] }"
          >
            <BaseLinkBtn
              :to="'our-services/' + card.id"
              v-bind="linkBtn"
            >
              {{ linkBtn.text }}
            </BaseLinkBtn>
          </div>
        </div>
      </div>
      <div
        data-aos-anchor-placement="center-bottom"
        data-aos="flip-left"
        data-aos-delay="250"
        class="container-two-cards"
      >
        <div
          class="card-wrapper"
          v-for="(card, index) in cardsData.slice(2, 4)"
        >
          <CardService
            :visibilitySwitch="visibilitySwitchCards"
            :style="serviceCardStyle"
            :dataCard="card"
            @clicked-card="
              (hiddenTextCard) => handleClickedCard(hiddenTextCard, index)
            "
          />
          <div
            v-if="linkBtn"
            class="wrapper-btn"
            :class="{ 'btn-open-text': !arrCardTextHidden[index] }"
          >
            <BaseLinkBtn
              :to="'our-services/' + card.id"
              v-bind="linkBtn"
            >
              {{ linkBtn.text }}
            </BaseLinkBtn>
          </div>
        </div>
      </div>
      <div
        data-aos-anchor-placement="center-bottom"
        data-aos="flip-left"
        data-aos-delay="500"
        class="container-two-cards"
      >
        <div
          class="card-wrapper"
          v-for="(card, index) in cardsData.slice(4, 6)"
        >
          <CardService
            :visibilitySwitch="visibilitySwitchCards"
            :style="serviceCardStyle"
            :dataCard="card"
            @clicked-card="
              (hiddenTextCard) => handleClickedCard(hiddenTextCard, index)
            "
          />
          <div
            v-if="linkBtn"
            class="wrapper-btn"
            :class="{ 'btn-open-text': !arrCardTextHidden[index] }"
          >
            <BaseLinkBtn
              :to="'our-services/' + card.id"
              v-bind="linkBtn"
            >
              {{ linkBtn.text }}
            </BaseLinkBtn>
          </div>
        </div>
      </div>
    </div>

    <div
      class="home-service__cards"
      v-else
    >
      <component
        :is="visibilitySwitchCards ? 'div' : 'router-link'"
        v-bind="visibilitySwitchCards ? {} : { to: 'our-services/' + card.id }"
        :class="{
          'card-open': !arrCardTextHidden[index] && visibilitySwitchCards,
          'card-wrapper--height-not-auto': !visibilitySwitchCards,
        }"
        class="card-wrapper"
        v-for="(card, index) in cardsData"
      >
        <CardService
          data-aos="zoom-in"
          :visibilitySwitch="visibilitySwitchCards"
          :to="'our-services/' + card.id"
          :style="serviceCardStyle"
          :dataCard="card"
          @clicked-card="
            (hiddenTextCard) => handleClickedCard(hiddenTextCard, index)
          "
        />
        <div
          v-if="linkBtn && visibilitySwitchCards"
          class="wrapper-btn"
          :class="{ 'btn-open-text': !arrCardTextHidden[index] }"
        >
          <BaseLinkBtn
            :to="'our-services/' + card.id"
            v-bind="linkBtn"
          >
            {{ linkBtn.text }}
          </BaseLinkBtn>
        </div>
      </component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-service {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 56px;
    @include _991 {
      flex-direction: column;
    }
  }

  &__paragraph {
    max-width: 625px;
    margin-right: 42px;
    padding-top: 4px;
    @include body1;
    color: $grey_2;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      @include background-effect;
      top: -200%;
      bottom: 0;
      right: 0;
      z-index: -1;
      @include _767 {
        top: -100%;
        @include background-effect(200px, 400px);
      }
      @include _480 {
        top: -50%;
      }
      @include _380 {
        top: 0;
      }
    }
  }

  &__cards {
    display: flex;
    gap: 20px;
    min-height: 747px;
    @include _991 {
      flex-direction: column;
      align-items: center;
    }

    @include hover-none {
      flex-direction: column;
      justify-content: initial;
      min-height: auto;
      align-items: initial;
    }
  }
}

.container-two-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:nth-child(1) {
    justify-content: flex-start;

    @include hover-none {
      justify-content: initial;
    }
  }

  &:nth-child(2) {
    justify-content: center;

    @include hover-none {
      justify-content: initial;
    }
  }

  &:nth-child(3) {
    justify-content: flex-end;
    @include hover-none {
      justify-content: initial;
    }
  }
}

.wrapper-btn {
  position: absolute;
  bottom: 0;
  left: 32px;
  transform: translate(50%, 100%);
  max-width: 177px;
  width: 100%;
  height: 50px;
  transition: transform 0.5s;
  background-color: $black_50;
  @include button1;
  color: $white;

  @include hover-none {
    position: initial;
    max-width: 0px;
    width: 100%;
    height: 0px;
    transform: initial;
    opacity: 0;
    color: transparent;
    transition: max-width 0.5s ease, height 1s ease-out, opacity 0.1s linear;
  }
}

.btn-open-text {
  max-width: 177px;
  width: 100%;
  height: 50px;
  opacity: 1;
  color: $white;
}

.card-wrapper {
  
  position: relative;
  max-width: 379px;
  min-height: 291px;
  overflow: hidden;
  background-color: rgba(37, 37, 50, 0.6);
  border: solid 1px transparent;
  border-image: $border1;
  padding: 38px 39px 25px 32px;
  transition: border 0.1s linear, box-shadow 0.3s ease;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  @include _991 {
    max-width: 750px;
  }
  @include hover-none {
    max-width: 100%;
    min-height: auto;
    cursor: default;
    padding: 20px;
  }

  &--height-not-auto {
    @include _991 {
      // height: 250px;
    }
  }
}

@include hover-and-pointer {
  .card-wrapper:hover .wrapper-btn {
    transform: translateY(-100%);
    opacity: 1;
  }
  .card-wrapper:hover {
    border: solid 1px transparent;
    border-image: $main-gradient 1;
    background-color: #2525324c;
    box-shadow: inset 43px 43px 38px rgba(0, 0, 0, 0.297);
  }
}

.card-wrapper:active {
  border: solid 1px transparent;
  border-image: $main-gradient 1;
  background-color: #2525324c;
  box-shadow: inset 43px 43px 38px rgba(0, 0, 0, 0.297);
}

.card-open {
  @include hover-none {
    border: solid 1px transparent;
    border-image: $main-gradient 1;
    background-color: #2525324c;
    box-shadow: inset 43px 43px 38px rgba(0, 0, 0, 0.297);
  }
}
</style>
