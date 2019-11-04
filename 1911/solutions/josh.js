const fn = (module.exports = {})

fn.toWeirdCase = function(str) {
  const words = str.split(' ') // split on by word

  return words
    .map(word =>
      word
        .split('') // split on char
        .map((ch, index) => {
          if (index == 0 || index % 2 == 0) {
            return ch.toUpperCase()
          }
          return ch.toLowerCase()
        })
        .join('') // join chars
    )
    .join(' ') // join words (preserve spaces)
}

fn.duplicateCount = function(str) {
  const sameCaseArr = [...str].map(c => c.toLowerCase())
  return new Set(sameCaseArr.filter((c, i, a) => a.indexOf(c) != i)).size
}
