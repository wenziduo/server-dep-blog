'use strict';

module.exports = {
  schedule: {
    interval: '50ms', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    return;
    const uuid = ctx.helper.uuid();
    let classifyId = null;
    const num = Math.random();
    if (num < 0.25) { classifyId = '5e42c3c792ba945d83e4edf1'; }
    if (num >= 0.25 && num <= 0.5) { classifyId = '5e42c42492ba945d83e4edf2'; }
    if (num > 0.5 && num <= 0.75) { classifyId = '5e42c44f92ba945d83e4edf3'; }
    if (num > 0.75 && num <= 1.0) { classifyId = '5e4b84eea288fb6bc57c3d98'; }

    // const resText = await ctx.curl('http://wenzi.douerpiao.club/test.txt');
    // const resMarkdown = await ctx.curl('http://wenzi.douerpiao.club/markdown.txt');
    // console.log('resText', resText);
    // const str = decoder.write(Buffer.from(resText.data));
    // console.log(str); // 你
    // console.log('resBuffer', str);
    const res = await ctx.curl('http://127.0.0.1:8019/api/admin-blog/post/create', {
      dataType: 'json',
      method: 'post',
      headers: {
        Cookie: 'sessionId=admin-7ef30a91-db6c-4c24-a8cc-1c28712e1ff0-1584876380487; sessionId.sig=N6GZYQq-wr_T-ETJLOjpNmnuGRcBSOG2TKOldT2k0fs',
      },
      data: {
        title: 'egg定时任务' + uuid,
        classifyId,
        markdownUrl: 'http://wenzi.douerpiao.club/markdown.txt',
        textUrl: 'http://wenzi.douerpiao.club/test.txt',
        imgUrl: '//wenzi.douerpiao.club/003b03fc-1eb9-4818-9ad7-5ef28389628f?imageView2/1/w/120/h/120/interlace/1',
        introduction: '测试简介，最多100字。嗯 我来试试，测试简介，最多100字。嗯 我来试试，测试简介，最多100字。嗯 我来试试，测试简介，最多100字。嗯 我来试试，测试简介，最多100字。嗯 我来试试，测试简介，最多100字。嗯 我来试试，',
      },
    });
    console.log('success', res);
    ctx.app.cache = res.data;
  },
};
