const UsersModel = require('../models/UsersModel');

class UsersController {
  getListOfUsers(req, res) {
    UsersModel.getUsers((err, data) => {
      if (err) {
        throw Error(err);
      }

      res.send(data);
    });
  }

  getUser(req, res) {
    const { id } = req.params;

    UsersModel.getUser(id, (err, data) => {
      if (err) {
        res.sendStatus(404);
      }

      res.send(data);
    });
  }
}

module.exports = new UsersController();
