'use strict';

const Controller = require('egg').Controller;

class StatisticsController extends Controller {
  async create() {
    const { body } = this.ctx.request;
    const params = {
      ...body,
    };
    const resp = await this.ctx.service.statistics.create(params);
    if (resp) {
      this.ctx.helper.success('统计成功');
    }
  }
  async find() {
    const { query } = this.ctx.request;
    const params = {
      type: query.type,
    };
    const option = {
      page: query.page || 1,
      pageSize: query.pageSize || 10,
    };
    const resp = await this.ctx.service.statistics.find(params, option);
    if (resp) {
      this.ctx.helper.success(resp);
    }
  }
}

module.exports = StatisticsController;
