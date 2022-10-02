/*CMD
  command: Slove1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Maths Captcha 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var solve = Bot.getProperty("slove")
if (message == solve) {
  Bot.sendMessage("*✅ You Have Been Verified Successfully .*")
} else {
  Bot.sendMessage("*❌ Wrong Answer ! Try Again.*")
  Bot.runCommand("main_menu")
}

