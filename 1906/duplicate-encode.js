// ---------------------------------------- | Setup tests

const chai = require('chai');
const assert = chai.assert;

// ---------------------------------------- | Function

function duplicateEncode(word) {
  return [...word.toLowerCase()].map((n, i, w) => (w.join('').split(n).length == 2 ? '(' : ')')).join('');
}

// ---------------------------------------- | Tests

describe('duplicateEncode()', () => {
  it('should return a string', () => {
    assert.typeOf(duplicateEncode('din'), 'string');
  });

  it('should satisfy test case #1', () => {
    assert.equal(duplicateEncode('din'), '(((');
  });

  it('should satisfy test case #2', () => {
    assert.equal(duplicateEncode('recede'), '()()()');
  });

  it('should satisfy test case #3', () => {
    assert.equal(duplicateEncode('Success'), ')())())');
  });

  it('should satisfy test case #4', () => {
    assert.equal(duplicateEncode('(( @'), '))((');
  });
});
