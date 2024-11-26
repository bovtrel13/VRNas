<template>
  <div class="start-from">
    <div class="start-from__header">
      <div class="start-from__title">Start from</div>
      <div class="start-from__price">$99</div>
    </div>
    <div class="start-from__link">
      <BaseLinkBtn v-bind="buttonProps">
        GET STARTED
      </BaseLinkBtn>
    </div>
    <div class="start-from__footer">30 Days Money back Guarantee</div>
  </div>
</template>

<script setup>
import { markRaw } from 'vue';
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';


const buttonProps = markRaw({
  isLink: true,
  to: '/pricing-plan',
  version: 1,
});
</script>
<style lang="scss" scoped>
.start-from {
  position: relative;
  padding: 20px 20px 18px;
  text-align: center;
  color: $white;
}

.start-from__header {
  margin-bottom: 14px;
}

.start-from__title {
  font-size: min(14px, 5vw);
  font-weight: 500;
  line-height: 1.43;
  color: $grey_2;
}

.start-from__price {
  font-size: min(60px, 20vw);
  font-weight: 600;
  line-height: 1.1;
}

.start-from__link {
  max-width: 182px;
  width: 100%;
  height: 50px;
  margin: 0 auto 14px;
  font-size: min(14px, 5vw);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1.5px;
}

.start-from__footer {
  font-size: min(12px, 4vw);
  font-weight: 400;
  line-height: 1.7;
  color: $grey_1;
}
</style>
