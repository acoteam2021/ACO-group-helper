/*CMD
  command: sign
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Starting📯

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

var log = [{ title: "♻️ Log In", command: "loog" }]

if (user.telegramid == user.telegramid) {
  Bot.sendInlineKeyboard(log, "*✅ Successfully Registered")
}

