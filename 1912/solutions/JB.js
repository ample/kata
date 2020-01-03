const fn = (module.exports = {})

fn.validatePassword = function (password) {

  // Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems.
  //  - Jamie Zawinski

  const regex = /(?=.*[a-zA-Z0-9])(?=.*\d+)(?=.*[a-z]+)(?=.*[A-Z]+).{6,}/g;
  return regex.test(password);
}

fn.humanReadableTime = function (seconds) {
  // ...
}
