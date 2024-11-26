<template>
  <div
    class="card"
    :style="cardStyle"
    @click="handleClickToggle"
  >
    <div class="card__header">
      <router-link v-if="to && !visibilitySwitch" :to="to"
        class="card__container-img"
     
      >
        <img
          v-if="imgSrc"
          :src="imgSrc"
          :alt="dataCard.title"
          class="card__img"
        />
      </router-link>
      <div v-else
        class="card__container-img"
      
      >
        <img
          v-if="imgSrc"
          :src="imgSrc"
          :alt="dataCard.title"
          class="card__img"
        />
      </div>
    </div>
    <button
      @click.stop="handleClickToggle"
      class="card__toggle"
      :class="{ 'toggle-down': hiddenText }"
      v-if="visibilitySwitch"
    ></button>
    <div class="card__footer">
      <div class="card__title">{{ dataCard.title }}</div>
      <div
        class="card__paragraph"
        :class="{ 'close-text': hiddenText && visibilitySwitch }"
      >
        {{ dataCard.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  dataCard: {
    type: Object,
    required: true,
  },
  style: {
    type: Object,
    default: () => ({
      gapDesk: '42px',
      gapMobile: '42px',
      imgSize: '70px',
    }),
  },

  visibilitySwitch: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    required: false
  }
});



const imgSrc = ref(null);


onMounted(() => {
  imgSrc.value = `/assets/images/service_img/${props.dataCard.imgName}`;
});



const hiddenText = ref(props.visibilitySwitch);

const cardStyle = {
  '--gapDesk': props.style.gapDesk,
  '--gapMobile': props.style.gapMobile,
  '--sizeImg': props.style.imgSize,
};

const emit = defineEmits(['clicked-card']);
const handleClickToggle = () => {
  hiddenText.value = !hiddenText.value;
  emit('clicked-card', hiddenText.value);
};

const resetState = () => {
  if (props.visibilitySwitch) {
    hiddenText.value = true;
  }
};

onMounted(() => {
  window.addEventListener('resize', resetState);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resetState);
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: var(--gapDesk);
  position: relative;
  font-family: inherit;

  &__toggle {
    display: none;
    width: 40px;
    height: 40px;
    top: 0;
    right: 0;
    position: absolute;
    background-color: transparent;
    cursor: pointer;
    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotateX(180deg);
      background-image: url('/assets/images/decor/toggle_btn.svg');
      background-repeat: no-repeat;
      background-size: 20px 20px;
      transition: 0.5s;
    }
  }

  &__container-img {
    max-width: var(--sizeImg);
    width: 100%;
    height: var(--sizeImg);
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__title {
    margin-bottom: 12px;
   @include heading7;
   color: $white;
  }

  &__paragraph {
    @include body2;
    color: $grey_1;
    transition: line-height 0.5s;
  }
}

.toggle-down::before {
  transform: translate(-50%, -50%) rotateX(0deg);
}

@include hover-none {
  .card {
    gap: var(--gapMobile);
  }

  .card__toggle {
    display: initial;
  }

  .close-text {
    overflow: hidden;
    line-height: 0;
  }
}
</style>
