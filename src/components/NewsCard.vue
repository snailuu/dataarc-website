<template>
  <div class="news-card card">
    <h4 class="news-title">{{ title }}</h4>
    <p class="news-date">{{ date }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  date: String
})
</script>

<style scoped>
.news-card {
  height: 100%;
  cursor: pointer;
}

.news-title {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
  font-weight: 600;
  line-height: 1.4;
}

.news-date {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.news-card:hover .news-title {
  color: var(--primary-color);
}
</style> 