'use strict';

module.exports = {
  schedule: {
    interval: '5s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    // return
    const uuid = ctx.helper.uuid();
    let classifyId = null;
    const num = Math.random();
    if (num < 0.25) { classifyId = '5e42c3c792ba945d83e4edf1'; }
    if (num >= 0.25 && num <= 0.5) { classifyId = '5e42c42492ba945d83e4edf2'; }
    if (num > 0.5 && num <= 0.75) { classifyId = '5e42c44f92ba945d83e4edf3'; }
    if (num > 0.75 && num <= 1.0) { classifyId = '5e4b84eea288fb6bc57c3d98'; }
    const res = await ctx.curl('http://127.0.0.1:8019/api/admin-blog/post/create', {
      dataType: 'json',
      method: 'post',
      headers: {
        Cookie: 'sessionId=admin-6957dc17-9c4c-4548-a24b-3bf941cf317f-1584448728892; sessionId.sig=pRtdZ4Wuy_DfnuwCrth3BVqaZv-OI9SUOaOBEDTlt_o',
      },
      data: {
        title: 'egg定时任务' + uuid,
        classifyId,
        content: uuid + "egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。↵二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵*    *    *    *    *    *↵┬    ┬    ┬    ┬    ┬    ┬↵│    │    │    │    │    |↵│    │    │    │    │    └ 星期 (0 - 7) (0或7都是星期日)↵│    │    │    │    └───── 月份 (1 - 12)↵│    │    │    └────────── 日期 (1 - 31)↵│    │    └─────────────── 小时 (0 - 23)↵│    └──────────────────── 分钟 (0 - 59)↵└───────────────────────── 秒 (0 - 59, optional)↵2、案例如下↵↵module.exports = {↵  schedule: {↵    cron: '0 30 5 * * 1', //每周一的5点30分0秒更新↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵    immediate: true, //项目启动就执行一次定时任务↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', debug] //该定时任务在开发环境和debug模式下才执行↵↵egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。↵二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵*    *    *    *    *    *↵┬    ┬    ┬    ┬    ┬    ┬↵│    │    │    │    │    |↵│    │    │    │    │    └ 星期 (0 - 7) (0或7都是星期日)↵│    │    │    │    └───── 月份 (1 - 12)↵│    │    │    └────────── 日期 (1 - 31)↵│    │    └─────────────── 小时 (0 - 23)↵│    └──────────────────── 分钟 (0 - 59)↵└───────────────────────── 秒 (0 - 59, optional)↵2、案例如下↵↵module.exports = {↵  schedule: {↵    cron: '0 30 5 * * 1', //每周一的5点30分0秒更新↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵    immediate: true, //项目启动就执行一次定时任务↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', debug] //该定时任务在开发环境和debug模式下才执行↵↵egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。↵二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵*    *    *    *    *    *↵┬    ┬    ┬    ┬    ┬    ┬↵│    │    │    │    │    |↵│    │    │    │    │    └ 星期 (0 - 7) (0或7都是星期日)↵│    │    │    │    └───── 月份 (1 - 12)↵│    │    │    └────────── 日期 (1 - 31)↵│    │    └─────────────── 小时 (0 - 23)↵│    └──────────────────── 分钟 (0 - 59)↵└───────────────────────── 秒 (0 - 59, optional)↵2、案例如下↵↵module.exports = {↵  schedule: {↵    cron: '0 30 5 * * 1', //每周一的5点30分0秒更新↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵    immediate: true, //项目启动就执行一次定时任务↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', debug] //该定时任务在开发环境和debug模式下才执行↵↵egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。↵二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵*    *    *    *    *    *↵┬    ┬    ┬    ┬    ┬    ┬↵│    │    │    │    │    |↵│    │    │    │    │    └ 星期 (0 - 7) (0或7都是星期日)↵│    │    │    │    └───── 月份 (1 - 12)↵│    │    │    └────────── 日期 (1 - 31)↵│    │    └─────────────── 小时 (0 - 23)↵│    └──────────────────── 分钟 (0 - 59)↵└───────────────────────── 秒 (0 - 59, optional)↵2、案例如下↵↵module.exports = {↵  schedule: {↵    cron: '0 30 5 * * 1', //每周一的5点30分0秒更新↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵    immediate: true, //项目启动就执行一次定时任务↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', debug] //该定时任务在开发环境和debug模式下才执行↵↵egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。↵二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵*    *    *    *    *    *↵┬    ┬    ┬    ┬    ┬    ┬↵│    │    │    │    │    |↵│    │    │    │    │    └ 星期 (0 - 7) (0或7都是星期日)↵│    │    │    │    └───── 月份 (1 - 12)↵│    │    │    └────────── 日期 (1 - 31)↵│    │    └─────────────── 小时 (0 - 23)↵│    └──────────────────── 分钟 (0 - 59)↵└───────────────────────── 秒 (0 - 59, optional)↵2、案例如下↵↵module.exports = {↵  schedule: {↵    cron: '0 30 5 * * 1', //每周一的5点30分0秒更新↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵    immediate: true, //项目启动就执行一次定时任务↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', debug] //该定时任务在开发环境和debug模式下才执行↵↵egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。↵二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵*    *    *    *    *    *↵┬    ┬    ┬    ┬    ┬    ┬↵│    │    │    │    │    |↵│    │    │    │    │    └ 星期 (0 - 7) (0或7都是星期日)↵│    │    │    │    └───── 月份 (1 - 12)↵│    │    │    └────────── 日期 (1 - 31)↵│    │    └─────────────── 小时 (0 - 23)↵│    └──────────────────── 分钟 (0 - 59)↵└───────────────────────── 秒 (0 - 59, optional)↵2、案例如下↵↵module.exports = {↵  schedule: {↵    cron: '0 30 5 * * 1', //每周一的5点30分0秒更新↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵    immediate: true, //项目启动就执行一次定时任务↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', debug] //该定时任务在开发环境和debug模式下才执行↵↵egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。↵二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵*    *    *    *    *    *↵┬    ┬    ┬    ┬    ┬    ┬↵│    │    │    │    │    |↵│    │    │    │    │    └ 星期 (0 - 7) (0或7都是星期日)↵│    │    │    │    └───── 月份 (1 - 12)↵│    │    │    └────────── 日期 (1 - 31)↵│    │    └─────────────── 小时 (0 - 23)↵│    └──────────────────── 分钟 (0 - 59)↵└───────────────────────── 秒 (0 - 59, optional)↵2、案例如下↵↵module.exports = {↵  schedule: {↵    cron: '0 30 5 * * 1', //每周一的5点30分0秒更新↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵    immediate: true, //项目启动就执行一次定时任务↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', debug] //该定时任务在开发环境和debug模式下才执行↵↵egg定时和定点任务↵↵cyjxsyb↵2019.03.22 15:54:41↵字数 290↵阅读 653↵egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。↵二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵*    *    *    *    *    *↵┬    ┬    ┬    ┬    ┬    ┬↵│    │    │    │    │    |↵│    │    │    │    │    └ 星期 (0 - 7) (0或7都是星期日)↵│    │    │    │    └───── 月份 (1 - 12)↵│    │    │    └────────── 日期 (1 - 31)↵│    │    └─────────────── 小时 (0 - 23)↵│    └──────────────────── 分钟 (0 - 59)↵└───────────────────────── 秒 (0 - 59, optional)↵2、案例如下↵↵module.exports = {↵  schedule: {↵    cron: '0 30 5 * * 1', //每周一的5点30分0秒更新↵    type: 'all', // 指定所有的 worker 都需要执行↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = {↵  schedule: {↵    interval: '1m', // 1 分钟间隔↵    type: 'all', // 指定所有的 worker 都需要执行↵    immediate: true, //项目启动就执行一次定时任务↵  },↵  async task(ctx) {↵    const res = await ctx.curl('http://www.api.com/cache', {↵      dataType: 'json',↵    });↵    ctx.app.cache = res.data;↵  },↵};↵2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', debug] //该定时任务在开发环境和debug模式下才执行↵↵",
        text: uuid + "egg定时和定点任务↵↵cyjxsyb 2019.03.22 15:54:41 字数 290 阅读 653 egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。 二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵┬ ┬ ┬ ┬ ┬ ┬ │ │ │ │ │ | │ │ │ │ │ └ 星期 (0 - 7) (0或7都是星期日) │ │ │ │ └───── 月份 (1 - 12) │ │ │ └────────── 日期 (1 - 31) │ │ └─────────────── 小时 (0 - 23) │ └──────────────────── 分钟 (0 - 59) └───────────────────────── 秒 (0 - 59, optional) 2、案例如下↵↵module.exports = { schedule: { cron: '0 30 5 * * 1', //每周一的5点30分0秒更新 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 immediate: true, //项目启动就执行一次定时任务 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', 'debug'] //该定时任务在开发环境和debug模式下才执行egg定时和定点任务↵↵cyjxsyb 2019.03.22 15:54:41 字数 290 阅读 653 egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。 二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵┬ ┬ ┬ ┬ ┬ ┬ │ │ │ │ │ | │ │ │ │ │ └ 星期 (0 - 7) (0或7都是星期日) │ │ │ │ └───── 月份 (1 - 12) │ │ │ └────────── 日期 (1 - 31) │ │ └─────────────── 小时 (0 - 23) │ └──────────────────── 分钟 (0 - 59) └───────────────────────── 秒 (0 - 59, optional) 2、案例如下↵↵module.exports = { schedule: { cron: '0 30 5 * * 1', //每周一的5点30分0秒更新 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 immediate: true, //项目启动就执行一次定时任务 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', 'debug'] //该定时任务在开发环境和debug模式下才执行egg定时和定点任务↵↵cyjxsyb 2019.03.22 15:54:41 字数 290 阅读 653 egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。 二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵┬ ┬ ┬ ┬ ┬ ┬ │ │ │ │ │ | │ │ │ │ │ └ 星期 (0 - 7) (0或7都是星期日) │ │ │ │ └───── 月份 (1 - 12) │ │ │ └────────── 日期 (1 - 31) │ │ └─────────────── 小时 (0 - 23) │ └──────────────────── 分钟 (0 - 59) └───────────────────────── 秒 (0 - 59, optional) 2、案例如下↵↵module.exports = { schedule: { cron: '0 30 5 * * 1', //每周一的5点30分0秒更新 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 immediate: true, //项目启动就执行一次定时任务 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', 'debug'] //该定时任务在开发环境和debug模式下才执行egg定时和定点任务↵↵cyjxsyb 2019.03.22 15:54:41 字数 290 阅读 653 egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。 二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵┬ ┬ ┬ ┬ ┬ ┬ │ │ │ │ │ | │ │ │ │ │ └ 星期 (0 - 7) (0或7都是星期日) │ │ │ │ └───── 月份 (1 - 12) │ │ │ └────────── 日期 (1 - 31) │ │ └─────────────── 小时 (0 - 23) │ └──────────────────── 分钟 (0 - 59) └───────────────────────── 秒 (0 - 59, optional) 2、案例如下↵↵module.exports = { schedule: { cron: '0 30 5 * * 1', //每周一的5点30分0秒更新 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 immediate: true, //项目启动就执行一次定时任务 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', 'debug'] //该定时任务在开发环境和debug模式下才执行egg定时和定点任务↵↵cyjxsyb 2019.03.22 15:54:41 字数 290 阅读 653 egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。 二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵┬ ┬ ┬ ┬ ┬ ┬ │ │ │ │ │ | │ │ │ │ │ └ 星期 (0 - 7) (0或7都是星期日) │ │ │ │ └───── 月份 (1 - 12) │ │ │ └────────── 日期 (1 - 31) │ │ └─────────────── 小时 (0 - 23) │ └──────────────────── 分钟 (0 - 59) └───────────────────────── 秒 (0 - 59, optional) 2、案例如下↵↵module.exports = { schedule: { cron: '0 30 5 * * 1', //每周一的5点30分0秒更新 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 immediate: true, //项目启动就执行一次定时任务 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执egg定时和定点任务↵↵cyjxsyb 2019.03.22 15:54:41 字数 290 阅读 653 egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。 二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵┬ ┬ ┬ ┬ ┬ ┬ │ │ │ │ │ | │ │ │ │ │ └ 星期 (0 - 7) (0或7都是星期日) │ │ │ │ └───── 月份 (1 - 12) │ │ │ └────────── 日期 (1 - 31) │ │ └─────────────── 小时 (0 - 23) │ └──────────────────── 分钟 (0 - 59) └───────────────────────── 秒 (0 - 59, optional) 2、案例如下↵↵module.exports = { schedule: { cron: '0 30 5 * * 1', //每周一的5点30分0秒更新 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 immediate: true, //项目启动就执行一次定时任务 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', 'debug'] //该定时任务在开发环境和debug模式下才执行egg定时和定点任务↵↵cyjxsyb 2019.03.22 15:54:41 字数 290 阅读 653 egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。 二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵┬ ┬ ┬ ┬ ┬ ┬ │ │ │ │ │ | │ │ │ │ │ └ 星期 (0 - 7) (0或7都是星期日) │ │ │ │ └───── 月份 (1 - 12) │ │ │ └────────── 日期 (1 - 31) │ │ └─────────────── 小时 (0 - 23) │ └──────────────────── 分钟 (0 - 59) └───────────────────────── 秒 (0 - 59, optional) 2、案例如下↵↵module.exports = { schedule: { cron: '0 30 5 * * 1', //每周一的5点30分0秒更新 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 immediate: true, //项目启动就执行一次定时任务 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', 'debug'] //该定时任务在开发环境和debug模式下才执行egg定时和定点任务↵↵cyjxsyb 2019.03.22 15:54:41 字数 290 阅读 653 egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。 二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵┬ ┬ ┬ ┬ ┬ ┬ │ │ │ │ │ | │ │ │ │ │ └ 星期 (0 - 7) (0或7都是星期日) │ │ │ │ └───── 月份 (1 - 12) │ │ │ └────────── 日期 (1 - 31) │ │ └─────────────── 小时 (0 - 23) │ └──────────────────── 分钟 (0 - 59) └───────────────────────── 秒 (0 - 59, optional) 2、案例如下↵↵module.exports = { schedule: { cron: '0 30 5 * * 1', //每周一的5点30分0秒更新 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 immediate: true, //项目启动就执行一次定时任务 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', 'debug'] //该定时任务在开发环境和debug模式下才执行egg定时和定点任务↵↵cyjxsyb 2019.03.22 15:54:41 字数 290 阅读 653 egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。 二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵┬ ┬ ┬ ┬ ┬ ┬ │ │ │ │ │ | │ │ │ │ │ └ 星期 (0 - 7) (0或7都是星期日) │ │ │ │ └───── 月份 (1 - 12) │ │ │ └────────── 日期 (1 - 31) │ │ └─────────────── 小时 (0 - 23) │ └──────────────────── 分钟 (0 - 59) └───────────────────────── 秒 (0 - 59, optional) 2、案例如下↵↵module.exports = { schedule: { cron: '0 30 5 * * 1', //每周一的5点30分0秒更新 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 immediate: true, //项目启动就执行一次定时任务 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', 'debug'] //该定时任务在开发环境和debug模式下才执行egg定时和定点任务↵↵cyjxsyb 2019.03.22 15:54:41 字数 290 阅读 653 egg提供了强大的定时任务系统。通过定时任务，可以系统修改服务的缓存数据，以便处理需要定时更新的数据。↵↵在app/schedule目录下新建一个js文件，每一个js文件就是一个定时任务。↵↵一、定时任务（以定时更新cache数据为例）↵↵1、设置1分钟间隔，可以在服务其他地方获取this.ctx.app.cache的值↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、还可以设置单位如下↵↵1ms -> 1毫秒↵↵1s -> 1秒↵↵1m -> 1分钟↵↵等。。。 二、定点任务（以每周一的5点30分0秒更新排行榜为例）↵↵1、使用cron参数设定时间，cron参数分为6个部分，*表示所有都满足↵↵┬ ┬ ┬ ┬ ┬ ┬ │ │ │ │ │ | │ │ │ │ │ └ 星期 (0 - 7) (0或7都是星期日) │ │ │ │ └───── 月份 (1 - 12) │ │ │ └────────── 日期 (1 - 31) │ │ └─────────────── 小时 (0 - 23) │ └──────────────────── 分钟 (0 - 59) └───────────────────────── 秒 (0 - 59, optional) 2、案例如下↵↵module.exports = { schedule: { cron: '0 30 5 * * 1', //每周一的5点30分0秒更新 type: 'all', // 指定所有的 worker 都需要执行 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 三、其他参数↵↵1、启动执行immediate↵↵设置immediate参数为true时，该定时任务会在项目启动时，立即执行一次定时任务↵↵module.exports = { schedule: { interval: '1m', // 1 分钟间隔 type: 'all', // 指定所有的 worker 都需要执行 immediate: true, //项目启动就执行一次定时任务 }, async task(ctx) { const res = await ctx.curl('http://www.api.com/cache', { dataType: 'json', }); ctx.app.cache = res.data; }, }; 2、配置disable参数为true时，该定时任务即关闭↵↵3、指定定时任务执行环境env↵↵env: ['dev', 'debug'] //该定时任务在开发环境和debug模式下才执行",
        imgUrl: '//wenzi.douerpiao.club/db8c1a97-b51c-4d0c-8a60-ab71c6e8d35b?imageView2/1/w/120/h/120/interlace/1',
      },
    });
    // console.log('success', res);
    // ctx.app.cache = res.data;
  },
};
