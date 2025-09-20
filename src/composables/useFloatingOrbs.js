import { ref, onMounted } from 'vue'

// 小球配置阈值
const ORB_CONFIG = {
  // 小球数量范围
  count: { min: 8, max: 25 },
  // 小球尺寸范围 (px)
  size: { min: 3, max: 28 },
  // 透明度范围
  opacity: { min: 0.15, max: 0.5 },
  // 位置范围 (%)
  position: {
    top: { min: 0, max: 95 },
    left: { min: 0, max: 95 },
    right: { min: 0, max: 95 }
  },
  // 动画延迟范围 (秒)
  animationDelay: { min: 0, max: 8 },
  // 颜色池 - 低饱和度版本
  colors: [
    '#6bb6d6', // 淡蓝色
    '#d976a0', // 淡粉色
    '#7dd3c0', // 淡绿色
    '#a484d1', // 淡紫色
    '#e6c463', // 淡黄色
    '#de7ca2', // 淡玫红色
    '#6abbd4', // 淡青色
    '#e4a574', // 淡橙色
    '#cd7fa8', // 淡深粉色
    '#b384c2', // 淡深紫色
    '#8cc8aa', // 淡青绿色
    '#e1a489', // 淡珊瑚色
    '#9ab7d3', // 淡天蓝色
    '#d4a894', // 淡棕色
    '#a5d3a5'  // 淡薄荷绿
  ]
}

// 生成随机数
const random = (min, max) => Math.random() * (max - min) + min
const randomInt = (min, max) => Math.floor(random(min, max + 1))

// 检测是否为移动端
const isMobile = () => window.innerWidth <= 768

// 生成随机小球配置
const generateOrbConfig = (sectionId) => {
  // 移动端减少小球数量
  const mobile = isMobile()
  const minCount = mobile ? Math.max(3, Math.floor(ORB_CONFIG.count.min * 0.6)) : ORB_CONFIG.count.min
  const maxCount = mobile ? Math.max(6, Math.floor(ORB_CONFIG.count.max * 0.6)) : ORB_CONFIG.count.max
  
  const orbCount = randomInt(minCount, maxCount)
  const orbs = []
  
  for (let i = 0; i < orbCount; i++) {
    const useRightPosition = Math.random() > 0.5
    
    orbs.push({
      id: `${sectionId}-orb-${i}`,
      size: randomInt(ORB_CONFIG.size.min, ORB_CONFIG.size.max),
      opacity: Number(random(ORB_CONFIG.opacity.min, ORB_CONFIG.opacity.max).toFixed(2)),
      color: ORB_CONFIG.colors[randomInt(0, ORB_CONFIG.colors.length - 1)],
      top: Number(random(ORB_CONFIG.position.top.min, ORB_CONFIG.position.top.max).toFixed(1)),
      [useRightPosition ? 'right' : 'left']: Number(random(
        ORB_CONFIG.position[useRightPosition ? 'right' : 'left'].min,
        ORB_CONFIG.position[useRightPosition ? 'right' : 'left'].max
      ).toFixed(1)),
      animationDelay: Number(random(ORB_CONFIG.animationDelay.min, ORB_CONFIG.animationDelay.max).toFixed(1))
    })
  }
  
  return orbs
}

export function useFloatingOrbs() {
  const orbSections = ref({})
  
  const generateOrbs = (sections) => {
    sections.forEach(sectionId => {
      orbSections.value[sectionId] = generateOrbConfig(sectionId)
    })
  }
  
  const regenerateOrbs = (sections) => {
    generateOrbs(sections)
  }
  
  const getOrbStyle = (orb) => {
    const baseStyle = {
      width: `${orb.size}px`,
      height: `${orb.size}px`,
      background: orb.color,
      opacity: orb.opacity,
      top: `${orb.top}%`,
      animationDelay: `${orb.animationDelay}s`,
      boxShadow: `0 0 15px ${orb.color}30`
    }
    
    if (orb.left !== undefined) {
      baseStyle.left = `${orb.left}%`
    } else {
      baseStyle.right = `${orb.right}%`
    }
    
    return baseStyle
  }
  
  return {
    orbSections,
    generateOrbs,
    regenerateOrbs,
    getOrbStyle
  }
} 