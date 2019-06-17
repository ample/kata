const fn = (module.exports = {});

fn.filterList = function(l) {
  return l.filter(val => Number.isInteger(val));
};

fn.duplicateEncode = function(word) {
  word = word.toLowerCase().split('');

  let result = word.map(char => (word.indexOf(char) == word.lastIndexOf(char) ? '(' : ')')).join('');

  return result;
};
