Kata - July 2019
==========

Welcome to July 2019's Kata exercise! There are two problems here — one of beginner level and the other intermediate.

Problems
----------

### Problem 1: Formatting Phone Number

Given an array of single-digit numbers, if the array has 10 numbers, return a formatted phone number as `(xxx) xxx-xxxx`. If the array does not contain 10 numbers, return false.

```js
function createPhoneNumber(numbers) {
  // ...
}

Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
Test.assertEquals(createPhoneNumber([]), false);
Test.assertEquals(createPhoneNumber([1]), false);
Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]), false);
```

### Problem 2: Positive Numbers

Given an array of numbers, return the sum of the positives values. If the absence of being able to sum the values, return `0`.

```js
function positiveSum(numbers) {
  // ...
}

Test.assertEquals(positiveSum([1, 2, 3, 4, 5]), 15);
Test.assertEquals(positiveSum([1, -2, 3, 4, 5]), 13);
Test.assertEquals(positiveSum([]), 0);
Test.assertEquals(positiveSum([-1, -2, -3, -4, -5]), 0);
Test.assertEquals(positiveSum([-1, 2, 3, 4, -5]), 9);
```

Submitting Solutions
----------

Your solution should be placed in the `solutions` directory. Copy the `_default.js` file to a file with your name on it (e.g. `sean.js`). You'll notice each function gets exported from the file. That's what we want for testing — don't change any of the boilerplate (you can delete comments).

To run the tests, first install dependencies:

    $ yarn install

Add your name to the array of test cases for the solution you want to test in `test-cases.js`. **Your name in the array should match the name of your file**. For example, if your file is `solutions/sean.js`, then you should add `sean` to the array(s), like so:

```js
module.exports = {
  testCase: ['sean'],
  otherTestCase: []
};
```

Then you can run the test suite:

    $ yarn run test ./1907

Once your solutions are passing, open a pull request with your changes, using the format: _[1907]: Name_.
