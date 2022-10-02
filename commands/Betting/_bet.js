/*CMD
  command: /bet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Betting

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /bet@grouphelpmrbeebot
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
var disable = Bot.getProperty("disable_" + request.chat.id)
if (!disable) {
  Bot.sendMessage("Captcha isn't available on this group")
  return
}

