const fn = (module.exports = {})

fn.shortestWordLength = function(str) {
  return Math.min(...str.split(' ').map(x => x.length))
}

fn.sumOfPairs = function(nums, sum) {
  // ...
}
