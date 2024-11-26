<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import TeamCard from '@/components/card/TeamCard.vue';
import BaseGradientTitle from '@/components/ui/BaseGradientTitle.vue';
import BaseLinkBtn from '@/components/ui/BaseLinkBtn.vue';
import imgLoader from '@/components/media-loader/imgLoader.vue';

const props = defineProps({
  dataOurTeam: {
    type: Array,
    required: true,
  },

  textContent: {
    type: Object,
    required: false,
  },

  linkBtn: {
    type: Object,
    required: false,
  },

  bigCard: {
    type: Boolean,
    required: false,
  },

  allTeam: {
    type: Boolean,
    required: false,
  },

  imageSocialCardTeam: {
    type: Object,
    default: null,
  },
});

const route = useRoute();
const router = useRouter();

const teamId = computed(() => route.params.teamId);
const indexCard = computed(() =>
  props.dataOurTeam.findIndex((team) => team.id == teamId.value)
);

const indexClick = ref(indexCard.value);

const handleClickCard = (index) => {
  if (indexClick.value === index) {
    indexClick.value = -1;
  } else {
    indexClick.value = index;
    router.replace(`/our-team/${props.dataOurTeam[index].id}`);
  }
};
</script>
<template>
  <div class="our-team">
    <div
      class="our-team__header"
      :class="{ 'our-team__header--center': allTeam }"
    >
      <div class="title-media">
        <div
          data-aos="fade-left"
          class="title-media__title"
        >
          <BaseGradientTitle :tag="textContent.tag_title">
            {{ textContent.title }}
          </BaseGradientTitle>
        </div>

        <component
          :is="textContent.tag_sub_title || 'div'"
          data-aos="fade-left"
          data-aos-delay="500"
          class="title-media__sub-title"
        >
          {{ textContent.sub_title }}
        </component>
      </div>

      <div
        v-if="linkBtn"
        data-aos="fade-right"
        data-aos-delay="500"
        class="our-team__link-btn"
      >
        <BaseLinkBtn v-bind="linkBtn">{{ linkBtn.text }}</BaseLinkBtn>
      </div>
    </div>

    <div
      data-aos="zoom-in"
      class="our-team__not-all-team"
      v-if="!allTeam"
    >
      <router-link
        :to="'/our-team/' + card.id"
        class="our-team__card"
        v-for="(card, index) in dataOurTeam"
        :key="card.id"
      >
        <TeamCard
          data-aos="flip-left"
          :data-aos-delay="250 * index"
          v-bind="card"
          :bigCard
        />
      </router-link>
    </div>

    <div
      v-if="linkBtn"
      data-aos="fade-right"
      data-aos-delay="500"
      class="our-team__link-btn our-team__link-btn--down"
    >
      <BaseLinkBtn v-bind="linkBtn">{{ linkBtn.text }}</BaseLinkBtn>
    </div>

    <div
      v-else
      class="our-team__all-team"
      data-aos="zoom-in"
    >
      <div
        @click="handleClickCard(index)"
        class="our-team__card"
        :class="{ 'card-active': indexClick === index }"
        v-for="(card, index) in dataOurTeam"
        :key="card.id"
      >
        <TeamCard
          data-aos="flip-left"
          data-aos-anchor-placement="center-bottom"
          :data-aos-delay="150 * (index % 3) + 100"
          v-bind="card"
          :bigCard
        />
        <div
          v-if="imageSocialCardTeam"
          class="social-team our-team__card--social-icons"
          :class="{ 'icons-active': indexClick === index }"
        >
          <a
            :href="card.social_links[0][1]"
            class="social-team__icon"
          >
            <imgLoader
              v-bind="imageSocialCardTeam"
              :imgName="card.social_links[0][0]"
              :alt="card.social_links[0][0].split('_')[0] + ' link'"
            />
          </a>
          <a
            :href="card.social_links[1][1]"
            class="social-team__icon"
          >
            <imgLoader
              v-bind="imageSocialCardTeam"
              :imgName="card.social_links[1][0]"
              :alt="card.social_links[1][0].split('_')[0] + ' link'"
            />
          </a>
          <a
            :href="card.social_links[2][1]"
            class="social-team__icon"
          >
            <imgLoader
              v-bind="imageSocialCardTeam"
              :imgName="card.social_links[2][0]"
              :alt="card.social_links[2][0].split('_')[0] + ' link'"
            />
          </a>
        </div>
      </div>

    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.our-team {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    @include _575 {
      justify-content: center;
      .title-media__title {
        display: flex;
        justify-content: center;
      }
    }

    &--center {
      justify-content: center;
      .title-media__title {
        display: flex;
        justify-content: center;
      }
    }
  }

  &__link-btn {
    align-self: flex-end;
    width: max-content;
    min-width: 140px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.06);
    @include button1;
    color: $white;
    @include _575 {
      display: none;
    }
    &--down {
      display: none;
      @include _575 {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  &__not-all-team {
    display: flex;
    justify-content: space-between;
    gap: 9px;
    @include _767 {
      flex-wrap: wrap;
      justify-content: space-around;
    }
    @include _575 {
      margin-bottom: 32px;
    }
  }

  &__card {
    max-width: 293px;
    width: 100%;
    height: 389px;
    padding: 9px;
    border: solid transparent 1px;
    border-image: $border1;
    background-color: rgba(37, 37, 50, 0.6);

    @include hover-and-pointer {
      transition: border-image 0.3s linear;
      &:hover {
        border-image: $main-gradient 1;
      }
    }
  }

  .card-active {
    border-image: $main-gradient 1;
  }
}

.social-team {
  display: flex;
  justify-content: space-between;
  max-width: 186px;
  width: 100%;

  &__icon {
    width: 46px;
    height: 46px;
    background-color: rgba(0, 255, 255, 0.115);
    border-radius: 100%;
    @include hover-and-pointer {
      transition: transform 0.1s ease-in;
      &:hover {
        transform: scale(0.9);
      }
    }
  }
}

.our-team__all-team {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px;
  @include _1024 {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  @include _639 {
    grid-template-columns: 1fr;
  }

  .our-team__card {
    position: relative;
    max-width: 379px;
    height: 503px;
    cursor: pointer;
    &--social-icons {
      position: absolute;
      bottom: 86px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s linear;
    }
    .icons-active {
      opacity: 1;
      pointer-events: initial;
      cursor: pointer;
    }
  }
}
</style>
