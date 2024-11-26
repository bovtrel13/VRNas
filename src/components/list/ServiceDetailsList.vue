<template>
  <div
    class="list-service"
    :style="setImgPath"
    :class="{ 'list-service--pd-left': imgPath }"
  >
    <div class="list-service__title">{{ props.dataList.title }}</div>
    <div class="list-service__text">{{ props.dataList.text }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  dataList: {
    type: Object,
    required: true,
  },
  imgPath: {
    type: String,
    default: null,
  },
});

const setImgPath = {
  '--imgList': `url(${props.imgPath})`,
};
</script>

<style lang="scss" scoped>
.list-service {
  position: relative;
  max-width: 640px;

  @include _480 {
    max-width: 354px;
  }



  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 42px;
    height: 42px;
    background: var(--imgList) no-repeat center/cover;
    @include _430 {
      width: 31px;
      height: 31px;
    }
  }

  &--pd-left {
    padding-left: 58px;
    @include _430 {
      padding-left: 47px;
    }
  }

  &__title {
    margin-bottom: 12px;
    color: $white;
    @include heading9;
  }

  &__text {
    color: $grey_1;
    @include body3;
  }

}
</style>
