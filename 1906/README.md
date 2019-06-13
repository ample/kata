Kata - June 2019
==========

Since we have an array of experience levels, lets start off with a couple scenarios that are a bit simpler. We'll see how these go and discuss how much more difficult we should get.

I'm going to write the examples (and my solution) in JavaScript, but you're welcome to use any language you'd like. (But, realistically, let's say JS or Ruby, since that's primarily what we're using at Ample.)

Problem 1: Filtering Numbers
----------

Given an array of non-zero positive numbers and/or strings, return an array consisting only of the integers from the original array in their original order.

**Function:**

```js
function filterList(l) {
  // ...
}
```

**Test cases:**

```js
filterList([1, 2, 'a', 'b'])
// => [1, 2]

filterList([1, 'a', 'b', 0, 15])
// => [1, 0, 15]

filterList([1, 2, 'aasf', '1', '123', 123])
// => [1, 2, 123]
```

Problem 2: Duplicate Characters
----------

Given a string of characters, return a string, where the character ( represents characters occurring only once from the original string, and ) represents characters occurring more than once. The result should be case insensitive, meaning upper and lower case letters of the same letter are considered the same character.

For example, din should return (((, while Success should return )())()).

**Function:**

```js
function duplicateEncode(word) {
  // ...
}
```

**Test Cases:**

```js
duplicateEncode("din")
// => "((("

duplicateEncode("recede")
// => "()()()"

duplicateEncode("Success")
// => ")())())"

duplicateEncode("(( @")
// => "))(("
```
