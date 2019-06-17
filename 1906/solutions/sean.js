const fn = (module.exports = {});

fn.filterList = function(l) {
  return l.filter(n => typeof n === 'number');
};

fn.duplicateEncode = function(word) {
  const w = word.toLowerCase();
  return [...w].map(n => w.split(n).length == 2 ? '(' : ')').join('');
};
