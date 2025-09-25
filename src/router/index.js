import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'DataArc - 人工智能合规管理 | 智能化技术创新'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products.vue'),
    meta: {
      title: 'DataArc - 产品方案'
    }
  },
  {
    path: '/technology',
    name: 'Technology', 
    component: () => import('@/views/Technology.vue'),
    meta: {
      title: 'DataArc - 技术优势'
    }
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('@/views/Cases.vue'),
    meta: {
      title: 'DataArc - 案例展示'
    }
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('@/views/Company.vue'),
    meta: {
      title: 'DataArc - 关于我们'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      const findEl = () => document.querySelector(to.hash)
      if (findEl()) {
        return { el: to.hash, behavior: 'smooth' }
      }

      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          if (findEl()) {
            resolve({ el: to.hash, behavior: 'smooth' })
          } else {
            setTimeout(() => {
              resolve({ el: to.hash, behavior: 'smooth' })
            }, 300)
          }
        })
      })
    }

    return { top: 0 }
  }
})

// 设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router 