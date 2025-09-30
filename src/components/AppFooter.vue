<template>
  <div class="footer">
    <div class="footer-background">
      <div class="footer-gradient"></div>
      <div class="footer-pattern"></div>
    </div>

    <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="brand-logo">
              <img src="/images/icons/企业logo.png" :alt="`${t('common.brand')} Logo`" class="logo-image">
              <span class="brand-text">{{ t('common.brand') }}</span>
            </div>
            <p class="brand-description">{{ t('footer.tagline') }}</p>
            <div class="social-links">
              <a :href="`mailto:${contactSection.email}`" class="social-link" :aria-label="t('footer.socials.email')">
                <img class="social-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRTRFNEU3IiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0ybS0uNCA0LjI1bC03LjA3IDQuNDJjLS4zMi4yLS43NC4yLTEuMDYgMEw0LjQgOC4yNWEuODUuODUgMCAxIDEgLjktMS40NEwxMiAxMWw2LjctNC4xOWEuODUuODUgMCAxIDEgLjkgMS40NCIvPjwvc3ZnPg=="/>
              </a> 
            </div>
          </div>

          <div class="footer-nav">
            <div v-for="section in navSections" :key="section.key" class="nav-section">
              <h3 class="nav-title">{{ section.title }}</h3>
              <ul class="nav-links">
                <li v-for="link in section.links" :key="link.key">
                  <RouterLink v-if="link.to" :to="link.to" class="nav-link">{{ link.label }}</RouterLink>
                  <a v-else :href="link.href" class="nav-link">{{ link.label }}</a>
                </li>
              </ul>
            </div>

            <div class="nav-section">
              <h3 class="nav-title">{{ t('footer.nav.contact.title') }}</h3>
              <div class="contact-info">
                <div class="contact-item">
                  <img class="contact-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzAwRDRGRiIgZD0iTTI1NiAxNy4xMDhjLTc1LjczIDAtMTM3LjEyMiA2MS4zOTItMTM3LjEyMiAxMzcuMTIyYy4wNTUgMjMuMjUgNi4wMjIgNDYuMTA3IDExLjU4IDU2LjI2MkwyNTYgNDk0Ljg5MmwxMTkuOTgyLTI3NC4yNDRoLS4wNjNhMTM3LjEgMTM3LjEgMCAwIDAgMTcuMjAyLTY2LjQxOEMzOTMuMTIyIDc4LjUgMzMxLjczIDE3LjEwOCAyNTYgMTcuMTA4bTAgNjguNTZhNjguNTYgNjguNTYgMCAwIDEgNjguNTYgNjguNTYyQTY4LjU2IDY4LjU2IDAgMCAxIDI1NiAyMjIuNzlhNjguNTYgNjguNTYgMCAwIDEtNjguNTYtNjguNTZBNjguNTYgNjguNTYgMCAwIDEgMjU2IDg1LjY3eiIvPjwvc3ZnPg==" />
                  <span>{{ t('footer.nav.contact.address') }}</span>
                </div>
                <div class="contact-item">
                  
                  <img class="contact-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDBENEZGIiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0ybS0uNCA0LjI1bC03LjA3IDQuNDJjLS4zMi4yLS43NC4yLTEuMDYgMEw0LjQgOC4yNWEuODUuODUgMCAxIDEgLjktMS40NEwxMiAxMWw2LjctNC4xOWEuODUuODUgMCAxIDEgLjkgMS40NCIvPjwvc3ZnPg=="/>
                  <!-- <a :href="`mailto:${contactSection.email}`" class="nav-link">{{ t('footer.nav.contact.email') }}</a> -->
                  <span>contact@dataarc.tech</span>
                </div>
                <div class="contact-item">
                  <img class="contact-icon" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDBENEZGIiBkPSJNMTIuNTkzIDIzLjI1OGwtLjAxMS4wMDJsLS4wNzEuMDM1bC0uMDIuMDA0bC0uMDE0LS4wMDRsLS4wNzEtLjAzNXEtLjAxNi0uMDA1LS4wMjQuMDA1bC0uMDA0LjAxMWwtLjAxNy40MjhsLjAwNS4wMmwuMDEuMDEzbC4xMDQuMDc0bC4wMTUuMDA0bC4wMTItLjAwNGwuMTA0LS4wNzRsLjAxMi0uMDE2bC4wMDQtLjAxN2wtLjAxNy0uNDI3cS0uMDA0LS4wMTYtLjAxNy0uMDE4bS4yNjUtLjExM2wtLjAxMy4wMDJsLS4xODUuMDkzbC0uMDEuMDFsLjAwMy4wMTFsLjE4LjQzbC4wMDUuMDEybC4wMDguMDA3bC4yMDEuMDkzcS4wMTkuMDA1LjAyOS0uMDA4bC4wMDQtLjAxNGwtLjAzNC0uNjE0cS0uMDA1LS4wMTgtLjAyLS4wMjJtLS43MTUuMDAyYS4wMi4wMiAwIDAgMC0uMDI3LjAwNmwtLjAwNi4wMTRsLS4wMzQuNjE0cS4wMDEuMDE4LjAxNy4wMjRsLjAxNS0uMDAybC4yMDEtLjA5M2wuMDEtLjAwOGwuMDA0LS4wMTFsLjAxNy0uNDNsLS4wMDMtLjAxMmwtLjAxLS4wMXoiLz48cGF0aCBmaWxsPSIjMDBENEZGIiBkPSJNMTYuNTUyIDIyLjEzM2MtMS40NC0uMDUzLTUuNTIxLS42MTctOS43OTUtNC44OWMtNC4yNzMtNC4yNzQtNC44MzYtOC4zNTQtNC44OS05Ljc5NWMtLjA4LTIuMTk2IDEuNjAyLTQuMzI5IDMuNTQ1LTUuMTYyYTEuNDcgMS40NyAwIDAgMSAxLjQ0NS4xNTljMS42IDEuMTY2IDIuNzA0IDIuOTMgMy42NTIgNC4zMTdhMS41MDQgMS41MDQgMCAwIDEtLjI1NiAxLjk4NmwtMS45NTEgMS40NDlhLjQ4LjQ4IDAgMCAwLS4xNDIuNjE2Yy40NDIuODAzIDEuMjI4IDEuOTk5IDIuMTI4IDIuODk5czIuMTUzIDEuNzM4IDMuMDEyIDIuMjNhLjQ4My40ODMgMCAwIDAgLjY0NC0uMTYybDEuMjctMS45MzNhMS41MDMgMS41MDMgMCAwIDEgMi4wNTYtLjMzMmMxLjQwNy45NzQgMy4wNDkgMi4wNTkgNC4yNTEgMy41OThhMS40NyAxLjQ3IDAgMCAxIC4xODkgMS40ODVjLS44MzcgMS45NTMtMi45NTUgMy42MTYtNS4xNTggMy41MzUiLz48L3N2Zz4="/>
                  <!-- <a href="#" class="nav-link">{{ t('footer.nav.contact.phone') }}</a> -->
                  <span>{{ t('footer.nav.contact.phone') }}</span>
                </div>
              </div>
            </div>
          </div>
        
        </div>

      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>{{ t('footer.bottom.copyright') }}</p>
          </div>
          <div class="footer-links">
            <a href="#" class="footer-link">{{ t('footer.bottom.privacy') }}</a>
            <a href="#" class="footer-link">{{ t('footer.bottom.terms') }}</a>
            <a href="#" class="footer-link">{{ t('footer.bottom.cookies') }}</a>
            <span class="footer-separator">|</span>
            <span class="icp">{{ t('footer.bottom.icp') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const navConfig = [
  {
    key: 'products',
    links: [
      { key: 'livingkb', to: '/products' },
      { key: 'syndata', to: '/products' },
      { key: 'apiDocs', href: '#' },
      { key: 'devTools', href: '#' },
    ],
  },
  {
    key: 'support',
    links: [
      { key: 'technology', to: '/technology' },
      { key: 'techDocs', href: '#' },
      { key: 'faq', href: '#' },
      { key: 'techBlog', href: '#' },
    ],
  },
  {
    key: 'about',
    links: [
      { key: 'company', to: '/company' },
      { key: 'cases', to: '/cases' },
      { key: 'news', href: '#' },
      { key: 'careers', href: '#' },
    ],
  },
]

const navSections = computed(() =>
  navConfig.map((section) => ({
    key: section.key,
    title: t(`footer.nav.${section.key}.title`),
    links: section.links.map((link) => ({
      ...link,
      label: t(`footer.nav.${section.key}.links.${link.key}`),
    })),
  }))
)

const contactSection = computed(() => ({
  title: ('footer.nav.contact.title'),
  address: ('footer.nav.contact.address'),
  email: ('footer.nav.contact.email'),
  phone: ('footer.nav.contact.phone'),
}))

const normalizedPhone = computed(() => {
  const phone = contactSection.value.phone
  if (typeof phone === 'string') {
    return phone.replace(/\s+/g, '')
  }
  return ''
})
</script>

<style scoped>
/* ===== Footer Base Styles ===== */
.footer {
  position: relative;
  background: var(--bg-primary);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.footer-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.footer-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(99, 102, 241, 0.03) 0%, 
    rgba(139, 92, 246, 0.05) 50%, 
    rgba(99, 102, 241, 0.03) 100%);
}

.footer-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.05) 1px, transparent 0);
  background-size: 40px 40px;
}

