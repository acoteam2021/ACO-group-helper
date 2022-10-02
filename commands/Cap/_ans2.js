/*CMD
  command: /ans2
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
      text: "⚠️️That Wrong⚠️️\n Now you have only one more chance..",
      show_alert: true
    })
    Bot.runCommand("/warn")
    var button = [[{ title: "🔄 Try Again  ", command: "Captcha_3" }]]
    Bot.sendInlineKeyboard(
      button,
      "*❌ You Are Not Verified You Selected Wrong Emoji  on Second Time...⚠️️Try again⚠️️*"
    )
    if (request.data) {
      Api.deleteMessage({
        chat_id: request.message.chatid,
        message_id: request.message.message_id
      })
    }
  }
}

