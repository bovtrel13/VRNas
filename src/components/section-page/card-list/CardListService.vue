<script setup>
import CardService from '@/components/card/CardService.vue';

const props = defineProps({
  cardListData: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="cards-choose">
    <div
      class="cards-choose__card"
      v-for="card in cardListData"
      :key="card.id"
    >
      <CardService :dataCard="card" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cards-choose {
  display: flex;
  gap: 50px;
  padding: 42px 64px 53px;
  background-color: $black_50;
  border: solid 1px transparent;
  border-image: $border1;
  @include _1024 {
    padding: 36px;
  }
  @include _767 {
    margin: 0 auto;
    flex-direction: column;
    max-width: 100%;
  }
  @include _380 {
    padding: 20px;
  }

  &__card {
    flex: 1 1 33%;
  }

}
</style>
