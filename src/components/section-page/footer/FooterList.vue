<template>
  <div class="list-footer">
    <div class="list-footer__title">{{ title }}</div>
    <ul class="list-footer__list">
      <li
        v-for="(link, index) in dataList"
        :key="link.id"
        class="list-footer__item"
      >
        <a
          v-if="link.isLinkUrl"
          :href="link.href"
          class="list-footer__link"
          :class="{
            'link-icon': link.icon,
            'not-link-active': link.notActiveLink,
          }"
          :style="setIconInVariable(link.icon)"
        >
          {{ link.text }}
        </a>

        <router-link
          v-else
          :to="link.href"
          class="list-footer__link"
          :class="{
            'link-icon': link.icon,
            'not-link-active': link.notActiveLink,
            'custom-link-active-footer': link.name.includes(routeActive),
          }"
          :style="setIconInVariable(link.icon)"
        >
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  dataList: {
    type: Array,
    required: true,
  },

  currentRouteName: {
    type: String,
    default: null,
  },
});

const routeActive = ref(props.currentRouteName);
watch(
  () => props.currentRouteName,
  (newRoute) => {
    routeActive.value = newRoute;
  }
);

const setIconInVariable = (icon) => {
  return {
    '--imgList': icon ? `url(${icon})` : 'none',
  };
};
</script>

<style lang="scss" scoped>
.list-footer__title {
  @include heading10;
  color: $white;
  margin-bottom: 16px;
}

.list-footer__list {
  display: grid;
  gap: 16px;
}

.list-footer__link {
  display: block;
  @include body1;
  color: $white;

  transition: color 0.3s, transform 0.3s, text-shadow 0.3s;
  @include hover-and-pointer {
    cursor: pointer;
    &:hover {
      color: $gold_1;
      text-shadow: $glow-effect;
    }
  }
  @include _380 {
    @include body2;
  }
}

.link-icon {
  position: relative;
  padding-left: 24px;
  @include _380 {
    @include body2;
  }
}

.link-icon::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  transform: translateY(15%);
  width: 20px;
  height: 20px;
  background-image: var(--imgList);
  background-repeat: no-repeat;
  background-position: center;
}
</style>
