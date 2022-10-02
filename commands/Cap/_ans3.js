/*CMD
  command: /ans3
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Cap

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/



var userAns = params

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

if (!params) {
  return
} else {
  let ans = User.getProperty("userAns")

  if (userAns == ans) {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "🙋Verified Successfully.🔰",
      show_alert: true
    })



    Bot.runCommand("start")
  } else {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "⚠️️That Wrong⚠️️\n You have no more chance..",
      show_alert: true
    })
Bot.runCommand("/warn")
    var button = [[{ title: "🔔Unmute🔉 ", command: "/unmute" }]]
    Bot.sendInlineKeyboard(
      button,
      "*❌ You Are Not Verified....⚠️*"
    )
    if (request.data) {
      Api.deleteMessage({
        chat_id: request.message.chatid,
        message_id: request.message.message_id
      })
    }
  }
}

