<template>
  <div class="knowledge-graph-container" ref="container">
        <!-- 知识图谱模式 -->
    <div v-if="mode === 'graph'" class="graph-mode" @click="startAIChat" @dblclick="restartForceLayout">
      <svg ref="svgRef" class="graph-svg" :width="svgWidth" :height="svgHeight"></svg>

      <!-- 提示文字 -->
      <div class="graph-hint">
        <p class="hint-text">{{ hintText }}</p>
        <p class="hint-sub">双击重新布局 | 拖拽节点交互</p>
      </div>
    </div>
    
    <!-- AI对话模式 -->
    <div v-else-if="mode === 'chat'" class="chat-mode">
      <div class="chat-header">
        <div class="ai-indicator">
          <div class="ai-dot"></div>
          <span>AI Agent 正在合成智能...</span>
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
        <span>重新合成</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, computed, nextTick } from 'vue'
import * as d3 from 'd3'
import knowledgeGraphData from '@/data/knowledgeGraph.json'

// 组件状态
const mode = ref('graph') // 'graph' | 'chat'
const container = ref(null)
const chatContainer = ref(null)
const svgRef = ref(null)

// SVG尺寸
const svgWidth = 600
const svgHeight = 400

// 从YAML文件加载数据
const graphData = knowledgeGraphData.graph || {
  nodes: [],
  links: []
}

// 从YAML文件加载QA对话数据
const conversations = knowledgeGraphData.conversations || []

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
    x = svgWidth / 2 + Math.cos(angle) * 80
    y = svgHeight / 2 + Math.sin(angle) * 80
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
    x = svgWidth / 2 + offset.x + (Math.random() - 0.5) * 60
    y = svgHeight / 2 + offset.y + (Math.random() - 0.5) * 60
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
    .attr("stroke", d => {
      // 根据连接强度使用渐变色，颜色更细腻
      if (d.strength > 0.8) return "#1d4ed8"      // 深蓝色 - 超强连接
      if (d.strength > 0.6) return "#3b82f6"      // 蓝色 - 强连接
      if (d.strength > 0.4) return "#6366f1"      // 紫蓝色 - 中等连接  
      if (d.strength > 0.2) return "#8b5cf6"      // 紫色 - 弱连接
      return "#a78bfa"                             // 淡紫色 - 极弱连接
    })
    .attr("stroke-width", d => {
      // 精致细线条，差异更明显
      if (d.strength > 0.7) return 0.8            // 强连接稍粗
      if (d.strength > 0.4) return 0.6            // 中等连接中等
      return 0.4                                   // 弱连接很细
    })
    .attr("stroke-opacity", d => {
      // 透明度随强度变化，层次感更丰富
      if (d.strength > 0.7) return 0.9            // 强连接不透明
      if (d.strength > 0.4) return 0.7            // 中等连接半透明
      return 0.4                                   // 弱连接很透明
    })
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
  
  // 添加节点圆圈（扁平化样式 + 透明度）
  nodeGroups
    .append("circle")
    .attr("r", d => getNodeRadius(d.level))
    .attr("fill", d => {
      if (d.level === 1) return "#3b82f6"      // 纯蓝色
      if (d.level === 2) return "#6366f1"      // 纯紫蓝色 
      return "#8b5cf6"                          // 纯紫色
    })
    .attr("fill-opacity", d => {
      if (d.level === 1) return 0.8            // 核心节点80%
      if (d.level === 2) return 0.7            // 二级节点70%
      return 0.6                                // 三级节点60%
    })
    .attr("stroke", "#fff")
    .attr("stroke-width", 1)
    .attr("stroke-opacity", 0.9)
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
    .on("mouseenter", function(event, d) {
      // 简化hover效果，减少DOM操作
      d3.select(this).select(".node-main")
        .transition().duration(150)
        .attr("r", getNodeRadius(d.level) * 1.15)
      
      // 更新提示文字（无需重新计算连接线）
      hintText.value = `${d.label} | 点击开始AI合成`
    })
    .on("mouseleave", function(event, d) {
      // 简化恢复效果
      d3.select(this).select(".node-main")
        .transition().duration(150)
        .attr("r", getNodeRadius(d.level))
      
      // 恢复提示文字
      hintText.value = '点击节点开始AI合成'
    })
    .on("click", function(event, d) {
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
    .force('center', d3.forceCenter(svgWidth / 2, svgHeight / 2)
      .strength(0.1)
    )
    // 添加群组聚集力 - 同领域节点相互吸引
    .force('group', d3.forceRadial(80, svgWidth / 2, svgHeight / 2)
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
      
      // 计算弧线的弯曲程度，基于距离和连接强度
      const curvature = Math.min(distance * 0.25, 60) * d.strength
      
      // 计算控制点（垂直于连线方向）
      const midX = (d.source.x + d.target.x) / 2
      const midY = (d.source.y + d.target.y) / 2
      
      // 垂直偏移量创建弧度
      const offsetX = -dy / distance * curvature
      const offsetY = dx / distance * curvature
      
      const controlX = midX + offsetX
      const controlY = midY + offsetY
      
      // 生成SVG二次贝塞尔曲线路径
      return `M ${d.source.x} ${d.source.y} Q ${controlX} ${controlY} ${d.target.x} ${d.target.y}`
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
const hintText = ref('点击节点开始AI合成')

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
    if (currentMessageIndex.value < conversations.length) {
      const conversation = conversations[currentMessageIndex.value]
      
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
    initializeForceSimulation()
  })
})

