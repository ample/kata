const fn = (module.exports = {})

fn.getPaginationPages = function(pageCount, currentPage) {
  // Generate range
  const pageNavigation = (pageCount >= 2) ? [...Array(pageCount).keys()].map(e=>++e) : []

  if(pageNavigation.length < 6){
    return pageNavigation
  }else{
    return pageNavigation.map((e,i,arr) => {
      // Cases where page num should be included
      if(
        i == 0 || // First page
        i == pageNavigation.length - 1 || // last page
        e == currentPage - 1 || // previoua page
        e == currentPage || // current page
        e == currentPage + 1 || // next page
        e == currentPage + 2 && currentPage == arr[0] || // 2 rightmost pages if current page is first page
        e == currentPage - 2 && currentPage == arr[arr.length - 1]  // 2 leftmost pages if current page is last page
        ){
        return e
      }else {
        return '...'
      }
    }).filter((_,i,arr) => arr[i] != arr[i-1]) // remove consecutive ellipses
  }
}
