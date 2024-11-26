<template>
  <div class="container-links">
    <div
      class="container-links__link"
      v-for="link in socialLinkData"
    >
      <BaseSocialLink v-bind="link" />
    </div>
  </div>
</template>

<script setup>
import { markRaw } from 'vue';

import BaseSocialLink from '@/components/ui/BaseSocialLink.vue';

import facebookImg from '/assets/images/social/facebook.svg';
import instagramImg from '/assets/images/social/instagram.svg';
import twitterImg from '/assets/images/social/twitter.svg';
import githubImg from '/assets/images/social/github.svg';

const socialLinkData = markRaw([
  {
    imgSrc: facebookImg,
    altText: 'facebook link',
    href: '#',
  },
  {
    imgSrc: instagramImg,
    altText: 'instagram link',
    href: '#',
  },
  {
    imgSrc: twitterImg,
    altText: 'twitter link',
    href: '#',
  },
  {
    imgSrc: githubImg,
    altText: 'github link',
    href: 'https://github.com/Tudovchanin',
  },
]);
</script>

<style lang="scss" scoped>
.container-links {
  display: flex;
  gap: 20px;
  
  min-height: 44px;
  @include _380 {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.container-links__link {
  max-width: 46px;
}
</style>
