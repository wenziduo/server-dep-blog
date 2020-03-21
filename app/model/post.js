'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const PostSchema = new Schema(
    {
      title: { type: String, unique: true, required: true, index: true },
      imgUrl: { type: String, required: true },
      markdownUrl: { type: String, required: true, index: true },
      textUrl: { type: String, required: true, index: true },
      introduction: { type: String, required: true, index: true },
      watch: { type: Number, default: 0 },
      author: { type: String, default: '蚊子' },
      createTime: { type: Date },
      modifyTime: { type: Date },
      classifyId: { type: Schema.Types.ObjectId, required: true },
    },
    {
      versionKey: false,
    }
  );

  return mongoose.model('Post', PostSchema);
};
