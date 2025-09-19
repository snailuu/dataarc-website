<template>
  <div class="tech-card card text-center">
    <div class="tech-icon">{{ icon }}</div>
    <h4 class="tech-title">{{ title }}</h4>
    <p class="tech-description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String
})
</script>

<style scoped>
.tech-card {
  height: 100%;
}

.tech-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: 50%;
  margin: 0 auto var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: var(--transition);
}

.tech-card:hover .tech-icon {
  transform: scale(1.1);
  background: var(--primary-hover);
}

.tech-title {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
  font-weight: 600;
}

.tech-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}
</style> 