.container {
  position: relative;
  z-index: 2;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-16);
  padding: var(--space-20) 0 var(--space-16);
}

/* ===== Brand Section ===== */
.footer-brand {
  max-width: 320px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.logo-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: var(--radius-md);
  transition: all var(--duration-normal) var(--ease-out);
  /* 为深色背景优化，让logo显示为浅色 */
  filter: brightness(1.5) contrast(1.2) invert(1);
  mix-blend-mode: screen;
}

.brand-text {
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-white);
  letter-spacing: -0.025em;
}

.brand-description {
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
  font-size: var(--font-sm);
}

.social-links {
  display: flex;
  gap: var(--space-2);
}

.social-link {
  width: 40px;
  height: 40px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-out);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
}

.social-link:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.social-icon {
  width: 18px;
  height: 18px;
  fill: var(--text-secondary);
  transition: fill var(--duration-normal) var(--ease-out);
}

.social-link:hover .social-icon {
  fill: var(--text-white);
}

/* ===== Navigation Section ===== */
.footer-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
}

.nav-section {
  min-height: 200px;
}

.nav-title {
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-4);
  position: relative;
}

.nav-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--primary-color);
  border-radius: var(--radius-full);
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links li {
  margin-bottom: var(--space-2);
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--font-sm);
  line-height: var(--leading-normal);
  transition: all var(--duration-normal) var(--ease-out);
  display: inline-block;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
  transform: translateX(4px);
}

