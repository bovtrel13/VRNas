<script setup>
import RecentArticle from '@/components/articles/RecentArticles.vue';

const props = defineProps({
  dataArticleRecent: {
    type: Array,
    required: true,
  },

  nameFolder: {
    type: String,
    required: true,
  },

  imageFormats: {
    type: Array,
    default: false,
  },

  textContent: {
    type: Object,
    default: null,
  },
});
</script>
<template>
  <div class="blog-recent-article">
    <RecentArticle
      :dataArticleRecent
      :textContent
      :imageFormats
      :nameFolder
      :classesCardBlog="['card-blog--detail-blog card-blog--home']"
      :classesRecentArticle="['aside-blog']"
    />
  </div>
</template>

<style lang="scss" scoped>
.blog-recent-article {
  width: 100%;

}
</style>
