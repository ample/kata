Using Ruby, create a function (or class) that takes a single argument of type String (`str`) ...

- `str` will contain single digit numbers, letters, and question marks
- Your script should evaluate if there are exactly 3 question marks between every pair of two numbers that add up to 10
    - ...if so, your script should return `true`
    - ...if not, your script should return `false`
- If any pair of two numbers that have exactly 3 question marks between them do not add up to 10, then your script should return `false`

We'll review solutions at our next twice fort-nightly code share (11/9). Let me know if you have questions.

----

Example
----------

If `str` is equal to `"arrb6???4xxbl5???eee5"` then your script should return `true` because there are exactly 3 question marks between `6` and `4`, and 3 question marks between `5` and `5` at the end of the string.

Test Cases
----------

```rb
str = "aa6?9"
# Your function should return `false`

str = "aa6???9"
# Your function should return `false`

str = "acc?7??sss?3rr1??????5"
# Your function should return `true`

str = "r1???5acc?7??sss?3r"
# Your function should return `false`
```

----

PS: This is strictly for funsies. Do not feel obligated to participate if your time is better spent elsewhere.
