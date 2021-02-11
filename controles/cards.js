const path = require('path');
const getDataInfo = require('../helpers/helpers');

const dataCardsPath = path.join(__dirname, '../data/cards.json');

const getCards = (req, res) => getDataInfo(dataCardsPath)
  .then((cards) => {
    res.send(cards);
  })
  .catch(() => {
    res.status(500).send({ message: 'Файл с данными не найден' });
  });

module.exports = getCards;
