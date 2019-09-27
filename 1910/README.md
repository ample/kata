# Kata - October 2019

We have two problems, both a little simpler than last month, but they should provide fodder for some friendly discussion. **Please don't cheat and look up solutions.** You will be publicly shamed.

## Problems

### Problem 1: Length of Shortest Word

Given a string of words, return the length of the shortest word. There will always be at least one word, and it will not contain punctuation aside from apostrophe. Apostrophes should be counted as a character.

```js
function shortestWordLength(str) {
  // ...
}

Test.assertEquals(shortestWordLength("Banana error", 5);
Test.assertEquals(shortestWordLength("Pneumonoultramicroscopicsilicovolcanoconiosis", 45);
Test.assertEquals(shortestWordLength("My nose is a communist", 1);
Test.assertEquals(shortestWordLength("Imagination tickles your brain", 4);
```

Credit for the string sources goes to:

- https://www.thetoptens.com/random-sentences/
- https://www.grammarly.com/blog/14-of-the-longest-words-in-english/

### Problem 2: Sum of Pairs

Given an array of numbers and a sum, return an array of the **first** occurring pair of nodes in that add to the sum.

For example, if the array of numbers is `[1, 2, 3, 2]` and sum is `4`, the returned array should be `[1, 3]` because `1 + 3 = 4` and that pair occurs before `2 + 2`.

There will always be at least three numbers in the array, but those numbers may be positive, negative, or zero.

While you should be mindful of the time it takes to execute your function, the tests will be relatively small and will not be subject to timing out. In addition, we will discuss the number of iterations and performance of our various solutions.

```js
function sumOfPairs(nums, sum) {
  // ...
}

Test.assertEquals(sumOfPairs([1, 2, 3, 2], 4), [1, 3])
Test.assertEquals(sumOfPairs([1, 1, 2], 2), [1, 1])
Test.assertEquals(sumOfPairs([0, 2, 6, 4], 6), [0, 6])
Test.assertEquals(sumOfPairs([12, 4, -6, 0, 2], 6), [12, -6])
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
