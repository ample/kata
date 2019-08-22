# Kata - September 2019

Welcome to September 2019's Kata exercise! There are two problems here — one of beginner level and the other advanced.

## Problems

### Problem 1: Average an Array of Numbers

Given an array of integers, return the average (mean) value, rounded down to the closest integer. The array will always have at least one number.

```js
function getAverage(nums) {
  // ...
}

Test.assertEquals(getAverage([1, 2, 3]), 2);
Test.assertEquals(getAverage([-2, 2]), 0);
Test.assertEquals(getAverage([-5, 2, 2]), -1);
Test.assertEquals(getAverage([1, 1, 1, 1, 1, 2, 1, 2]), 1);
```

### Problem 2: Maximum Subarray Sum

Given an array of integers, provide the largest sum possible using any subarray (i.e. sequence) within the array. For example, consider the following array:

```js
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
```

The largest sum is `6` because `[4, -1, 2, 1]` sums to `6`.

Also follow these conditions:

- If the array is empty, return zero.
- If the maximum sum is negative, return zero.
- Subarrays must remain unchange — do not change position or order of any node within the array.

```js
function maxSequence(numbers) {
  // ...
}

Test.assertEquals(maxSequence([]), 0);
Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
Test.assertEquals(maxSequence([-1, -2, -3, -4, -5]), 0);
Test.assertEquals(maxSequence([1, 1, 1, 1]), 4);
Test.assertEquals(maxSequence([1, -2, 2, 0, -5, 2, -1]), 2);
```

## Submitting Solutions

Your solution should be placed in the `solutions` directory. Copy the `_default.js` file to a file with your name on it (e.g. `sean.js`). You'll notice each function gets exported from the file. That's what we want for testing — don't change any of the boilerplate (you can delete comments).

First, install dependencies:

    $ yarn install

Then run the tests:

    $ yarn run test ./1909

Once your solutions are passing, open a pull request with your changes, using the format: _[1909]: Name_.
