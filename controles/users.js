const path = require('path');
const getDataInfo = require('../helpers/helpers');

const dataUsersPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => getDataInfo(dataUsersPath)
  .then((users) => { res.send(users); })
  .catch(() => { res.status(500).send({ message: 'Файл с данными не найден' }); });

const getUser = (req, res) => {
  const { id } = req.params;
  // eslint-disable-next-line no-undef
  getDataInfo(dataUsersPath)
    .then((users) => {
      const user = users.find((item) => item._id === id);
      return user;
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
      return user;
    })
    .catch(() => {
      res.status(500).send({ mesage: 'Файл с данными не найден' });
    });
};

module.exports = { getUsers, getUser };
