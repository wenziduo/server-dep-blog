'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserAdminSchema = new Schema(
    {
      userName: { type: String, unique: true, required: true, index: true },
      passWord: { type: String, required: true },
    },
    {
      versionKey: false,
    }
  );

  return mongoose.model('User-admin', UserAdminSchema);
};
