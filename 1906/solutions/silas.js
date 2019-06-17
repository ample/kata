const fn = (module.exports = {});

fn.filterList = function(l) {
  var filtered = l.filter(function(num) {
    return typeof num === 'number';
  });

  return filtered;
};

fn.duplicateEncode = function(word) {
  return null;
};
