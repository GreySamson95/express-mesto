const router = require('express').Router();
const {
  getCards, getCard, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controles/cards');

router.get('/cards', getCards);

router.get('/cards/:_id', getCard);

router.post('/cards', createCard);

router.delete('/cards/:cardId/likes', deleteCard);

router.post('/cards/:cardId/likes', likeCard);

router.delete('/cards/:cardId/likes', dislikeCard);

module.exports = router;
