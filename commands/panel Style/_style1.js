/*CMD
  command: /style1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: panel Style

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendPhoto({ photo: "https://telegra.ph/file/12c34a81d10ee900b600b.jpg" })
var keyboard = [
  [
    { title: "⚠️ Ban", command: "/ban_1" },
    { title: "⚠️ Unban", command: "/unban_1" }
  ],
  [
    { title: "🔇Mute", command: "/mute_1" },
    { title: "🔈 UnMute", command: "/unmute_1" }
  ],
  [
    { title: "🔔Warn", command: "/warn_1" },
    { title: "🌐Info", command: "/info_1" }
  ],
  [
    { title: "📌️Pin", command: "/pin" },
    { title: "🗑️Msg Deleter", command: "/del" }
  ],

  [{ title: "Change Language🌐", command: "/changelang" }],

  [{ title: "Change style📲", command: "/changestyle" }]
]
Bot.sendInlineKeyboard(keyboard, "༺༒༻")

