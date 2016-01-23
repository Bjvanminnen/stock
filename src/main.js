import { getQuotes } from './yahoo';

import express from 'express';

const app = express();

app.set('json spaces', 2);

app.get('/yahoo', (req, res) => {
  getQuotes('AAPL').then(results => {
    res.json(results);
  })
  .catch((err) => console.log(err));
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('App listening on ' + server.address().port);
});


