<script setup>
const props = defineProps({
  titleTag: {
    type: String,
    default: 'div',
  },
  title: {
    type: String,
    required: true,
  },
  namePage: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="page">
    <component
      :is="titleTag"
      class="page__title"
    >
      {{ title }}
    </component>
    <ol class="breadcrumb">
      <li class="breadcrumb__item">
        <router-link to="/">Home</router-link>
      </li>
      <li
        class="breadcrumb__item active-item"
        aria-current="page"
      >
        {{ namePage }}
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.page {
  padding-top: 80px;
  padding-bottom: 76px;
  border-bottom: solid 1px transparent;
  border-image: $main-gradient 1;
  color: $white;
  text-align: center;

  @include _767 {
    padding-top: 58px;
    padding-bottom: 62px;
  }
}

.page__title {
  position: relative;
  margin: 0 auto 29px;
  font-size: 64px;
  line-height: 1.3;
  font-weight: 600;
  
  @include _767 {
    @include heading3;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: -2;
    top: -90px;
    left: 50%;
    width: 100%;
    height: 347px;
    background-image: url('/assets/images/decor/Ellipse 36.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    transform: translateX(-50%);

    @include _767 {
      top: -130px;
    }
    @include _380 {
      background-size: 110% 100%;
    }
  }
}
</style>
