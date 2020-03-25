'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const Statistics = new Schema(
    {
      type: { type: Number, index: true, required: true }, // 0 为pv 1为vv
      ip: { type: String, index: true, required: true },
      city: { type: String, index: true, default: '杭州', required: true },
      createTime: { type: Date, index: true, default: new Date(), required: true },
    },
    {
      versionKey: false,
    }
  );
  return mongoose.model('statistics', Statistics);
};
