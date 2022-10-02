/*CMD
  command: /text123
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Owners' Zone

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
var button = [{ title : "✏️Write Me" , command : "Ask" }]


Bot.sendInlineKeyboard(button , "*📫 Last Question = "+Ask+"*")
