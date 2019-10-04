const fn = (module.exports = {})

fn.shortestWordLength = function(str) {
  const length = str.split(' ').map(word => word.length)

  return Math.min(...length)
}

// fn.sumOfPairs = function(nums, sum) {
// ...
// }
