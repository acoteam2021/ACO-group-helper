/*CMD
  command: /paytm
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Refer

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /paytm@grouphelpmrbeebot
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  api.deletemessage({
    chat_id: chat_id,
    message_id: message_id
  })
}


Api.sendPhoto({
  photo: "https://t.me/jjdjdjddjdjd/2", // it is picture!
  caption: " *   🎭 Select Payment Methods 🎭*\n\n",
parse_mode : "Markdown" ,


  reply_markup: { inline_keyboard: [
    [
      { text: "🎭 PayTM Wallet", callback_data: "PayTM" },{text: "⚠️ Help", callback_data: "Help" }
    ]]}
});

var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(2)
  Bot.sendMessageToChatWithId(5514111111 ,
    "*🎭 New User *\n\n 👨‍🌾User = "+user.first_name+"\n\n💳 User Id =* " +
      user.telegramid +
      ""
  )
}
User.setProperty("welco", user.telegramid, "text")
