const data = require('../data.json')

const fn = (module.exports = {})

fn.sortBy = function(attr, reverse = false) {
  if (data.filter(x => Object.keys(x).includes(attr)).length === 0) return data
  let result = [...data].sort((a, b) => (a[attr] > b[attr] ? 1 : -1))
  return reverse ? result.reverse() : result
}

fn.getNames = function() {
  return data
    .map(x => x.name)
    .sort()
    .join(',')
}

fn.injectNameParts = function() {
  const getNameParts = name => name.split(' ')
  const getFirstName = name => getNameParts(name)[0]
  const getLastName = name => getNameParts(name)[getNameParts(name).length - 1]
  const getMiddleName = name => (getNameParts(name).length > 2 ? getNameParts(name)[1] : undefined)

  return data.map(x => ({
    ...x,
    firstName: getFirstName(x.name),
    lastName: getLastName(x.name),
    middleName: getMiddleName(x.name)
  }))
}
