<template>
  <div class="text-block">
    <component
      class="text-block__title"
      :is="titleTag"
    >
      {{ titleText }}
    </component>

    <div
      class="text-block__container-text"
      v-if="arrayOfParagraphs?.length"
    >
      <p
        class="text-block__text"
        v-for="paragraph in arrayOfParagraphs"
      >
        {{ paragraph }}
      </p>
    </div>

    <ul
      class="text-block__list"
      v-if="arrayOfListItems?.length"
    >
      <li
        class="text-block__list-item"
        v-for="text in arrayOfListItems"
        :key="text"
      >
        <BaseListItem :text="text" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import BaseListItem from '@/components/ui/BaseListItem.vue';

const props = defineProps({
  titleTag: {
    type: String,
    required: false,
  },
  titleText: {
    type: String,
    required: false,
  },
  arrayOfParagraphs: {
    type: Array,
    required: false,
  },
  arrayOfListItems: {
    type: Array,
    required: false,
  },
});


</script>

<style lang="scss" scoped>
.text-block {
  
  &__title {
    margin-bottom: 16px;
    @include heading8;
    color: $white;
  }

  &__text {
    @include body1;
    color: $grey_2;
  }
  
  &__list-item {
    list-style-type: initial;
    margin-left: 40px;
    @include body1;
    color: $grey_2;
  }
}
</style>
