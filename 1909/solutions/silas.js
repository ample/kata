const fn = (module.exports = {})

fn.getAverage = function(nums) {
  let sum = 0
  for (var i = 0; i < nums.length; i++) {
    sum = nums[i] + sum
  }
  return Math.floor(sum / nums.length)
}

fn.maxSequence = function(arr) {
  // ...
}
