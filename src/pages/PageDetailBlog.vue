<script setup>
import { markRaw, computed } from 'vue';
import { useRoute } from 'vue-router';

// Данные
import dataAllArticles from '@/assets/data/articles/allDataArticles';
import dataArticleRecent from '@/assets/data/articles/articleRecent';
import dataPopularHashtag from '@/assets/data/articles/popularHashtag';

// Компоненты
import ContentDetailBlog from '@/components/section-page/detail-blog/ContentDetailBlog.vue';
import ContentAside from '@/components/section-page/detail-blog/ContentAside.vue';
import BasePillTitle from '@/components/ui/BasePillTitle.vue';

const route = useRoute();

const blogId = computed(() => route.params.postId);
const articlesData = computed(() => {
  return dataAllArticles[blogId.value];
});

// пропсы для статей aside, page detail blog

const articleRecentData = markRaw(dataArticleRecent);

const imageOurArticles = markRaw({
  nameFolder: 'blog/card_',
  imageFormats: ['webp'],
});

const textContentArticles = markRaw({
  tag_title_recent_article: 'h3',
  title_recent_article: 'Recent Article',
});
</script>
<template>
  <nav
    class="breadcrumb-detail-blog"
    aria-label="breadcrumb"
  >
    <ol class="breadcrumb breadcrumb--left">
      <li class="breadcrumb__item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="breadcrumb__item">
        <router-link to="/blog?page=1">Blog</router-link>
      </li>
      <li
        class="breadcrumb__item breadcrumb__item--active"
        aria-current="page"
      >
        {{ articlesData.sub_title }}
      </li>
    </ol>
  </nav>

  <div class="detail-blog-container">
    <article  data-aos="fade-right" class="section-article">
      <ContentDetailBlog :dataArticle="articlesData" />
    </article>
    <aside class="section-sidebar">
      <section data-aos="fade-down" class="section-recent">
        <ContentAside
          v-bind="imageOurArticles"
          :dataArticleRecent="articleRecentData"
          :textContent="textContentArticles"
        />
      </section>

      <section data-aos="fade-up" class="popular-tags">
        <div
          class="popular-tags__tag"
          v-for="tag in dataPopularHashtag"
          :key="tag"
        >
          <BasePillTitle>#{{ tag }}</BasePillTitle>
        </div>
      </section>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumb-detail-blog {
  padding-top: 50px;
  margin-bottom: 52px;
}

.detail-blog-container {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 150px;

  @include _1199 {
    margin-bottom: 100px;
  }

  @include _991 {
    flex-direction: column;
    gap: 100px;
  }
}

.section-article {
  max-width: 790px;
  width: 100%;

  @include _1300 {
    max-width: 60vw;
  }

  @include _991 {
    max-width: 100%;
  }
}

.section-sidebar {
  max-width: 333px;
  width: 100%;

  @include _991 {
    max-width: 100%;
  }
}

.section-recent {
  margin-bottom: 64px;
  width: 100%;
}

.popular-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 333px;

  &__tag {
    width: max-content;
    @include caption3;
    color: $white;
  }
}
</style>
