const fn = (module.exports = {})

fn.validatePassword = function (password) {

  // Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems.
  //  - Jamie Zawinski

  const regex = /(?=.*[a-zA-Z0-9])(?=.*\d+)(?=.*[a-z]+)(?=.*[A-Z]+).{6,}/g;
  return regex.test(password);
}

fn.humanReadableTime = function (seconds) {
    const hour = Math.trunc(seconds/3600)
    const minute = Math.trunc((seconds - (hour * 3600))/60) % 60
    const second = (seconds - (minute * 60) - (hour * 3600)) % 60
  
    const padZero = (number) => ('0' + number).slice(-2)
  
    return `${padZero(hour)}:${padZero(minute)}:${padZero(second)}` 
}
