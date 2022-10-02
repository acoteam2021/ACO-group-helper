/*CMD
  command: /bio
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

Api.getChat({
chat_id:user.telegramid,
on_result:"2bio"})