onUnmounted(() => {
  if (simulation) {
    simulation.stop()
  }
  if (chatInterval.value) {
    clearTimeout(chatInterval.value)
  }
})
</script>

<style scoped>
.knowledge-graph-container {
  width: 100%;
  height: 480px;
  position: relative;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  overflow: hidden;
  border-radius: var(--radius-2xl);
}

.knowledge-graph-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 2px 2px, var(--primary-color) 1px, transparent 0);
  opacity: 0.05;
  background-size: 40px 40px;
  animation: float 30s ease-in-out infinite;
  pointer-events: none;
  z-index: 1;
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

.graph-svg {
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
  z-index: 15;
}



/* D3完全控制节点和连接线样式 */

.graph-hint {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 20;
}

.hint-text {
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 500;
  margin: 0 0 4px 0;
  padding: 8px 16px 4px 16px;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border-radius: 20px 20px 8px 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
}

.hint-sub {
  color: var(--text-secondary);
  font-size: 11px;
  font-weight: 400;
  margin: 0;
  padding: 0 16px 8px 16px;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border-radius: 8px 8px 20px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.04);
}

/* AI对话模式 */
.chat-mode {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  overflow: hidden;
  position: relative;
  z-index: 10;
}

.chat-header {
  padding: 16px 20px;
  background: var(--glass-bg-dark);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  box-shadow: inset 0 -1px 20px rgba(0, 0, 0, 0.03);
}

.ai-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(0, 0, 0, 0.8);
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: transparent;
}

.message-item {
  display: flex;
  animation: fadeInUp 0.2s ease;
}

.message-content {
  display: flex;
  gap: 12px;
  max-width: 100%;
  align-items: flex-start;
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
  background: rgba(255, 255, 255, 0.9);
  color: rgba(59, 130, 246, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.answer .message-label {
  background: rgba(255, 255, 255, 0.85);
  color: rgba(16, 185, 129, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.message-text {
  color: rgba(0, 0, 0, 0.85);
  font-size: 13px;
  line-height: 1.5;
  flex: 1;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(120%);
  -webkit-backdrop-filter: blur(20px) saturate(120%);
  padding: 10px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
}

.question .message-text {
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 16px rgba(255, 255, 255, 0.1);
}

.answer .message-text {
  font-weight: 400;
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.reset-button {
  position: absolute;
  top: 16px;
  right: 20px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px) saturate(120%);
  -webkit-backdrop-filter: blur(20px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  color: rgba(59, 130, 246, 0.9);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.reset-button:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: scale(1.02);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
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
</style> 