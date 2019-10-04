const fn = (module.exports = {})

fn.shortestWordLength = function(str) {
  let arr = str.split(' ')
  return Math.min(...arr.map(({ length }) => length))
}

fn.sumOfPairs = function(nums, sum) {
  let getPairs = arr =>
    arr.reduce(
      (acc, val, i) => [
        ...acc,
        ...new Array(arr.length - 1 - i)
          .fill(0)
          .map((v, j) => [arr[i], arr[i + 1 + j]]),
      ],
      []
    )

  let n
  let pairs = getPairs(nums)

  pairs.some(function(el, i) {
    if (el.reduce((a, b) => a + b) === sum) {
      n = i
      return true
    }
  })

  return pairs[n]
}
