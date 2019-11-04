const fn = (module.exports = {})

fn.toWeirdCase = function(str) {
  return str
    .split(' ') // split @ word boundaries
    .map(word => {
      return word
        .split('') // split @ each char
        .map((c, i) => (i % 2 == 1 ? c : c.toUpperCase())) // upcase even chars
        .join('') // reconstruct word
    })
    .join(' ') // add spaces back
}

fn.duplicateCount = function(str) {
  return (
    str
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/(.)\1+/g) || []
  ).length
}
