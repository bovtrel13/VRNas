<script setup>
import { computed, ref, onMounted, onUpdated, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';

const props = defineProps({
  cardComponent: {
    type: Object,
    required: true,
  },
  cardsData: {
    type: Array,
    required: true,
  },

  totalCards: {
    type: Number,
    required: true,
  },

  paddingBtnClass: {
    type: String,
    default: null,
  },

  linkCard: {
    type: String,
    default: null,
  },

  linkText: {
    type: String,
    default: null,
  },

  nameFolderImageCard: {
    type: String,
    default: null,
  },

  gapBtn: {
    type: String,
    default: '0px',
  },

  visibleBtn: {
    type: Number,
    default: null,
  },

  reset: {
    type: Number,
    default: 0,
  },


});

const router = useRouter();
const route = useRoute();

const getNameFolder = (cardId) => {
  return props.nameFolderImageCard && props.nameFolderImageCard.endsWith('_')
    ? `${props.nameFolderImageCard}${cardId}`
    : props.nameFolderImageCard;
};

const lengthBtn = computed(() => {
  return Math.ceil(props.cardsData.length / props.totalCards);
});

const indexActiveBtn = ref(0);

const currentPage = computed(() => {
  return parseInt(route.query.page) || 1;
});

const selectPage = ref(currentPage.value);

const endPagination = computed(() => {
  const valueEnd = selectPage.value * props.totalCards;

  return valueEnd > props.cardsData.length ? props.cardsData.length : valueEnd;
});

const startPagination = computed(() => {

  return currentPage.value * props.totalCards - props.totalCards;
});

const setVariables = computed(() => {
  return { '--btn-gap': props.gapBtn };
});

let widthTransform = null;
const allBtn = ref(null);
const wrapperVisibleWidth = ref(null);
const containerBtn = ref(null);

const handleSelectPage = (page, indexBtn) => {
  selectPage.value = page;

  router.replace(`${props.linkCard}?page=${selectPage.value}`);
  indexActiveBtn.value = indexBtn; 
  console.log('indexActiveBtn',indexActiveBtn.value, lengthBtn.value);
};



watch(
  () => props.reset,
  () => {
    router.replace(`/blog?page=1`);
    selectPage.value = 1;
    indexActiveBtn.value = 0;
    containerBtn.value.style.transform = 'translateX(0px)';
  }
);


onMounted(() => {
  const buttonElement = allBtn.value[0];

  if (buttonElement) {
    const widthButton = buttonElement.getBoundingClientRect().width;

    widthTransform = widthButton + parseInt(props.gapBtn);

    const initWidth =
      widthButton * props.visibleBtn +
      parseInt(props.gapBtn) * (props.visibleBtn - 1);
    wrapperVisibleWidth.value.style.width = initWidth + 'px';
  }
  let transform = 0;
  if (selectPage.value > props.visibleBtn) {
    transform = (selectPage.value - (props.visibleBtn - 1)) * -widthTransform;
  }

  if (selectPage.value === props.visibleBtn) {
    transform = -widthTransform;
  }

  if (selectPage.value === allBtn.value.length) {
    transform += widthTransform;
  }

  containerBtn.value.style.transform = `translateX(${transform}px)`;
});

onUpdated(() => {
  if (
    selectPage.value >= props.visibleBtn &&
    selectPage.value !== allBtn.value.length
  ) {
    containerBtn.value.style.transform = `translateX(${
      (selectPage.value - (props.visibleBtn - 1)) * -widthTransform
    }px)`;
  }
  if (selectPage.value < props.visibleBtn) {
    containerBtn.value.style.transform = 'translateX(0px)';
  }
});
</script>
<template>
  <div
    class="cards-blog"
    :style="setVariables"
  >
    <div class="cards-blog__cards">
      <div
        data-aos="flip-up"
        :data-aos-delay="((250 * index) % 3) * 250"
        class="cards-blog__card"
        v-for="(card, index) in cardsData.slice(startPagination, endPagination)"
        :key="card.id"
      >
        <component
          :is="cardComponent"
          :id="card.id"
          :alt="card.title"
          :nameFolder="getNameFolder(card.id)"
          :imageFormats="['webp']"
          :linkText
          :link="`${linkCard}/${card.id}`"
          v-bind="card"
        />
      </div>
    </div>
    <div class="cards-blog__footer">
      <div
        ref="wrapperVisibleWidth"
        class="cards-blog__hidden-btn"
      >
        <div
          ref="containerBtn"
          class="cards-blog__container-btn"
        >
          <div
            data-aos="fade-up"
            :data-aos-delay="((250 * index) % 3) * 250"
            v-show="
              startPagination <= props.cardsData.length && allBtn?.length !== 1
            "
            ref="allBtn"
            @click="handleSelectPage(v, index)"
            class="cards-blog__btn"
            :class="{ 'active-btn': v === selectPage }"
            v-for="(v, index) in lengthBtn"
            :key="index"
          >
            <BaseLinkBtn :version="2">
              {{ v }}
            </BaseLinkBtn>
          </div>
        </div>
      </div>

      <div
        :class="{
          'hidden-dots':
            startPagination > cardsData.length ||
            selectPage === lengthBtn ||
            cardsData.length / totalCards === lengthBtn ||
            indexActiveBtn + visibleBtn  > lengthBtn
        }"
        class="cards-blog__dots"
        aria-hidden="true"
      >
        <BaseLinkBtn
          data-aos="fade-down"
          :data-aos-delay="1000"
          :version="2"
        >
          ...
        </BaseLinkBtn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards-blog {
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-bottom: 60px;

    @include _991 {
      grid-template-columns: repeat(2, 1fr);
    }

    @include _639 {
      grid-template-columns: 1fr;
    }
  }

  &__footer {
    display: flex;
    justify-content: center;
    gap: var(--btn-gap);
    min-height: 34px;
  }

  &__hidden-btn {
    position: relative;
    overflow: hidden;
  }

  &__container-btn {
    display: flex;
    gap: var(--btn-gap);
    @include body2;
    color: $white;
    position: absolute;
    left: 0;
    height: 100%;
    transform: translateX(0);
  }

  &__btn {
    width: 34px;
    opacity: 0.1;
  }

  &__dots {
    width: 34px;
    @include body2;
    color: $white;
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.3s linear;
  }
}

.active-btn {
  opacity: 1;
  box-shadow: $glow-effect inset;
  pointer-events: none;
}

.hidden-dots {
  opacity: 0;
}
</style>
