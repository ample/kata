const chai = require('chai')
const glob = require('glob')
const path = require('path')

const assert = chai.assert

// ---------------------------------------- | Tests

const tests = {
  getPaginationPages: function(name, fn) {
    describe(`[2001] ${name.toUpperCase()}: getPaginationPages()`, () => {
      it('should satisfy test case #1', () => {
        const results = fn.getPaginationPages(1, 1)
        assert.deepEqual(results, [])
      })
      it('should satisfy test case #2', () => {
        const results = fn.getPaginationPages(2, 1)
        assert.deepEqual(results, [1, 2])
      })
      it('should satisfy test case #3', () => {
        const results = fn.getPaginationPages(5, 3)
        assert.deepEqual(results, [1, 2, 3, 4, 5])
      })
      it('should satisfy test case #4', () => {
        const results = fn.getPaginationPages(6, 3)
        assert.deepEqual(results, [1, 2, 3, 4, '...', 6])
      })
      it('should satisfy test case #5', () => {
        const results = fn.getPaginationPages(12, 1)
        assert.deepEqual(results, [1, 2, 3, '...', 12])
      })
      it('should satisfy test case #6', () => {
        const results = fn.getPaginationPages(12, 2)
        assert.deepEqual(results, [1, 2, 3, '...', 12])
      })
      it('should satisfy test case #7', () => {
        const results = fn.getPaginationPages(12, 3)
        assert.deepEqual(results, [1, 2, 3, 4, '...', 12])
      })
      it('should satisfy test case #8', () => {
        const results = fn.getPaginationPages(12, 4)
        assert.deepEqual(results, [1, '...', 3, 4, 5, '...', 12])
      })
      it('should satisfy test case #9', () => {
        const results = fn.getPaginationPages(12, 9)
        assert.deepEqual(results, [1, '...', 8, 9, 10, '...', 12])
      })
      it('should satisfy test case #10', () => {
        const results = fn.getPaginationPages(12, 10)
        assert.deepEqual(results, [1, '...', 9, 10, 11, 12])
      })
      it('should satisfy test case #11', () => {
        const results = fn.getPaginationPages(12, 11)
        assert.deepEqual(results, [1, '...', 10, 11, 12])
      })
      it('should satisfy test case #12', () => {
        const results = fn.getPaginationPages(12, 12)
        assert.deepEqual(results, [1, '...', 10, 11, 12])
      })
    })
  }
}

// ---------------------------------------- | Run Tests

const files = glob
  .sync('./2001/solutions/*.js')
  .map(f => path.basename(f))
  .filter(f => path.basename(f) !== '_default.js')

for (let filename of files) {
  for (let test of Object.keys(tests)) {
    const fn = require(`./solutions/${filename}`)
    const dev = filename.replace(path.extname(filename), '')
    if (fn[test]) tests[test](dev.toUpperCase(), fn)
  }
}
