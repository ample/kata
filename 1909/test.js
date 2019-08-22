const chai = require("chai");
const glob = require("glob");
const path = require("path");

const assert = chai.assert;

// ---------------------------------------- | Tests

const tests = {
  getAverage: function(name, fn) {
    describe(`${name.toUpperCase()}: getAverage()`, () => {
      it("should return a number", () => {
        assert.typeOf(fn.getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]), "number");
      });
      it("shuold satisfy test case #1", () => {
        const results = fn.getAverage([1, 2, 3]);
        assert.equal(results, 2);
      });
      it("shuold satisfy test case #2", () => {
        const results = fn.getAverage([-2, 2]);
        assert.equal(results, 0);
      });
      it("shuold satisfy test case #3", () => {
        const results = fn.getAverage([-5, 2, 2]);
        assert.equal(results, -1);
      });
      it("shuold satisfy test case #4", () => {
        const results = fn.getAverage([1, 1, 1, 1, 1, 2, 1, 2]);
        assert.equal(results, 1);
      });
    });
  },

  maxSequence: function(name, fn) {
    describe(`${name.toUpperCase()}: maxSequence()`, () => {
      it("should return a number", () => {
        assert.typeOf(fn.maxSequence([1, 2, 3]), "number");
      });
      it("should satisfy test case #1", () => {
        const results = fn.maxSequence([]);
        assert.equal(results, 0);
      });
      it("should satisfy test case #2", () => {
        const results = fn.maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
        assert.equal(results, 6);
      });
      it("should satisfy test case #3", () => {
        const results = fn.maxSequence([-1, -2, -3, -4, -5]);
        assert.equal(results, 0);
      });
      it("should satisfy test case #4", () => {
        const results = fn.maxSequence([1, 1, 1, 1]);
        assert.equal(results, 4);
      });
      it("should satisfy test case #5", () => {
        const results = fn.maxSequence([1, -2, 2, 0, -5, 2, -1]);
        assert.equal(results, 2);
      });
    });
  }
};

// ---------------------------------------- | Run Tests

const files = glob
  .sync("./1909/solutions/*.js")
  .map(f => path.basename(f))
  .filter(f => path.basename(f) !== "_default.js");

for (let filename of files) {
  for (let test of Object.keys(tests)) {
    const fn = require(`./solutions/${filename}`);
    const dev = filename.replace(path.extname(filename), "");
    if (fn[test]) tests[test](dev.toUpperCase(), fn);
  }
}
