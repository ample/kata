const chai = require('chai');
const glob = require('glob');
const path = require('path');

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

const files = glob
  .sync('./1907/solutions/*.js')
  .map(f => path.basename(f))
  .filter(f => path.basename(f) !== '_default.js');

for (let filename of files) {
  for (let test of Object.keys(tests)) {
    const fn = require(`./solutions/${filename}`);
    const dev = filename.replace(path.extname(filename), '');
    if (fn[test]) tests[test](dev.toUpperCase(), fn);
  }
}
