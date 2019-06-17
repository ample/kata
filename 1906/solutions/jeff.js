const fn = (module.exports = {});

fn.filterList = function(l) {
  let numbers = [];

  l.forEach(function(item) {
    if (typeof item == 'number') {
      numbers.push(item);
    }
  });

  return numbers;
};

fn.duplicateEncode = function(word) {
  const characters = word.toLowerCase().split(/(?!$)/);

  const duplicates = characters.map(letter => {
    return characters.filter(l => l == letter).length > 1 ? ')' : '(';
  });

  return duplicates.join('');
};
