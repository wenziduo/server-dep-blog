'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/blog/home', controller.blog.home.index);
  // router.get('/api/blog/home/work', controller.blog.home.work);
  router.get('/api/blog/classify/find', controller.blog.classify.find); // 查找分类
  router.get('/api/blog/post/findNewList', controller.blog.post.findNewList); // 最新文章列表
  router.get('/api/blog/post/findList', controller.blog.post.findList); // 文章列表
  router.get('/api/blog/post/detail', controller.blog.post.detail); // 文章详情
  // 第三方
  router.get('/api/blog/qiniu/getQiniuToken', controller.common.qiniu.getQiniuToken); // 文获取七牛token
  // 后台
  router.post('/api/admin-blog/user/login', controller.adminBlog.user.login);
  router.get('/api/admin-blog/user/getInfo', controller.adminBlog.user.getInfo);
  router.get('/api/admin-blog/classify/find', controller.adminBlog.classify.find); // 查找分类
  router.post('/api/admin-blog/classify/create', controller.adminBlog.classify.create); // 创建分类
  router.post('/api/admin-blog/classify/update', controller.adminBlog.classify.update); // 编辑分类
  router.post('/api/admin-blog/classify/delete', controller.adminBlog.classify.delete); // 删除分类
  router.get('/api/admin-blog/post/find', controller.adminBlog.post.find); // 文章列表
  router.get('/api/admin-blog/post/detail', controller.adminBlog.post.detail); // 文章详情
  router.post('/api/admin-blog/post/create', controller.adminBlog.post.create); // 创建文章
  router.post('/api/admin-blog/post/edit', controller.adminBlog.post.edit); // 文章编辑
  router.post('/api/admin-blog/post/delete', controller.adminBlog.post.delete); // 文章删除
  // 第三方
  router.get('/api/admin-blog/qiniu/getQiniuToken', controller.common.qiniu.getQiniuToken); // 文获取七牛token
};
