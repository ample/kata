const fn = (module.exports = {})

fn.toWeirdCase = function(str) {
  const weirdCase = text =>
    text
      .split('')
      .map((c, i) => (i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
      .join('')

  const joinWeirdCase = str
    .split(' ')
    .map(word => weirdCase(word))
    .join(' ')
  return joinWeirdCase
}

// fn.duplicateCount = function(str) {
//   // ...
// }
