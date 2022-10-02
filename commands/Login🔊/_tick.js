/*CMD
  command: /tick
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Login🔊

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!params) {
  return
}
if (params == "no") {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "Invalid Pass",
    show_alert: true
  })
  return
}
var password = User.getProperty("password")
var message_id = request.message.message_id
if (params == password) {
  Api.editMessageText({
    message_id: message_id,
    text: "✅Verified",
    parse_mode: "Markdown"
  })
  Bot.runCommand("/start_1")
  return
}
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Invalid Pass",
  show_alert: true
})

