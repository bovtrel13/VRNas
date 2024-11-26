<template>
  <component
    :is="tag"
    class="gradient-title"
    v-bind="attrs"
  >
    <slot></slot>
  </component>
</template>
<script setup>
import { useAttrs } from 'vue';

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
});

const attrs = useAttrs();

</script>

<style lang="scss" scoped>
.gradient-title {
  background: $main-gradient no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: max-content;
  font-size: inherit;
}

.custom-style {
  display: inline-block;
  background: none;
  -webkit-background-clip: initial;
  -webkit-text-fill-color: initial;
}
</style>
