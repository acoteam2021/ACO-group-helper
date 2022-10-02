/*CMD
  command: /own
  help: 
  need_reply: false
  auto_retry_time: 
  folder: MAintenance 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == 5514111111) {
  var button = [
  
      [{ title: "👇🛠️Maintenace Mode🛠️👇", command: " " }],
    [{ title: "⏸ Enable Maintenance Mode✅", command: "/on8169" }],
    [{ title: "▶️ Dissable Maintenance Mode❎", command: "/off8169" }],
      
      [{ title: "👇🔋Power Saving Mode🔋👇", command: " " }],
    [{ title: "🔋 Enable PowerSaving Mode✅", command: "/on816960" }],
    [{ title: "🔋Dissable PowerSaving Mode❎", command: "/off816960" }]
  ]
  var cur8 = Bot.getProperty("mode8")
  var cur = Bot.getProperty("mode")
  Bot.sendInlineKeyboard(
    button,
    "♻️ Select Your Choice To On/Off The Maintainace Mode.\n\n*💠 Current Maintenance Mode = " +
      cur +
      "*\n*💠 Current Power Saving  Mode = " +
      cur8 +
      "*"
  )
} else {
  Bot.sendMessage("*⛔️ You Are Not An Admin*")
}

