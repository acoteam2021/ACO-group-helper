/*CMD
  command: /verify
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


let verified = User.getProperty("verified")
if (verified == undefined || verified == "No") {
  if (request.data) {
    var message_id = request.message.message_id
    var chat_id = request.message.chat.id

    Api.deleteMessage({
      chat_id: chat_id,
      message_id: message_id
    })
  }
  if (!params) {
    return
  }
  //Don't Remove Else Bot Will Hack

  var spl = params.split(" ")
  let data = spl[0]
  let ans = User.getProperty("iv")
  if (ans == data) {
    Bot.sendMessage("✅Vᴇʀɪғɪᴇᴅ!")
    User.setProperty("verified", "Yes", "text")
  } else {
    Bot.sendMessage("⛔️Vᴇʀɪғɪᴄᴀᴛɪᴏɴ Fᴀɪʟᴇᴅ....You have been muted.....🔇")
    Api.restrictChatMember({
          chat_id: request.chat.id,
          user_id: user.telegramid
        })
    
  }

  return
}
Bot.sendMessage("✅ You Are Already Verified", { is_reply: true })

