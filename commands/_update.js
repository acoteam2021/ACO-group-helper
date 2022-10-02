/*CMD
  command: /update
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (chat.chat_type == "private") {
  Bot.sendMessage("Loading . . .", {
  on_result: "Edited",
  is_reply: false
})
}else{
Bot.sendMessageToChatWithId(
  user.telegramid,
  "🙋You can't Update me on Groups,so use it on Private chat.. \n\n💫💫 I automatically update in groups💫💫"
)
}
