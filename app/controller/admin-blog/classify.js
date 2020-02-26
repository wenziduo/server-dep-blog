'use strict';

const Controller = require('egg').Controller;

class ClassifyController extends Controller {
  async create() {
    const { ctx } = this;
    const { body } = ctx.request;
    const params = {
      title: body.title,
      imgUrl: body.imgUrl,
    };
    const resp = await ctx.service.classify.create(params);
    ctx.helper.success(resp);
  }
  async find() {
    const { ctx } = this;
    const resFind = await ctx.service.classify.find();
    ctx.helper.success(resFind);
  }
  async update() {
    const { ctx } = this;
    const params = ctx.request.body;
    const resUpdate = await ctx.service.classify.update(params);
    if (resUpdate) {
      ctx.helper.success('修改成功');
    }
  }
  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    const resDel = await ctx.service.classify.delete(params);
    if (resDel && resDel.deletedCount) {
      ctx.helper.success('成功删除');
    } else if (resDel && !resDel.deletedCount) {
      ctx.helper.error('删除失败');
    }
  }
}

module.exports = ClassifyController;
