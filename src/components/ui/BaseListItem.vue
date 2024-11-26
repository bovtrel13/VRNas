<template>
  <div
    class="about-list"
    :style="setImgPath"
    :class="{ 'about-list--icon': imgName }"
  >
    {{ text }}
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    require: true,
  },
  imgName: {
    type: String,
    require: false,
  },
  paddingLeft: {
    type: String,
    default: '20px'
  },
  positionIconTop: {
    type: String,
    default: '0px'
  }
});
const basePath = `${import.meta.env.BASE_URL}`;

const pathImg = computed(() => {
  return props.imgName
    ? `${basePath}assets/images/decor/${props.imgName}`
    : null;
});

const setImgPath = computed(() => {
  return pathImg.value ? { '--imgList': `url(${pathImg.value})`, '--pd-left': props.paddingLeft, '--top': props.positionIconTop } : {};
});
</script>

<style lang="scss" scoped>
.about-list {
  list-style-type: inherit;
}

.about-list--icon {
  position: relative;
  padding-left: var(--pd-left);

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: var(--top);
    left: 0;

    background-image: var(--imgList);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
