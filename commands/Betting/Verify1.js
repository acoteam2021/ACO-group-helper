/*CMD
  command: Verify1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Betting

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.deleteMessage({ message_id: request.message_id })
var ans = User.getProperty("Answer")
if (data.message == ans) {
  Bot.sendMessage("@" + user.username + "  Has been Verified ")
} else {
Bot.sendMessage("⛔️Vᴇʀɪғɪᴄᴀᴛɪᴏɴ Fᴀɪʟᴇᴅ....You have been muted.....🔇")
Api.restrictChatMember({
          chat_id: request.chat.id,
          user_id: user.telegramid
        })
}
