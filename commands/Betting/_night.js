/*CMD
  command: /night
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Betting

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var buttons = [
  [
    { title: "Enable 🌔", command: "/Night ON" },
    { title: "Disable 🌔", command: "/Night OFF" }
  ]
]

Bot.sendInlineKeyboard(
  buttons,
  "\n Click on Enable or Disable Button to Enable or Disable night mode....."
)

