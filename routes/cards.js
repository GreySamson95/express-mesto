const router = require('express').Router();

const getCards = require('../controles/cards');

router.get('/cards', getCards);

module.exports = router;
