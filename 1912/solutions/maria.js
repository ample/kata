const fn = (module.exports = {})

fn.validatePassword = function(password) {
  return /(?=.*\w{6,})(?=.*\d+)(?=.*[a-z]+)(?=.*[A-Z]+)(^[a-zA-Z0-9]+$)/g.test(password)
}

fn.humanReadableTime = function(seconds) {
  let total = []

  const timeCalc = (seconds, divisor) => {
    total.push(Math.floor(seconds / divisor))
    seconds %= divisor

    return divisor === 1
      ? total.join(':').replace(/\b[0-9]\b/g, '0$&')
      : timeCalc(seconds, divisor / 60)
  }

  return timeCalc(seconds, 3600)
}
