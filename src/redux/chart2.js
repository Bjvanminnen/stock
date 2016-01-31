import { REQUEST_CHART2_DATA } from './actions';

import normalizeData from './normalizeData';

const processData = (symbolTicker, symbolDividend, indexTicker, indexDividend) => {
  const normalSymbol = normalizeData(symbolTicker, symbolDividend);
  const normalIndex = normalizeData(indexTicker, indexDividend);

  if (normalSymbol.length !== normalIndex.length) {
    throw new Error('unexpected');
  }

  return normalSymbol.map((symbolRow, index) => {
    const indexRow = normalIndex[index];
    if (symbolRow[0].getTime() !== indexRow[0].getTime()) {
      throw new Error('different dates');
    }

    return [
      indexRow[0], // data
      symbolRow[2],
      indexRow[2]
    ];
  });
};

export default function chart2(state={}, action, dataResponses) {
  if (action.type === REQUEST_CHART2_DATA) {
    const { index, symbol, start, end } = action;
    return {
      ...state,
      index,
      symbol,
      start,
      end,
      processed: null
    };
  }

  const { ticker, dividend } = dataResponses;
  const { index, symbol } = state;
  if (!index || !symbol || state.processed) {
    return state;
  }

  const symbolTicker = ticker[symbol];
  const symbolDividend = dividend[symbol];
  const indexTicker = ticker[index];
  const indexDividend = dividend[index];
  if (!symbolTicker || !symbolDividend || !indexTicker || !indexDividend) {
    return state;
  }

  return {
    ...state,
    processed: processData(symbolTicker, symbolDividend, indexTicker, indexDividend)
  };
}
