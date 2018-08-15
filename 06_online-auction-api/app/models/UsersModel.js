const db = require('../../db');
const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

const User = db.model('User', schema);

class UserModel {
  async getUsers() {
    return await User.find((err, users) => {
      if (err) {
        return Error(err);
      }

      return users;
    });
  }

  async getUser(id) {
    return await User.findById(id, (err, document) => {
      if (err) {
        return Error(err);
      }

      return document;
    });
  }

  async getUserByPhone(phoneNumber) {
    return await User.findOne({ phoneNumber }, (err, document) => {
      if (err) {
        return Error(err);
      }

      return document;
    });
  }

  async addNewUser(data) {
    const user = new User(data);

    try {
      return await user.save();
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = new UserModel();
