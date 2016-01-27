import { getQuotes, getDividends } from './yahoo';
import { wrap } from './wrapHttp';

import express from 'express';

wrap();

const app = express();

app.set('json spaces', 2);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // TODO - more locked down if shipping?
  next();
});

app.get('/', (req, res) => {
  const symbol = req.query.symbol || 'AAPL';
  const start = req.query.startDate || '2012-01-01';
  const end = req.query.endDate || start;
  const isDividend = req.query.dividend && req.query.dividend !== 'false';

  const getData = isDividend ? getDividends : getQuotes;

  getData(symbol, start, end).then(results => {
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
