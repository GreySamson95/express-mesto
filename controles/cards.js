const path = require('path');
const getDataInfo = require('../helpers/helpers');

const dataCardsPath = path.join(__dirname, '../data/cards.json');

const getCards = (req, res) => getDataInfo(dataCardsPath)
  .then((cards) => {
    res.status(200).send(cards);
  })
  .catch((err) => { res.status(500).send(err); });

module.exports = getCards;
