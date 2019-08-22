const fn = (module.exports = {});

fn.createPhoneNumber = function(numbers) {
  if ((n = numbers.join('')).length !== 10) return false;
  return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6)}`;
};

fn.positiveSum = function(arr) {
  arr = arr.filter(x => x > 0);
  return ((arr.length && arr) || [0]).reduce((sum, x) => sum + x);
};

/* --- Clever Solutions --- */

// createPhoneNumber:
//
//    numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
//
//    numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
//
//    numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
//
//
