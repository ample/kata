const fn = (module.exports = {});

fn.filterList = function(l) {
  return l.filter(el => typeof el === 'number');
};

fn.duplicateEncode = function(word) {
  return [...word].map(el => {
    if ([...word].filter(c => c.toLowerCase() == el.toLowerCase()).length >= 2) {
      return ')';
    } else {
      return '(';
    }
  });
};
