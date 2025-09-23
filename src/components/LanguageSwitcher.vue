<template>
  <label class="language-switcher" :class="{ 'is-rtl': currentDirection === 'rtl' }">
    <span class="visually-hidden">{{ t('common.language.label') }}</span>
    <select v-model="selectedLocale" class="language-select" aria-label="language-select">
      <option v-for="option in locales" :key="option.code" :value="option.code">
        {{ option.label }}
      </option>
    </select>
  </label>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES, setDocumentLocale } from '@/i18n'

const { locale, t } = useI18n()

const locales = SUPPORTED_LOCALES

const selectedLocale = computed({
  get: () => locale.value,
  set: (value) => {
    locale.value = value
    setDocumentLocale(value)
  },
})

const currentDirection = computed(() => {
  const match = SUPPORTED_LOCALES.find((item) => item.code === locale.value)
  return match?.dir ?? 'ltr'
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.language-select {
  appearance: none;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  padding: 0.35rem 1.75rem 0.35rem 0.75rem;
  font-size: var(--font-sm);
  transition: all var(--duration-normal) var(--ease-out);
  cursor: pointer;
  outline: none;
}

.language-select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
}

.language-select:hover {
  border-color: var(--primary-color);
}

.language-switcher::after {
  content: '';
  position: absolute;
  right: 0.65rem;
  top: 50%;
  width: 0.4rem;
  height: 0.4rem;
  border-right: 2px solid var(--text-secondary);
  border-bottom: 2px solid var(--text-secondary);
  transform: translateY(-60%) rotate(45deg);
  pointer-events: none;
}

.is-rtl .language-select {
  padding: 0.35rem 0.75rem 0.35rem 1.75rem;
  direction: rtl;
}

.is-rtl::after {
  left: 0.65rem;
  right: auto;
  transform: translateY(-60%) rotate(-135deg);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
