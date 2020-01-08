const fn = (module.exports = {})

// - If there is only one page, don't show any pagination.
// - Always show the page before and the page after the current page,
//   assuming that page exists.
// - Always show the first and last pages.
// - If the current page is the first page, show the next two pages, or if it
//   is the last page, show the previous two pages (assuming those pages exist).
// - Never show more than five page _numbers_.
// - Use an ellipses (`...`) to represent missing pages.

fn.getPaginationPages = function(pageCount, currentPage) {
  if (pageCount < 2) {
    return []
  }
  let links = [1, currentPage - 1, currentPage, currentPage + 1, pageCount].filter(
    idx => idx <= pageCount
  )
  if (currentPage == 1) {
    links.push(currentPage + 2)
  }
  if (currentPage == pageCount) {
    links.push(currentPage - 2)
  }
  links = links
    .filter(link => link > 0 && link <= pageCount)
    .reduce((unique, item) => (unique.includes(item) ? unique : [...unique, item]), [])
    .sort((a, b) => a - b)
  if (links[1] - links[0] > 1) {
    links.splice(1, 0, '...')
  }
  if (links[links.length - 1] - links[links.length - 2] > 1) {
    links.splice(links.length - 1, 0, '...')
  }
  return links
}
