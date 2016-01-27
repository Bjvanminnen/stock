const tickerUrl = (symbol, start, end) => (
  `http://localhost:8000/?symbol=${symbol}&startDate=${start}&endDate=${end}`
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

export const getTickerData = (symbol, start, end) => {
  const url = tickerUrl(symbol, start, end);
  return getData(url)
  .then(json => {
    return json.map(item => ({
      // all we care about for now is date and close
      date: new Date(item.date),
      close: item.close
    }));
  });
};

export const getDividendData = (symbol, start, end) => {
  const url = dividendUrl(symbol, start, end);
  return getData(url)
  .then(json => {
    return json.map(item => ({
      // all we care about is date and dividends
      date: new Date(item.date),
      dividends: item.dividends
    }));
  });
};
