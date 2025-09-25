<template>
  <div class="knowledge-graph-container" ref="container">
        <!-- 知识图谱模式 -->
    <div v-if="mode === 'graph'" class="graph-mode" @click="startAIChat" @dblclick="restartForceLayout">
      <!-- Graph头部指示器 -->
      <div class="graph-header">
        <div class="graph-indicator">
          <div class="graph-dot"></div>
          <span>拖动 or 点击 节点体验交互...</span>
        </div>
      </div>
      
      <svg 
        ref="svgRef" 
        class="graph-svg" 
        :width="svgWidth" 
        :height="svgHeight"
        :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
        preserveAspectRatio="xMidYMid meet"
      ></svg>

    </div>
    
    <!-- AI对话模式 -->
    <div v-else-if="mode === 'chat'" class="chat-mode">
      <div class="chat-header">
        <div class="ai-indicator">
          <div class="ai-dot"></div>
          <span>AI Agent {{ t('common.graph.aiDialogue.analyzing') }}</span>
        </div>
      </div>
      
      <div class="chat-container" ref="chatContainer">
        <div 
          v-for="(message, index) in visibleMessages" 
          :key="index"
          class="message-item"
          :class="message.type"
        >
          <div class="message-content">
            <div class="message-label">{{ message.type === 'question' ? 'Q' : 'A' }}</div>
            <div class="message-text">{{ message.content }}</div>
          </div>
        </div>
      </div>
      
      <!-- 重置按钮 -->
      <div class="reset-button" @click="resetToGraph">
        <span>{{ t('common.buttons.getStarted') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import * as d3 from 'd3'
import knowledgeGraphData from '@/data/knowledgeGraph.json'

const { t, tm } = useI18n()

// 组件状态
const mode = ref('graph') // 'graph' | 'chat'
const container = ref(null)
const chatContainer = ref(null)
const svgRef = ref(null)

// SVG尺寸 - 响应式计算
const svgWidth = ref(600)
const svgHeight = ref(400)

// 更新SVG尺寸函数
const updateSvgDimensions = () => {
  if (!container.value) return
  
  const containerRect = container.value.getBoundingClientRect()
  const containerWidth = containerRect.width || container.value.offsetWidth
  const containerHeight = containerRect.height || container.value.offsetHeight
  
  svgWidth.value = Math.max(containerWidth, 300) // 最小宽度300
  svgHeight.value = Math.max(containerHeight, 200) // 最小高度200
  
  console.log('SVG尺寸更新:', { 
    width: svgWidth.value, 
    height: svgHeight.value,
    containerWidth,
    containerHeight
  })
}

// 从YAML文件加载数据
const graphData = knowledgeGraphData.graph || {
  nodes: [],
  links: []
}

// 使用国际化的对话内容
const conversations = computed(() => {
  const sampleConversations = tm('common.graph.sampleConversations')
  return Array.isArray(sampleConversations) && sampleConversations.length > 0 
    ? sampleConversations 
    : knowledgeGraphData.conversations || []
})

// 窗口大小变化监听
let resizeObserver = null
const handleResize = () => {
  updateSvgDimensions()
  // 延迟重新初始化图形，确保尺寸更新完成
  setTimeout(() => {
    if (mode.value === 'graph') {
      initializeForceSimulation()
    }
  }, 100)
}

// D3.js 专业力导向模拟 - 性能优化版
let simulation = null
// 限制节点数量以提升性能（可根据需要调整）
const maxNodes = 80
const allNodes = reactive(graphData.nodes.slice(0, maxNodes).map((node, index) => {
  // 按领域分散初始位置，避免重叠
  let x, y
  if (node.level === 1) {
    // 核心节点：环形分布
    const angle = (index * 2 * Math.PI) / 5
    x = svgWidth.value / 2 + Math.cos(angle) * 80
    y = svgHeight.value / 2 + Math.sin(angle) * 80
  } else {
    // 子节点和详细节点：随机分布但按组分开
    const groupOffset = {
      'finance': { x: -100, y: -50 },
      'education': { x: 100, y: -50 },
      'industry': { x: 0, y: 80 },
      'healthcare': { x: -80, y: 80 },
      'technology': { x: 80, y: 80 }
    }
    const offset = groupOffset[node.group] || { x: 0, y: 0 }
    x = svgWidth.value / 2 + offset.x + (Math.random() - 0.5) * 60
    y = svgHeight.value / 2 + offset.y + (Math.random() - 0.5) * 60
  }
  
  return {
    ...node,
    x,
    y,
    fx: null,
    fy: null
  }
}))

// 优化连接数据 - 只保留与可见节点相关的连接
const nodeIds = new Set(allNodes.map(n => n.id))
const originalLinks = graphData.links
  .filter(link => nodeIds.has(link.source) && nodeIds.has(link.target))
  .map(link => ({ ...link }))

// 初始化D3力导向模拟
const initializeForceSimulation = () => {
  console.log("初始化力导向图开始...")
  if (!svgRef.value) {
    console.log("SVG引用不存在，跳过初始化")
    return
  }
  
  // 创建SVG选择器
  svg = d3.select(svgRef.value)
  
  // 清空SVG内容
  svg.selectAll("*").remove()
  console.log("SVG内容已清空")
  
  // 创建连接线组
  const linkGroup = svg.append("g").attr("class", "links")
  // 创建节点组
  const nodeGroup = svg.append("g").attr("class", "nodes")
  
  // 为D3创建连接数据的副本
  const linksForD3 = originalLinks.map(link => ({ ...link }))
  
  // 创建连接线（弧线 + 丰富线型）
  linkElements = linkGroup
    .selectAll("path")
    .data(linksForD3)
    .enter()
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "#ffffff")                     // 统一白色
    .attr("stroke-width", d => {
      // 精致细线条，差异更明显
      if (d.strength > 0.7) return 0.8            // 强连接稍粗
      if (d.strength > 0.4) return 0.6            // 中等连接中等
      return 0.4                                   // 弱连接很细
    })
         .attr("stroke-opacity", 0.2)                  // 透明度20%，更透明
    .attr("stroke-dasharray", d => {
      // 多种线型
      if (d.strength > 0.7) return "none"         // 实线 - 强连接
      if (d.strength > 0.4) return "5,2"          // 短虚线 - 中等连接
      return "2,3"                                 // 点线 - 弱连接
    })
  
  // 创建节点组
  const nodeGroups = nodeGroup
    .selectAll("g")
    .data(allNodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended)
    )
  
  // 移除渐变定义，使用扁平化颜色

  // 移除光晕效果，保持扁平化
  
  // 添加节点圆圈（按类别分色 + 统一透明度）
  nodeGroups
    .append("circle")
    .attr("r", d => getNodeRadius(d.level))
    .attr("fill", d => {
      // 按类别分色 - 高饱和莫兰迪色系
      const colors = {
        'core': '#8fa4d3',          // 莫兰迪蓝 - 核心
        'finance': '#7fb069',       // 莫兰迪绿 - 金融
        'education': '#d4a574',     // 莫兰迪橙 - 教育
        'industry': '#6fb3d3',      // 莫兰迪青蓝 - 工业
        'healthcare': '#b185a7',    // 莫兰迪紫 - 医疗
        'technology': '#a6a6a6'     // 莫兰迪灰 - 科技
      }
      
      // 核心节点使用对应聚簇的颜色
      if (d.level === 1) {
        // 核心节点根据其所属领域使用相应颜色
        if (d.id === 'finance') return colors['finance']
        if (d.id === 'education') return colors['education']
        if (d.id === 'industry') return colors['industry']
        if (d.id === 'healthcare') return colors['healthcare']
        if (d.id === 'technology') return colors['technology']
      }
      
      return colors[d.group] || '#9ca3af'  // 默认灰色
    })
              .attr("fill-opacity", 0.35)             // 透明度25%，更透明
    .attr("class", "node-main")
    .style("cursor", "pointer")
  

  
  // 添加节点标签
  nodeGroups
    .append("text")
    .text(d => d.label)
    .attr("text-anchor", "middle")
    .attr("dy", d => getNodeRadius(d.level) + 15)
    .attr("font-size", "10px")
    .attr("font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif")
    .attr("fill", "#333")
  
  // 添加鼠标悬停效果
  nodeGroups
    .on("mouseenter", function(_, d) {
      // 简化hover效果，减少DOM操作
      d3.select(this).select(".node-main")
        .transition().duration(150)
        .attr("r", getNodeRadius(d.level) * 1.15)
      
      // 更新提示文字（无需重新计算连接线）
      hintText.value = `${d.label} | ${t('common.graph.hint')}`
    })
    .on("mouseleave", function(_, d) {
      // 简化恢复效果
      d3.select(this).select(".node-main")
        .transition().duration(150)
        .attr("r", getNodeRadius(d.level))
      
      // 恢复提示文字
      hintText.value = t('common.graph.hint')
    })
    .on("click", function(event) {
      event.stopPropagation()
      startAIChat()
    })

  nodeElements = nodeGroups
  

  
  // 创建知识图谱语义聚集力导向模拟
  simulation = d3.forceSimulation(allNodes)
    .alpha(0.3)  // 适当的初始能量
    .force('link', d3.forceLink(linksForD3)
      .id(d => d.id)
      .distance(d => {
        // 根据节点层级设置连接距离 - 体现层次关系
        if (d.source.level === 1 && d.target.level === 2) return 60   // 核心到子节点
        if (d.source.level === 2 && d.target.level === 3) return 40   // 子节点到详细节点
        return 50                                                      // 同级节点或跨级连接
      })
      .strength(d => d.strength)  // 使用实际强度值
    )
          .force('charge', d3.forceManyBody()
       .strength(d => {
         // 增强排斥力，确保节点间距
         if (d.level === 1) return -400      // 核心节点超强排斥
         if (d.level === 2) return -200      // 子节点强排斥  
         return -120                         // 详细节点中等排斥
       })
       .distanceMax(250)  // 扩大排斥作用范围
     )
    .force('center', d3.forceCenter(svgWidth.value / 2, svgHeight.value / 2)
      .strength(0.1)
    )
    // 添加群组聚集力 - 同领域节点相互吸引
    .force('group', d3.forceRadial(80, svgWidth.value / 2, svgHeight.value / 2)
      .radius(d => {
        // 根据群组设置不同的聚集半径
        const groupPositions = {
          'core': 0,
          'finance': 100,
          'education': 100, 
          'industry': 100,
          'healthcare': 100,
          'technology': 100
        }
        return groupPositions[d.group] || 60
      })
      .strength(0.1)
    )
         .force('collision', d3.forceCollide()
       .radius(d => getNodeRadius(d.level) + 15)  // 增加碰撞半径，强制间距
       .strength(1.0)  // 最大碰撞强度，严格防重叠
       .iterations(3)  // 增加迭代次数，确保无重叠
     )
    .velocityDecay(0.6)
    .alphaDecay(0.02)  // 慢一点收敛，让聚集更自然
    .on('tick', throttledTick)
  
  console.log("力导向模拟创建完成", {
    nodesCount: allNodes.length,
    linksCount: linksForD3.length,
    nodeElements: !!nodeElements,
    linkElements: !!linkElements
  })
}

