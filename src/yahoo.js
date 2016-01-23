"use strict"

import YF from 'yahoo-finance';

export const getQuotes = (symbol, start, end) => {
  return new Promise((resolve, reject) => {
    console.log(`requesting ${symbol} ${start}, ${end}`);
    YF.historical({
      symbol,
      from: start, 
      to: end 
    }, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};
