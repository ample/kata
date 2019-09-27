const chai = require('chai')
const glob = require('glob')
const path = require('path')

const assert = chai.assert

// ---------------------------------------- | Tests

const tests = {
  shortestWordLength: function(name, fn) {
    describe(`[1910] ${name.toUpperCase()}: shortestWordLength()`, () => {
      it('should satisfy test case #1', () => {
        const results = fn.shortestWordLength('Banana error')
        assert.equal(results, 5)
      })
      it('should satisfy test case #2', () => {
        const results = fn.shortestWordLength(
          'Pneumonoultramicroscopicsilicovolcanoconiosis'
        )
        assert.equal(results, 45)
      })
      it('should satisfy test case #3', () => {
        const results = fn.shortestWordLength('My nose is a communist')
        assert.equal(results, 1)
      })
      it('should satisfy test case #4', () => {
        const results = fn.shortestWordLength('Imagination tickles your brain')
        assert.equal(results, 4)
      })
    })
  },

  sumOfPairs: function(name, fn) {
    describe(`[1910] ${name.toUpperCase()}: sumOfPairs()`, () => {
      it('should satisfy test case #1', () => {
        const results = fn.sumOfPairs([1, 2, 3, 2], 4)
        assert.equal(results, [1, 3])
      })
      it('should satisfy test case #2', () => {
        const results = fn.sumOfPairs([1, 1, 2], 2)
        assert.equal(results, [1, 1])
      })
      it('should satisfy test case #3', () => {
        const results = fn.sumOfPairs([0, 2, 6, 4], 6)
        assert.equal(results, [0, 6])
      })
      it('should satisfy test case #4', () => {
        const results = fn.sumOfPairs([12, 4, -6, 0, 2], 6)
        assert.equal(results, [12, -6])
      })
    })
  },
}

// ---------------------------------------- | Run Tests

const files = glob
  .sync('./1910/solutions/*.js')
  .map(f => path.basename(f))
  .filter(f => path.basename(f) !== '_default.js')

for (let filename of files) {
  for (let test of Object.keys(tests)) {
    const fn = require(`./solutions/${filename}`)
    const dev = filename.replace(path.extname(filename), '')
    if (fn[test]) tests[test](dev.toUpperCase(), fn)
  }
}
