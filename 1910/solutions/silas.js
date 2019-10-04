const fn = (module.exports = {})

fn.shortestWordLength = function(str) {
  const words = str.split(' ')
  let findSmallest = undefined
  for (i = 0; i < words.length; i++) {
    let strLength = words[i].length
    if (i === 0) {
      findSmallest = strLength
    } else {
      findSmallest = Math.min(strLength, findSmallest)
    }
  }
  return findSmallest
}
