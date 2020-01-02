const fn = (module.exports = {})

/**
 * Given a password (as a string), validate the password using the following rules...
 *  - At least six characters
 *  - At least one number
 *  - At least one lowercase letter
 *  - At least one uppercase letter
 */
fn.validatePassword = function(password) {
  return /^(?=.{6,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(password)
}

/**
 * Given a positive integer representing a number of seconds,
 * format it into human readable time (hours, minutes, seconds) as HH:MM:SS
 */
fn.humanReadableTime = function(seconds) {
  let date = new Date(null)
  date.setSeconds(seconds)

  let str = date.toISOString()
  let hours = str.substr(11, 2)
  let minSec = str.substr(14, 5)
  let days = Math.floor(seconds / (3600 * 24))
  let totalHours = (24 * days + parseInt(hours)).toString()

  return `${totalHours.padStart(2, '0')}:${minSec}`
}

// ------------------------------------------------------------- //

/**
 * Polyfill for padStart...
 * https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 */
if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0 //truncate if number, or convert non-number to 0;
    padString = String(padString !== undefined ? padString : ' ')
    if (this.length >= targetLength) {
      return String(this)
    } else {
      targetLength = targetLength - this.length
      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length) //append to original to ensure we are longer than needed
      }
      return padString.slice(0, targetLength) + String(this)
    }
  }
}
