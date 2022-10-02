/*CMD
  command: /Night
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

var name = params.split(" ")[0]
if (name == "ON") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "Hello User @" +
      user.username +
      "\n Night mode enabled Successfully....🌔"
  })
  
  return
}
if (name == "OFF") {
  Bot.sendMessage({
    message_id: request.message.message_id,
    text:
      "Hello User @" +
      user.username +
      "\n Night mode Dissabled Successfully....🌔"
  })
  
  return
}

