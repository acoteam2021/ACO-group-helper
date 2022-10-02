/*CMD
  command: /panel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Command

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /panel@grouphelpmrbeebot
CMD*/

  if (chat.chat_type == "private") {
  Bot.sendInlineKeyboard(
    [
      [
        {
          title: "🚀 Add Me To A Group 🚀",
          url: "https://t.me/" + bot.name + "?startgroup=addtogroup"
        }
      ]
    ],
    "This option work only in [group](https://t.me/Bee_Family)!"
  )
  return
  
} else {


Api.sendChatAction({
    chat_id: chat.chatid,
    action: "typing"
  })
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
      { title: "📌️Pin", command: "/pin" },
      { title: "🗑️Msg Deleter", command: "/del" }
    ],

    [{ title: "Change Language🌐", command: "/changelang" }],
 
  [{ title: "Change style📲", command: "/changestyle" }]
]
  Bot.sendInlineKeyboard(keyboard, "༺༒༻")



}





