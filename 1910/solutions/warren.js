const fn = (module.exports = {})

fn.shortestWordLength = function(str) {
  return Math.min(...str.split(' ').map(x => x.length))
}

fn.sumOfPairs = function(nums, sum) {
  for (let idx1 = 0; idx1 < nums.length; idx1++) {
    for (let idx2 = idx1 + 1; idx2 < nums.length; idx2++) {
      if(nums[idx1] + nums[idx2] == sum) {
        return [nums[idx1], nums[idx2]]
      }
    }
  }
  return undefined
}
