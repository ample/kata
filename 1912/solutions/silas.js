const fn = (module.exports = {})

fn.validatePassword = function(password) {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})(?!.*[\W])/.test(password)
}

fn.humanReadableTime = function(seconds) {
  const sec = Math.floor(seconds % 60)
  const a = seconds / 60
  const min = Math.floor(a % 60).toString()
  const b = a / 60
  const hour = Math.floor(b).toString()

  const time = ('0' + hour).slice(-2) + ':' + ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2)

  return time
}
