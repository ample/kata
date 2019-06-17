// ---------------------------------------- | Filter List

function filterList(l) {
  return l.filter(v => typeof v == 'number');
}

function filterList(l) {
  return l.filter(n => typeof n === 'number');
}

function filterList(l) {
  return l.filter(i => typeof i === 'number');
}

function filterList(l) {
  return l.filter(el => typeof el === 'number');
}

function filterList(l) {
  return l.filter(val => Number.isInteger(val));
}

function filterList(l) {
  let numbers = [];

  l.forEach(function(item) {
    if (typeof item == 'number') {
      numbers.push(item);
    }
  });

  return numbers;
}

function filterList(l) {
  var filtered = l.filter(function(num) {
    return typeof num === 'number';
  });

  return filtered;
}

// ---------------------------------------- | Duplicate Encode

function duplicateEncode(word) {
  word = word.toLowerCase().split('');
  let result = word.map(char => (word.indexOf(char) == word.lastIndexOf(char) ? '(' : ')')).join('');
  return result;
}

function duplicateEncode(word) {
  const w = word.toLowerCase();
  return [...w].map(n => (w.split(n).length == 2 ? '(' : ')')).join('');
}

function duplicateEncode(word) {
  const isDuplicateChar = c => word.split(c).length - 1 > 1;
  const parseChar = c => (isDuplicateChar(c) ? ')' : '(');
  return word.toLowerCase().split('').map(parseChar).join('');
}

function duplicateEncode(word) {
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
}

function duplicateEncode(word) {
  return [...word]
    .map(el => {
      if ([...word].filter(c => c.toLowerCase() == el.toLowerCase()).length >= 2) {
        return ')';
      } else {
        return '(';
      }
    })
    .join('');
}

function duplicateEncode(word) {
  const characters = word.toLowerCase().split(/(?!$)/);
  const duplicates = characters.map(letter => {
    return characters.filter(l => l == letter).length > 1 ? ')' : '(';
  });
  return duplicates.join('');
}
