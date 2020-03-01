'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const { redisKey } = ctx.app.sessionStore;
    console.log('redisKey', redisKey);
    console.log(await ctx.app.sessionStore.get(redisKey));
    await next();
  };
};
