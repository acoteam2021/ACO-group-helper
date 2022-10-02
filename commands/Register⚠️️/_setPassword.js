/*CMD
  command: /setPassword
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Register⚠️️

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!options) {
  Bot.sendMessage("Don't Run Manually")
  return
}
var useralready = User.getProperty("UserStatusR")
if (useralready == "yes") {
  Bot.sendMessage("You Already Registered!")
  return
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(message)) {
  Bot.sendMessage("Numeric Values Only")
  return
}
if (message.length == 4) {
  User.setProperty("password", message, "integer")
  Bot.sendMessage("*🎁Registration Successfully Completed*")
  Bot.sendMessage("*Your PinCode :* `" + message + "`", { on_result: "/onResult🌟" })
  User.setProperty("UserStatusR", "yes")
  return
}
Bot.sendMessage("*Value Should Be 4 Characters Long*")

