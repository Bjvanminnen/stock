"use strict"

import YF from 'yahoo-finance';

export const getQuotes = (symbol) => {
  return new Promise((resolve, reject) => {
    YF.historical({
      symbol,
      from: '2012-01-01',
      to: '2012-01-05'
    }, (err, results) => {
      console.log('done');
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};
