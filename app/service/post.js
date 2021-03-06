'use strict';
const Service = require('egg').Service;
class PostService extends Service {
  async create() {
    const { ctx } = this;
    const {
      request: { body },
    } = ctx;
    const resFindTitle = await ctx.model.Post.findOne({ title: body.title });
    if (resFindTitle) {
      ctx.helper.error('标题重名，请更换');
      return;
    }
    const resFindClassify = await ctx.model.Classify.findOne({
      _id: body.classifyId,
    });
    if (!resFindClassify) {
      ctx.helper.error('没有该分类');
      return;
    }
    const params = { ...body };
    const resCreateTitle = await ctx.model.Post.create({
      title: params.title,
      classifyId: params.classifyId,
      imgUrl: params.imgUrl,
      contentUrl: params.contentUrl,
      markdownUrl: params.markdownUrl,
      textUrl: params.textUrl,
      introduction: params.introduction,
      createTime: new Date(),
      modifyTime: new Date(),
    });
    const resCount = await ctx.model.Post.find(
      {
        classifyId: params.classifyId,
      },
      { _id: 1 }
    ).count();
    await ctx.service.classify.updateCount({ _id: params.classifyId }, resCount);
    if (resCreateTitle) {
      return resCreateTitle;
    }
  }
  async find(params = {}, option = {}) {
    const { ctx } = this;
    const pageState = ctx.helper.getPage(option.page, option.pageSize);
    const resFind = await ctx.model.Post.aggregate(
      [{
        $match: {
          ...params,
        },
      }, {
        $sort: {
          createTime: -1,
        },
      }, {
        $skip: pageState.skip,
      }, {
        $limit: pageState.limit,
      }, {
        $project: {
          title: 1,
          imgUrl: 1,
          author: 1,
          introduction: 1,
          createTime: 1,
          watch: 1,
          // text: {
          //   $substrCP: [ '$minText', 0, option.substrLength || 50 ],
          // },
        },
      }]
    ).allowDiskUse(true);
    const resCount = await ctx.model.Post.find({ ...params }).count();
    return ctx.helper.getPageData(pageState.page, pageState.pageSize, resCount, resFind);
  }
  async edit(params) {
    const resp = await this.ctx.model.Post.updateOne({
      _id: params._id,
    }, {
      ...params,
      modifyTime: new Date(),
    });
    if (resp) {
      return resp;
    }
  }
  async delete(params) {
    console.log('params', params);
    const session = await this.ctx.helper.getSession();
    let resp;
    try {
      console.log('开始');
      const reg = new RegExp(params.title, 'i'); // 不区分大小写
      resp = await this.ctx.model.Post.deleteMany({
        // _id: params._id,
        $or: [
          { title: { $regex: reg } },
        ],
      });
      console.log('resp', resp);
      const resCount = await this.ctx.service.post.getClassifyCount(params);
      console.log('resCount', resCount);
      const res = await this.ctx.service.classify.updateCount({ _id: params.classifyId }, resCount);
      console.log('res', res);
      // 提交事务
      // await session.commitTransaction();
      // this.ctx.end();
    } catch (err) {
      // 事务回滚
      console.log('事务回滚');
      await session.abortTransaction();
      throw err;
    } finally {
      console.log('事务结束');
      await session.endSession();
      console.log('事务成功');
      this.ctx.helper.success('成功');
    }
  }
  async getClassifyCount(params) {
    const resCount = await this.ctx.model.Post.find(
      {
        classifyId: params.classifyId,
      },
      { _id: 1 }
    ).count();
    return resCount;
  }
  async detail(params) {
    const StringDecoder = require('string_decoder').StringDecoder;
    const decoder = new StringDecoder('utf8');
    const { ctx } = this;
    const oldResFindOne = await ctx.model.Post.findOneAndUpdate(
      {
        _id: params._id,
      },
      {
        $inc: { watch: 1 },
      },
      {
        new: true,
      }
    );
    const resFindOne = oldResFindOne.toJSON({ getters: true }); // console.log('resFindOne.title', resFindOne.title)
    // 请求详情数据
    const classifyFindOne = await ctx.model.Classify.findOne({
      _id: resFindOne.classifyId,
    });
    // console.log('classifyFindOne', classifyFindOne)
    if (!resFindOne) {
      ctx.header.error('文章id不正确');
      return;
    }
    console.log('oldResFindOne数据：', oldResFindOne);
    // 请求oss文章
    // const resText = await ctx.curl('http://wenzi.douerpiao.club/test.txt');
    // const strText = decoder.write(Buffer.from(resText.data));
    // 请求oss文章markdown
    console.log('开始请求oss markdown');
    const resTextMarkdown = await ctx.curl(oldResFindOne.markdownUrl);
    console.log('结束请求oss markdown');
    console.log('结果为', resTextMarkdown);
    const strMarkdown = decoder.write(Buffer.from(resTextMarkdown.data));
    resFindOne.classifyData = classifyFindOne;
    // resFindOne.text = strText;
    resFindOne.markdown = strMarkdown;
    // 上一篇和下一篇
    const prevData = await ctx.model.Post.find(
      {
        createTime: { $gte: resFindOne.createTime },
        classifyId: resFindOne.classifyId,
      },
      {
        _id: 1,
        title: 1,
        introduction: 1,
        imgUrl: 1,
      }
    )
      .sort({ createTime: 1 })
      .limit(2);
    const nextData = await ctx.model.Post.find(
      {
        createTime: { $lte: resFindOne.createTime },
        classifyId: resFindOne.classifyId,
      },
      {
        _id: 1,
        title: 1,
        introduction: 1,
        imgUrl: 1,
      }
    )
      .sort({ createTime: -1 })
      .limit(2);
    // 猜你喜欢
    const guessData = await ctx.model.Post.find(
      {
        _id: {
          $nin: [
            resFindOne._id,
            prevData.length === 2 ? prevData[1]._id : resFindOne._id,
            nextData.length === 2 ? nextData[1]._id : resFindOne._id,
          ],
        },
        classifyId: resFindOne.classifyId,
      },
      {
        _id: 1,
        title: 1,
        introduction: 1,
        imgUrl: 1,
      }
    )
      .sort({ watch: -1 })
      .limit(8);
    resFindOne.prevData = prevData.filter((item, index) => index > 0);
    resFindOne.nextData = nextData.filter((item, index) => index > 0);
    resFindOne.guessData = guessData;
    return resFindOne;
  }
  async findListCount(params) {
    return await this.ctx.model.Post.find({ ...params }).count();
  }
}
module.exports = PostService;
