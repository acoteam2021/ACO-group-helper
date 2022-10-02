/*CMD
  command: /onResult🌟
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Register⚠️️

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (!options) {
  Bot.sendMessage("*Don't Run Manually*")
  return
}
Api.pinChatMessage({
  chat_id: chat.chatid,
  message_id: options.result.message_id
})