// 节流函数，减少渲染频率提升性能
let lastTickTime = 0
const throttledTick = () => {
  const now = Date.now()
  if (now - lastTickTime < 16) return // 限制为60fps
  lastTickTime = now
  onTick()
}

// tick回调：更新节点和连接线位置
const onTick = () => {
  if (linkElements) {
    linkElements.attr("d", d => {
      const dx = d.target.x - d.source.x
      const dy = d.target.y - d.source.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance === 0) return `M ${d.source.x} ${d.source.y} L ${d.target.x} ${d.target.y}`
      
      // 获取节点半径
      const sourceRadius = getNodeRadius(d.source.level)
      const targetRadius = getNodeRadius(d.target.level)
      
      // 计算单位向量
      const unitX = dx / distance
      const unitY = dy / distance
      
      // 计算边缘点坐标
      const sourceEdgeX = d.source.x + unitX * sourceRadius
      const sourceEdgeY = d.source.y + unitY * sourceRadius
      const targetEdgeX = d.target.x - unitX * targetRadius
      const targetEdgeY = d.target.y - unitY * targetRadius
      
      // 计算弧线的弯曲程度，基于距离和连接强度
      const curvature = Math.min(distance * 0.25, 60) * d.strength
      
      // 计算控制点（垂直于连线方向）
      const midX = (sourceEdgeX + targetEdgeX) / 2
      const midY = (sourceEdgeY + targetEdgeY) / 2
      
      // 垂直偏移量创建弧度
      const offsetX = -unitY * curvature
      const offsetY = unitX * curvature
      
      const controlX = midX + offsetX
      const controlY = midY + offsetY
      
      // 生成SVG二次贝塞尔曲线路径，从边缘到边缘
      return `M ${sourceEdgeX} ${sourceEdgeY} Q ${controlX} ${controlY} ${targetEdgeX} ${targetEdgeY}`
    })
  }
  
  if (nodeElements) {
    nodeElements
      .attr("transform", d => `translate(${d.x},${d.y})`)
  }
  

}

