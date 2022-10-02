/*CMD
  command: /rate1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Rate💮

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var alreadysent = User.getProperty("alreadysen")
if (alreadysent) {
  Bot.sendMessage("*🚫 You Heve Already Rated *")
  return
}
Api.sendMessage({
  chat_id: "@acobot_Team ",

  text:
    "*❤️ Thanks for your Feedback ❤️\n\n👤 First Name : -  " +
    user.first_name +
    " \n👨‍💻User Id - " +
    user.telegramid +
    "\n😍Rating " +
    params +
    "*",
  parse_mode: "Markdown"
})

Api.answerCallbackQuery({
  callback_query_id: request.id,

  text: "😊 Thanks For Rating Us 😊",

  show_alert: true
})
Bot.sendMessage("*❤️ Thanks For Rating Us*")
User.setProperty("alreadysen", ".")

