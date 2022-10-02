/*CMD
  command: loog
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Starting📯

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (message == user.telegramid) {
  Bot.runCommand("pa9")
} else {
  Bot.sendMessage("*🚫 Wrong Username Or No Account Exist With That Username*")
  Bot.runCommand("loog")
}

