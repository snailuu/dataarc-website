#!/bin/bash
cd /root/dataarc_new

echo "🔄 开发版本重启脚本（8888端口）"
echo "=================================="

# 停止现有服务
echo "⏹️ 停止现有服务..."
pkill -f "vite.*dev" 2>/dev/null
pkill -f "npm.*dev" 2>/dev/null
sleep 2

# 创建日志目录
mkdir -p logs

# 启动开发服务
echo "🚀 启动开发服务（8888端口）..."
nohup npm run dev -- --port 8888 --host 0.0.0.0 > logs/dev-8888-$(date +%Y%m%d_%H%M%S).log 2>&1 &

# 等待服务启动
sleep 5

# 检查服务状态
if pgrep -f "vite.*--port 8888" > /dev/null; then
    echo "✅ 开发服务启动成功！"
    echo "📍 访问地址: http://192.168.168.47:8888"
    echo "🔥 支持热重载"
    echo "📝 日志目录: logs/"
    echo "🔍 查看日志: tail -f logs/dev-8888-*.log"
else
    echo "❌ 服务启动失败，请检查日志"
    tail -20 logs/dev-8888-*.log
fi
