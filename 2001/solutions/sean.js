const fn = (module.exports = {})

fn.getPaginationPages = function(pageCount, currentPage) {
  // If there is onlt one page, return an empty array.
  if (pageCount <= 1) return []
  // When there are five or fewer pages, show all of them.
  if (pageCount <= 5) return Array.from(Array(pageCount).keys()).map(n => n + 1)
  // The first page is always listed.
  let nums = [1]
  // Find the pages to include, surrounding the active item. If the current page
  // is the first or last page, we show the first (or last) four pages.
  // Otherwise, we show the page before and after the current page.
  if (currentPage === 1) {
    nums.push(2, 3)
  } else if (currentPage >= pageCount - 1) {
    nums.push(pageCount - 2, pageCount - 1)
  } else {
    nums.push(currentPage - 1, currentPage, currentPage + 1)
  }
  // Always add the last page to the array.
  nums.push(pageCount)
  // Remove duplicates, which should only affect the first or last page.
  nums = [...new Set(nums)]
  // If there is a gap after the first or before the last page, fill it with an
  // ellipses.
  if (nums[1] - nums[0] > 1) nums.splice(1, 0, '...')
  if (nums.slice(-1) - nums.slice(-2, -1) > 1) nums.splice(-1, 0, '...')
  // Return what we left with, yo.
  return nums
}
