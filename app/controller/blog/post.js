'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async find() {
    const { ctx } = this;
    const params = ctx.request.query;
    const res = await ctx.service.post.find({ classifyId: params.classifyId });
    res.forEach(item => {
      item.text = (item.text || '').slice(0, params.textLength || 50);
    });
    ctx.helper.success(res);
  }
  async detail() {
    const { ctx } = this;
    const params = ctx.request.query;
    const res = await ctx.service.post.detail(params);
    ctx.helper.success(res);
  }
}

module.exports = PostController;
