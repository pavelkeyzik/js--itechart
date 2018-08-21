const jwt = require('jsonwebtoken');
const config = require('../config');
const UsersModel = require('../models/UsersModel');
const messages = require('../messages');

class AuthorizationController {
  login(req, res) {
    UsersModel.getUserByPhone(req.body.phoneNumber)
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: messages.userNotFoundMessage });
        }

        const { id, name, surname, role } = user;
        const userInfo = { id, name, surname, role };

        req.login(userInfo, err => {
          if (err) {
            res.send(err);
          }

          const token = generateToken(userInfo);
          return res.send({ token, role: userInfo.role });
        });
      })
      .catch(error => {
        res.status(500).send({
          message: error.message,
          status: 500,
        });
      });
  }

  registration(req, res) {
    UsersModel.addNewUser(req.body)
      .then(user => {
        if(!user) {
          return res.status(500).send({ message: messages.cannotAddNewUser });
        }

        const { id, name, surname, role } = user;
        const userInfo = { id, name, surname, role };

        const token = generateToken(userInfo);
        res.status(200).send({ message: messages.userAddedSuccessfulMessage, token, role: userInfo.role });
      })
      .catch(error => {
        res.status(500).send({ message: error.message });
      });
  }
}

const generateToken = userInfo =>
  `bearer ${jwt.sign(userInfo, config.jwt_secret, {
    expiresIn: config.jwt_expiration_time,
  })}`;

module.exports = new AuthorizationController();
