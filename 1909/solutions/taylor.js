const fn = (module.exports = {})

fn.getSum = arr => arr.reduce((p, c) => p + c, 0)

fn.getAverage = function(nums) {
  // So I'm flooring this value (instead of rounding) b/c thats what the
  // directions say to do, but this causes the function to
  // return incorrect values in certain cirmcumstances.
  return Math.floor(fn.getSum(nums) / nums.length)
}

fn.maxSequence = function(arr) {
  if (arr.length == 0) return 0

  // Return an array of unique items
  const uniq = arr => {
    let set = new Set(arr.map(JSON.stringify))
    return Array.from(set).map(JSON.parse)
  }

  // Return all sequences in array
  const getSets = arr => {
    let sets = []
    arr.forEach((el, i) => {
      for (let j = 0; j < arr.length; j++) {
        sets.push(Array.from(arr).splice(i, j + 1))
      }
    })
    return uniq(sets)
  }

  // Return sums for each sequence
  const sums = getSets(arr).map(set => {
    let n = fn.getSum(set)
    return Math.sign(n) == -1 ? 0 : n
  })

  // Return max sequence
  return Math.max(...sums)
}
