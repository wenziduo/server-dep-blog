'use strict';
const Service = require('egg').Service;
class ClassifyService extends Service {
  async create(params) {
    const { ctx } = this;
    const resFind = await ctx.model.Classify.findOne({
      title: params.title,
    });
    if (resFind) {
      ctx.helper.error('该类别名重名');
      return;
    }
    const resCreate = await ctx.model.Classify.create({
      ...params,
    });
    return resCreate;
  }
  async find() {
    const { ctx } = this;
    const resFind = await ctx.model.Classify.find().sort({ _id: -1 });
    return resFind;
  }
  async update(params) {
    const { ctx } = this;
    const {
      request: { body },
    } = ctx;
    const resFind = await ctx.model.Classify.findOne({
      title: body.title,
      _id: {
        $ne: body._id,
      },
    });
    if (resFind) {
      ctx.helper.error('该类别名重名');
      return;
    }
    const resCreate = await ctx.model.Classify.updateOne({
      _id: params._id,
    }, {
      ...params,
    });
    return resCreate;
  }
  async delete(params) {
    const { ctx } = this;
    const postCount = await ctx.service.post.findListCount({
      classifyId: params._id,
    });
    if (postCount > 0) {
      ctx.helper.error(`该分类下有${postCount}篇文章，请先删除该分类下的文章！`);
      return;
    }
    const resDel = await ctx.model.Classify.deleteOne({
      _id: params._id,
    });
    return resDel;
  }
  async updateCount(params, count) {
    const { ctx } = this;
    const resFind = await ctx.model.Classify.updateOne(
      { ...params },
      { $set: { count } }
    );
    return resFind;
  }
}
module.exports = ClassifyService;
