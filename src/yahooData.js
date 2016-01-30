import _ from 'lodash';

const tickerUrl = (symbols, start, end) => (
  `http://localhost:8000/?symbols=${symbols}&startDate=${start}&endDate=${end}`
);

const dividendUrl = (...args) => tickerUrl(...args) + '&dividend=true';

const getData = function (url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(response => {
      response.json().then(json => {
        resolve(json);
      });
    })
    .catch(reject);
  });
};

const dateAndClose = (stockData) => {
  return stockData.map(item => ({
    // all we care about for now is date and close
    date: new Date(item.date),
    close: item.close
  }));
};

const dateAndDividends = (stockData) => {
  return stockData.map(item => ({
    // all we care about is date and dividends
    date: new Date(item.date),
    dividends: item.dividends
  }));
};

export const getTickerData = (symbols, start, end) => {
  const url = tickerUrl(symbols, start, end);
  return getData(url)
  .then(json => _.mapValues(json, dateAndClose));
};

export const getDividendData = (symbols, start, end) => {
  const url = dividendUrl(symbols, start, end);
  return getData(url)
  .then(json => _.mapValues(json, dateAndDividends));
};
