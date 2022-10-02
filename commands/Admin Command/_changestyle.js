/*CMD
  command: /changestyle
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var button = [
  [
    {
      text: "➕Style 1➕",
      ,command: "/style1"
    }
  ],
]

Api.sendPhoto({
  photo: "https://telegra.ph/file/9bf4e6bcc1a7117ee9563.jpg",
  caption:
    "Hello!\nWelcome To Mr.All Bee group help Bot\n\n*And also join with our Family.....*",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: button }
})

