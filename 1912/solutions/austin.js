const fn = (module.exports = {})

fn.validatePassword = function(password) {
  const regex = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*d+)(?=.{6,})/g

  return regex.test(password)
}

// fn.humanReadableTime = function(seconds) {
//   //   var sec_num = parseInt(this, 10) // don't forget the second param
//   //   var hours = Math.floor(sec_num / 3600)
//   //   var minutes = Math.floor((sec_num - hours * 3600) / 60)
//   //   var second = sec_num - hours * 3600 - minutes * 60
//   //   if (hours < 10) {
//   //     hours = '0' + hours
//   //   }
//   //   if (minutes < 10) {
//   //     minutes = '0' + minutes
//   //   }
//   //   if (second < 10) {
//   //     second = '0' + second
//   //   }
//   //   return hours + ':' + minutes + ':' + second
// }
