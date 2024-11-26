<template>
  <div class="client-info">
    <div
      class="client-info__icon"
      :class="{ 'active-client': showClientInfo }"
      @click="handleClick"
    >
      <img
        class="client-img"
        :src="`${basePath}assets/images/our_clients/${client.imgName}`"
        alt="image client"
      />
    </div>
    <div
      class="client-info__text"
      :class="{ 'hidden-client': !showClientInfo }"
    >
      <blockquote class="container-info">
        <p class="client-info__quote">
          {{ client.citation }}
        </p>
        <p class="client-info__name">
          <cite>{{client.name }}</cite>
          - {{ client.job_title }}
        </p>
      </blockquote>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  client: { type: Object, required: true },
  showClientInfo: { type: Boolean, default: false },
});
const basePath = `${import.meta.env.BASE_URL}`;
const emit = defineEmits(['button-clicked']);

const handleClick = () => {
  emit('button-clicked', true);
};
</script>

<style lang="scss" scoped>
.client-info {
  display: flex;
  justify-content: space-between;
  max-width: 383px;
  width: 100%;
  position: relative;
}

.client-info__icon {
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  border: solid 1px #808080;
  border-radius: 100%;
  position: relative;
  transition: border 0.3s;

  @include hover-and-pointer {
    cursor: pointer;
    &:hover::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    width: 105%;
    height: 105%;
    position: absolute;
    background-image: url('/assets/images/decor/circle-gradient.svg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 100%;
  } 

  .client-img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 100%;
  }
}

.active-client::before {
  opacity: 1;
}

.client-info__text {
  width: 78%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  padding: 18px 20px 16px;
  font-size: inherit;
  color: $grey_2;
  transition: opacity .5s, padding .5s;
  // box-shadow: -100px -6px 45px 73px rgba(34, 60, 80, 0.2) inset;

  filter: drop-shadow(3px -5px 2px #000000);
  
  
  @include _380 {
    width: 71%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-image: url('/assets/images/decor/bg-client.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    filter: drop-shadow(3px -5px 10px #000000);
  }
}

.client-info__quote {
  margin-bottom: 10px;
  font-size: inherit;
  line-height: 1.67;
  color: inherit;
  transition: line-height 0.5s;
}

.client-info__name {
  width: max-content;
  border-image: $main-gradient 1;
  border-image-width: 0px 0px 1px 0px;
  font-size: inherit;
  line-height: 2;
  color: inherit;
  transition: line-height 0.5s;
}

.client-info__icon--active {
  border: none;
}

.client-info__icon--active::before {
  opacity: 1;
}

.hidden-client {
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
  opacity: 0;
}

.hidden-client::before {
  width: 100%;
  height: 0;
  top: 50%;
  transform: translateY(50%);
  background-size: 100% 0;
}

.hidden-client .client-info__name,
.hidden-client .client-info__quote {
  line-height: 0;
}

.hidden-client .client-info__quote {
  margin-bottom: 0;
}
</style>
