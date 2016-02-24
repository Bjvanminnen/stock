import _ from 'lodash';
// const example = {
//   symbols: ['MSFT', 'SPY'],
//   data: {
//     MSFT: {
//       ticker: [
//         {
//           start,
//           end,
//           data
//         },
//         {
//           start,
//           end,
//           data
//         }
//       ],
//       dividend: [
//         {
//           start,
//           end,
//           data
//         },
//         {
//           start,
//           end,
//           data
//         }
//       ]
//     },
//     SPY: {
//     }
//   }
//
// };

export const initialState = {
  symbols: [],
  data: {}
};

export default function reducer(state = initialState, action) {
}

export function addSymbol(state, symbol) {
  return {
    symbols: _.uniq(state.symbols.concat(symbol)),
    data: {
      ...state.data,
      [symbol]: state.data[symbol] || {}
    }
  };
}
