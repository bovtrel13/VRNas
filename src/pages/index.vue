<script setup>
import { ref, onMounted, provide, watch } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import Header from '@/components/section-page/header/index.vue';
import Footer from '@/components/section-page/footer/index.vue';
import SubscribeForm from '@/components/subscribe/SubscribeForm.vue';
import MainLayout from '@/components/layout/MainLayout.vue';

const route = useRoute();
const layout = computed(() => {
  return route && route.meta ? route.meta.layout || MainLayout : MainLayout;
});

const currentRouteName = ref(route.name || 'Home');
console.log(currentRouteName.value);

watch(route, (newRoute) => {
  currentRouteName.value = newRoute.name || 'Home';
});

const loading = ref(true);
const scroll = ref(false);

onMounted(() => {
  loading.value = false;
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    scroll.value = scrollTop > 10;
  });
});
</script>
<template>
  <div class="bg-decor-page pd-top-page">
    <header
      :class="{ 'scroll-header': scroll }"
      class="header animation-2"
    >
      <div class="wrapper-header content-width">
        <Header :currentRouteName="currentRouteName" />
      </div>
    </header>

    <main class="content-width main">
      <div
        class="loading"
        v-if="loading"
      >
        Loading...
      </div>
      <component :is="layout">
        <router-view />
      </component>
    </main>

    <footer class="footer content-width">
      <SubscribeForm
        data-aos="fade-down"
        data-aos-delay="500"
      />
      <Footer
        :currentRouteName
        data-aos="fade-up"
        data-aos-delay="500"
      />
    </footer>
  </div>
</template>

<style lang="scss">
.loading {
  font-size: 50px;
  color: $white;
  height: 100vh;
}

.pd-top-page {
  padding-top: 114px;
}

.content-width {
  max-width: 1240px;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;

  @include _480 {
    padding-right: 16px;
    padding-left: 16px;
  }
}

.bg-decor-page {
  background-color: $black_100;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    transform: rotate(180deg);
    max-width: 736px;
    width: 100%;
    height: 353px;
    background: url('/assets/images/bg/top-decor.svg') no-repeat;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    max-width: 736px;
    width: 100%;
    height: 353px;
    background: url('/assets/images/bg/top-decor.svg') no-repeat;
    pointer-events: none;
  }
}

.header {
  padding-top: 31px;
  padding-bottom: 31px;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  transition: padding-top 0.3s linear, padding-bottom 0.6s ease-in-out;
}

.footer {
  display: flex;
  flex-direction: column;
  gap: 182px;

  @include _1199 {
    gap: 92px;
  }
}

.scroll-header {
  background-color: rgba(128, 128, 128, 0.295);
  padding-top: 10px;
  padding-bottom: 10px;
  backdrop-filter: blur(14px);
}
</style>
