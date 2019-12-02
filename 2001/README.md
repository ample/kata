# Kata - January 2019

Let's kick off the new year with a practical problem — a scenario we were faced
with just last month.

## Problem: Pagination Logic

When it comes to pagination, we must have tight logic in place to ensure that we
aren't muddying up the UI. If there are too many pages, then we simply can't (or
_shouldn't_) render a link to every page.

While there are many approaches to pagination, this one is very opinionated. It
looks like this:

- If there is only one page, don't show any pagination.
- Always show the page before and the page after the current page, assuming that
  page exists.
- Always show the first and last pages.
- If the current page is the first page, show the next two pages, or if it is
  the last page, show the previous two pages (assuming those pages exist).
- Never show more than five page _numbers_.
- Use an ellipses (`...`) to represent missing pages.

Your function should accept a total number of pages and a current page. Using
those numbers, it should return an array representing the links to the pages.
That array should include an ellipses as a string where there are missing pages.
And it should return an empty array if there are no links to be rendered.

You can assume there will always be at least one page and the current page will
be between `1` and the page count.

For example, if there are `12` total pages and the current page is `6`, the
returned result should be `[1, '...', 5, 6, 7, '...', 12]`.

```js
function getPaginationPages(pageCount, currentPage) {
  // Your code here ...
}

Test.assertEquals(getPaginationPages(1, 1), [])
Test.assertEquals(getPaginationPages(2, 1), [1, 2])
Test.assertEquals(getPaginationPages(5, 3), [1, 2, 3, 4, 5])
Test.assertEquals(getPaginationPages(6, 3), [1, 2, 3, 4, '...', 6])
Test.assertEquals(getPaginationPages(12, 1), [1, 2, 3, '...', 12])
Test.assertEquals(getPaginationPages(12, 2), [1, 2, 3, '...', 12])
Test.assertEquals(getPaginationPages(12, 3), [1, 2, 3, 4, '...', 12])
Test.assertEquals(getPaginationPages(12, 4), [1, '...', 3, 4, 5, '...', 12])
Test.assertEquals(getPaginationPages(12, 9), [1, '...', 8, 9, 10, '...', 12])
Test.assertEquals(getPaginationPages(12, 10), [1, '...', 9, 10, 11, 12])
Test.assertEquals(getPaginationPages(12, 11), [1, '...', 10, 11, 12])
Test.assertEquals(getPaginationPages(12, 12), [1, '...', 10, 11, 12])
```

## Submitting Solutions

Your solution should be placed in the `solutions` directory. Copy the `_default.js` file to a file with your name on it (e.g. `sean.js`). You'll notice each function gets exported from the file. That's what we want for testing — don't change any of the boilerplate (you can delete comments).

First, install dependencies:

    $ yarn install

Then run the tests:

    $ yarn test

Once your solutions are passing, open a pull request with your changes, using the format: _[ID]: Name_ (e.g. `[1906]: Tyler`).

### Omitting Solutions

If you choose to complete one kata and not the other, you should delete the other function from your solutions file. Otherwise, the tests will fail.
