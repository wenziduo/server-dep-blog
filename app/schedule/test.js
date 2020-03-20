'use strict';

module.exports = {
  schedule: {
    interval: '1s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
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
        Cookie: 'sessionId=admin-997cae5b-e4d3-464d-8989-99ac0677dc35-1584581857571; sessionId.sig=Is0nYU23qA77CYUcwahwVJKR4Qx95PK6PF-bgstj9mE',
      },
      data: {
        title: 'egg定时任务' + uuid,
        classifyId,
        content: 'egg定时和定点任务',
        text: 'egg定时和定点任务',
        imgUrl: '//wenzi.douerpiao.club/003b03fc-1eb9-4818-9ad7-5ef28389628f?imageView2/1/w/120/h/120/interlace/1',
      },
    });
    // console.log('success', res);
    // ctx.app.cache = res.data;
  },
};
