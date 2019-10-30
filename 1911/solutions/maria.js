const fn = (module.exports = {})

fn.toWeirdCase = function(str) {
    str = str.split(' ').map(w => w.split(''))

  const weird_arr = str.map(word => {
    for (let idx = 0; idx < word.length; idx += 2){
      word[idx] = word[idx].toUpperCase();
    }
    return word.join('')
  })

  return weird_arr.join(' ')
}


fn.duplicateCount = function(str) {
  str = str.toLowerCase()
  const dupes = []

  for(let char of str){
    const isDuplicate = str.indexOf(char) !== str.lastIndexOf(char)
    const isUniqueDupe = dupes.indexOf(char) === -1

    isDuplicate && isUniqueDupe && dupes.push(char)
  }

  return dupes.length
}
