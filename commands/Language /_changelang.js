/*CMD
  command: /changelang
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
var buttons = [
[
{title: "🇱🇰සිංහල🇱🇰", command: "/sinhala"},
{title: "🇱🇰தமிழ்🇱🇰", command: "/tamil"}
],
[
{title: "🇰🇷한국어🇰🇷", command: "/korea"},
{title: "🇮🇳हिन्दी🇮🇳", command: "/india"}
],
[{title: "Back🔙", command: "/start"}],
]
Bot.sendInlineKeyboard(buttons, "★᭄ꦿ᭄ꦿ    Select your language  ★᭄ꦿ᭄ꦿ ")

