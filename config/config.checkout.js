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

  // add your middleware config here
  config.middleware = [];
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
  return {
    ...config,
  };
};
