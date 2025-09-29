#!/bin/bash
cd /root/dataarc_new

echo "🔄 生产版本重启脚本"
echo "=================================="

# 停止现有服务
echo "⏹️ 停止现有服务..."
pkill -f "vite preview" 2>/dev/null
pkill -f "npm.*preview" 2>/dev/null
sleep 2

# 清理缓存
echo "🧹 清理缓存..."
rm -rf dist node_modules/.vite .vite

# 重新构建
echo "📦 重新构建..."
if npm run build; then
    echo "✅ 构建成功"
else
    echo "❌ 构建失败"
    exit 1
fi

# 创建日志目录
mkdir -p logs

# 创建favicon
echo -e "\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00 \x00\x00\x00 \x08\x06\x00\x00\x00szz\xf4\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\xc9e<\x00\x00\x00\x0eIDATx\xdab\x00\x02\x00\x00\x05\x00\x01\xe2&\x05[\x00\x00\x00\x00IEND\xaeB\x60\x82" > public/favicon.ico

# 启动服务
echo "🚀 启动生产服务..."
nohup npm run preview -- --port 8888 --host 0.0.0.0 > logs/prod-$(date +%Y%m%d_%H%M%S).log 2>&1 &

# 等待服务启动
sleep 3

# 检查服务状态
if pgrep -f "vite preview" > /dev/null; then
    echo "✅ 服务启动成功！"
    echo "📍 访问地址: http://192.168.168.47:8888"
    echo "📝 日志目录: logs/"
    echo "🔍 查看日志: tail -f logs/prod-*.log"
else
    echo "❌ 服务启动失败，请检查日志"
    tail -20 logs/prod-*.log
fi
