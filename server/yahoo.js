"use strict"

import YF from 'yahoo-finance';

const Period = {
  Daily: 'd',
  Dividend: 'v'
};

export const getQuotes = (...args) => {
  return yahooRequest(...args, Period.Daily);
};

export const getDividends = (...args) => {
  return yahooRequest(...args, Period.Dividend);
};

const yahooRequest = (symbols, start, end, period) => {
  return new Promise((resolve, reject) => {
    console.log(`requesting ${symbols} ${start}, ${end}`);
    YF.historical({
      from: start,
      to: end,
      symbols,
      period
    }, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};
