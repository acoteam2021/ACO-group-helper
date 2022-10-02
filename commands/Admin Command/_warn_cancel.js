/*CMD
  command: /warn_cancel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var admin = Bot.getProperty("admin_" + chat.chatid, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  var warn = Libs.ResourcesLib.anotherUserRes("warn_" + chat.chatid, params)
  warn.set(0)
  Api.restrictChatMember({
    chat_id: chat.chatid,
    user_id: params,
    permissions: {
      can_send_messages: true,
      can_send_media_messages: true,
      can_send_polls: true,
      can_send_other_messages: true,
      can_add_web_page_previews: true,
      can_invite_users: true
    }
  })
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      Bot.getProperty(params).html +
      " [<code>" +
      Bot.getProperty(params).user_id +
      "</code>] has no more warnings!\n\n~ User unmuted",
    parse_mode: "html"
  })
} else {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "You are not admin on this group!",
    show_alert: true
  })
}

