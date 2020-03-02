'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const { path } = ctx.request;
    if (path.search('admin-blog') !== -1) {
      const redisKey = ctx.cookies.get('sessionId');
      if (!redisKey) {
        ctx.helper.noLogin();
        return;
      }
      const resInfo = await ctx.app.sessionStore.get(redisKey);
      if (!resInfo) {
        ctx.helper.noLogin();
        return;
      }
      await next();
    }
  };
};
