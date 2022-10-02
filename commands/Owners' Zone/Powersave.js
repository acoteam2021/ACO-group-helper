/*CMD
  command: Powersave
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Owners' Zone

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var k = Bot.getProperty("management", "🛑 Off")
let work = Bot.getProperty("work")
if (
  user.telegramid == "1984415770" ||
  user.telegramid == "5514111111" ||
  user.telegramid == "2110220740" ||
  user.telegramid == "5412537093"
) {
  var b = [
    [
      { text: "✅ Turn On", callback_data: "/turnon" },
      { text: "🛑 Turn OFF", callback_data: "/turnoff" }
    ],
    [{ text: "◀️ Return", callback_data: "/setmode r" }],
    [{ text: "⬅️ Back To Settings", callback_data: "/owners' zone" }]
  ]
  let txt =
    "*🔋Power Saving Mode is Currently: *" +
    k +
    "\n\n♻️ Your Itration Status: " +
    iteration_quota.progress
  Api.editMessageText({
    chat_id: chat.chatid,
    text: txt,
    message_id: id,
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: b }
  })
} else {
  Bot.runCommand("/start")
}

