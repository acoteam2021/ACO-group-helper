/*CMD
  command: MyBots
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

Api.deleteMessage({ message_id: request.message.message_id })
var mybots = User.getProperty("mybot")
var b = [[{title: "🔙 Back" ,command: "/start"}]]
Bot.sendInlineKeyboard(b, "🛡️~  "+mybots+"   ")
