const fn = (module.exports = {})

fn.getPaginationPages = function(pageCount, currentPage) {
  let pagination = []

  if (pageCount === 1) {
  } else if (pageCount <= 5) {
    pagination = Array.from({ length: pageCount }, (_, i) => ++i)

  } else if (currentPage <= 2) {
    pagination.push(1, 2, 3, pageCount)

  } else if (pageCount - currentPage <= 1) {
    pagination.push(1, pageCount - 2, pageCount - 1, pageCount)

  } else {
    pagination.push(1, currentPage - 1, currentPage, currentPage + 1, pageCount)
  }

  // Add ellipses
  currentPage > 3 && pagination.splice(1, 0, '...')
  pageCount - currentPage > 2 && pagination.splice(pagination.length - 1, 0, '...')

  return pagination
}
