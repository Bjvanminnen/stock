import { getQuotes } from './yahoo';

import express from 'express';

const app = express();

app.set('json spaces', 2);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // TODO - more locked down if shipping?
  next();
});

app.get('/:symbol/:startDate/:endDate?', (req, res) => {
  const symbol = req.params.symbol || 'AAPL';
  const start = req.params.startDate || '2012-01-01';
  const end = req.params.endDate || start;

  getQuotes(symbol, start, end).then(results => {
    res.json(results);
  })
  .catch((err) => {
    console.log(err);
    res.send(err.toString());
  });
});

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('App listening on ' + server.address().port);
});
