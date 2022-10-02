/*CMD
  command: /unban
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /unban@grouphelpmrbeebot
CMD*/

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
    "This bot work only in [group](https://t.me/Bee_Family)!"
  )
  return
}
var admin = Bot.getProperty("admin_" + request.chat.id, { list: {} })
if (request.reply_to_message) {
  if (admin.list[user.telegramid] == user.telegramid) {
    Api.unbanChatMember({
      chat_id: request.chat.id,
      user_id: request.reply_to_message.from.id
    })
    Api.sendMessage({
      text:
        Bot.getProperty(request.reply_to_message.from.id).html +
        " [<code>"+request.reply_to_message.from.id+"</code>] is no longer banned.",
      parse_mode: "html"
    })
    //mute
  } else {
    Bot.sendMessage("*You are not admin on this group*!")
  }
  return
}
if (!params) {
  Bot.sendMessage("⚠️ Incorrect Format use\n`/unban @user`")
} else {
  if (!Bot.getProperty(params)) {
    Bot.sendMessage("*User not found*!")
    return
  }
  if (admin.list[user.telegramid] == user.telegramid) {
    Api.unbanChatMember({
      chat_id: request.chat.id,
      user_id: Bot.getProperty(params).user_id
    })
    Api.sendMessage({
      text: Bot.getProperty(params).html + " [<code>"+Bot.getProperty(params).user_id+"</code>] is no longer banned.",
      parse_mode: "html"
    })
    //unmute
  } else {
    Bot.sendMessage("*You are not admin on this group*!")
  }
}
