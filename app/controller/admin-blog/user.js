'use strict';

const Controller = require('egg').Controller;
const moment = require('moment');

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    const resInfo = await ctx.service.user.login(params);
    const uuid = ctx.helper.uuid();
    const redisKey = `admin-${uuid}-${moment().valueOf()}`;
    if (resInfo) {
      ctx.app.sessionStore.set(redisKey, resInfo);
      ctx.cookies.set('sessionId', redisKey);
      ctx.helper.success(resInfo);
    } else {
      ctx.helper.error('用户名或密码错误');
    }
  }
  async logout() {
    const { ctx } = this;
    const sessionId = ctx.cookies.get('sessionId');
    const redisKey = `admin-${sessionId}-${moment().valueOf()}`;
    await ctx.app.sessionStore.destroy(redisKey);
    ctx.helper.success('成功退出');
  }
  async getInfo() {
    const { ctx } = this;
    const redisKey = ctx.cookies.get('sessionId');
    const resInfo = await ctx.service.user.userInfo(redisKey);
    ctx.helper.success(resInfo);
  }
}

module.exports = UserController;
