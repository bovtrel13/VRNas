<template>
  <div
    :class="!textHidden ? className : null"
    class="accordion-item"
  >
    <div
      class="accordion-item__title"
      :class="{ 'title-line-bt': decorLineTitle }"
      @click="handleClick"
    >
      {{ dataAccordion.title }}
    </div>
    <div
      class="accordion-item__text"
      :class="{ 'hidden-text': textHidden }"
    >
      {{ dataAccordion.text }}
    </div>
    <button
      class="accordion-item__btn"
      @click="handleClick"
    >
      <img
        :class="{ 'btn-open': !textHidden }"
        src="/assets/images/decor/toggle_btn.svg"
        alt=""
      />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  textHidden: {
    type: Boolean,
    default: true,
  },
  dataAccordion: {
    type: Object,
    required: true,
  },
  className: {
    type: String,
    required: false,
  },
  decorLineTitle: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(['clickBtnAccordion']);
const handleClick = () => {
  emit('clickBtnAccordion', props.textHidden);
};
</script>

<style lang="scss" scoped>
.accordion-item {
  position: relative;

  &__title {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 42px;
    padding-left: 10px;
    @include heading8;
    color: $white;
    cursor: pointer;
    @include _767 {
      @include heading11;
    }
  }

  &__text {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 10px;
    padding-right: 10px;
   
    @include body3;
    color: $grey_2;
    transition: padding 0.3s, line-height 0.3s;
    @include _767 {
      @include body4;
    }
  }

  &__btn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 6px 10px;
    background-color: transparent;

    & img {
      width: 20px;
      height: 20px;
      transition: transform 0.3s;
    }
  }
}

.title-line-bt {
  border-bottom: solid 1px;
  color: $grey_2;
}

.hidden-text {
  padding-top: 0;
  padding-bottom: 0;
  line-height: 0;
  overflow: hidden;
}

.btn-open {
  transform: rotateX(180deg);
}

.border-gradient {
  border: solid transparent 1px;
  border-image: $main-gradient 1;
}

.padding-reset .accordion-item__title {
  padding-bottom: 0;
}

.open.padding-reset .accordion-item__title {
  padding-bottom: 12px;
}
</style>
