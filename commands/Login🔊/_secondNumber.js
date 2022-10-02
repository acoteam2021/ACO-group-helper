/*CMD
  command: /secondNumber
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
var but = [
  [
    { text: "1", callback_data: "/thirdNumber " + params + "1" },
    { text: "2", callback_data: "/thirdNumber " + params + "2" },
    { text: "3", callback_data: "/thirdNumber " + params + "3" }
  ],
  [
    { text: "4", callback_data: "/thirdNumber " + params + "4" },
    { text: "5", callback_data: "/thirdNumber " + params + "5" },
    { text: "6", callback_data: "/thirdNumber " + params + "6" }
  ],
  [
    { text: "7", callback_data: "/thirdNumber " + params + "7" },
    { text: "8", callback_data: "/thirdNumber " + params + "8" },
    { text: "9", callback_data: "/thirdNumber " + params + "9" }
  ],
  [
    { text: "◀️", callback_data: "/back " + params.charAt(0) + "⬜⬜⬜" },
    { text: "0", callback_data: "/thirdNumber " + params + "0" },
    { text: "✅", callback_data: "/tick no" }
  ]
]

var message_id = request.message.message_id
if (request.data) {
  Api.editMessageText({
    message_id: message_id,
    text:
      "*Enter Your Current Pin Code*\nAttempts Left: 3\n\n🔐PIN: " +
      params +
      "⬜️⬜️",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: but }
  })
}

