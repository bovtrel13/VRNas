<template>
  <div class="happy-client">
    <div class="happy-client__container-img">
      <div
        class="happy-client__img"
        v-for="(nameImg, index) in clientArrImg"
        :key="nameImg"
      >
        <img
          class="client-img"
          :src="`/assets/images/our_clients/${nameImg}`"
          alt="happy client"
        />
      </div>
    </div>
    <div class="happy-client__info">
      <span class="happy-client__number">
        {{ number_clients }}
      </span>
      <span class="happy-client__title">{{ title }}</span>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  clientArrImg: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  number_clients: {
    type: String,
    required: true,
  },
});



</script>

<style lang="scss" scoped>

.happy-client {
  display: flex;
  align-items: center;
  gap: 18px;
  @include _330 {
    flex-direction: column-reverse;
  }
}

.happy-client__container-img {
  display: flex;
  height: 50px;
  width: 127px;
}

.happy-client__img:nth-child(2) {
  position: relative;
  left: -12px;
}

.happy-client__img:nth-child(3) {
  position: relative;
  left: -24px;
}

.client-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: solid 1px;
}

.happy-client__number,
.happy-client__title {
  font-size: 16px;
  font-weight: 600;
  color: $white;
}

.happy-client__number {
  margin-right: 6px;
  position: relative;
}
.happy-client__number::before {
  content: '';
  position: absolute;
  left: -6px;
  bottom: -10px;
  height: 18px;
  width: 48px;
  background-image: url('/assets/images/decor/decor-line.png');
  background-repeat: no-repeat;
  background-position: center;
}

.happy-client__title {
  color: $grey_2;
}
</style>
