#!/bin/bash

# DataArc Technology Website 管理脚本
# 使用方法: ./manage.sh [start|stop|restart|status|logs|build|deploy|monitor]

APP_NAME="dataarctech-website"
PROJECT_DIR="/root/dataarc_new"
LOG_DIR="$PROJECT_DIR/logs"
PID_FILE="$PROJECT_DIR/server.pid"
PORT=8000

# 创建日志目录
mkdir -p $LOG_DIR

case "$1" in
    start)
        echo "🚀 启动 DataArc 网站 (生产模式)..."
        cd $PROJECT_DIR
        
        # 检查是否已经运行
        if [ -f $PID_FILE ]; then
            PID=$(cat $PID_FILE)
            if ps -p $PID > /dev/null; then
                echo "⚠️  服务已在运行 (PID: $PID)"
                exit 1
            fi
        fi
        
        # 启动服务
        nohup serve -s dist -l $PORT > $LOG_DIR/production.log 2>&1 &
        echo $! > $PID_FILE
        sleep 2
        
        # 检查启动状态
        if ps -p $(cat $PID_FILE) > /dev/null; then
            echo "✅ 网站已启动，访问: http://localhost:$PORT"
            echo "📊 PID: $(cat $PID_FILE)"
        else
            echo "❌ 启动失败，请检查日志"
            rm -f $PID_FILE
        fi
        ;;
        
    stop)
        echo "🛑 停止 DataArc 网站..."
        if [ -f $PID_FILE ]; then
            PID=$(cat $PID_FILE)
            if ps -p $PID > /dev/null; then
                kill $PID
                sleep 2
                if ps -p $PID > /dev/null; then
                    kill -9 $PID
                fi
                rm -f $PID_FILE
                echo "✅ 网站已停止"
            else
                echo "⚠️  服务未运行"
                rm -f $PID_FILE
            fi
        else
            # 尝试查找并杀死serve进程
            SERVE_PID=$(ps aux | grep "serve -s dist -l $PORT" | grep -v grep | awk '{print $2}')
            if [ -n "$SERVE_PID" ]; then
                kill $SERVE_PID
                echo "✅ 已停止serve进程 (PID: $SERVE_PID)"
            else
                echo "⚠️  未找到运行的服务"
            fi
        fi
        ;;
        
    restart)
        echo "🔄 重启 DataArc 网站..."
        $0 stop
        sleep 2
        $0 start
        ;;
        
    status)
        echo "📊 网站状态："
        echo "时间: $(date)"
        echo
        
        # 检查PID文件
        if [ -f $PID_FILE ]; then
            PID=$(cat $PID_FILE)
            if ps -p $PID > /dev/null; then
                echo "✅ 服务正在运行 (PID: $PID)"
            else
                echo "❌ PID文件存在但进程已死 (PID: $PID)"
                rm -f $PID_FILE
            fi
        else
            # 查找serve进程
            SERVE_PID=$(ps aux | grep "serve -s dist -l $PORT" | grep -v grep | awk '{print $2}')
            if [ -n "$SERVE_PID" ]; then
                echo "✅ 发现serve进程 (PID: $SERVE_PID)"
            else
                echo "❌ 服务未运行"
            fi
        fi
        
        # 检查端口
        echo
        echo "🌐 端口状态:"
        netstat -tlnp | grep $PORT
        
        # 测试HTTP响应
        echo
        echo "🔗 HTTP响应测试:"
        curl -s -I http://localhost:$PORT | head -3
        ;;
        
    logs)
        echo "📋 实时日志 (Ctrl+C 退出)："
        if [ -f $LOG_DIR/production.log ]; then
            tail -f $LOG_DIR/production.log
        else
            echo "❌ 日志文件不存在: $LOG_DIR/production.log"
        fi
        ;;
        
    monitor)
        echo "🖥️  启动监控模式..."
        ./monitor-server.sh
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
        
    deploy)
        echo "🚢 部署网站..."
        cd $PROJECT_DIR
        echo "📦 重新构建..."
        npm run build
        echo "🔄 重启服务..."
        $0 restart
        echo "✅ 部署完成"
        ;;
        
    clean)
        echo "🧹 清理日志和缓存..."
        cd $PROJECT_DIR
        rm -f $LOG_DIR/*.log
        rm -f $PID_FILE
        echo "✅ 清理完成"
        ;;
        
    *)
        echo "DataArc 网站管理脚本"
        echo "使用方法: $0 {start|stop|restart|status|logs|monitor|build|deploy|clean}"
        echo
        echo "命令说明:"
        echo "  start    - 启动网站服务"
        echo "  stop     - 停止网站服务"
        echo "  restart  - 重启网站服务"
        echo "  status   - 查看服务状态"
        echo "  logs     - 查看实时日志"
        echo "  monitor  - 运行监控脚本"
        echo "  build    - 重新构建网站"
        echo "  deploy   - 重新构建并部署"
        echo "  clean    - 清理日志和缓存"
        echo
        echo "当前配置:"
        echo "  项目目录: $PROJECT_DIR"
        echo "  端口: $PORT"
        echo "  日志目录: $LOG_DIR"
        exit 1
        ;;
esac 