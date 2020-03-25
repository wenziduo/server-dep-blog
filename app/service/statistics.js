'use strict';

const Service = require('egg').Service;
const moment = require('moment');

class StatisticsService extends Service {
  async create(params) {
    const {
      type,
    } = params;
    if (type == 0) {
      // pv
      const resp = await this.ctx.model.Statistics.findOne({
        type,
        createTime: {
          $gte: new Date(moment().format('YYYY-MM-DD HH:mm:ss')),
          $lte: new Date(moment().format('YYYY-MM-DD HH:mm:ss')),
        },
        ip: this.ctx.request.ip,
      });
      if (resp) {
        this.ctx.helper.success('已存在该pv');
        return;
      }
    }
    const resp = await this.ctx.model.Statistics.create({
      type,
      ip: this.ctx.request.ip,
    });
    return resp;
  }
  async find(params, option) {
    const {
      type,
    } = params;
    const pageState = this.ctx.helper.getPage(option.page, option.pageSize);
    const resp = await this.ctx.model.Statistics.find({
      type,
    })
      .sort({ createTime: -1 })
      .skip(pageState.skip)
      .limit(pageState.limit);
    const resCount = await this.ctx.model.Statistics.find({ type }).count();
    return this.ctx.helper.getPageData(pageState.page, pageState.pageSize, resCount, resp);
  }
}

module.exports = StatisticsService;
