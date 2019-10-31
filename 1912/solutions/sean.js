const fn = (module.exports = {})

fn.validatePassword = function(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password)
}

fn.humanReadableTime = function(seconds) {
  const vals = []
  const calcs = [3600, 60, 1]

  calcs.reduce((acc, cur) => {
    const num = acc / cur
    vals.push(parseInt(num))
    return Math.round((num % 1) * cur)
  }, seconds)

  return vals.map(x => `${x}`.padStart(2, '0')).join(':')
}
