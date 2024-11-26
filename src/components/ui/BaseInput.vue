<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import maskPhone from '@/utils/maskPhone.js'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },

  mask: {
    type: Boolean,
    default: null
  },

  maskStart: {
    type: Number,
    default: null
  },

  maskValue: {
    type: String,
    default: null
  },

  maskSymbols: {
    type: Array,
    default: null
  },

  maskHover: {
    type: Boolean,
    default: true
  },

  classesBaseInput: {
    type: Array,
    default: () => []
  }
});

const input = ref(null);
const model = defineModel();
const emit = defineEmits(['input', 'keyup']);


const emitInput = () => {
  emit('input');
};

const emitKeyup = () => {
  console.log(input.value.value);
  emit('keyup', input.value.value);
}
let fDeleteMask = null;

onMounted(() => {
  if (props.mask) {
    fDeleteMask =  maskPhone(props.maskStart, props.maskValue, props.maskSymbols, input.value, props.maskHover);
  }
});

onBeforeUnmount(() => {
  if (typeof fDeleteMask === 'function') {
  
    fDeleteMask(); 
  } 
});

</script>
<template>

  <input :class="classesBaseInput" ref="input" @input="emitInput" @keyup="emitKeyup" 
    v-model="model" :type="type" class="base-input">
  </input>


</template>


<style lang="scss" scoped>
.base-input {
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  

  @include body1;
  color: $grey_2;

  &:focus {
    outline: solid $grey_1 1px;
  };
}
</style>