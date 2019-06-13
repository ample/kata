// ---------------------------------------- | Setup

const chai = require('chai');
const assert = chai.assert;

// ---------------------------------------- | Function

function filterList(l) {
  return l.filter(n => typeof n === 'number');
}

// ---------------------------------------- | Tests

describe('filterList()', () => {
  it('should return an array', () => {
    assert.typeOf(filterList(['a']), 'array');
  });

  it('should return only numbers', () => {
    const results = filterList(['a', 1, 2, 'waffles']);
    results.every(el => assert.typeOf(el, 'number'));
  });

  it('should satisfy test case #1', () => {
    const results = filterList([1, 2, 'a', 'b']);
    assert.sameMembers(results, [1, 2]);
  });

  it('should satisfy test case #2', () => {
    const results = filterList([1, 'a', 'b', 0, 15]);
    assert.sameMembers(results, [1, 0, 15]);
  });

  it('should satisfy test case #3', () => {
    const results = filterList([1, 2, 'aasf', '1', '123', 123]);
    assert.sameMembers(results, [1, 2, 123]);
  });
});
