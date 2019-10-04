const fn = (module.exports = {})

fn.shortestWordLength = function(str) {
  // split the string by the spaces to group together just the words and then loop through array to find the shortest length
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

fn.sumOfPairs = function(nums, sum) {
  // ...
}
