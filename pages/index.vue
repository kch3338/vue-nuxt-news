<template>
  <div class="page">
    <Card v-for="article in store.articleList" :key="article.url" :data="article" />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/stores/api";
import Card from "~/pages/components/Card";

const store = useStore();
await useAsyncData('getNews', () => store.getNews());
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;

  width: calc(100% - 96px);

  padding: 48px;
  gap: 24px;
}
</style>