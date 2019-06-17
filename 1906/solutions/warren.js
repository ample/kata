const fn = (module.exports = {});

fn.filterList = function(l) {
  return l.filter(i => typeof i === 'number');
};

fn.duplicateEncode = function(word) {
  return word
    .split('')
    .map(function(el) {
      if (word.split('').filter(c => c.toLowerCase() === el.toLowerCase()).length == 1) {
        return '(';
      } else {
        return ')';
      }
    })
    .join('');
};
