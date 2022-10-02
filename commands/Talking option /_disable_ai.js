/*CMD
  command: /disable_ai
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Talking option 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /disable_ai@grouphelpmrbeebot, /disableai, /disableai@grouphelpmrbeebot
CMD*/

Api.deleteMessage({ message_id: request.message_id })
var bet = request.chat.username
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
  Bot.sendMessage("🤖A.I mode disabled by the admin @"+user.username+" of @"+ bet +"  group")
  
  Bot.setProperty("adisable_" + request.chat.id,  "string")
  return
} else {
  Bot.sendMessage("Dear @"+ user.username +"\nonly @" + bet + " group admins can disable this option....")
}