// 拖拽事件处理
const dragstarted = (event, d) => {
  if (!event.active) simulation.alphaTarget(0.3).restart()
  d.fx = d.x
  d.fy = d.y
}

const dragged = (event, d) => {
  d.fx = event.x
  d.fy = event.y
}

const dragended = (event, d) => {
  if (!event.active) simulation.alphaTarget(0)
  d.fx = null
  d.fy = null
}

// D3 SVG元素引用
let svg, linkElements, nodeElements






  // 重启D3力导向模拟
  const restartForceLayout = () => {
    console.log("重启力导向布局开始...", {
      hasSvg: !!svg,
      hasSimulation: !!simulation, 
      nodesCount: allNodes.length,
      svgRefExists: !!svgRef.value
    })
    
    if (!svgRef.value) {
      console.log("SVG引用不存在，等待重新挂载")
      return
    }
    
    // 停止旧的模拟
    if (simulation) {
      simulation.stop()
    }
    
    // 重新初始化整个图形
    initializeForceSimulation()
    
    console.log("力导向布局重启完成")
  }

// 提示文本
const hintText = ref(t('common.graph.hint'))

// AI对话状态
const visibleMessages = ref([])
const chatInterval = ref(null)
const currentMessageIndex = ref(0)

// 节点大小
const getNodeRadius = (level) => {
  switch (level) {
    case 1: return 12  // 减少核心节点大小
    case 2: return 8   // 减少二级节点大小  
    case 3: return 5   // 减少三级节点大小
    default: return 6
  }
}



