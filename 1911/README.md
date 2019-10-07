# Kata - November 2019

Another two problems for our next Dev Code Share meeting

## Problems

### Problem 1: Convert String to Weird Case

Given a string of words, return the same string in WeIrD CaSe. With weird case, the first letter of the word is always capitalized, while the remaining characters change case one by one.

There will always be at least one word, and it will not contain punctuation (including apostrophes).

```js
function toWeirdCase(str) {
  // ...
}

Test.assertEquals(toWeirdCase('Banana error', 'BaNaNa ErRoR'))
Test.assertEquals(toWeirdCase('schadenfreude', 'ScHaDeNfReUdE'))
Test.assertEquals(toWeirdCase('My nose is a communist', 'My NoSe Is A CoMmUnIsT'))
```

### Problem 2: Duplicate Characters

Given a string, return the number of characters that are duplicated in a string, ignoring case. Characters may be alphanumeric only, meaning there will be no spaces or other special characters.

For example, `"abcde"` would have a count of `0` because no characters are repeated. But `helloworld` would have a count of `2` because `l` and `o` occur more than once.

```js
function duplicateCount(str) {
  // ...
}

Test.assertEquals(duplicateCount('abcdefghijklmnopqrstuvwxyz0123456789', 0))
Test.assertEquals(duplicateCount('HelloWorld', 2))
Test.assertEquals(duplicateCount('HenryAaron', 3))
Test.assertEquals(duplicateCount('Th1sth1ng', 3))
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
