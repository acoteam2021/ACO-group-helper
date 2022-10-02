/*CMD
  command: /balance
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

var bbpoints = Libs.ResourcesLib.userRes("bbpoints")
Bot.sendMessage("Current your BB points : " + bbpoints.value())

