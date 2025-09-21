#!/bin/bash

# DataArc Technology Website 管理脚本
# 使用方法: ./manage.sh [start|stop|restart|status|logs|build|deploy]

APP_NAME="dataarctech-website"
PROJECT_DIR="/root/dataarctech-website"
LOG_DIR="$PROJECT_DIR/logs"

case "$1" in
    start)
        echo "🚀 启动 DataArc 网站..."
        cd $PROJECT_DIR
        pm2 start ecosystem.config.cjs
        echo "✅ 网站已启动，访问: http://your-server-ip:8000"
        ;;
        
    stop)
        echo "🛑 停止 DataArc 网站..."
        pm2 stop $APP_NAME
        echo "✅ 网站已停止"
        ;;
        
    restart)
        echo "🔄 重启 DataArc 网站..."
        pm2 restart $APP_NAME
        echo "✅ 网站已重启"
        ;;
        
    status)
        echo "📊 网站状态："
        pm2 status
        ;;
        
    logs)
        echo "📋 实时日志 (Ctrl+C 退出)："
        pm2 logs $APP_NAME
        ;;
        
    error-logs)
        echo "❌ 错误日志："
        tail -f $LOG_DIR/error.log
        ;;
        
    build)
        echo "🔨 重新构建网站..."
        cd $PROJECT_DIR
        npm run build
        echo "✅ 构建完成"
        ;;
        
    deploy)
        echo "🚀 重新构建并部署..."
        cd $PROJECT_DIR
        npm run build
        pm2 restart $APP_NAME
        echo "✅ 部署完成，访问: http://your-server-ip:8000"
        ;;
        
    monitor)
        echo "📈 打开PM2监控面板..."
        pm2 monit
        ;;
        
    backup-logs)
        echo "💾 备份日志文件..."
        BACKUP_DIR="$LOG_DIR/backup/$(date +%Y%m%d_%H%M%S)"
        mkdir -p $BACKUP_DIR
        cp $LOG_DIR/*.log $BACKUP_DIR/ 2>/dev/null || true
        echo "✅ 日志已备份到: $BACKUP_DIR"
        ;;
        
    clean-logs)
        echo "🧹 清理旧日志..."
        > $LOG_DIR/combined.log
        > $LOG_DIR/out.log
        > $LOG_DIR/error.log
        echo "✅ 日志已清理"
        ;;
        
    *)
        echo "DataArc Technology Website 管理工具"
        echo ""
        echo "使用方法: $0 {command}"
        echo ""
        echo "可用命令:"
        echo "  start        启动网站"
        echo "  stop         停止网站"
        echo "  restart      重启网站"
        echo "  status       查看运行状态"
        echo "  logs         查看实时日志"
        echo "  error-logs   查看错误日志"
        echo "  build        重新构建"
        echo "  deploy       构建并部署"
        echo "  monitor      打开监控面板"
        echo "  backup-logs  备份日志"
        echo "  clean-logs   清理日志"
        echo ""
        echo "示例:"
        echo "  $0 start     # 启动网站"
        echo "  $0 logs      # 查看日志"
        echo "  $0 deploy    # 重新部署"
        ;;
esac 