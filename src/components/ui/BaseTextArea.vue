<script setup>

const model = defineModel();
const emit = defineEmits(['input']);


const emitInput = () => {
  emit('input');
};

</script>
<template>
  <textarea  v-model="model" class="base-text-area"  @input="emitInput"></textarea>
</template>

<style lang="scss" scoped>
.base-text-area {
  width: 100%;
  height: 100%;
  padding-left: 15px;
  padding-top: 10px;
  background-color: transparent;
  border-radius: 4px;
  border: none;
  @include body1;
  color: $grey_2;
  resize: none;
  caret-color: $white;
  &:focus {
    outline: solid $grey_1 1px;
  }
}
</style>
