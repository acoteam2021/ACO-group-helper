/*CMD
  command: /rate
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Rate💮

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /rate@grouphelpmrbeebot
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var alreadysent = User.getProperty("alreadysent")
if (alreadysent) {
  Bot.sendMessage("You Already Rated Thanks ❤️")
  return
}
var button = [
  [{ title: "❤❤❤❤❤", command: "/rate1  🌟 🌟 🌟 🌟 🌟" }],
  [{ title: "🧡🧡🧡🧡", command: "/rate1 🌟  🌟 🌟 🌟" }],
  [{ title: "💚💚💚", command: "/rate1🌟🌟🌟" }],
  [{ title: "💙💙", command: "/rate1 🌟🌟" }],
  [{ title: "🖤", command: "/rate1🌟" }]
]

Bot.sendInlineKeyboard(
  button,

  "*🤝 Please Rate Us :  @" + bot.name + "*"
)

