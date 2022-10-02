/*CMD
  command: /back
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Login🔊

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!params) {
  return
}
var message_id = request.message.message_id
if (params == "no") {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "No Value For Backing.",
    show_alert: true
  })
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
var but1 = [
  [
    { text: "1", callback_data: "/secondNumber 1" },
    { text: "2", callback_data: "/secondNumber 2" },
    { text: "3", callback_data: "/secondNumber 3" }
  ],
  [
    { text: "4", callback_data: "/secondNumber 4" },
    { text: "5", callback_data: "/secondNumber 5" },
    { text: "6", callback_data: "/secondNumber 6" }
  ],
  [
    { text: "7", callback_data: "/secondNumber 7" },
    { text: "8", callback_data: "/secondNumber 8" },
    { text: "9", callback_data: "/secondNumber 9" }
  ],
  [
    { text: "◀️", callback_data: "/back blank" },
    { text: "0", callback_data: "/secondNumber 0" },
    { text: "✅", callback_data: "/tick no" }
  ]
]
if (params == "blank") {
  Api.editMessageText({
    message_id: message_id,
    text:
      "*Enter Your Current Pin Code*\nAttempts Left: 3\n\n🔐PIN: ⬜️⬜️⬜️⬜️",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: but }
  })
  return
}
Api.editMessageText({
  message_id: message_id,
  text:
    "*Enter Your Current Pin Code*\nAttempts Left: 3\n\n🔐PIN: " + params + "",
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: but1 }
})

