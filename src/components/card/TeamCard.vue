<template>
  <div class="card-team">
    <div class="card-team__img">
      <img :src="getImagePath(imgName, '.jpeg')" />
    </div>
    <div
      :class="{ 'card-team__info--big': bigCard }"
      class="card-team__info"
    >
      <div
        :class="{ 'card-team__name--big': bigCard }"
        class="card-team__name"
      >
        {{ name }}
      </div>
      <div
        :class="{ 'card-team__job-title--big': bigCard }"
        class="card-team__job-title"
      >
        {{ job_title }}
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  job_title: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
    required: true,
  },
  bigCard: {
    type: Boolean,
    required: false,
  },
});
const basePath = `${import.meta.env.BASE_URL}`;
const getImagePath = (name, format = '') => {
  return `${basePath}assets/images/team/${name}${format}`;
};
</script>

<style lang="scss" scoped>
.card-team {
  width: 100%;
  height: 100%;
  position: relative;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, #3246bc00, #192883);
    pointer-events: none;
  }
  &__img {
    width: 100%;
    height: 100%;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
 
  &__info {
    position: absolute;
    width: 100%;
    bottom: 9px;
    text-align: center;
    &--big {
      bottom: 23px;
    }
  }
 

  &__name {
    @include heading10;
    color: $white;
    &--big {
      @include heading7;
      line-height: 1
    }
  }
  &__job-title {
    @include body4;
    color: $grey_1;
    &--big {
      @include heading12;
    }
  }
}
</style>
