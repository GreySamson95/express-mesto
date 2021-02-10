const router = require('express').Router();
const { getUsers, getUser } = require('../controles/users');

router.get('/users', getUsers);

router.get('/users/:id', getUser);

module.exports = router;
