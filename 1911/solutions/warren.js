const fn = (module.exports = {})

fn.toWeirdCase = function(str) {
  return str
    .split(' ')
    .map(word =>
      word
        .split('')
        .map((char, idx) => (idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
        .join('')
    )
    .join(' ')
}

fn.duplicateCount = function(str) {
  let dupeCtr = 0
  let seenChars = []
  str
    .toLowerCase()
    .split('')
    .forEach(char => {
      if (seenChars.indexOf(char) < 0) {
        seenChars.push(char)
        const re = new RegExp(char, 'g')
        if (str.toLowerCase().match(re).length > 1) {
          dupeCtr++
        }
      }
    })
  return dupeCtr
}
