/*CMD
  command: /2ndunban
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

var id = Bot.getProperty(params.split(" ")[0])
var time = params.split(" ")[1]
var key = params.split(" ")[2]
var optional = params.split(" ")[3]
if (optional == "und") {
  var due = ""
} else {
  if (!params.split(key)[1]) {
    var no1 = ""
  } else {
    var no1 = params.split(key)[1].slice(1)
  }
  if (!params.split(key)[2]) {
    var no2 = ""
  } else {
    var no2 = params.split(key)[2].slice(1)
  }
  var due = "• <b>Due to</b>:" + no1 + no2
}
if (time == "und") {
  var ff = due
} else {
  var ff = ""
}
if (key == "und") {
  var text = ff
} else {
  var text = "• <b>Release</b>: " + time + " " + key + "\n" + due
}
var admin = Bot.getProperty("admin_" + chat.chatid, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  Api.unbanChatMember({
    chat_id: chat.chatid,
    user_id: id.user_id
  })
  Api.editMessageText({
    message_id: request.message.message_id,
    text: id.html + " banned.\n" + text + "\n\n~ User unbanned",
    parse_mode: "html"
  })
} else {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "You are not admin on this group!",
    show_alert: true
  })
}

