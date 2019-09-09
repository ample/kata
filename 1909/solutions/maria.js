const fn = (module.exports = {})

fn.getAverage = function(nums) {
  total = nums.reduce((a, b) => a + b)
  return Math.floor(total / nums.length)
}

fn.maxSequence = function(arr) {
  let currentSum = 0, maxSum = 0

  for (val of arr) {
    currentSum = Math.max(currentSum + val, 0)
    maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum
}
