'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const { path } = ctx.request;
    if (path.search('/blog') !== -1 || path.search('/admin-blog') !== -1) {
      await ctx.service.statistics.create({ type: 0 });
    }
    await next();
  };
};
