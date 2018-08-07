class UserModel {
  getUsers(cb) {
    const data = [
      {
        id: 1,
        name: 'Pavel',
        surname: 'Keyzik',
        email: 'pavel.keyzik@gmail.com',
        phoneNumber: '375291234567',
      },
      {
        id: 2,
        name: 'Dmitriy',
        surname: 'Fallow',
        email: 'fallow.d@gmail.com',
        phoneNumber: '71234567',
      },
    ];

    cb(null, data);
  }

  getUser(id, cb) {
    this.getUsers((err, data) => {
      if (err) {
        cb(err);
      }

      const res = data.find(i => i.id === +id);

      if (!res) {
        cb(404);
      }

      cb(null, res);
    });
  }
}

module.exports = new UserModel();
