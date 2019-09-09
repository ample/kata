const fn = (module.exports = {});

fn.getAverage = function(nums) {
  return Math.floor(nums.reduce((ttl, num) => ttl + num, 0) / nums.length)
};

fn.maxSequence = function(arr) {
  if (arr.length < 1) { return 0 }
  let currentMax = arr.reduce((ttl, num) => ttl + num, 0)
  for (let startIdx = 0; startIdx < arr.length; startIdx++) {
    for (let endIdx = startIdx; endIdx < arr.length; endIdx++) {
      testSum = arr.slice(startIdx, endIdx).reduce((ttl, num) => ttl + num, 0)
      if (testSum > currentMax) { currentMax = testSum }
    }
  }
  return currentMax
};
