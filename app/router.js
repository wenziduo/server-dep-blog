'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/home', controller.home.index);
  router.get('/api/home/work', controller.home.work);
  router.post('/api/user/login', controller.user.login);
  router.get('/api/classify/find', controller.classify.find); // 查找分类
  router.post('/api/classify/create', controller.classify.create); // 创建分类
  router.post('/api/classify/update', controller.classify.update); // 编辑分类
  router.post('/api/classify/delete', controller.classify.delete); // 删除分类
  router.post('/api/post/create', controller.post.create); // 创建文章
  router.get('/api/post/find', controller.post.find); // 文章列表
  router.get('/api/post/detail', controller.post.detail); // 文章详情
  router.get('/api/post/test', controller.post.test); // 文章详情
  router.post('/api/post/edit', controller.post.edit); // 文章编辑
  router.post('/api/post/delete', controller.post.delete); // 文章删除
  // 第三方
  router.get('/api/qiniu/getQiniuToken', controller.qiniu.getQiniuToken); // 文获取七牛token
};
