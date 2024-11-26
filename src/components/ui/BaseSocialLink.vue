<template>
  <a
    :href="href"
    class="link"
    :style="setIconInVariable"
  >
    <img
      :src="imgSrc"
      :alt="altText"
      class="img-link"
    />
</a>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});

const setIconInVariable = computed(() => {
  return {
    '--img': props.imgSrc ? `url(${props.imgSrc})` : 'none',
  };
});

</script>

<style lang="scss" scoped>
.link {
  display: flex;
  position: relative;


  @include hover-and-pointer {
    &:hover::before {
      opacity: 1;
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 10%;
      right: -50%;
      z-index: -1;
      opacity: 0;
      filter: blur(2px);
      width: 100%;
      height: 100%;
      background-image: var(--img);
      background-repeat: no-repeat;
      transition: opacity 0.5s;
    }
  }

}
.img-link {
  width: 100%;
  height: 100%;
  transition: filter 1s;
  object-fit: contain;
  border-radius: 100%;
  @include hover-and-pointer {
    &:hover {
      box-shadow: 4px 4px 43px 41px rgba(34, 60, 80, 0.19);
    }
  }
}
</style>
