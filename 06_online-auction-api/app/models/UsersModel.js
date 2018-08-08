class UserModel {
  constructor() {
    this.users = [
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
  }

  async getUsers() {
    if (!this.users || this.users.length <= 0) {
      throw {
        message: 'List of users is empty',
        status: 404,
      };
    }

    return await this.users;
  }

  async getUser(id) {
    if (Number.isNaN(+id)) {
      throw {
        message: 'Cannot identify ID. ID is a number without any symbols',
        status: 500,
      };
    }

    const users = await this.getUsers();

    if (!users) {
      throw {
        message: 'List of users is empty',
        status: 404,
      };
    }

    const res = users.find(i => i.id === +id);

    if (!res) {
      throw {
        message: 'User not found',
        status: 404,
      };
    }

    return res;
  }

  async addNewUser(data) {
    const newUser = {
      id: new Date().getTime(),
      name: data.name,
      surname: data.surname,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };

    // Instead of Schema
    if (undefined === (newUser.id && newUser.name && newUser.surname && newUser.email && newUser.phoneNumber)) {
      throw {
        message: 'Cannot to add new user. Please, check your fields in request',
        status: 500,
      };
    }

    const addedUser = await this.users.push(newUser);

    if (addedUser) {
      return {
        message: 'User added successfuly',
        status: 200,
      };
    }
  }
}

module.exports = new UserModel();
