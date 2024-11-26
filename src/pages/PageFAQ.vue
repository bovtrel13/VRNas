<script setup>
import { computed, markRaw, reactive, ref } from 'vue';

//  Данные
import dataAllFAQ from '@/assets/data/faq/allFAQ.js';

// Компоненты
import AboutFAQ from '@/components/section-page/about-us/AboutFAQ.vue';
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

// пропсы для AboutFAQ,  page FAQ =========================================================================

const accordionAllFAQData = markRaw(dataAllFAQ);

const setStateFAQ = computed(() => {
  return new Array(Object.keys(accordionAllFAQData).length).fill(true);
});

const stateFAQ = reactive(setStateFAQ.value);

const activeIndexTab = ref(-1);

const accordionFAQType = 'multiple';
const decorLineFAQTitleAccordion = true;
const textContentFAQ = markRaw({
  tag_title: 'h2',
  title: 'FAQ',
  tag_sub_title: 'h3',
  sub_title: 'Frequently Asked Questions',
  paragraph:
    'At VRNas, we want to make sure that you have all the information you need to make informed decisions about our VR services. Here are some of the most common questions we receive:',
});

const handleClick = (index) => {
  activeIndexTab.value = index;
  stateFAQ.fill(false);
  stateFAQ[index] = !stateFAQ[index];
};

const resetStateFAQ = () => {
  activeIndexTab.value = -1;
  stateFAQ.fill(true);
};
</script>
<template>
  <section class="faq">
    <div class="faq__header">
      <div class="title-media">
        <div
          data-aos="fade-up"
          class="title-media__title center-grid"
        >
          <BaseGradientTitle tag="h2">FAQ</BaseGradientTitle>
        </div>
        <h3
          data-aos="fade-up"
          data-aos-delay="500"
          class="title-media__sub-title"
        >
          Frequently Asked Questions
        </h3>
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay="700"
        class="faq__paragraph"
      >
        At VRNas, we want to make sure that you have all the information you
        need to make informed decisions about our VR services. Here are some of
        the most common questions we receive:
      </p>
    </div>

    <div
      data-aos="zoom-in"
      class="faq__container-tabs"
    >
      <div
        @click="resetStateFAQ"
        class="faq__tab tab-reset"
        :class="{ 'tab-active': activeIndexTab === -1 }"
      >
        <BaseLinkBtn
          class="pd-faq"
          :version="2"
        >
          All
        </BaseLinkBtn>
      </div>
      <div
        @click="handleClick(index)"
        class="faq__tab"
        :class="{ 'tab-active': index === activeIndexTab }"
        v-for="(_, key, index) in accordionAllFAQData"
        :key="key"
      >
        <BaseLinkBtn
          class="pd-faq"
          :version="2"
        >
          {{ key }}
        </BaseLinkBtn>
      </div>
    </div>

    <div :class="{ 'gap-grid': activeIndexTab === -1 }">
      <div
        v-for="(faq, key, index) in accordionAllFAQData"
        :key="key"
      >
        <AboutFAQ
          v-show="stateFAQ[index]"
          class="hidden-title"
          :accordionData="faq"
          :decorLineTitleAccordion="decorLineFAQTitleAccordion"
          :accordionType="accordionFAQType"
          :textContent="textContentFAQ"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  max-width: 790px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 150px;
  padding-top: 150px;

  @include _1199 {
    padding-top: 100px;
    margin-bottom: 100px;
  }

  &__header {
    text-align: center;
    margin-bottom: 32px;
  }

  &__paragraph {
    padding-top: 24px;
    @include body1;
    color: $grey_2;
  }

  &__container-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    margin-bottom: 32px;
  }

  &__tab {
    opacity: 0.4;
    @include body1;
    color: $white;
    transition: opacity 0.5s ease-in;

    @include hover-and-pointer {
      &:hover {
        opacity: 1;
      }
    }
  }
}

.gap-grid {
  display: grid;
  gap: 24px;
}

.tab-active {
  opacity: 1;
}

.center-grid {
  display: grid;
  justify-items: center;
}
</style>
