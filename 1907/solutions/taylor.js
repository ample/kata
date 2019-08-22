const fn = (module.exports = {});

fn.createPhoneNumber = function(numbers) {
  let str = numbers.join("");
  return str.length == 10
    ? str.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
    : false;
};

fn.positiveSum = function(arr) {
  return arr.filter(n => n > 0).reduce((a, b) => a + b, 0);
};
