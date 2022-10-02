/*CMD
  command: /ai_enable
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Talking option 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message_id })
var bot = request.chat.username
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
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (admin.list[user.telegramid] == user.telegramid) {
  Bot.setProperty("able_" + request.chat.id, "","🛡️enable🔰", "string")
  Bot.sendMessage(
    "🤖A.I. mode enabled by the admin @" +
      user.username +
      " of @" +
      bot +
      "  group"
  )

  return
} else {
  Bot.sendMessage("Dear @"+ user.username +"\n only @" + bot + " group admins can enable this option....")

  
}

