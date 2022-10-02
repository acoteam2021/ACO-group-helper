/*CMD
  command: /pin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Pin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /pin@grouphelpmrbeebot, pin it, pin
CMD*/

Api.deleteMessage({ message_id: request.message_id })
if (chat.chat_type == "private") {
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "🚀 Add Me To A Group 🚀",
          url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
        }
      ]
    ],
    "This bot work only in group!"
  )
  return
}
var bot = request.chat.username
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  if (request.reply_to_message) {
    Api.pinChatMessage({
      chat_id: chat.chatid,
      message_id: request.reply_to_message.message_id
    })
    Bot.sendMessage(
      "*📢I Pinned   *[This Message](https://t.me/" +
        request.chat.username +
        "/" +
        request.reply_to_message.message_id +
        ")*\n\n On 👮️ Request Of:- @" +
        user.username +
        "*"
    )
    return
  }
  Bot.sendMessage("😴*Reply To A message To Pin*")
}else{

Bot.sendMessage("🍂Dear"+user.first_name+"\nOnly Group 👮️Admins can 📌️pin messages in group ➣ @" +
      bot  )
}

