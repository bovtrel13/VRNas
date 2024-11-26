<script setup>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  basePath: {
    type: String,
    required: true,
  },
  arrTextTabs: {
    type: Array,
    required: true,
  },
  arrAllKeyForDataDetailService: {
    type: Array,
    required: true,
  },
  lengthDataDetailService: {
    type: Number,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
  },
  imgNavigationTab: {
    type: String,
    default: null,
  },
  bgImage: {
    type: String,
    default: null,
  },
});

const router = useRouter();
const emit = defineEmits(['switching']);

const setBgImg = computed(() => {
  return {
    '--bg-img': `url(${props.bgImage})`,
  };
});

const getActiveBtnIndex = computed(() => {
  return props.arrAllKeyForDataDetailService.findIndex(
    (key) => key === props.itemId
  );
});

const selectItem = ref(props.itemId);
const activeBtnIndex = ref(getActiveBtnIndex.value);
const rotate = reactive([
  '1-tab',
  '2-tab',
  '3-tab',
  '4-tab',
  '5-tab',
  '6-tab',
  '7-tab',
]);

const selectPage = (id, index) => {
  selectItem.value = id;
  activeBtnIndex.value = index;

  emit('switching', selectItem.value, activeBtnIndex.value);

  router.replace(`${props.basePath}/${id}`);
};

const handleNextBtn = () => {
  if (activeBtnIndex.value === props.lengthDataDetailService - 1) return;

  ++activeBtnIndex.value;
  const idService = props.arrAllKeyForDataDetailService[activeBtnIndex.value];
  selectItem.value = idService;

  emit('switching', selectItem.value, activeBtnIndex.value);
  router.push(`/our-services/${selectItem.value}`);
};

const handlePrevBtn = () => {
  
  if (activeBtnIndex.value === 0) return;

  --activeBtnIndex.value;
  const idService = props.arrAllKeyForDataDetailService[activeBtnIndex.value];
  selectItem.value = idService;

  emit('switching', selectItem.value, activeBtnIndex.value);
  router.push(`/our-services/${selectItem.value}`);
};
</script>
<template>
  <div
    :style="setBgImg"
    class="tabs"
  >
    <div
      class="tabs__container-tab"
      :class="'rotate-' + rotate[activeBtnIndex]"
    >
      <button
        @click="selectPage(key, i)"
        v-for="(key, i) in arrAllKeyForDataDetailService"
        :key="key"
        class="tabs__tab"
        :class="{
          'tabs__tab--active ': activeBtnIndex === i && selectItem === key,
        }"
      >
        <span>{{ arrTextTabs[i].split(' ')[0] }}</span>
        <span>{{ arrTextTabs[i].split(' ')[1] }}</span>
      </button>
    </div>

    <div
      v-if="imgNavigationTab"
      class="tabs__navigation"
    >
      <button
        @click="handlePrevBtn"
        class="prev"
        :disabled="activeBtnIndex === 0"
      >
        <img
          :src="imgNavigationTab"
          alt="prev service"
        />
      </button>
      <button
        @click="handleNextBtn"
        class="next"
        :disabled="activeBtnIndex === lengthDataDetailService - 1"
      >
        <img
          :src="imgNavigationTab"
          alt="next service"
        />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  position: relative;
  width: min(917px, 87vw);
  height: min(917px, 87vw);

  @include _991 {
    width: 917px;
    height: 917px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -7.5%;
    left: -7.5%;
    right: -7.5%;
    bottom: -7.5%;
    background: var(--bg-img) no-repeat center / 100%;
    border-radius: 100%;
  }

  &__container-tab {
    margin: auto;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 100%;

    transform-origin: center;
    transition: transform 0.5s linear;
  }

  &__tab {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    width: 102px;
    height: 102px;
    border-radius: 100%;
    position: absolute;
    background: transparent
      url('/assets/images/decor/detail_service_decor_not_active.svg') no-repeat
      center / 99%;
    box-shadow: $glow-effect;

    @include heading12;
    color: $white;
    transition: transform .3s linear;

    @include _1199 {
      @include heading12;
    }

    @include _991 {
      transition: transform .5s linear, opacity 1s linear;
    }

    &:nth-child(1) {
      left: -5.8%;
      top: 40.4%;
    }

    &:nth-child(2) {
      left: 0.5%;
      top: 20%;
    }

    &:nth-child(3) {
      left: 18.8%;
      top: 2.2%;
    }

    &:nth-child(4) {
      left: 44.4%;
      top: -5.5%;
    }

    &:nth-child(5) {
      right: 18.8%;
      top: 2.2%;
    }

    &:nth-child(6) {
      right: 0.5%;
      top: 20%;
    }

    &:nth-child(7) {
      right: -5.8%;
      top: 40.4%;
    }

    &--active {
      background-image: url('/assets/images/decor/detail_service_decor_active.svg');

      box-shadow: none;
      &::after {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: 100%;
        background: $main-gradient;
        opacity: 0.5;
        z-index: -1;
        filter: blur(10px);
      }
      
    }
  }

  &__navigation {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 300px;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    @include _380 {
      width: 80vw;
    }
  }
}

.next,
.prev {
  padding: 10px 20px;
  background-color: transparent;
}

