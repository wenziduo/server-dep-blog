/* eslint-disable no-bitwise */
'use strict';

module.exports = {
  success(data) {
    this.ctx.body = {
      data,
      success: true,
    };
  },
  error(message) {
    this.ctx.body = {
      message,
      success: false,
    };
  },
  noLogin() {
    this.ctx.body = {
      message: '请登录',
      success: false,
      returnCode: '000000',
    };
  },
  // 获取session，回滚事务
  async getSession(
    opt = {
      readConcern: { level: 'snapshot' },
      writeConcern: { w: 'majority' },
    }
  ) {
    const { mongoose } = this.app;
    const session = await mongoose.startSession(opt);
    await session.startTransaction();
    return session;
  },
  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  // 分页
  getPage(currentPage = 1, pageSize = 10) {
    const skip = currentPage * pageSize + 1;
    const limit = pageSize;
    return {
      skip, limit,
    };
  },
  // 组装分页数据
  getPageData(currentPage, pageSize, data) {
    return {
      currentPage,
      pageSize,
      data,
    };
  },
};
