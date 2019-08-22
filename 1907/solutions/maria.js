const fn = (module.exports = {});


fn.createPhoneNumber = function(numbers) {
  if (numbers.length !== 10) return false

  const getNum = (a,b) => numbers.slice(a,b).join('')
  const area = getNum(0,3),
        xchg = getNum(3,6),
        line = getNum(-4)

  return `(${area}) ${xchg}-${line}`
};


fn.positiveSum = function(arr) {
  arr = arr.filter(i => i > 0)

  return arr.length > 0
    ? arr.reduce((x, y) => x + y)
    : 0
};
