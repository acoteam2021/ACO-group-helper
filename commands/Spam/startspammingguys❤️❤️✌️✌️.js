/*CMD
  command: startspammingguys❤️❤️✌️✌️
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Spam

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var r = User.getProperty("info")
if (r == "spam") {
  
var spammsg = User.getProperty("current")
Bot.sendMessage("*💫----🔥----❣️--*\n\n\n"+spammsg+"\n\n\n**")
Bot.runCommand("startspammingguys❤️❤️✌️✌️")
}
