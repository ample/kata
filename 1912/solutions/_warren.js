const fn = (module.exports = {})

// - At least six characters
// - At least one number
// - At least one lowercase letter
// - At least one uppercase letter

fn.validatePassword = function(password) {
  return /^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/.test(password)
}

fn.humanReadableTime = function(seconds) {
  // ...
}
