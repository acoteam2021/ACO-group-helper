/*CMD
  command: ð« Bot Status
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)
Bot.runCommand("emoji7")
  var stat =
    "*ð  Total Users: "+
    status +"\n\nð° Total Withdraw : " +
    userPayment.value().toFixed(4) +
    " PAYTM\n\nð TO CREATE SUCH BOT [@BOTMAKER135] \n\nð¤Bot Launch On 30th August 2021*"

  Bot.sendMessage(stat)
}
