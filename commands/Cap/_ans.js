/*CMD
  command: /ans
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
    Api.restrictChatMember({
      chat_id: request.chat.id,
      user_id: user.telegramid,
      permissions: {
        can_send_messages: true,
        can_send_media_messages: true,
        can_send_polls: true,
        can_send_other_messages: true,
        can_add_web_page_previews: true,
        can_invite_users: true
      }
    })

    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "🙋Verified Successfully.🔰",
      show_alert: true
    })
  } else {
    Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "⚠️️That Wrong⚠️️",
      show_alert: true
    })

    var button = [[{ title: "🔄 Try Again  ", command: "Captcha_2" }]]
    Bot.sendInlineKeyboard(
      button,
      "*❌ You Are Not Verified You Selected Wrong Emoji  on First Time...⚠️️Try again⚠️️*"
    )
    if (request.data) {
      Api.deleteMessage({
        chat_id: request.message.chatid,
        message_id: request.message.message_id
      })
    }
  }
}

