/*CMD
  command: /maintainace
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /maintainace@grouphelpmrbeebot
CMD*/

if (user.telegramid == 5514111111) {
  var button = [
    [
      { title: "⏸ On ", command: "/on" },
      { title: "▶️ Off", command: "/off" }
    ]
  ]
  var cur = Bot.getProperty("mode")
  Bot.sendInlineKeyboard(
    button,
    "*♻️ Select Your Choice To On/Off The Maintainace Mode.\n\n💠 Current Mode = " +
      cur +
      "*"
  )
} else {
  Bot.sendMessage("*⛔️ You Are Not An Admin*")
}

