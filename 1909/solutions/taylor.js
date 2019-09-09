const fn = (module.exports = {})

// Return sum from array of numbers
fn.getSum = arr => arr.reduce((p, c) => p + c, 0)

// Return array containing unique items
fn.getUniq = arr => {
  let set = new Set(arr.map(JSON.stringify))
  return Array.from(set).map(JSON.parse)
}

// Return all sequences in array
fn.getSequences = arr => {
  let sets = []
  let n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let set = Array.from(arr).splice(i, j + 1)
      sets.push(set)
    }
  }
  return fn.getUniq(sets)
}

// ----------------------------------------- //

fn.getAverage = function(nums) {
  // So I'm flooring this value (instead of rounding) b/c thats what the
  // directions say to do, but this causes the function to
  // return incorrect values in certain cirmcumstances.
  return Math.floor(fn.getSum(nums) / nums.length)
}

fn.maxSequence = function(arr) {
  if (arr.length == 0) return 0

  // Return sums for each sequence
  const sums = fn.getSequences(arr).map(set => {
    let n = fn.getSum(set)
    return Math.sign(n) == -1 ? 0 : n
  })

  // Return max sequence
  return Math.max(...sums)
}
