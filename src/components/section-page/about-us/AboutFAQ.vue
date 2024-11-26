<script setup>
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';
import BaseItemAccordion from '@/components/ui/BaseItemAccordion.vue';
import { reactive } from 'vue';

const props = defineProps({
  accordionData: {
    type: Array,
    default: null,
  },
  decorLineTitleAccordion: {
    type: Boolean,
    default: false,
  },
  accordionType: {
    type: String,
    default: 'multiple', // или 'single'
  },
  textContent: {
    type: Object,
    default: null,
  },
});

defineOptions({
  inheritAttrs: false,
});

const arrTextHidden = reactive(
  new Array(props.accordionData.length).fill(true)
);
const handleAccordionClick = (index, emitValue) => {
  // Что бы аккордеон открывался весь, а не только одно поле убираем  arrTextHidden.forEach
  if (props.accordionType === 'single') {
    arrTextHidden.forEach((_, i) => {
      if (i !== index) {
        arrTextHidden[i] = true;
      }
    });
  }

  arrTextHidden[index] = !arrTextHidden[index];
};
</script>
<template>
  <div class="about-faq">
    <div
      :class="$attrs.class"
      class="about-faq__header"
    >
      <div class="about-faq__title-media title-media">
        <div
          data-aos="fade-up"
          class="title-media__title"
        >
          <BaseGradientTitle :tag="textContent.tag_title">
            {{ textContent.title }}
          </BaseGradientTitle>
        </div>
        <component
          :is="textContent.tag_sub_title || 'div'"
          data-aos="fade-left"
          data-aos-delay="500"
          class="title-media__sub-title"
        >
          {{ textContent.sub_title }}
        </component>
      </div>
      <p
        data-aos="fade-left"
        data-aos-delay="700"
        class="about-faq__paragraph"
      >
        {{ textContent.paragraph }}
      </p>
    </div>
    <div class="about-faq__content">
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-offset="400"
        class="accordion"
      >
        <div
          class="accordion__item"
          v-for="(data, index) in accordionData"
          :key="data.id"
          :class="{ 'open-accordion': !arrTextHidden[index] }"
        >
          <BaseItemAccordion
            class="padding-reset"
            :className="'open'"
            :textHidden="arrTextHidden[index]"
            :dataAccordion="data"
            :decorLineTitle="!arrTextHidden[index]"
            @clickBtnAccordion="
              (emitValue) => handleAccordionClick(index, emitValue)
            "
            :key="data.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-faq {
  display: grid;
  justify-items: center;

  &__header {
    max-width: 764px;
    margin-bottom: 48px;
    text-align: center;
  }

  &__title-media {
    display: grid;
    justify-items: center;
    margin-bottom: 24px;
  }

  &__content {
    max-width: 790px;
  }

  &__paragraph {
    @include body3;
    color: $grey_2;
  }
}

.accordion {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__item {
    border: solid transparent 1px;
    border-image: $border1;
    background-color: rgba(37, 37, 50, 0.81);
    padding: 12px 24px 24px 24px;
    @include _330 {
      padding: 0 16px 16px 12px;
    }
  }
}

.open-accordion {
  border: solid transparent 1px;
  border-image: $main-gradient 1;
  padding-bottom: 20px;
}

.hidden-title {
  display: none;
}
</style>
