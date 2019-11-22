const fn = (module.exports = {})

fn.validatePassword = function(password) {
  // At least six characters
  if (password.length < 6) {
    return false
  }

  const regexMatches = regex => {
    let matches = password.match(regex)
    return matches ? matches : []
  }

  // Passwords containing special characters are invalid.
  if (regexMatches(/[^A-Za-z0-9]/g).length > 0) {
    return false
  }

  // At least one number
  if (regexMatches(/[0-9]/g).length === 0) {
    return false
  }

  // At least one lowercase letter
  if (regexMatches(/[a-z]/g).length === 0) {
    return false
  }

  // At least one uppercase letter
  if (regexMatches(/[A-Z]/g).length === 0) {
    return false
  }

  return true
}

fn.humanReadableTime = function(seconds) {
  // ...
}
