/*CMD
  command: 📫Login
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Login🔊

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: login
CMD*/

var alreadyuser = User.getProperty("UserStatusR")
if (!alreadyuser) {
  Bot.sendMessage("*Please Register / Login Before Log into Admin panel *")
  return
}
var but = [
  [
    { text: "1", callback_data: "/firstNumber 1" },
    { text: "2", callback_data: "/firstNumber 2" },
    { text: "3", callback_data: "/firstNumber 3" }
  ],
  [
    { text: "4", callback_data: "/firstNumber 4" },
    { text: "5", callback_data: "/firstNumber 5" },
    { text: "6", callback_data: "/firstNumber 6" }
  ],
  [
    { text: "7", callback_data: "/firstNumber 7" },
    { text: "8", callback_data: "/firstNumber 8" },
    { text: "9", callback_data: "/firstNumber 9" }
  ],
  [
    { text: "◀️", callback_data: "/back no" },
    { text: "0", callback_data: "/firstNumber 0" },
    { text: "✅", callback_data: "/tick no" }
  ]
]
Api.sendMessage({
  text:
    "*Enter Your Current Pin Code*\nAttempts Left: 3\n\n🔐PIN: ⬜️⬜️⬜️⬜️",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: but }
})

