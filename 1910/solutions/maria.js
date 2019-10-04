const fn = (module.exports = {})

fn.shortestWordLength = function(str) {
  const words = str.split(' ').map(i => i.length)
  return Math.min(...words)
}

fn.sumOfPairs = function(nums, sum) {
  for (let x = 0; x < nums.length; x++) {

    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] === sum) {
        return [nums[x], nums[y]]
      }
    }

  }
}
