import { createI18n } from 'vue-i18n'
import { effectScope, watch } from 'vue'
import zh from '@/locales/zh'
import en from '@/locales/en'
import ar from '@/locales/ar'

export const SUPPORTED_LOCALES = [
  { code: 'zh', label: zh.common.language.zh, dir: 'ltr', iso: 'zh-Hans' },
  { code: 'en', label: en.common.language.en, dir: 'ltr', iso: 'en' },
  { code: 'ar', label: ar.common.language.ar, dir: 'rtl', iso: 'ar' },
]

const DEFAULT_LOCALE = 'zh'

const messages = {
  zh,
  en,
  ar,
}

const createLocaleAttrs = (locale) => {
  const match = SUPPORTED_LOCALES.find((item) => item.code === locale)
  if (!match) {
    return { dir: 'ltr', iso: 'en' }
  }
  return { dir: match.dir, iso: match.iso }
}

export const setDocumentLocale = (locale) => {
  const { dir, iso } = createLocaleAttrs(locale)
  document.documentElement.setAttribute('lang', iso)
  document.documentElement.setAttribute('dir', dir)
}

export const installI18n = (app) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: DEFAULT_LOCALE,
    fallbackLocale: 'en',
    messages,
  })

  const scope = effectScope()
  scope.run(() => {
    watch(
      () => i18n.global.locale.value,
      (newLocale) => {
        setDocumentLocale(newLocale)
      },
      { immediate: true }
    )
  })

  app.use(i18n)

  return i18n
}
