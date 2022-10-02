/*CMD
  command: /banwords
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /banwords@grouphelpmrbeebot, /banwords
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
    "This bot work only in [group](https://t.me/Bee_Family )!"
  )
  return
}
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (params) {
  if (admin.list[user.telegramid] == user.telegramid) {
    var GroupAdmin_ban = Bot.getProperty("banned_" + request.chat.id, [])
    GroupAdmin_ban.push(params)
    Bot.setProperty("banned_" + request.chat.id, GroupAdmin_ban, "json")
    Bot.sendInlineKeyboard(
      [[{ title: "🗑️Clear/BanWords🗑️", command: "/banClear " + request.chat.id }]],
      "📁*Banned Words List*📝!\n\n" + inspect(GroupAdmin_ban)
    )
    return
  }
  //
  return
}
Bot.sendMessage("⚠️ Incorrect Format use\n`/banwords example!`")

