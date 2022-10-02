/*CMD
  command: pa9
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

if (message == user.first_name) {
  Bot.runCommand("/start_1")
  //Bot.sendMessage("1")
} else {
  Bot.sendMessage("*🚫 Invalid Password Please Enter Your Own Password*")
  Bot.runCommand("pa9")
}

