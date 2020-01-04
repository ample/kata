const chai = require('chai')
const glob = require('glob')
const path = require('path')

const assert = chai.assert

// ---------------------------------------- | Tests

const tests = {
  sortBy: function(name, fn) {
    describe(`[2002] ${name.toUpperCase()}: sortBy()`, () => {
      it('should sort by name', () => {
        const results = fn.sortBy('name').map(x => x.name)
        assert.deepEqual(results, [
          'Alex W Bier',
          'Catherine Bernard',
          'Dave Andrews',
          'Mary Williamson',
          'Steve Smith',
          'Zoe Johnson'
        ])
      })
      it('should sort by birthdate', () => {
        const results = fn.sortBy('birthdate').map(x => x.name)
        assert.deepEqual(results, [
          'Steve Smith',
          'Alex W Bier',
          'Mary Williamson',
          'Catherine Bernard',
          'Zoe Johnson',
          'Dave Andrews'
        ])
      })
      it('should not change the order when the property doesn not exist', () => {
        const results = fn.sortBy('WRONG!').map(x => x.name)
        assert.deepEqual(results, [
          'Dave Andrews',
          'Steve Smith',
          'Mary Williamson',
          'Zoe Johnson',
          'Alex W Bier',
          'Catherine Bernard'
        ])
      })
      it('can sort in reverse order', () => {
        const results = fn.sortBy('name', true).map(x => x.name)
        assert.deepEqual(results, [
          'Zoe Johnson',
          'Steve Smith',
          'Mary Williamson',
          'Dave Andrews',
          'Catherine Bernard',
          'Alex W Bier'
        ])
      })
    })
  },

  getNames: function(name, fn) {
    describe(`[2002] ${name.toUpperCase()}: getNames()`, () => {
      it('should render a comma-separated list of names alphabetically', () => {
        const results = fn.getNames()
        assert.equal(
          results,
          'Alex W Bier,Catherine Bernard,Dave Andrews,Mary Williamson,Steve Smith,Zoe Johnson'
        )
      })
    })
  },

  injectNameParts: function(name, fn) {
    describe(`[2002] ${name.toUpperCase()}: injectNameParts()`, () => {
      it('should add a firstName property', () => {
        const results = fn.injectNameParts().map(x => x.firstName)
        assert.deepEqual(results, ['Dave', 'Steve', 'Mary', 'Zoe', 'Alex', 'Catherine'])
      })
      it('should add a lastName property', () => {
        const results = fn.injectNameParts().map(x => x.lastName)
        assert.deepEqual(results, ['Andrews', 'Smith', 'Williamson', 'Johnson', 'Bier', 'Bernard'])
      })
      it('should add a middleName property', () => {
        const results = fn.injectNameParts().map(x => x.middleName)
        assert.deepEqual(results, [undefined, undefined, undefined, undefined, 'W', undefined])
      })
    })
  }
}

// ---------------------------------------- | Run Tests

const files = glob
  .sync('./2002/solutions/*.js')
  .map(f => path.basename(f))
  .filter(f => path.basename(f) !== '_default.js')

for (let filename of files) {
  for (let test of Object.keys(tests)) {
    const fn = require(`./solutions/${filename}`)
    const dev = filename.replace(path.extname(filename), '')
    if (fn[test]) tests[test](dev.toUpperCase(), fn)
  }
}
