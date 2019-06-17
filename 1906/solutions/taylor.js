const fn = (module.exports = {});

fn.filterList = function(l) {
  return l.filter(v => typeof v == 'number');
};

fn.duplicateEncode = function(word) {
  const isDuplicateChar = c => word.split(c).length - 1 > 1;
  const parseChar = c => (isDuplicateChar(c) ? ')' : '(');
  return word.toLowerCase().split('').map(parseChar).join('');
};
