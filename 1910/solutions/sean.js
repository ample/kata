const fn = (module.exports = {})

fn.shortestWordLength = function(str) {
  return str
    .split(' ')
    .map(w => w.length)
    .sort((a, b) => a - b)[0]
}

fn.sumOfPairs = function(nums, sum) {
  for (const [i, n] of nums.entries()) {
    const idx = nums.indexOf(sum - n)
    if (idx < i && idx >= 0) return [sum - n, n]
  }
}
