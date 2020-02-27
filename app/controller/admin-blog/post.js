'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async create() {
    const { ctx } = this;
    const resp = await ctx.service.post.create();
    ctx.helper.success(resp);
  }
  async find() {
    const { ctx } = this;
    // const params = ctx.request.query;
    const res = await ctx.service.post.find();
    // res.forEach(item => {
    //   item.text = (item.text || '').slice(0, params.textLength || 50);
    // });
    ctx.helper.success(res);
  }
  async detail() {
    const { ctx } = this;
    const params = ctx.request.query;
    const res = await ctx.service.post.detail(params);
    ctx.helper.success(res);
  }
  async edit() {
    const { ctx } = this;
    const params = ctx.request.body;
    const res = await ctx.service.post.edit(params);
    ctx.helper.success(res);
  }
  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    const resp = await ctx.service.post.delete(params);
    ctx.helper.success(resp);
  }
}

module.exports = PostController;
