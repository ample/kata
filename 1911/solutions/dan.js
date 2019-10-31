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
  let occurrences = {}
  let characters = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '')
    .split('')

  characters.forEach(element => {
    occurrences[element] = occurrences[element] ? occurrences[element] + 1 : 1
  })

  return Object.values(occurrences).filter(occurrence => occurrence > 1).length
}