.nav-link::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width var(--duration-normal) var(--ease-out);
}

.nav-link:hover::before {
  width: 4px;
}

/* ===== Contact Info ===== */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.contact-icon {
  width: 16px;
  height: 16px;
  fill: var(--primary-color);
  flex-shrink: 0;
}

.contact-item span,
.contact-item .nav-link {
  color: var(--text-secondary);
  font-size: var(--font-sm);
}

/* ===== Footer Bottom ===== */
.footer-bottom {
  padding: var(--space-6) 0;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(99, 102, 241, 0.2) 20%, 
    rgba(99, 102, 241, 0.5) 50%, 
    rgba(99, 102, 241, 0.2) 80%, 
    transparent 100%);
  margin-bottom: var(--space-6);
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.copyright p {
  color: var(--text-tertiary);
  font-size: var(--font-xs);
  margin: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.footer-link {
  color: var(--text-tertiary);
  text-decoration: none;
  font-size: var(--font-xs);
  transition: color var(--duration-normal) var(--ease-out);
}

.footer-link:hover {
  color: var(--primary-color);
}

.footer-separator {
  color: var(--text-tertiary);
  font-size: var(--font-xs);
}

.icp {
  color: var(--text-tertiary);
  font-size: var(--font-xs);
}

/* ===== Responsive Design ===== */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
  
  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding: var(--space-16) 0 var(--space-12);
    text-align: center;
    justify-items: center;
  }
  
  .footer-nav {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
    justify-items: center;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3);
  }
  
  .footer-links {
    justify-content: center;
  }
  
  .nav-section {
    min-height: auto;
    text-align: center;
    max-width: 100%;
  }
  
  .nav-title {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .nav-title::after {
    position: relative;
    bottom: 0;
    margin-top: 8px;
  }
  
  .nav-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact-info {
    align-items: center;
  }
  
  .contact-item {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-brand {
    text-align: center;
    max-width: 100%;
  }
  
  .brand-logo {
    justify-content: center;
  }
  
  .footer-links {
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .footer-separator {
    display: none;
  }
}

/* ===== Animation Enhancements ===== */
.nav-section {
  animation: fadeInUp 0.6s var(--ease-out);
}

.nav-section:nth-child(1) { animation-delay: 0.1s; }
.nav-section:nth-child(2) { animation-delay: 0.2s; }
.nav-section:nth-child(3) { animation-delay: 0.3s; }
.nav-section:nth-child(4) { animation-delay: 0.4s; }

.footer-brand {
  animation: fadeInUp 0.6s var(--ease-out);
}

/* ===== Hover Effects ===== */
.footer:hover .footer-pattern {
  animation: pattern-shift 20s linear infinite;
}

@keyframes pattern-shift {
  0% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(-20px) translateY(-10px); }
  50% { transform: translateX(-40px) translateY(0); }
  75% { transform: translateX(-20px) translateY(10px); }
  100% { transform: translateX(0) translateY(0); }
}
</style>
