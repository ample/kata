const fn = (module.exports = {})

fn.getAverage = function(nums) {
  // So I'm flooring this value (instead of rounding) b/c thats what the
  // directions say to do, but this causes the function to
  // return incorrect values in certain cirmcumstances.
  return Math.floor(nums.reduce((p, c) => p + c, 0) / nums.length)
}

fn.maxSequence = function(arr) {
  // ...
}
