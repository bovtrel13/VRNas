<template>
  <component
    :is="isExternalLink ? 'a' : isLink ? 'router-link' : 'button'"
    v-bind="isExternalLink ? { href: to } : isLink ? { to: to } : {}"
    :class="getClasses()"
  >
    <slot>not text</slot>
  </component>
</template>

<script setup>
const props = defineProps({
  isLink: {
    type: Boolean,
    default: false,
  },

  isExternalLink: {
    type: Boolean,
    default: false,
  },
  
  to: {
    type: String,
    default: null,
  },
 
  version: {
    type: Number,
    required: true,
  },
});

const getClasses = () => {
  return {
    'btn-mainV1': props.version === 1,
    'btn-mainV2': props.version === 2,
  };
};
</script>

<style lang="scss" scoped>
.btn-mainV1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: $main-gradient;
  width: 100%;
  height: 100%;

  font-family: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  color: inherit;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    box-shadow: -25px 0px 50px 2px rgb(12, 186, 241, 0.6);
    opacity: 0;
    transition: opacity 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 25px 0px 50px 2px rgba(233, 92, 233, 0.6);
    opacity: 0;
    transition: opacity 0.5s;
  }
  @include hover-and-pointer {
    &:hover::after,
    &:hover::before {
      opacity: 1;
      z-index: 1;
    }
  }
}

.btn-mainV2 {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  width: 100%;
  height: 100%;

  background-color: transparent;
  border: solid transparent;
  border-image: $main-gradient 1;
  border-width: 1px;
  padding-left: 8px;
  padding-right: 8px;
  text-align: center;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: $main-gradient;
    opacity: 0;
    transition: opacity 0.5s;
  }

  @include hover-and-pointer {
    &:not(.router-link-active):hover:before {
      opacity: 1;
    }
  }
}

.pd-faq {
  padding: 12px 24px;
}

.pd-blog {
  padding: 8px 14px;
}
</style>
