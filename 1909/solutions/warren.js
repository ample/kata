const fn = (module.exports = {});

fn.getAverage = function(nums) {
  return Math.floor(nums.reduce((ttl, num) => ttl + num, 0) / nums.length)
};

fn.maxSequence = function(arr) {
  // ...
};
