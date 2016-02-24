import { assert } from 'chai';
import { initialState, addSymbol } from './stockData';

describe('addSymbol', () => {
  it('can add a new symbol', () => {
    const state = addSymbol(initialState, 'MSFT');
    assert.deepEqual(state, {
      symbols: ['MSFT'],
      data: {
        MSFT: {}
      }
    });
  });

  it('doesnt duplicate symbols', () => {
    const startState = {
      symbols: ['MSFT'],
      data: {
        MSFT: {}
      }
    };

    const state = addSymbol(startState, 'MSFT');
    assert.deepEqual(state, {
      symbols: ['MSFT'],
      data: {
        MSFT: {}
      }
    });
  });

  it('doesnt blow away existing data', () => {
    const startState = {
      symbols: ['MSFT'],
      data: {
        MSFT: {
          foo: 'bar'
        }
      }
    };

    const state = addSymbol(startState, 'MSFT');
    assert.deepEqual(state, startState);
  });
});
