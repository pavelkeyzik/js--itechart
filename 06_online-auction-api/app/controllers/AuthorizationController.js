const jwt = require('jsonwebtoken');
const config = require('../config');
const UsersModel = require('../models/UsersModel');
const messages = require('../messages');

class AuthorizationController {
  login(req, res) {
    UsersModel.getUser(req.body.id)
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: messages.userNotFoundMessage });
        }

        const { id, name, surname } = user;
        const userInfo = { id, name, surname };

        req.login(userInfo, err => {
          if (err) {
            res.send(err);
          }

          const token = jwt.sign(userInfo, config.jwt_secret, {
            expiresIn: config.jwt_expiration_time,
          });
          return res.send({ token });
        });
      })
      .catch(error => {
        res.status(500).send({
          message: error.message,
          status: 500,
        });
      });
  }
}

module.exports = new AuthorizationController();
