const db = require('../../db');
const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    name: 'string',
    surname: 'string',
    email: 'string',
    phoneNumber: 'string',
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
        throw {
          message: 'List of users is empty',
          status: 404,
        };
      }

      if (!users || users.length <= 0) {
        throw {
          message: 'List of users is empty',
          status: 404,
        };
      }

      return users;
    });
  }

  async getUser(id) {
    return await User.findOne({ _id: id }, (err, document) => {
      if (err) {
        throw {
          message: 'Cannot find in DataBase or bad query',
          status: 500,
        };
      }

      return document;
    });
  }

  async addNewUser(data) {
    User.create(data, err => {
      if (err) {
        throw {
          message: err,
          status: 500,
        };
      }
    });

    return {
      message: 'User added successfuly',
      status: 200,
    };
  }
}

module.exports = new UserModel();
