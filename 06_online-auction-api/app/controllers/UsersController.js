const UsersModel = require('../models/UsersModel');
const logger = require('../../logger');
const messages = require('../messages');

class UsersController {
  getListOfUsers(req, res) {
    UsersModel.getUsers()
      .then(data => {
        if (!data.length) {
          logger.info(messages.usersNotFoundMessage);
          return res.status(404).send({ message: messages.usersNotFoundMessage });
        }
        res.status(200).send(data);
      })
      .catch(error => {
        logger.error(error.message);
        res.status(error.status).send(error);
      });
  }

  getPersonalInfo(req, res) {
    const { id } = req.user;

    UsersModel.getUser(id)
      .then(data => {
        if (!data) {
          logger.info(messages.userNotFoundMessage);
          return res.status(404).send({ message: messages.userNotFoundMessage });
        }
        res.status(200).send(data);
      })
      .catch(error => {
        logger.error(error.message);
        res.status(500).send({
          message: error.message,
          status: 500,
        });
      });
  }
}

module.exports = new UsersController();
