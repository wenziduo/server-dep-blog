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

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573714749865_7145';
  config.proxy = true;
  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
  };
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = [ 'login', 'adminLogin', 'errorHandler', 'blogStatistics' ];
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: {
        enable: false,
        queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
        bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
      },
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
