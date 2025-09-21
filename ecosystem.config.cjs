module.exports = {
  apps: [{
    name: 'dataarctech-website',
    script: 'serve',
    args: [
      '-s', 'dist',
      '-l', '8000',
      '--cors'
    ],
    cwd: '/root/dataarctech-website',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 8000
    },
    // 日志配置
    log_file: '/root/dataarctech-website/logs/combined.log',
    out_file: '/root/dataarctech-website/logs/out.log',
    error_file: '/root/dataarctech-website/logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    
    // 高级配置
    exec_mode: 'cluster',
    max_restarts: 10,
    min_uptime: '10s',
    
    // 监控配置
    pmx: true,
    
    // 合并日志
    merge_logs: true,
    
    // 日志轮转
    log_type: 'json'
  }]
}; 