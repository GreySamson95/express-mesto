const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => { res.send(users); })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

const getUser = (req, res) => {
  const { id } = req.params;
  User.findById({ _id: id })
    .then((user) => {
      return res.send({ user });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      } else {
        res.status(500).send({ message: 'Ошибка на стороне сервера' });
      }
    });
};

const postUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => { res.send({ body: user }); })
    .catch((err) => {
      if (err.name === 'ValidationCastError') {
        res.status(400).send({ message: 'Некорректно введенные данные' });
      } else {
        res.status(500).send({ message: 'Ошибка на стороне сервера' });
      }
    });
};

const getMe = (req, res) => {
  User.findById(req.user._id)
    .then((user) => {
      return res.send({ user });
    })
    .catch(() => {
      res.status(500).send({ message: 'Ошибка на стороне сервера' });
    });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => { res.send({ data: user }); })
    .catch((err) => {
      if (err.name === 'ValidationCastError') {
        res.status(400).send({ message: 'Некорректно введенные данные' });
      } else {
        res.status(500).send({ message: 'Ошибка на стороне сервера' });
      }
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => { res.send({ data: user }); })
    .catch((err) => {
      if (err.name === 'ValidationCastError') {
        res.status(400).send({ message: 'Некорректно введенные данные' });
      } else {
        res.status(500).send({ message: 'Ошибка на стороне сервера' });
      }
    });
};

module.exports = {
  getUsers, getUser, postUser, getMe, updateUser, updateAvatar,
};
