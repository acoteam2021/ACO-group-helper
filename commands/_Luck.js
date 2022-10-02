/*CMD
  command: /Luck
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


Bot.sendMessage("*Lucky*") 
var ree = [[{text:"10 💎", callback_data:"/lucky 10"},{text:"30 💎", callback_data:"/lucky 30"}, {text:"50 💎", callback_data:"/lucky 50"}]]
Api.sendPhoto({photo:"https://telegra.ph/file/cc9d08af2fd67c29d8f1a.jpg"}) 
Api.sendMessage({
  text:"To win, Get a number(0-10000) higher than 5250", 
  reply_markup:{inline_keyboard: ree}
}) 

