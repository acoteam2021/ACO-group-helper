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
{title: "ð±ð°à·à·à¶à·à¶½ð±ð°", command: "/sinhala"},
{title: "ð±ð°à®¤à®®à®¿à®´à¯ð±ð°", command: "/tamil"}
],
[
{title: "ð°ð·íêµ­ì´ð°ð·", command: "/korea"},
{title: "ð®ð³à¤¹à¤¿à¤¨à¥à¤¦à¥ð®ð³", command: "/india"}
],
[{title: "Backð", command: "/start"}],
]
Bot.sendInlineKeyboard(buttons, "âá­ê¦¿á­ê¦¿    Select your language  âá­ê¦¿á­ê¦¿ ")

