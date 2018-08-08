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
        return;
      }

      res.send(data);
    });
  }

  addNewUser(req, res) {
    UsersModel.addNewUser(req.body, err => {
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.sendStatus(200);
    });
  }
}

module.exports = new UsersController();
