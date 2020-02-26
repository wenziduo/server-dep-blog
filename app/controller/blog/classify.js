'use strict';

const Controller = require('egg').Controller;

class ClassifyController extends Controller {
  async find() {
    const { ctx } = this;
    const resp = await ctx.service.classify.find();
    ctx.helper.success(resp);
  }
}

module.exports = ClassifyController;
