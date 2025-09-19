<template>
  <div class="product-card card">
    <h3 class="product-title">{{ title }}</h3>
    <h4 class="product-subtitle">{{ subtitle }}</h4>
    <ul class="feature-list">
      <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  features: Array
})
</script>

<style scoped>
.product-card {
  height: 100%;
}

.product-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
}

.product-subtitle {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
  padding-left: 40px;
  position: relative;
  line-height: 1.6;
}

.feature-list li::before {
  content: '勾选';
  position: absolute;
  left: -10px;
  top: 2px;
  background: var(--neutral-100);
  border: 1px dashed var(--neutral-300);
  border-radius: var(--radius-sm);
  padding: 2px 4px;
  color: var(--neutral-500);
  font-size: 0.6rem;
  font-weight: normal;
  width: 30px;
  text-align: center;
  transition: all var(--duration-normal) var(--ease-out);
}
</style> 