// 开始AI对话
const startAIChat = () => {
  mode.value = 'chat'
  visibleMessages.value = []
  currentMessageIndex.value = 0
  
  // 开始滚动显示消息
  startMessageStream()
}

// 消息流显示
const startMessageStream = () => {
  let interval = 800 // 初始间隔0.8秒
  const minInterval = 200 // 最快间隔0.2秒
  const speedUpRate = 0.75 // 每次加速比例
  
  const showNextMessage = () => {
    if (currentMessageIndex.value < conversations.value.length) {
      const conversation = conversations.value[currentMessageIndex.value]
      
      // 添加问题
      visibleMessages.value.push({
        type: 'question',
        content: conversation.q
      })
      
      // 0.5秒后添加答案
      setTimeout(() => {
        visibleMessages.value.push({
          type: 'answer',
          content: conversation.a
        })
        
        // 限制显示的消息数量，保持滚动效果
        if (visibleMessages.value.length > 8) {
          visibleMessages.value.splice(0, 2) // 移除最老的问答对
        }
        
        // 滚动到底部
        nextTick(() => {
          if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight
          }
        })
      }, 500)
      
      currentMessageIndex.value++
      
      // 加速并设置下一次
      interval = Math.max(minInterval, interval * speedUpRate)
      chatInterval.value = setTimeout(showNextMessage, interval)
    } else {
      // 所有消息显示完毕，重新开始
      currentMessageIndex.value = 0
      chatInterval.value = setTimeout(showNextMessage, interval)
    }
  }
  
  showNextMessage()
}

// 重置到图谱模式
const resetToGraph = () => {
  mode.value = 'graph'
  if (chatInterval.value) {
    clearTimeout(chatInterval.value)
    chatInterval.value = null
  }
  visibleMessages.value = []
  
  // 等待DOM更新后重新初始化力导向布局
  nextTick(() => {
    restartForceLayout()
  })
}

onMounted(() => {
  nextTick(() => {
    // 首次更新SVG尺寸
    updateSvgDimensions()
    
    // 设置ResizeObserver监听容器尺寸变化
    if (container.value && window.ResizeObserver) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.target === container.value) {
            handleResize()
            break
          }
        }
      })
      resizeObserver.observe(container.value)
    }
    
    // 监听窗口大小变化（备用方案）
    window.addEventListener('resize', handleResize)
    
    // 延迟初始化，确保尺寸计算完成
    setTimeout(() => {
      initializeForceSimulation()
    }, 50)
  })
})

