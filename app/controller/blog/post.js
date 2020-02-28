'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async findNewList() {
    const { ctx } = this;
    const params = ctx.request.query;
    const res = await ctx.service.post.find({ classifyId: params.classifyId }, { pageSize: 5, substrLength: 200 });
    ctx.helper.success(res);
  }
  async findList() {
    const { ctx } = this;
    const res = await ctx.service.post.find({}, { substrLength: 200 });
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
