/*CMD
  command: /korea
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
  [{ title: "Back🔙", command: "/start_Ko" }]
]
Bot.sendInlineKeyboard(
  buttons,
  "그럼 이제부터 한국어🇰🇷 로 인사드리겠습니다."
)
// command post runs a command
// where the url is written opens a link:/

