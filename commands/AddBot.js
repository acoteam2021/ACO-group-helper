/*CMD
  command: AddBot
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })
var inline = [[{title : "🔙 Back" , command : "/start"}]]

Bot.sendInlineKeyboard(inline, "*To connect a bot, you should follow these two steps:*\n\n1. Open @BotFather and [Create a new bot](https://telegra.ph/Create-Bot-Livegram-FAQ-03-29)\n\n2. You'll get a token (e.g. 12345:6789ABCDEF) — just forward or copy-paste it to this chat.\n\n*Warning!* Don't connect bots already used by other services like Chatfuel, Manybot, ect. \n\nAds: ", { disable_web_page_preview: "true" })

Bot.runCommand("add")
