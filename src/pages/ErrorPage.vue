<script setup>
import { markRaw } from 'vue';

const playerError = markRaw({
  img: '/assets//images/bg/error.png',
  video: 'error.mp4',
});

const textContent = markRaw({
  tag_title: 'h2',
  title: '404 ERROR',
  tag_sub_title: 'h3',
  sub_title: 'Page Not Found',
});
const linkBtn = markRaw({
  isLink: true,
  to: '/',
  version: 1,
  text: 'GO TO HOME',
});

import HomeBigPlayer from '@/components/section-page/homepage/HomeBigPlayer.vue';
</script>
<template>
  <section class="error-player">
    <HomeBigPlayer
      :player="playerError"
      :textContent="textContent"
      :linkBtn="linkBtn"
    />
  </section>
</template>

<style lang="scss" scoped>
.error-player {
  padding-top: 96px;
  margin-bottom: 150px;
  @include _1199 {
    margin-bottom: 100px;
  }
}
</style>
