/*CMD
  command: /pin1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Pin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var chat_id = options.result.chat.id  
var message_id= options.result.message_id  
  
Api.pinChatMessage({  
chat_id: chat_id,  
message_id: message_id  
})
