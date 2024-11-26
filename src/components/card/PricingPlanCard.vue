<script setup>
import { ref } from 'vue';
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';
import BaseListItem from '@/components/ui/BaseListItem.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  arrayList: {
    type: Array,
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
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  styleList: {
    type: Object,
    default: null,
  },
});

const activeCard = ref(false);
</script>
<template>
  <div
    class="card-plan"
    :class="{ 'active-card': activeCard }"
  >
    <div class="card-plan__info">
      <div class="card-plan__title">{{ title }}</div>
      <div class="card-plan__price">
        <span>{{ price }}</span>
        <span>/ month</span>
      </div>
      <div class="card-plan__text">{{ text }}</div>
      <ul class="card-plan__list">
        <li
          v-for="item in arrayList"
          :key="item.id"
        >
          <BaseListItem
            :text="item"
            v-bind="styleList"
          />
        </li>
      </ul>
    </div>

    <div class="card-plan__link">
      <BaseLinkBtn
        :isLink
        :isExternalLink
        :version="2"
        :to="to ? to : href"
        @mouseover="activeCard = true"
        @mouseout="activeCard = false"
      >
        {{ textLinkBtn }}
      </BaseLinkBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-plan {
 
  padding: 35px 35px 39px;
  border-radius: 6px;
  background-color: $black_50;
  border: solid transparent 1px;
  @include _380 {
    padding: 20px;
  }

  &__title {
    margin-bottom: 9px;
    color: $white;
   @include heading9;
   @include _330 {
    @include heading9;
   }
  }

  &__price {
    margin-bottom: 9px;
    span:nth-child(1) {
      @include heading1;
      letter-spacing: -0.32px;
      color: $white;
    }

    span:nth-child(2) {
     @include body1;
     color: #71717a;
    }
  }

  &__text {
    margin-bottom: 16px;
    @include body3;
    color: $grey_1;
    @include _330 {
      font-size: 14px;
   }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 57px;
    @include heading11;
    color: $white;
    @include _330 {
      font-size: 14px;
   }
  }

  &__link {
    height: 55px;
    @include button1;
    color: $white;
    background-color: rgba(255, 255, 255, 0.059);
    @include _330 {
      font-size: 12px;
      text-align: center;
   }
  }
}

.active-card {
  border-image: $main-gradient 1;
 
}
</style>
