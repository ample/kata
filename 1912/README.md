# Kata - December 2019

Another two problems for our next Dev Code Share meeting:

## Problems

### Problem 2: Password Regex

Given a password (as a string), validate the password using a [Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

A valid password must follow these rules:

- At least six characters
- At least one number
- At least one lowercase letter
- At least one uppercase letter

Passwords containing special characters are invalid.

```js
function validatePassword(password) {
  return //.test(password);
}

Test.assertEquals(validatePassword('djI38D55'), true)
Test.assertEquals(validatePassword('a2.d412'), false)
Test.assertEquals(validatePassword('JHD5FJ53'), false)
Test.assertEquals(validatePassword('!fdjn345'), false)
Test.assertEquals(validatePassword('jfkdfj3j'), false)
Test.assertEquals(validatePassword('123'), false)
Test.assertEquals(validatePassword('abc'), false)
Test.assertEquals(validatePassword('Password123'), true)
```

### Problem 2: Human Readable Time

Given a positive integer representing a number of seconds, format it into human readable time (hours, minutes, seconds) as `HH:MM:SS`. For example, `60` seconds is one minute and would output `00:01:00`, while `359999` seconds is `99:59:59`.

Number of seconds passed to the function will be either positive or zero.

```js
function humanReadableTime(seconds) {
  // Your code here ...
}

Test.assertEquals(humanReadableTime(0), '00:00:00')
Test.assertEquals(humanReadableTime(5), '00:00:05')
Test.assertEquals(humanReadableTime(60), '00:01:00')
Test.assertEquals(humanReadableTime(86399), '23:59:59')
Test.assertEquals(humanReadableTime(359999), '99:59:59')
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
