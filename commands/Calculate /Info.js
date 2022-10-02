/*CMD
  command: Info
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Calculate 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var fullBotUsers = Bot.getProperty("wholeUsers", null)

Bot.sendMessage(
  "Broadcasting..\n\nTotal Broadcasted: 0\nTotal Users In Bot : " +
    fullBotUsers.length +"")
