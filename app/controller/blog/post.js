'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async findNewList() {
    const { ctx } = this;
    const res = await ctx.service.post.find({}, { pageSize: 5, substrLength: 60 });
    ctx.helper.success(res);
  }
  async findList() {
    const { ctx, app } = this;
    const params = ctx.request.query;
    const ObjectId = app.mongoose.Types.ObjectId;
    const res = await ctx.service.post.find({ classifyId: new ObjectId(params.classifyId) }, { substrLength: 20 });
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
