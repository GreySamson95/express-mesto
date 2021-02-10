const path = require('path');
const getDataInfo = require('../helpers/helpers');

const dataUsersPath = path.join(__dirname, '../data/users.json');

const getUsers = (req, res) => getDataInfo(dataUsersPath)
  .then((users) => { res.status(200).send(users); })
  .catch((err) => { res.status(400).send(err); });

const getUser = (req, res) => getDataInfo(dataUsersPath)
  .then((users) => users.find((item) => (item._id === req.params.id)))
  .then((user) => {
    if (!user) {
      return res.status(404).send(JSON.parse({ message: 'Нет пользователя с таким id' }));
    }
    return res.status(200).send(user);
  })
  .catch(() => { res.status(400).send({ message: 'Что-то пошло не так' }); });

module.exports = { getUsers, getUser };
