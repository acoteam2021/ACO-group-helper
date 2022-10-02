/*CMD
  command: /back1
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

var splt = params.split(" ")
var level = splt[0]
var number = splt[1]
var message_id = request.message.message_id
if (level == "first") {
  var but1 = [
    [
      {
        text: "1",
        callback_data:
          "/thirdNumber " + number.charAt(0) + "" + number.charAt(1) + "1"
      },
      {
        text: "2",
        callback_data:
          "/thirdNumber " + number.charAt(0) + "" + number.charAt(1) + "2"
      },
      {
        text: "3",
        callback_data:
          "/thirdNumber " + number.charAt(0) + "" + number.charAt(1) + "3"
      }
    ],
    [
      {
        text: "4",
        callback_data:
          "/thirdNumber " + number.charAt(0) + "" + number.charAt(1) + "4"
      },
      {
        text: "5",
        callback_data:
          "/thirdNumber " + number.charAt(0) + "" + number.charAt(1) + "5"
      },
      {
        text: "6",
        callback_data:
          "/thirdNumber " + number.charAt(0) + "" + number.charAt(1) + "6"
      }
    ],
    [
      {
        text: "7",
        callback_data:
          "/thirdNumber " + number.charAt(0) + "" + number.charAt(1) + "7"
      },
      {
        text: "8",
        callback_data:
          "/thirdNumber " + number.charAt(0) + "" + number.charAt(1) + "8"
      },
      {
        text: "9",
        callback_data:
          "/thirdNumber " + number.charAt(0) + "" + number.charAt(1) + "9"
      }
    ],
    [
      { text: "◀️", callback_data: "/back " + number + "⬜" },
      {
        text: "0",
        callback_data:
          "/thirdNumber " + number.charAt(0) + "" + number.charAt(1) + "0"
      },
      { text: "✅", callback_data: "/tick no" }
    ]
  ]

  Api.editMessageText({
    message_id: message_id,
    text:
      "*Enter Your Current Pin Code*\nAttempts Left: 3\n\n🔐PIN: " +
      number +
      "",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: but1 }
  })
}
if (level == "second") {
  var but1 = [
    [
      {
        text: "1",
        callback_data:
          "/fourthNumber " +
          number.charAt(0) +
          "" +
          number.charAt(1) +
          "" +
          number.charAt(2) +
          "1"
      },
      {
        text: "2",
        callback_data:
          "/fourthNumber " +
          number.charAt(0) +
          "" +
          number.charAt(1) +
          "" +
          number.charAt(2) +
          "2"
      },
      {
        text: "3",
        callback_data:
          "/fourthNumber " +
          number.charAt(0) +
          "" +
          number.charAt(1) +
          "" +
          number.charAt(2) +
          "3"
      }
    ],
    [
      {
        text: "4",
        callback_data:
          "/fourthNumber " +
          number.charAt(0) +
          "" +
          number.charAt(1) +
          "" +
          number.charAt(2) +
          "4"
      },
      {
        text: "5",
        callback_data:
          "/fourthNumber " +
          number.charAt(0) +
          "" +
          number.charAt(1) +
          "" +
          number.charAt(2) +
          "5"
      },
      {
        text: "6",
        callback_data:
          "/fourthNumber " +
          number.charAt(0) +
          "" +
          number.charAt(1) +
          "" +
          number.charAt(2) +
          "6"
      }
    ],
    [
      {
        text: "7",
        callback_data:
          "/fourthNumber " +
          number.charAt(0) +
          "" +
          number.charAt(1) +
          "" +
          number.charAt(2) +
          "7"
      },
      {
        text: "8",
        callback_data:
          "/fourthNumber " +
          number.charAt(0) +
          "" +
          number.charAt(1) +
          "" +
          number.charAt(2) +
          "8"
      },
      {
        text: "9",
        callback_data:
          "/fourthNumber " +
          number.charAt(0) +
          "" +
          number.charAt(1) +
          "" +
          number.charAt(2) +
          "9"
      }
    ],
    [
      { text: "◀️", callback_data: "/back " + number + "⬜" },
      {
        text: "0",
        callback_data:
          "/fourthNumber " +
          number.charAt(0) +
          "" +
          number.charAt(1) +
          "" +
          number.charAt(2) +
          "0"
      },
      { text: "✅", callback_data: "/tick no" }
    ]
  ]
  Api.editMessageText({
    message_id: message_id,
    text:
      "*Enter Your Current Pin Code*\nAttempts Left: 3\n\n🔐PIN: " +
      number +
      "",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: but1 }
  })
}

