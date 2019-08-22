const fn = (module.exports = {});

fn.createPhoneNumber = function(numbers) {
  if(numbers.filter( n =>  n >= 0).length != 10) { return false }
  let numberStr = numbers.join('')
  return `(${numberStr.slice(0,3)}) ${numberStr.slice(3,6)}-${numberStr.slice(6)}`
};

fn.positiveSum = function(arr) {
  arr.push(0)
  return arr.filter( n => n >= 0).reduce((a,b) => a + b)
};
