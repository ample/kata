const chai = require('chai')
const glob = require('glob')
const path = require('path')

const assert = chai.assert

// ---------------------------------------- | Tests

const tests = {
  toWeirdCase: function(name, fn) {
    describe(`[1911] ${name.toUpperCase()}: toWeirdCase()`, () => {
      it('should satisfy test case #1', () => {
        const results = fn.toWeirdCase('Banana error')
        assert.equal(results, 'BaNaNa ErRoR')
      })
      it('should satisfy test case #2', () => {
        const results = fn.toWeirdCase('schadenfreude')
        assert.equal(results, 'ScHaDeNfReUdE')
      })
      it('should satisfy test case #3', () => {
        const results = fn.toWeirdCase('My nose is a communist')
        assert.equal(results, 'My NoSe Is A CoMmUnIsT')
      })
    })
  },

  duplicateCount: function(name, fn) {
    describe(`[1911] ${name.toUpperCase()}: duplicateCount()`, () => {
      it('should satisfy test case #1', () => {
        const results = fn.duplicateCount('abcdefghijklmnopqrstuvwxyz0123456789')
        assert.equal(results, 0)
      })
      it('should satisfy test case #2', () => {
        const results = fn.duplicateCount('HelloWorld')
        assert.equal(results, 2)
      })
      it('should satisfy test case #3', () => {
        const results = fn.duplicateCount('HenryAaron')
        assert.equal(results, 3)
      })
      it('should satisfy test case #4', () => {
        const results = fn.duplicateCount('Th1sth1ng')
        assert.equal(results, 3)
      })
    })
  }
}

// ---------------------------------------- | Run Tests

const files = glob
  .sync('./1911/solutions/*.js')
  .map(f => path.basename(f))
  .filter(f => path.basename(f) !== '_default.js')

for (let filename of files) {
  for (let test of Object.keys(tests)) {
    const fn = require(`./solutions/${filename}`)
    const dev = filename.replace(path.extname(filename), '')
    if (fn[test]) tests[test](dev.toUpperCase(), fn)
  }
}
