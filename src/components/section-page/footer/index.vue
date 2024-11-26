<template>
  <div class="footer">
    <div class="footer__header">
      <div class="footer__col-left">
        <div class="footer__container-logo">
          <Logo />
        </div>

        <div class="footer__container-links">
          <SocialLinks />
        </div>
      </div>

      <div class="footer__col-right">
        <div class="wrapper-footer-list">
          <FooterList
            title="Quick links"
            :dataList="quickLinksData"
            :currentRouteName
          />
        </div>

        <div class="wrapper-footer-list">
          <FooterList
            title="Support"
            :dataList="supportLinksData"
            :currentRouteName
          />
        </div>

        <div class="wrapper-footer-list">
          <FooterList
            title="Need Help?"
            :dataList="needHelpLinksData"
          />
        </div>
      </div>
    </div>

    <div class="footer__footer">© Copyright 2023, All Rights Reserved</div>
  </div>
</template>
<script setup>
import { markRaw } from 'vue';

import FooterList from './FooterList.vue';
import SocialLinks from './SocialLinks.vue';
import Logo from '@/components/ui/BaseLogo.vue';

import {
  quickLinks,
  needHelpLinks,
  supportLinks,
} from '@/assets/data/footerList.js';


const props = defineProps({
  currentRouteName: {
    type: String,
    default: null
  },
});


const quickLinksData = markRaw(quickLinks);
const needHelpLinksData = markRaw(needHelpLinks);
const supportLinksData = markRaw(supportLinks);
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  gap: 33px;
}

.footer__header {
  display: flex;
  justify-content: space-between;
  @include _1199 {
    flex-direction: column;
    align-items: center;
  }
}

.footer__col-right {
  display: flex;
  width: max-content;

  @include _1199 {
    width: 100%;
    justify-content: space-between;
    gap: 40px;
  }

  @include _639 {
    flex-wrap: wrap;
  }

  @include _300 {
    font-size: 12px;
  }
}

.wrapper-footer-list:nth-child(1) {
  margin-right: 148px;
  @include _1199 {
    margin-right: 0;
  }
}
.wrapper-footer-list:nth-child(2) {
  margin-right: 86px;
  @include _1199 {
    margin-right: 0;
  }
}

.footer__col-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  @include _1199 {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
}
.footer__container-links {
  margin-bottom: 35px;
}

.footer__footer {
  display: flex;
  justify-content: center;
  align-items: end;
  height: 60px;

  font-size: 16px;
  font-weight: 300;
  line-height: 1.75;
  color: $white;
  border-top: 1px solid transparent;
  border-image: $main-gradient 1;
}
</style>
