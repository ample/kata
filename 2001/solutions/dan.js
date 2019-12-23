const fn = (module.exports = {})

class PaginationCollection {
  constructor(pageCount, currentPage) {
    this._pageCount = this.normalizePageCount(pageCount)
    this._currentPage = this.normalizeCurrentPage(currentPage)
    this._items = [
      this.firstPage(),
      this.calculatePreviousPage(currentPage),
      this.currentPage(),
      this.calculateNextPage(currentPage),
      this.pageCount()
    ]
  }

  pageCount() {
    return this._pageCount
  }

  currentPage() {
    return this._currentPage
  }

  firstPage() {
    return 1
  }

  pageLimit() {
    return 5
  }

  normalizePageCount(count) {
    count = parseInt(count, 10)
    return isNaN(count) ? 0 : count
  }

  normalizeCurrentPage(page) {
    page = parseInt(page, 10)
    if (isNaN(page) || page < 1) {
      return 1
    }

    return page
  }

  calculateNextPage(currentPage) {
    return currentPage + 1
  }

  calculatePreviousPage(currentPage) {
    return currentPage - 1
  }

  addEllipsis(index) {
    let pageNumber = index + 1
    let aboveMaximum = pageNumber > this.maximumPage()
    let belowMinimum = pageNumber < this.minimumPage()

    if (aboveMaximum || belowMinimum) {
      return undefined
    }

    if (this._items.includes(pageNumber)) {
      return pageNumber
    }

    return '...'
  }

  minimumPage() {
    return Math.min(...this._items)
  }

  maximumPage() {
    return Math.max(...this._items)
  }

  addEllipses() {
    this._items = this._items.filter(page => !isNaN(parseInt(page, 10)))
    this._items = [...Array(this.maximumPage()).keys()].map(this.addEllipsis.bind(this))

    return this
  }

  forceTwoOnFirstPage() {
    if (this.currentPage() === this.firstPage()) {
      this._items.push(this.currentPage() + 2)
    }

    return this
  }

  forceTwoOnLastPage() {
    if (this.currentPage() === this.pageCount()) {
      this._items.push(this.currentPage() - 2)
    }

    return this
  }

  removeDuplicates() {
    let previous
    this._items = this._items.filter(page => {
      let isDuplicate = page === previous
      previous = page
      return !isDuplicate
    })

    return this
  }

  removeOutOfBounds() {
    this._items = this._items.filter(page => {
      const outOfBounds = page > this.pageCount() || page < this.firstPage()
      return !outOfBounds
    })

    return this
  }

  sliceToPageLimit() {
    this._items = this._items.sort().slice(0, this.pageLimit())

    return this
  }

  removeUndefined() {
    this._items.filter(item => item === undefined)
    return this
  }

  items() {
    return this._items
  }

  all() {
    if (this.pageCount() <= 1) {
      return []
    }

    return this.forceTwoOnFirstPage()
      .forceTwoOnFirstPage()
      .forceTwoOnLastPage()
      .removeOutOfBounds()
      .sliceToPageLimit()
      .addEllipses()
      .removeDuplicates()
      .removeUndefined()
      .items()
  }
}

fn.getPaginationPages = function(pageCount, currentPage) {
  return new PaginationCollection(pageCount, currentPage).all()
}
