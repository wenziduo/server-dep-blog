'use strict';

const Controller = require('egg').Controller;
const qiniu = require('qiniu');

class QiniuController extends Controller {
  async getQiniuToken() {
    const mac = new qiniu.auth.digest.Mac(
      this.app.config.qiniuyun.accessKey,
      this.app.config.qiniuyun.secretKey
    );
    const options = {
      scope: this.app.config.qiniuyun.bucket,
      expires: 3600 * 24,
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    this.ctx.helper.success(uploadToken);
  }
}

module.exports = QiniuController;