.next {
  @include hover-none {
    transition: filter 0.1s linear, transform 0.3s linear;
    &:active {
      filter: drop-shadow(10px -10px 2px #000000) brightness(120%);
      transform: scale(0.8);
    }
  }
  @include hover-and-pointer {
    transition: filter 0.1s linear, transform 0.3s linear;
    &:hover {
      filter: drop-shadow(10px -10px 2px #000000) brightness(120%);
      transform: scale(0.9) rotate(-180deg);
    }
    &:active {
      transform: scale(0.8) rotate(-180deg);
    }
  }

  &:disabled {
    transform: none;
    opacity: 0.5;
  }
}

.prev {
  transform: rotate(-180deg);
  @include hover-none {
    transition: filter 0.3s linear, transform 0.3s linear;
    &:active {
      filter: drop-shadow(10px -10px 2px #000000) brightness(120%);
      transform: scale(0.8) rotate(-180deg);
    }
  }
  @include hover-and-pointer {
    transition: filter 0.3s linear, transform 0.3s linear;
    &:hover {
      filter: drop-shadow(10px -10px 2px #000000) brightness(120%);
      transform: scale(0.9);
    }
    &:active {
      transform: scale(0.8);
    }
  }

  &:disabled {
    transform: rotate(-180deg);
    opacity: 0.5;
  }
}

.rotate-1-tab {
  transform: rotate(85deg);

  .tabs__tab {
    transform: rotate(-85deg);

    @include hover-and-pointer {
      &:hover {
        background-size: 100%;
        transform: scale(0.95) rotate(-85deg);
        filter: brightness(125%);
      }
    }

    &:active {
      transform: scale(0.8) rotate(-85deg);
    }
  }

  @include _991 {
    .tabs__tab:nth-child(4),
    .tabs__tab:nth-child(5),
    .tabs__tab:nth-child(6),
    .tabs__tab:nth-child(7) {
      opacity: 0;
      transform: scale(.1);
    }
  }
}

.rotate-2-tab {
  transform: rotate(60.5deg);

  .tabs__tab {
    transform: rotate(-60.5deg);

    @include hover-and-pointer {
      &:hover {
        background-size: 100%;
        transform: scale(0.95) rotate(-60.5deg);
        filter: brightness(125%);
      }
    }
    &:active {
      transform: scale(0.8) rotate(-60.5deg);
    }
  }

  @include _991 {
    .tabs__tab:nth-child(5),
    .tabs__tab:nth-child(6),
    .tabs__tab:nth-child(7) {
      opacity: 0;
      transform: scale(.1);
    }
  }
}

.rotate-3-tab {
  transform: rotate(31deg);

  .tabs__tab {
    transform: rotate(-31deg);

    @include hover-and-pointer {
      &:hover {
        background-size: 100%;
        transform: scale(0.95) rotate(-31deg);
        filter: brightness(125%);
      }
    }
    &:active {
      transform: scale(0.8) rotate(-31deg);
    }
  }

  @include _991 {
    .tabs__tab:nth-child(6),
    .tabs__tab:nth-child(7) {
      opacity: 0;
      transform: scale(.1);
    }
  }
}

.rotate-4-tab {
  transform: rotate(0deg);

  .tabs__tab {
    transform: rotate(0deg);

    @include hover-and-pointer {
      &:hover {
        background-size: 100%;
        transform: scale(0.95) rotate(0deg);
        filter: brightness(125%);
      }
    }
    &:active {
      transform: scale(0.8) rotate(0deg);
    }
  }

  @include _991 {
    .tabs__tab:nth-child(7),
    .tabs__tab:nth-child(1) {
      opacity: 0;
      transform: scale(.1);
    }
  }
}

.rotate-5-tab {
  transform: rotate(-31.8deg);

  .tabs__tab {
    transform: rotate(31.8deg);

    @include hover-and-pointer {
      &:hover {
        background-size: 100%;
        transform: scale(0.95) rotate(31.8deg);
        filter: brightness(125%);
      }
    }
    &:active {
      transform: scale(0.8) rotate(31.8deg);
    }
  }

  @include _991 {
    .tabs__tab:nth-child(1),
    .tabs__tab:nth-child(2) {
      opacity: 0;
      transform: scale(.1);
    }
  }
}

.rotate-6-tab {
  transform: rotate(-61.5deg);

  .tabs__tab {
    transform: rotate(61.5deg);

    @include hover-and-pointer {
      &:hover {
        background-size: 100%;
        transform: scale(0.95) rotate(61.5deg);
        filter: brightness(125%);
      }
    }
    &:active {
      transform: scale(0.9) rotate(61.5deg);
    }
  }

  @include _991 {
    .tabs__tab:nth-child(1),
    .tabs__tab:nth-child(2),
    .tabs__tab:nth-child(3) {
      opacity: 0;
      transform: scale(.1);
    }
  }
}

.rotate-7-tab {
  transform: rotate(-85.8deg);

  .tabs__tab {
    transform: rotate(85.8deg);
   
    @include hover-and-pointer {
      &:hover {
        background-size: 100%;
        transform: scale(0.95) rotate(85.8deg);
        filter: brightness(125%);
      }
    }

    &:active {
      transform: scale(0.8) rotate(85.8deg);
    }
  }

  @include _991 {
    .tabs__tab:nth-child(1),
    .tabs__tab:nth-child(2),
    .tabs__tab:nth-child(3),
    .tabs__tab:nth-child(4) {
      opacity: 0;
      transform: scale(.1);
    }
  }
}
</style>
