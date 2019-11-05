const fn = (module.exports = {})

fn.toWeirdCase = function(str) {
  var words = str.split(' ')
  var newWords = []

  words.forEach(function(word) {
    let letters = Array.from(word)
    let newStr = []

    for (let i = 0; i < letters.length; i++) {
      if (i % 2 === 0) {
        newStr.push(letters[i].toUpperCase())
      } else {
        newStr.push(letters[i].toLowerCase())
      }
    }
    return newWords.push(newStr.join(''))
  })

  return newWords.join(' ')
}

// fn.duplicateCount = function(str) {
//   // ...
// }
