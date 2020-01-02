const fn = (module.exports = {})

fn.getPaginationPages = function(pageCount, currentPage) {
  if (pageCount === 1) {
    return []
  } else {
    return [...Array(pageCount)]
      .map((_, k) => {
        let i = k + 1
        let displayPage = [1, pageCount, currentPage, currentPage + 1, currentPage - 1].includes(i)
        return displayPage ||
          (currentPage === 1 && i < currentPage + 3) ||
          (currentPage === pageCount && i > currentPage - 3)
          ? i
          : '...'
      })
      .filter(function(item, pos, arr) {
        return pos === 0 || item !== arr[pos - 1] // remove consecutive duplicates
      })
  }
}
