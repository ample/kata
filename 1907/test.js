// ---------------------------------------- | Setup

const chai = require('chai');
const assert = chai.assert;

// ---------------------------------------- | Tests

const tests = {
  createPhoneNumber: function(name, fn) {
    describe(`${name.toUpperCase()}: createPhoneNumber()`, () => {
      it('should satisfy test case #1', () => {
        const results = fn.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        assert.equal(results, '(123) 456-7890');
      });

      it('should satisfy test case #2', () => {
        const results = fn.createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        assert.equal(results, '(111) 111-1111');
      });

      it('should satisfy test case #3', () => {
        const results = fn.createPhoneNumber([]);
        assert.equal(results, false);
      });

      it('should satisfy test case #4', () => {
        const results = fn.createPhoneNumber([1]);
        assert.equal(results, false);
      });

      it('should satisfy test case #5', () => {
        const results = fn.createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]);
        assert.equal(results, false);
      });
    });
  },

  positiveSum: function(name, fn) {
    describe(`${name.toUpperCase()}: positiveSum()`, () => {
      it('should return a number', () => {
        assert.typeOf(fn.positiveSum([1, 2, 3]), 'number');
      });

      it('should satisfy test case #1', () => {
        assert.equal(fn.positiveSum([1, 2, 3, 4, 5]), 15);
      });

      it('should satisfy test case #2', () => {
        assert.equal(fn.positiveSum([1, -2, 3, 4, 5]), 13);
      });

      it('should satisfy test case #3', () => {
        assert.equal(fn.positiveSum([]), 0);
      });

      it('should satisfy test case #4', () => {
        assert.equal(fn.positiveSum([-1, -2, -3, -4, -5]), 0);
      });

      it('should satisfy test case #5', () => {
        assert.equal(fn.positiveSum([-1, 2, 3, 4, -5]), 9);
      });
    });
  }
};

// ---------------------------------------- | Run Tests

const solutions = require('./test-cases');

for (let test of Object.keys(solutions)) {
  for (let dev of solutions[test]) {
    const fl = require(`./solutions/${dev}`);
    tests[test](dev, fl);
  }
}
