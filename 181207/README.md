Vowel Matrix
==========

Using Ruby, create a function that takes a single argument of type Array (`arr`) which represents a 2D matrix of some arbitrary size filled with letters from the alphabet. Your function should determine if there is a 2x2 square composed entirely of vowels exists within the matrix.

For example: `arr` is an array that looks this: `["abcd", "eikr", "oufj"]` then the matrix would look like the following...

```plain
a b c d
e i k r
o u f j
```

Within this matrix there is a 2x2 square of vowels starting in the second row and first column, namely, `ei` and `ou`.
Your function should satisfy the following conditions...

1. If a 2x2 square of vowels is found your function should return the top-left position (row-column) of the square. (The above example would return `1-0`)
2. If no 2x2 square of vowels exists, then return the string `"not found"`
3. If there are multiple squares of vowels, return the one that is at the most top-left position in the whole matrix.

Test Cases
----------

```rb
arr = ["aqrst", "ukaei", "ffooo"]
# your function should return "1-2"

arr = ["gg", "ff"]
# your function should return "not found"
```

PS: This is strictly for funsies. Do not feel obligated to participate if your time is better spent elsewhere.
