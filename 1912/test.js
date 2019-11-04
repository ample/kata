const chai = require('chai')
const glob = require('glob')
const path = require('path')

const assert = chai.assert

// ---------------------------------------- | Tests

const tests = {
  validatePassword: function(name, fn) {
    describe(`[1912] ${name.toUpperCase()}: validatePassword()`, () => {
      it('should satisfy test case #1', () => {
        const results = fn.validatePassword('djI38D55')
        assert.equal(results, true)
      })
      it('should satisfy test case #2', () => {
        const results = fn.validatePassword('a2.d412')
        assert.equal(results, false)
      })
      it('should satisfy test case #3', () => {
        const results = fn.validatePassword('JHD5FJ53')
        assert.equal(results, false)
      })
      it('should satisfy test case #4', () => {
        const results = fn.validatePassword('!fdjn345')
        assert.equal(results, false)
      })
      it('should satisfy test case #5', () => {
        const results = fn.validatePassword('jfkdfj3j')
        assert.equal(results, false)
      })
      it('should satisfy test case #6', () => {
        const results = fn.validatePassword('123')
        assert.equal(results, false)
      })
      it('should satisfy test case #7', () => {
        const results = fn.validatePassword('abc')
        assert.equal(results, false)
      })
      it('should satisfy test case #8', () => {
        const results = fn.validatePassword('Password123')
        assert.equal(results, true)
      })
    })
  },

  humanReadableTime: function(name, fn) {
    describe(`[1912] ${name.toUpperCase()}: humanReadableTime()`, () => {
      it('should satisfy test case #1', () => {
        const results = fn.humanReadableTime(0)
        assert.equal(results, '00:00:00')
      })
      it('should satisfy test case #2', () => {
        const results = fn.humanReadableTime(5)
        assert.equal(results, '00:00:05')
      })
      it('should satisfy test case #3', () => {
        const results = fn.humanReadableTime(60)
        assert.equal(results, '00:01:00')
      })
      it('should satisfy test case #4', () => {
        const results = fn.humanReadableTime(86399)
        assert.equal(results, '23:59:59')
      })
      it('should satisfy test case #5', () => {
        const results = fn.humanReadableTime(359999)
        assert.equal(results, '99:59:59')
      })
    })
  }
}

// ---------------------------------------- | Run Tests

const files = glob
  .sync('./1912/solutions/*.js')
  .map(f => path.basename(f))
  .filter(f => path.basename(f) !== '_default.js')

for (let filename of files) {
  for (let test of Object.keys(tests)) {
    const fn = require(`./solutions/${filename}`)
    const dev = filename.replace(path.extname(filename), '')
    if (fn[test]) tests[test](dev.toUpperCase(), fn)
  }
}
