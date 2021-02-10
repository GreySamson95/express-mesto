const express = require('express');

const app = express();
const path = require('path');

const PORT = 3000;

const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');
const errorRouter = require('./routes/errorUrl');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cardsRouter);
app.use('/', usersRouter);
app.use('/', errorRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`On port ${PORT}`);
});
