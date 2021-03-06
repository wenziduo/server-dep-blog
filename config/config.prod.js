/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});
  // 设置端口
  config.cluster = {
    listen: {
      path: '',
      port: 8019,
      hostname: '0.0.0.0',
    },
  };
  // mongodb 数据库设置
  config.mongoose = {
    client: {
      url: 'mongodb://47.98.50.170/web-blog-dep',
      useNewUrlParser: true,
      options: {
        mongos: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // autoIndex: false,
        // replicaSet: 'rs0',
        // readPreference: 'secondary',
        // w: 'majority',
        // authSouce: 'admin'
      },
    },
  };
  // 设置redis
  config.redis = {
    // 单个redis
    client: {
      host: '47.98.50.170', // Redis host
      port: 6379, // Redis port
      password: 'caiwenduo1993',
      db: 1,
    },
  };
  // 设置session
  config.session = {
    key: 'SESSION_ID',
    maxAge: 60000, // 1 天
    httpOnly: true, // 设置键值对是否可以被 js 访问，默认为 true，不允许被 js 访问。
    encrypt: true, // 加密传输
    renew: true, // 延长会话有效期
  };
  // 七牛云的配置
  config.qiniuyun = {
    accessKey: 'y2suiyW_lcVyb-E1RkJiL-g4WiBMN3f69QjrbtKd',
    secretKey: '4AgJMyTfmQggOsa2jnCPXvlJInJGNXS1Irm2pfHY',
    bucket: 'caiwenduo', // 空间名称
  };
  // 阿里监控
  config.alinode = {
    server: 'wss://agentserver.node.aliyun.com:8080',
    appid: '83678',
    secret: '1fff81033cea6a187d85f663b2cb79a36362cc2d',
    // logdir: 'Node.js 性能平台日志输出地址绝对路径，与 NODE_LOG_DIR 保持一致。如：/tmp/',
    error_log: [ '/root/logs/example/appname-web.log', '/root/logs/example/common-error.log', '/root/logs/example/egg-agent.log' ],
  };
  return {
    ...config,
  };
};
