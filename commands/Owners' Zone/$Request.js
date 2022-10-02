/*CMD
  command: $Request
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Owners' Zone
  answer: Please send your photo with caption...or without caption 

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Api.sendMessage({
  chat_id: "@acobot_Team ",
  caption:
    "*⁉️ New Question From User With Photo.\n\n👤 User =* [" +
    user.first_name +
    "](tg://user?id=" +
    user.telegramid +
    ")\n\n*🌁 Photo Caption = " +
    request.caption +
    "*"

})
Bot.sendMessage("*🌁 Image Succesfully Sended To Admin.*")

Api.sendMessage({
  chat_id: 5514111111,

  caption:
    "*⁉️ New Question From User With Photo.\n\n👤 User =* [" +
    user.first_name +
    "](tg://user?id=" +
    user.telegramid +
    ")\n\n*🌁 Photo Caption = " +
    request.caption +
    "*"
  
})
Bot.sendMessage("*🌁 Image Succesfully Sended To Admin.*")

