'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login(params) {
    const { ctx } = this;
    const resInfo = await ctx.model.UserAdmin.findOne({
      userInfo: params.userInfo,
      passWord: params.passWord,
    });
    return resInfo;
  }
  async userInfo(redisKey) {
    const { ctx } = this;
    const redisInfo = await ctx.app.sessionStore.get(redisKey);
    return redisInfo;
  }
}

module.exports = UserService;
