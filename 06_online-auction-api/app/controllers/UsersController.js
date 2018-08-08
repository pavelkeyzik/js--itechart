const UsersModel = require('../models/UsersModel');
const logger = require('../../logger');

class UsersController {
  getListOfUsers(req, res) {
    UsersModel.getUsers()
      .then(data => res.send(data))
      .catch(error => {
        logger.error(error.message);
        res.status(error.status).send(error);
      });
  }

  getUser(req, res) {
    const { id } = req.params;

    UsersModel.getUser(id)
      .then(response => res.send(response))
      .catch(error => {
        logger.error(error.message);
        res.status(error.status).send(error);
      });
  }

  addNewUser(req, res) {
    UsersModel.addNewUser(req.body)
      .then(response => res.status(response.status).send(response))
      .catch(error => {
        logger.error(error.message);
        res.status(error.status).send(error);
      });
  }
}

module.exports = new UsersController();
