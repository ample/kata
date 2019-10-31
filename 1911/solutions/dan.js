const fn = (module.exports = {})

fn.toWeirdCase = function(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word
        .split('')
        .map((letter, key) => {
          if (key % 2 === 0) {
            return letter.toUpperCase()
          }

          return letter
        })
        .join('')
    })
    .join(' ')
}

fn.duplicateCount = function(str) {
  // ...
}
