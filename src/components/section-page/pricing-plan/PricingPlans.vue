<script setup>
import PricingPlanCard from '@/components/card/PricingPlanCard.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';

const props = defineProps({
  cardsData: {
    type: Array,
    required: true,
  },
  styleList: {
    type: Object,
    default: null,
  },
  textLinkBtn: {
    type: String,
    default: null,
  },
  isLink: {
    type: Boolean,
    default: false,
  },
  isExternalLink: {
    type: Boolean,
    default: false,
  },
  to: {
    type: Array,
    default: null,
  },
  href: {
    type: Array,
    default: null,
  },
  textContent: {
    type: Object,
    default: null,
  },
});
</script>
<template>
  <div class="pricing-plan-pricing">
    <div class="pricing-plan-pricing__header">
      <div class="pricing-plan-pricing__title-media title-media">
        <div
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
          class="title-media__sub-title"
        >
          {{ textContent.sub_title }}
        </component>
      </div>
      <p
        data-aos="fade-right"
        data-aos-delay="600"
        class="pricing-plan-pricing__text"
      >
        {{ textContent.paragraph }}
      </p>
    </div>

    <ul class="pricing-plan-pricing__cards-list">
      <li
          data-aos="fade-left"
          :data-aos-delay="200 * index"
        class="pricing-plan-pricing__card"
        v-for="(card, index) in cardsData"
        :key="card.id"
      >
        <PricingPlanCard
          :textLinkBtn
          :isExternalLink
          :isLink
          :styleList
          v-bind="card"
          :to="to ? to[index] : null"
          :href="href ? href[index] : null"
        />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>

.pricing-plan-pricing {
  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 40px;
  }

  &__title-media {
    display: grid;
    justify-items: center;
  }

  &__text {
    max-width: 751px;
    @include body3;
    color: $grey_2;
    text-align: center;
  }

  &__cards-list {
    display: flex;
    justify-content: space-between;
    gap: clamp(20px, 2vw, 62px);

    @include _991 {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
  }
  &__card {
    max-width: 759px;
    @include _480 {
      width: initial;
      max-width: 359px;
    }
  }
}
</style>
