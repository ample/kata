const fn = (module.exports = {})

fn.getAverage = function(nums) {
  return Math.floor(nums.reduce((sum, x) => sum + x, 0) / nums.length)
}

fn.maxSequence = function(arr) {
  // Given an array, return the sum of the array.
  const sum = n => n.reduce((p, x) => p + x, 0)
  // Create a sequence of integers the remaining length of the array, starting
  // from zero.
  const subarrayInts = i => Array.from(Array(arr.length - i).keys())
  // Provide all subarrays from the given index.
  const subarrays = i => subarrayInts(i).map(n => arr.slice(i, n + i + 1))
  // Create a flat map of maximum subarray sums.
  const sums = arr.map((n, i) => Math.max(...subarrays(i).map(sum)))
  // Return the largest sum, unless it is less than zero.
  return Math.max(0, Math.max(...sums))
}

// ---------------------------------------- | Clever Solution

// fn.maxSequence = function(arr) {
//   var currentSum = 0
//   return arr.reduce(function(maxSum, number) {
//     currentSum = Math.max(currentSum + number, 0)
//     return Math.max(currentSum, maxSum)
//   }, 0)
// }

// fn.maxSequence = function(arr) {
//   var min = 0,
//     ans = 0,
//     i,
//     sum = 0
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i]
//     min = Math.min(sum, min)
//     ans = Math.max(ans, sum - min)
//   }
//   return ans
// }
