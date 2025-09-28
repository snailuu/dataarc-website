#!/bin/bash

# DataArc 开发模式监控脚本

echo "=== DataArc 开发服务器状态 ==="
echo "时间: $(date)"
echo

# 检查进程状态
echo "📊 开发服务器进程:"
DEV_PID=$(ps aux | grep "vite --host 0.0.0.0 --port 8000" | grep -v grep | awk '{print $2}')
if [ -n "$DEV_PID" ]; then
    echo "✅ Vite开发服务器正在运行 (PID: $DEV_PID)"
    ps aux | grep $DEV_PID | grep -v grep
else
    echo "❌ 开发服务器未运行"
fi
echo

# 检查端口
echo "🌐 端口状态:"
netstat -tlnp | grep 8000
echo

# 检查HTTP响应
echo "🔗 HTTP响应测试:"
curl -s -I http://localhost:8000 | head -3
echo

# 显示开发日志
echo "📝 开发服务器日志 (最后10行):"
if [ -f logs/dev.log ]; then
    tail -10 logs/dev.log
else
    echo "日志文件不存在"
fi
echo

echo "💡 热重载功能:"
echo "  - 修改源代码文件会自动刷新浏览器"
echo "  - 实时查看日志: tail -f logs/dev.log"
echo "  - 停止服务: kill $DEV_PID"
echo "  - 访问地址: http://192.168.168.47:8000"
echo 