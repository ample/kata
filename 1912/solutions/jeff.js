const fn = (module.exports = {})

fn.validatePassword = function(password) {
  return /(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)
}

// fn.humanReadableTime = function(seconds) {}
