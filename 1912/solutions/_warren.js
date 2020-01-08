const fn = (module.exports = {})

fn.validatePassword = function(password) {
  return /^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/.test(password)
}

fn.humanReadableTime = function(seconds) {
  let timeSegments = []
  timeSegments.push(parseInt(seconds / 3600))
  seconds -= timeSegments[0] * 3600
  timeSegments.push(parseInt(seconds / 60))
  seconds -= timeSegments[1] * 60
  timeSegments.push(seconds)
  return timeSegments.map(segment => segment.toString().padStart(2, '0')).join(':')
}
