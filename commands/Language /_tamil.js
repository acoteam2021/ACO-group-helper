/*CMD
  command: /tamil
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
  [{ title: "Back🔙", command: "/start_SLT" }]
]
Bot.sendInlineKeyboard(
  buttons,
  "சரி, இனிமேல் நான் உங்களுடன் தமிழில் பேசுகிறேன்🇱🇰"
)
// command post runs a command
// where the url is written opens a link:/

