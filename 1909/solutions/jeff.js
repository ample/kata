const fn = (module.exports = {})

fn.getAverage = function(nums) {
  var total = 0

  for (var i = 0; i < nums.length; i++) {
    total += nums[i]
  }

  return Math.floor(total / nums.length)
}
