/*CMD
  command: Set
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Betting

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(message)) {
  Bot.sendMessage("Numeric Values Only")
  return
}
if (message.length == 1) {
  User.setProperty("night", message, +request.chat.id, "integer")
  Bot.sendMessage("*🌔Night mode hours Successfully Completed*")
  Bot.sendMessage("*Your Requested hours to.night mode :* `" + message + "`", {
    on_result: "/onResult🌟"
  })

  return
}
Bot.sendMessage("*Value Should Be 1 Characters Long*")

