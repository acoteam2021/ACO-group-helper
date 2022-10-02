/*CMD
  command: /data
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Group Tip

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /data@grouphelpmrbeebot, /data
CMD*/

Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})

var button = [{ title: "🔰Remove🔰", command: "/DBack" }]
var FNM = request.chat.id
var bot = request.chat.username
var faj = request.chat.title
if (bot == null) {
  Bot.sendInlineKeyboard(
    button,
    "❣️ ⚡Details Of === " +
      faj +
      "\n\n💫Group Name : " +
      faj +
      "\n\n💫Group id = ` " +
      FNM +
      "` \n\n💫Group Username : None\n\n 🌊🌊🌊🌊🌊🌊"
  )
} else {
  Bot.sendInlineKeyboard(
    button,
    "❣️⚡Details Of   ===  " +
      faj +
      "\n\n💫Group Name : " +
      faj +
      "\n\n💫Group id = " +
      FNM +
      "\n\n💫Group Username : @" +
      bot +
      "\n\n 🌊🌊🌊🌊🌊🌊"
  )
}

