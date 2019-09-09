const fn = (module.exports = {})

fn.getAverage = function(nums) {
  return nums.length
    ? Math.floor(nums.reduce((acc, curr) => acc + curr) / nums.length)
    : 0
}

fn.maxSequence = function(arr) {
  //
  const sum = arr => arr.reduce((acc, curr) => acc + curr)
  // Will hold max number at any given point
  let max = 0
  // Iterate over each element
  arr.forEach((el, index) => {
    // for each element, find the sum for each following subarray starting at that index
    for (let iterator = index + 1; iterator <= arr.length; iterator++) {
      // If sum from [index,iterator] is larger than current max, update max
      const result = sum(arr.slice(index, iterator))
      max = result > max ? result : max
    }
  })

  return max
}
