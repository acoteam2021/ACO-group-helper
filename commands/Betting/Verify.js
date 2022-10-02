/*CMD
  command: Verify
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
  Bot.runCommand("Capt")

  Bot.sendMessage(
    "★ ⚠️️*Unverified*\nDear @" +
      user.username +
      "\nYou have another one chance only...⚠️️⚠️★᭄ "
  )
}

