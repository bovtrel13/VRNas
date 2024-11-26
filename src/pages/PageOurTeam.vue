<script setup>
import { markRaw } from 'vue';

// Данные
import dataOurTeam from '@/assets/data/people/team';

// Компоненты
import AboutOurTeam from '@/components/section-page/about-us/AboutOurTeam.vue';
import OurServiceInfo from '@/components/section-page/our-service/OurServiceInfo.vue';

// пропсы для AboutOurTeam, page our-team ==============================================================

const ourTeamData = markRaw(dataOurTeam);

const textContentOurTeam = markRaw({
  tag_title: 'h2',
  title: 'OUR TEAM',
  tag_sub_title: 'h3',
  sub_title: 'Meet Our Amazing Team',
});

const bigCard = true;
const allTeam = true;

// Пропсы для компонента imageLoader
const imageSocialCardTeam = markRaw({
  nameFolder: 'social',
  imageFormats: ['png'],
  defaultFormat: 'svg',
  objFit: 'contain',
});

// пропсы для OurServiceInfo, page our-team ======================================================================

const textContentOurServiceInfo = markRaw([
  {
    tag_title: 'h2',
    title: 'HAPPY CLIENTS',
    tag_sub_title: 'div',
    sub_title: '123k+',
  },
  {
    tag_title: 'h2',
    title: 'PROJECT COMPLETE',
    tag_sub_title: 'div',
    sub_title: '300k+',
  },
  {
    tag_title: 'h2',
    title: 'YEARS EXPERIENCE',
    tag_sub_title: 'div',
    sub_title: '10+',
  },
]);
</script>
<template>
  <section class="section-team">
    <AboutOurTeam
      :dataOurTeam="ourTeamData"
      :textContent="textContentOurTeam"
      :bigCard
      :allTeam
      :imageSocialCardTeam
    />
  </section>

  <section class="section-info">
    <OurServiceInfo :textContentArray="textContentOurServiceInfo" />
  </section>
</template>

<style lang="scss" scoped>
.section-team {
  padding-top: 150px;
  margin-bottom: 150px;

  @include _1199 {
    padding-top: 100px;
    margin-bottom: 100px;
  }
}

.section-info {
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(52, 52, 69, 0.3),
    rgba(32, 32, 41, 0) 100%
  );

  @include _1199 {
    margin-bottom: 100px;
  }
}
</style>
