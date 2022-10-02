/*CMD
  command: /india
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Language 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message.message_id })

Api.deleteMessage({ message_id: request.message.message_id })
var buttons = [
  [{ title: "Help", command: "/help" }],
  [{ title: "Back🔙", command: "/start_IN" }]
]
Bot.sendInlineKeyboard(
  buttons,
  " खैर, 🇮🇳 अब से मैं आपके साथ हिंदी में में डील करूंगा."
)
// command post runs a command
// where the url is written opens a link:/

