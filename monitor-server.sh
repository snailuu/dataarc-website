#!/bin/bash

# DataArc 生产服务器监控脚本

echo "=== DataArc 生产服务器状态 ==="
echo "时间: $(date)"
echo

# 检查服务进程
echo "📊 服务进程状态:"
SERVE_PID=$(ps aux | grep "serve -s dist -l 8000" | grep -v grep | awk '{print $2}')
if [ -n "$SERVE_PID" ]; then
    echo "✅ 服务正在运行 (PID: $SERVE_PID)"
    ps aux | grep $SERVE_PID | grep -v grep
else
    echo "❌ 服务未运行"
fi
echo

# 检查端口
echo "🌐 端口状态:"
netstat -tlnp | grep 8000
echo

# 检查服务响应
echo "🔗 HTTP响应测试:"
curl -s -I http://localhost:8000 | head -3
echo

# 显示最新日志
echo "📝 最新日志 (最后10行):"
if [ -f logs/production.log ]; then
    tail -10 logs/production.log
else
    echo "日志文件不存在"
fi
echo

echo "💡 使用方法:"
echo "  查看实时日志: tail -f logs/production.log"
echo "  重启服务: ./manage.sh restart"
echo "  停止服务: kill $SERVE_PID"
echo 