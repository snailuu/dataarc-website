<template>
  <footer class="footer">
    <div class="footer-background">
      <div class="footer-gradient"></div>
      <div class="footer-pattern"></div>
    </div>
    
    <div class="container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="brand-logo">
            <img src="/images/icons/企业logo.png" alt="DataArc Logo" class="logo-image">
            <span class="brand-text">DataArc</span>
          </div>
          <p class="brand-description">
            通过合成数据技术推动人工智能创新，为企业提供智能化解决方案。
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="微信">
              <svg viewBox="0 0 24 24" class="social-icon">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.657 7.36-.5.468-3.644-2.857-6.876-7.231-6.876z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="微博">
              <svg viewBox="0 0 24 24" class="social-icon">
                <path d="M20.194 14.197c0 3.362-3.53 6.085-7.885 6.085-4.354 0-7.885-2.723-7.885-6.085 0-3.361 3.531-6.084 7.885-6.084 4.355 0 7.885 2.723 7.885 6.084z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="邮箱">
              <svg viewBox="0 0 24 24" class="social-icon">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-nav">
          <div class="nav-section">
            <h3 class="nav-title">产品方案</h3>
            <ul class="nav-links">
              <li><router-link to="/products" class="nav-link">Living KB</router-link></li>
              <li><router-link to="/products" class="nav-link">SynData Platform</router-link></li>
              <li><a href="#" class="nav-link">API 文档</a></li>
              <li><a href="#" class="nav-link">开发者工具</a></li>
            </ul>
          </div>

          <div class="nav-section">
            <h3 class="nav-title">技术支持</h3>
            <ul class="nav-links">
              <li><router-link to="/technology" class="nav-link">技术优势</router-link></li>
              <li><a href="#" class="nav-link">技术文档</a></li>
              <li><a href="#" class="nav-link">FAQ</a></li>
              <li><a href="#" class="nav-link">技术博客</a></li>
            </ul>
          </div>

          <div class="nav-section">
            <h3 class="nav-title">关于我们</h3>
            <ul class="nav-links">
              <li><router-link to="/company" class="nav-link">公司介绍</router-link></li>
              <li><router-link to="/cases" class="nav-link">成功案例</router-link></li>
              <li><a href="#" class="nav-link">新闻动态</a></li>
              <li><a href="#" class="nav-link">加入我们</a></li>
            </ul>
          </div>

          <div class="nav-section">
            <h3 class="nav-title">联系方式</h3>
            <div class="contact-info">
              <div class="contact-item">
                <svg viewBox="0 0 24 24" class="contact-icon">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>深圳市南山区科技园</span>
              </div>
              <div class="contact-item">
                <svg viewBox="0 0 24 24" class="contact-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>contact@dataarc.tech</span>
              </div>
              <div class="contact-item">
                <svg viewBox="0 0 24 24" class="contact-icon">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+86 400-123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-bottom-content">
          <div class="copyright">
            <p>&copy; 2024 数创弧光科技有限公司. 保留所有权利.</p>
          </div>
          <div class="footer-links">
            <a href="#" class="footer-link">隐私政策</a>
            <a href="#" class="footer-link">服务条款</a>
            <a href="#" class="footer-link">Cookie 政策</a>
            <span class="footer-separator">|</span>
            <span class="icp">粤ICP备2024000000号</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component with modern glassmorphism design
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

.contact-item span {
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
  }
  
  .footer-nav {
    grid-template-columns: 1fr;
    gap: var(--space-8);
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
 