const fn = (module.exports = {})

fn.toWeirdCase = function(str) {
  const convertCase = (char, idx) => (idx % 2 == 0 ? char.toUpperCase() : char.toLowerCase())
  const wordToWeirdCase = word => [...word].map((n, i) => convertCase(n, i)).join('')
  return str
    .split(' ')
    .map(word => wordToWeirdCase(word))
    .join(' ')
}

fn.duplicateCount = function(str) {
  const uniqChars = new Set(str.toLowerCase()).values()
  const isDupe = char => str.match(new RegExp(char, 'ig')).length > 1
  return Array.from(uniqChars).filter(char => isDupe(char)).length
}