onUnmounted(() => {
  if (simulation) {
    simulation.stop()
  }
  if (chatInterval.value) {
    clearTimeout(chatInterval.value)
  }
  
  // 清理resize监听器
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.knowledge-graph-container {
  width: 100%;
  height: 480px;
  position: relative;
  background: #000000;
  overflow: hidden;
  border-radius: var(--radius-2xl);
}

.knowledge-graph-container::after {
  display: none;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* 知识图谱模式 */
.graph-mode {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  z-index: 10;
  }

.graph-header {
  padding: 16px 20px;
  background: #000000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.graph-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.graph-dot {
  width: 8px;
  height: 8px;
  background: #ff4757;
  border-radius: 50%;
  animation: pulse 1s infinite;
}

.graph-svg {
  width: 100%;
  height: calc(100% - 60px);
  background: transparent;
  position: relative;
  z-index: 15;
  display: block;
  object-fit: contain;
}



/* D3完全控制节点和连接线样式 */



/* AI对话模式 */
.chat-mode {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #000000;
  overflow: hidden;
  position: relative;
  z-index: 10;
}

.chat-header {
  padding: 16px 20px;
  background: #000000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.ai-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.ai-dot {
  width: 8px;
  height: 8px;
  background: #00d4aa;
  border-radius: 50%;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.7; 
    transform: scale(1.3);
  }
}

.chat-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: transparent;
  min-height: 0;
  max-height: 100%;
}

.message-item {
  display: flex;
  width: 100%;
  margin-bottom: 4px;
  animation: fadeInUp 0.2s ease;
  flex-shrink: 0;
}

.question {
  justify-content: flex-start;
}

.answer {
  justify-content: flex-end;
}

.message-content {
  display: flex;
  gap: 12px;
  width: 100%;
  align-items: flex-start;
  flex-wrap: nowrap;
}

.question .message-content {
  flex-direction: row;
  width: 100%;
}

.answer .message-content {
  flex-direction: row-reverse;
  width: 100%;
}

.message-label {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  flex-shrink: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.question .message-label {
  background: rgba(0, 0, 0, 0.8);
  color: rgba(59, 130, 246, 1);
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.answer .message-label {
  background: rgba(0, 0, 0, 0.8);
  color: rgba(16, 185, 129, 1);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.message-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  line-height: 1.5;
  flex: 1;
  background: transparent;
  padding: 6px 12px;
  border-radius: 24px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
}

.question .message-text {
  font-weight: 500;
  border-left: 3px solid rgba(59, 130, 246, 0.8);
  background: transparent;
}

.answer .message-text {
  font-weight: 400;
  border-right: 3px solid rgba(16, 185, 129, 0.6) !important;
  border-left: none !important;
  background: transparent;
  }

.reset-button {
  position: absolute;
  top: 8px;
  right: 20px;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.reset-button:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.02);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

.reset-button:active {
  transform: scale(0.98);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 滚动条样式 */
.chat-container::-webkit-scrollbar {
  width: 4px;
}

.chat-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2px;
}

.chat-container::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.chat-container::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* 移动端响应式优化 */
@media screen and (max-width: 768px) {
  .knowledge-graph-container {
    height: 350px;
  }
  
  .graph-svg {
    width: 100% !important;
    height: 100% !important;
  }
  
  .chat-container {
    padding: 15px;
    gap: 10px;
  }
  
  .message-item {
    margin-bottom: 6px;
  }
  
  .message-content {
    gap: 8px;
  }
  
  .message-label {
    width: 24px;
    height: 24px;
    font-size: 10px;
  }
  
  .message-text {
    font-size: 12px;
    padding: 8px 12px;
    line-height: 1.4;
  }
  
  .hint-text {
    font-size: 12px;
    padding: 6px 12px 3px 12px;
  }
  
  .hint-sub {
    font-size: 10px;
    padding: 0 12px 6px 12px;
    white-space: nowrap;
    overflow: visible;
  }
}

@media screen and (max-width: 480px) {
  .knowledge-graph-container {
    height: 280px;
  }
  
  .graph-hint {
    white-space: normal;
    min-width: auto;
    max-width: 90%;
  }
  
  .chat-container {
    padding: 12px;
    gap: 8px;
  }
  
  .message-item {
    margin-bottom: 4px;
  }
  
  .message-content {
    gap: 6px;
  }
  
  .message-label {
    width: 20px;
    height: 20px;
    font-size: 9px;
  }
  
  .message-text {
    font-size: 11px;
    padding: 6px 10px;
    line-height: 1.3;
  }
  
  .hint-text {
    font-size: 11px;
  }
  
  .hint-sub {
    font-size: 10px;
    white-space: normal;
    overflow: visible;
    min-width: auto;
    line-height: 1.3;
  }
}
</style> 