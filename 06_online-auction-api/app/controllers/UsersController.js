const UsersModel = require('../models/UsersModel');
const logger = require('../../logger');

const userNotFoundMessage = 'User not found';
const usersNotFoundMessage = 'Users not found';
const userAddedSuccessfulMessage = 'User added successful';

class UsersController {
  getListOfUsers(req, res) {
    UsersModel.getUsers()
      .then(data => {
        if (!data.length) {
          logger.info(usersNotFoundMessage);
          return res.status(404).send({ message: usersNotFoundMessage });
        }
        res.status(200).send(data);
      })
      .catch(error => {
        logger.error(error.message);
        res.status(error.status).send(error);
      });
  }

  getUser(req, res) {
    const { id } = req.params;

    UsersModel.getUser(id)
      .then(data => {
        if (!data) {
          logger.info(userNotFoundMessage);
          return res.status(404).send({ message: userNotFoundMessage });
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

  addNewUser(req, res) {
    UsersModel.addNewUser(req.body)
      .then(() => {
        res.status(200).send({ message: userAddedSuccessfulMessage });
      })
      .catch(error => {
        logger.error(error.message);
        res.status(500).send({ message: error.message });
      });
  }
}

module.exports = new UsersController();
