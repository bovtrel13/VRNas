<script setup>
import { markRaw, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// Данные
import dataCardsBlog from '@/assets/data/articles/cardsArticles';

// Компоненты
import AppPagination from '@/components/section-page/blog/AppPagination.vue';
import CardBlog from '@/components/card/CardBlog.vue';

const router = useRouter();
const route = useRoute();

// пропсы для CardsContainerBlog, page blog ============================================================================

const cardsBlogData = markRaw(dataCardsBlog);
const totalCardsBlog = ref(9);

const paddingBtnClassBlog = 'pd-blog';

const linkCardBlog = '/blog';
const textLinkCardBlog = 'READ MORE';

const nameFolderImageCardBlog = 'blog/card_';

const gapBtn = '16px';
const visibleBtn = 3;

// если есть кнопки изменяющие состояние totalCardsBlog, то передаем пропс const reset = ref(0);
//  и при каждом изменении состояния totalCardsBlog изменяем  reset.value += 1;

const selectMode = markRaw(['show minimum', 'show middle', 'show maximum']);
const activeIndexSelect = ref(1);

const mode = markRaw({
  0: 6,
  1: 9,
  2: cardsBlogData.length,
});

const reset = ref(0);

// const activeIndexModeSelect = ref()
const handleClickSelectMode = (index) => {
  totalCardsBlog.value = mode[index];
  activeIndexSelect.value = index;
  reset.value += 1;
};
</script>
<template>
  <section class="pagination-blog">
    <div class="select-mode">
      <div
        data-aos="fade-left"
        :data-aos-delay="250 * index"
        v-for="(btn, index) in selectMode"
        class="wrapper-animate"
        :key="index"
      >
        <button
          @click="handleClickSelectMode(index)"
          :class="{ 'active-select': index === activeIndexSelect }"
          class="select-mode__btn"
        >
          {{ btn }}
        </button>
      </div>
    </div>
    <AppPagination
      :reset
      :gapBtn
      :visibleBtn
      :cardComponent="CardBlog"
      :linkCard="linkCardBlog"
      :linkText="textLinkCardBlog"
      :nameFolderImageCard="nameFolderImageCardBlog"
      :paddingBtnClass="paddingBtnClassBlog"
      :totalCards="totalCardsBlog"
      :cardsData="cardsBlogData"
    />
  </section>
</template>

<style lang="scss" scoped>
.pagination-blog {
  padding-top: 96px;
  margin-bottom: 150px;

  @include _1199 {
    margin-bottom: 100px;
  }

  @include _575 {
    padding-top: 20px;
  }
}

.select-mode {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 60px;

  @include _767 {
    gap: 15px;
    margin-bottom: 30px;
  }

  &__btn {
    padding: 20px 30px;
    background-color: transparent;
    border: solid 1px;
    color: $white;
    @include button1;
    transition: transform 0.3s, box-shadow 0.5s;
    @include _767 {
      padding: 10px 15px;
    }

    @include hover-and-pointer {
      &:hover {
        box-shadow: $glow-effect;
      }
    }

    &:active {
      transform: scale(0.95);
    }
  }
}

.active-select {
  background: linear-gradient(90deg, #ff7e5f, #feb47b) no-repeat;
  box-shadow: $glow-effect2;
  pointer-events: none;
}

</style>
